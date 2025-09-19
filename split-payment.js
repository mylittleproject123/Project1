document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const storageGroup = document.getElementById('storage-group');
    const storageSelect = document.getElementById('storage-select');
    const monthsGroup = document.getElementById('months-group');
    const monthsSelect = document.getElementById('months-select');
    const summary = document.getElementById('calculation-summary');
    const checkoutBtn = document.getElementById('proceed-to-checkout');
    const termsSection = document.getElementById('terms-section');
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const downloadBtn = document.getElementById('download-agreement-btn');

    let selectedProduct = null;
    let selectedVariant = null;

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
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        } else {
            storageGroup.style.display = 'none';
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
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
            monthsGroup.style.display = 'block';
            updateCalculations();
        } else {
            selectedVariant = null;
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
            termsSection.style.display = 'none';
            checkoutBtn.disabled = true;
        }
    });

    monthsSelect.addEventListener('change', updateCalculations);

    // 4. Update Calculations
    function updateCalculations() {
        if (!selectedVariant) return;

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
        termsSection.style.display = 'block';
        downloadBtn.disabled = false;

        // Checkout button is now controlled by the checkbox
        checkoutBtn.disabled = !termsCheckbox.checked;
    }

    // 5. Add event listener for the checkbox
    termsCheckbox.addEventListener('change', () => {
        // Only enable checkout if a variant is selected and checkbox is checked
        checkoutBtn.disabled = !selectedVariant || !termsCheckbox.checked;
    });

    // 6. Add event listener for download button
    downloadBtn.addEventListener('click', generateAgreementPDF);

    function generateAgreementPDF() {
        if (!selectedProduct || !selectedVariant) return;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get all the calculated values
        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        const interestRate = months + 1;
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;
        const remaining = totalPrice - deposit;
        const monthlyPayment = remaining / months;

        // PDF Content
        doc.setFontSize(18);
        doc.text('Installment Plan Agreement', 20, 20);
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
        doc.text(`Product: ${selectedProduct.name} (${selectedVariant.storage})`, 20, 40);
        doc.setFontSize(14);
        doc.text('Payment Summary', 20, 60);
        doc.setFontSize(11);
        doc.text(`- Total Price: ${convertPrice(totalPrice, false)} | Deposit (50%): ${convertPrice(deposit, false)} | Monthly: ${convertPrice(monthlyPayment, false)} x ${months} months`, 20, 70);
        doc.setFontSize(14);
        doc.text('Terms and Conditions', 20, 90);
        doc.setFontSize(10);
        const terms = doc.splitTextToSize(`1. You agree to pay a non-refundable 50% deposit of the total amount today. 2. The remaining balance will be paid in equal monthly installments over the selected period. 3. An interest rate, as specified in the summary, is applied to the original product price. 4. Failure to make monthly payments on time may result in late fees or cancellation of the plan. 5. The product will be delivered upon full payment of all installments.`, 170);
        doc.text(terms, 20, 100);

        doc.save(`Agreement-${selectedProduct.id}-${new Date().toISOString().slice(0,10)}.pdf`);
    }

    // 5. Proceed to Checkout
    checkoutBtn.addEventListener('click', () => {
        if (!selectedProduct || !selectedVariant) return;

        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        const interestRate = months + 1;
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;

        // Send Telegram Notification
        if (typeof TelegramNotifications !== 'undefined' && TelegramNotifications.splitPaymentCheckoutStarted) {
            TelegramNotifications.splitPaymentCheckoutStarted({
                productName: `${selectedProduct.name} (${selectedVariant.storage})`,
                total: convertPrice(totalPrice, false),
                deposit: convertPrice(deposit, false),
                months: months
            });
        }

        // Prepare cart for checkout modal (with deposit amount)
        cart = [{
            id: `split_deposit_${selectedProduct.id}`,
            name: `50% Deposit for ${selectedProduct.name} (${selectedVariant.storage})`,
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
