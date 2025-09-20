document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const storageGroup = document.getElementById('storage-group');
    const storageSelect = document.getElementById('storage-select');
    const colorGroup = document.getElementById('color-group');
    const colorSelect = document.getElementById('color-select');
    const monthsGroup = document.getElementById('months-group');
    const monthsSelect = document.getElementById('months-select');
    const summary = document.getElementById('calculation-summary');
    const checkoutBtn = document.getElementById('proceed-to-checkout');
    const termsSection = document.getElementById('terms-section');
    const customerInfoSection = document.getElementById('customer-info-section');
    const customerInfoForm = document.getElementById('customer-info-form');
    const idUpload = document.getElementById('id-upload');
    const idPreview = document.getElementById('id-preview');
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const downloadBtn = document.getElementById('download-agreement-btn');

    let selectedProduct = null;
    let selectedVariant = null;
    let selectedColor = null;

    // 1. Populate Product Dropdown
    if (typeof productsForSplitPayment !== 'undefined') {
        productsForSplitPayment.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // 2. Handle Product Selection
    productSelect.addEventListener('change', () => {
        const productId = productSelect.value;
        selectedProduct = productsForSplitPayment.find(p => p.id === productId);

        if (selectedProduct) {
            storageSelect.innerHTML = '<option value="">-- Choose storage --</option>';
            selectedProduct.variants.forEach(variant => {
                const option = document.createElement('option');
                option.value = variant.storage;
                option.textContent = `${variant.storage} - ${convertPrice(variant.price, false)}`;
                option.dataset.price = variant.price;
                storageSelect.appendChild(option);
            });
            storageGroup.style.display = 'block';
            colorGroup.style.display = 'none';
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
            customerInfoSection.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        } else {
            storageGroup.style.display = 'none';
            colorGroup.style.display = 'none';
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
            customerInfoSection.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    });

    // 3. Handle Storage and Month Selection
    storageSelect.addEventListener('change', () => {
        const selectedOption = storageSelect.options[storageSelect.selectedIndex];
        if (selectedOption.value) {
            selectedVariant = {
                storage: selectedOption.value,
                price: parseFloat(selectedOption.dataset.price)
            };
            // Populate and show color dropdown
            if (selectedProduct && selectedProduct.colors) {
                colorSelect.innerHTML = '<option value="">-- Choose color --</option>';
                selectedProduct.colors.forEach(color => {
                    const option = document.createElement('option');
                    option.value = color;
                    option.textContent = color;
                    colorSelect.appendChild(option);
                });
                colorGroup.style.display = 'block';
            } else {
                colorGroup.style.display = 'none';
                selectedColor = 'Default'; // Set a default if no colors
                monthsGroup.style.display = 'block';
                updateCalculations();
            }
            // Reset downstream elements
            monthsGroup.style.display = 'none';
        } else {
            selectedVariant = null;
            colorGroup.style.display = 'none';
            monthsGroup.style.display = 'none';
            customerInfoSection.style.display = 'none';
            summary.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    });

    colorSelect.addEventListener('change', () => {
        selectedColor = colorSelect.value;
        if (selectedColor) {
            monthsGroup.style.display = 'block';
            updateCalculations();
        } else {
            monthsGroup.style.display = 'none';
            customerInfoSection.style.display = 'none';
            summary.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    });
    monthsSelect.addEventListener('change', updateCalculations);

    // Handle customer form validation and ID preview
    customerInfoForm.addEventListener('input', () => {
        if (validateCustomerInfo()) {
            termsSection.style.display = 'block';
            checkoutBtn.disabled = !termsCheckbox.checked;
        } else {
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    });

    idUpload.addEventListener('change', () => {
        const file = idUpload.files[0];
        if (file && idPreview) {
            const reader = new FileReader();
            reader.onload = (e) => {
                idPreview.style.display = 'block';
                idPreview.querySelector('img').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        // Trigger a form input event to re-validate
        customerInfoForm.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // 4. Update Calculations
    function updateCalculations() {
        if (!selectedVariant || !selectedColor) return;

        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        const interestRate = months + 1; // 1 month = 2%, 2 = 3%, etc.

        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;
        const remaining = totalPrice - deposit;
        const monthlyPayment = remaining / months;

        // Update summary display
        document.getElementById('summary-price').textContent = convertPrice(basePrice, false);
        document.getElementById('summary-interest-rate').textContent = interestRate;
        document.getElementById('summary-interest-amount').textContent = convertPrice(interestAmount, false);
        document.getElementById('summary-total-price').textContent = convertPrice(totalPrice, false);
        document.getElementById('summary-deposit').textContent = convertPrice(deposit, false);
        document.getElementById('summary-remaining').textContent = convertPrice(remaining, false);
        document.getElementById('summary-monthly').textContent = `${convertPrice(monthlyPayment, false)} x ${months} months`;

        summary.style.display = 'block';
        customerInfoSection.style.display = 'block';
        downloadBtn.disabled = false;

        // Checkout button is now controlled by the form and checkbox
        if (validateCustomerInfo()) {
            termsSection.style.display = 'block';
            checkoutBtn.disabled = !termsCheckbox.checked;
        } else {
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    }

    function validateCustomerInfo() {
        const name = document.getElementById('customer-name').value.trim();
        const email = document.getElementById('customer-email').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const address = document.getElementById('customer-address').value.trim();
        return name !== '' && email !== '' && phone !== '' && address !== '' && idUpload.files.length > 0 && selectedColor;
    }

    // 5. Add event listener for the checkbox
    termsCheckbox.addEventListener('change', () => {
        checkoutBtn.disabled = !selectedVariant || !validateCustomerInfo() || !termsCheckbox.checked;
    });

    // 6. Add event listener for download button
    downloadBtn.addEventListener('click', generateAgreementPDF);

    function generateAgreementPDF() {
        // Validation
        if (!selectedProduct || !selectedVariant || !selectedColor || !validateCustomerInfo()) {
            alert("Please complete all steps before downloading the agreement.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 40;
        let y = 60;

        // --- Data Gathering ---
        const sellerInfo = { // This should be dynamic based on country in a real app
            name: "Techzone Ltd under franchise of Swappie.com",
            regNo: "T7190442",
            address: "17–23 Charles St., Port of Spain, Trinidad and Tobago",
            email: "info@swapie.shop",
            phone: "+1 (868) 472-7875",
            representative: "Rajesh Kumar"
        };

        const buyerInfo = {
            name: document.getElementById('customer-name').value.trim(),
            address: document.getElementById('customer-address').value.trim(),
            phone: document.getElementById('customer-phone').value.trim(),
        };

        const productInfo = {
            model: selectedProduct.name,
            storage: selectedVariant.storage,
            color: selectedColor,
            imei: "To be assigned upon delivery"
        };

        const today = new Date();
        const todayFormatted = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        const firstPaymentDate = new Date(new Date().setMonth(today.getMonth() + 1));
        const firstPaymentDateFormatted = firstPaymentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

        // Financial Calculations
        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        const interestRate = months + 1;
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;
        const remaining = totalPrice - deposit;
        const monthlyPayment = remaining / months;

        // --- PDF Generation ---
        const addTitle = (text) => {
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text(text, pageWidth / 2, y, { align: 'center' });
            y += 30;
        };
        const addSectionHeader = (text) => {
            doc.setFontSize(11);
            doc.setFont(undefined, 'bold');
            doc.text(text, margin, y);
            y += 20;
            doc.setFont(undefined, 'normal');
            doc.setFontSize(10);
        };
        const addParagraph = (text) => {
            const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
            doc.text(lines, margin, y);
            y += lines.length * 12 + 10;
        };
        const addLineItem = (label, value) => {
            doc.setFont(undefined, 'bold');
            doc.text(label, margin, y);
            doc.setFont(undefined, 'normal');
            doc.text(value, margin + 150, y);
            y += 15;
        };

        addTitle('Installment Sales Pre-Agreement');
        doc.setFontSize(10);
        doc.text(`Date: ${todayFormatted}`, margin, y);
        y += 30;

        doc.setFont(undefined, 'bold'); doc.text('Seller:', margin, y); doc.setFont(undefined, 'normal');
        doc.text(sellerInfo.name, margin + 50, y); y += 15;
        doc.text(`Business Registration No.: ${sellerInfo.regNo}`, margin + 50, y); y += 15;
        doc.text(`Address: ${sellerInfo.address}`, margin + 50, y); y += 15;
        doc.text(`Email: ${sellerInfo.email}`, margin + 50, y); y += 15;
        doc.text(`Phone: ${sellerInfo.phone}`, margin + 50, y); y += 25;

        doc.setFont(undefined, 'bold'); doc.text('Buyer:', margin, y); doc.setFont(undefined, 'normal');
        doc.text(buyerInfo.name, margin + 50, y); y += 15;
        doc.text(`Address: ${buyerInfo.address}`, margin + 50, y); y += 15;
        doc.text(`Phone: ${buyerInfo.phone}`, margin + 50, y); y += 30;

        addSectionHeader('1. Product Details');
        addLineItem('Model:', productInfo.model);
        addLineItem('Storage Capacity:', productInfo.storage);
        addLineItem('Color:', productInfo.color);
        addLineItem('IMEI:', productInfo.imei);
        y += 10;

        addSectionHeader('2. Purchase Price');
        addLineItem('Base Price:', convertPrice(basePrice, false));
        addLineItem(`Financing Fee (${interestRate}%):`, convertPrice(interestAmount, false));
        addLineItem('Total Price (Installment Plan):', convertPrice(totalPrice, false));
        y += 10;

        addSectionHeader('3. Payment Terms');
        addLineItem('Down Payment (Due at signing):', convertPrice(deposit, false));
        addLineItem('Remaining Balance:', convertPrice(remaining, false));
        addLineItem('Installment Schedule:', `Buyer shall pay ${months} equal monthly installments of ${convertPrice(monthlyPayment, false)}.`);
        addLineItem('Due Date:', `On or before the ${today.getDate()}th day of each month, starting from ${firstPaymentDateFormatted}.`);
        addLineItem('Payment Method:', 'Payments shall be made remotely via bank transfer, as agreed in writing.');
        y += 10;
        addParagraph('Proof of Payment Clause: The Buyer agrees to send proof of each monthly payment (bank transfer receipt or screenshot) immediately after payment to the Seller via email (info@swapie.shop) or WhatsApp (+1 868 472-7875). The Seller shall confirm receipt in writing within 24 hours, which shall serve as acknowledgment of payment.');

        if (y > 700) { doc.addPage(); y = 60; }

        addSectionHeader('4. Ownership & Risk');
        addParagraph('Ownership of the phone remains with Techzone Ltd until the Buyer has paid the full balance. The Buyer assumes all risk of loss or damage to the phone upon delivery.');
        addSectionHeader('5. Late Payments & Default');
        addParagraph('A late fee of $25 applies for payments more than 7 days late. If Buyer misses two consecutive payments, this Agreement shall be considered in default, and the Seller may repossess the phone.');
        addSectionHeader('6. Warranty');
        addParagraph('This product carries the standard 1 year Swappie warranty. The warranty excludes damage caused by misuse, water, accidents, or physical impact after delivery.');
        addSectionHeader('7. Illegal Use Clause');
        addParagraph('The Buyer agrees that the purchased phone will not be used for fraudulent, illegal, or money laundering purposes. The Seller is not liable for any misuse of the phone by the Buyer.');
        addSectionHeader('8. Entire Agreement');
        addParagraph('This Agreement represents the entire understanding between both parties. Any modifications must be in writing and signed by both parties.');
        y += 20;
        addSectionHeader('9. Agreement Acceptance');
        addParagraph('By paying the 50% deposit, the Buyer acknowledges they have read and agree to all terms and conditions outlined in this Installment Sales Pre-Agreement. A final copy will be provided for signature upon delivery of the product.');

        doc.save(`Pre-Agreement-${buyerInfo.name.replace(/ /g, '_')}-${today.toISOString().slice(0,10)}.pdf`);
    }

    // 5. Proceed to Checkout
    checkoutBtn.addEventListener('click', () => {
        if (!selectedProduct || !selectedVariant || !selectedColor || !validateCustomerInfo()) return;

        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        const interestRate = months + 1;
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;

        // Gather customer data
        const customerData = {
            name: document.getElementById('customer-name').value.trim(),
            email: document.getElementById('customer-email').value.trim(),
            phone: document.getElementById('customer-phone').value.trim(),
            address: document.getElementById('customer-address').value.trim(),
            idProvided: idUpload.files.length > 0 ? `Yes (${idUpload.files[0].name})` : 'No'
        };

        // Send Telegram Notification
        if (typeof TelegramNotifications !== 'undefined' && TelegramNotifications.splitPaymentCheckoutStarted) {
            TelegramNotifications.splitPaymentCheckoutStarted({
                productName: `${selectedProduct.name} (${selectedVariant.storage} - ${selectedColor})`,
                total: convertPrice(totalPrice, false),
                deposit: convertPrice(deposit, false),
                months: months,
                customer: customerData
            });
        }

        // Prepare cart for checkout modal (with deposit amount)
        cart = [{
            id: `split_deposit_${selectedProduct.id}`,
            name: `50% Deposit for ${selectedProduct.name} (${selectedVariant.storage} - ${selectedColor})`,
            price: deposit,
            image: selectedProduct.image,
            quantity: 1
        }];
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart UI and open checkout
        updateCartUI();
        openCheckout();
    });
});
