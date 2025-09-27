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

    function populateMonths() {
        if (!monthsSelect) return;
        monthsSelect.innerHTML = ''; // Clear existing
        const plans = [
            { months: 3, interest: 3 },
            { months: 6, interest: 5 }
        ];
        plans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.months;
            let text = t('split_payment_month_interest').replace('{months}', plan.months).replace('{interest}', plan.interest);
            option.textContent = text;
            monthsSelect.appendChild(option);
        });
    }

    // 1. Populate Product Dropdown
    if (typeof productsForSplitPayment !== 'undefined') {
        productsForSplitPayment.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    populateMonths();

    // 2. Handle Product Selection
    productSelect.addEventListener('change', () => {
        const productId = productSelect.value;
        selectedProduct = productsForSplitPayment.find(p => p.id === productId);

        if (selectedProduct) {
            storageSelect.innerHTML = `<option value="">${t('split_payment_choose_storage')}</option>`;
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
                colorSelect.innerHTML = `<option value="">${t('split_payment_choose_color')}</option>`;
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
        let interestRate;

        if (months <= 3) {
            interestRate = 3;
        } else {
            interestRate = 5;
        }
        
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const deposit = totalPrice * 0.5;
        const remaining = totalPrice - deposit;
        const monthlyPayment = remaining / months;
        const monthlyText = t('split_payment_monthly_value') || '{price} x {months} months';

        // Update summary display
        document.getElementById('summary-price').textContent = convertPrice(basePrice, false);
        document.getElementById('summary-interest-rate').textContent = interestRate;
        document.getElementById('summary-interest-amount').textContent = convertPrice(interestAmount, false);
        document.getElementById('summary-total-price').textContent = convertPrice(totalPrice, false);
        document.getElementById('summary-deposit').textContent = convertPrice(deposit, false);
        document.getElementById('summary-remaining').textContent = convertPrice(remaining, false);
        document.getElementById('summary-monthly').textContent = monthlyText
            .replace('{price}', convertPrice(monthlyPayment, false))
            .replace('{months}', months);

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

        // --- Recopilación de Datos ---
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
        let interestRate;
        if (months <= 3) {
            interestRate = 3;
        } else {
            interestRate = 5;
        }

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

        addTitle('Pre-Acuerdo de Venta a Plazos');
        doc.setFontSize(10);
        doc.text(`Fecha: ${todayFormatted}`, margin, y);
        y += 30;

        doc.setFont(undefined, 'bold'); doc.text('Vendedor:', margin, y); doc.setFont(undefined, 'normal');
        doc.text(sellerInfo.name, margin + 50, y); y += 15;
        doc.text(`Registro de Empresa No.: ${sellerInfo.regNo}`, margin + 50, y); y += 15;
        doc.text(`Dirección: ${sellerInfo.address}`, margin + 50, y); y += 15;
        doc.text(`Correo Electrónico: ${sellerInfo.email}`, margin + 50, y); y += 15;
        doc.text(`Teléfono: ${sellerInfo.phone}`, margin + 50, y); y += 25;

        doc.setFont(undefined, 'bold'); doc.text('Comprador:', margin, y); doc.setFont(undefined, 'normal');
        doc.text(buyerInfo.name, margin + 50, y); y += 15;
        doc.text(`Dirección: ${buyerInfo.address}`, margin + 50, y); y += 15;
        doc.text(`Teléfono: ${buyerInfo.phone}`, margin + 50, y); y += 30;

        addSectionHeader('1. Detalles del Producto');
        addLineItem('Modelo:', productInfo.model);
        addLineItem('Capacidad:', productInfo.storage);
        addLineItem('Color:', productInfo.color);
        addLineItem('IMEI:', 'A ser asignado en la entrega');
        y += 10;

        addSectionHeader('2. Precio de Compra');
        addLineItem('Precio Base:', convertPrice(basePrice, false));
        addLineItem(`Cargo por Financiamiento (${interestRate}%):`, convertPrice(interestAmount, false));
        addLineItem('Precio Total (Plan a Plazos):', convertPrice(totalPrice, false));
        y += 10;

        addSectionHeader('3. Términos de Pago');
        addLineItem('Pago Inicial (al firmar):', convertPrice(deposit, false));
        addLineItem('Saldo Restante:', convertPrice(remaining, false));
        addLineItem('Calendario de Pagos:', `El Comprador pagará ${months} cuotas mensuales iguales de ${convertPrice(monthlyPayment, false)}.`);
        addLineItem('Fecha de Vencimiento:', `A más tardar el día ${today.getDate()} de cada mes, comenzando desde el ${firstPaymentDateFormatted}.`);
        addLineItem('Método de Pago:', 'Los pagos se realizarán de forma remota mediante transferencia bancaria, según lo acordado por escrito.');
        y += 10;
        addParagraph('Cláusula de Comprobante de Pago: El Comprador se compromete a enviar un comprobante de cada pago mensual (recibo de transferencia bancaria o captura de pantalla) inmediatamente después de realizar el pago al Vendedor por correo electrónico (info@swapie.shop) o WhatsApp (+1 868 472-7875). El Vendedor confirmará la recepción por escrito en un plazo de 24 horas, lo que servirá como acuse de recibo del pago.');

        if (y > 700) { doc.addPage(); y = 60; }

        addSectionHeader('4. Entrega');
        addParagraph('El producto será enviado a la dirección proporcionada por el Comprador inmediatamente después de que el Vendedor confirme la recepción y verificación del pago inicial.');

        addSectionHeader('5. Propiedad y Riesgo');
        addParagraph('La propiedad del teléfono permanece con Techzone Ltd hasta que el Comprador haya pagado el saldo total. El Comprador asume todo el riesgo de pérdida o daño del teléfono a partir de la entrega.');
        addSectionHeader('6. Pagos Atrasados e Incumplimiento');
        addParagraph('Los pagos atrasados por más de 7 días. Si el Comprador omite dos pagos consecutivos, este Acuerdo se considerará en incumplimiento y el Vendedor podrá recuperar el teléfono.');
        addSectionHeader('7. Garantía');
        addParagraph('Este producto cuenta con la garantía estándar de 1 año de Swappie. La garantía excluye daños causados por mal uso, agua, accidentes o impacto físico después de la entrega.');
        addSectionHeader('8. Uso del Dispositivo');
        addParagraph('El Comprador acepta que el teléfono adquirido no será utilizado para fines fraudulentos, ilegales o de lavado de dinero. El Vendedor no es responsable por el mal uso del teléfono por parte del Comprador.');
        addSectionHeader('9. Acuerdo Completo');
        addParagraph('Este documento constituye el acuerdo completo entre el Vendedor y el Comprador.');
        addSectionHeader('10. Aceptación del Acuerdo');
        addParagraph('Al proceder con el pago del depósito, el Comprador reconoce que ha leído, entendido y aceptado estos términos.');
        doc.save(`Pre-Acuerdo-${buyerInfo.name.replace(/ /g, '_')}-${today.toISOString().slice(0,10)}.pdf`);
    }
    // 5. Proceed to Checkout
    checkoutBtn.addEventListener('click', () => {
        if (!selectedProduct || !selectedVariant || !selectedColor || !validateCustomerInfo()) return;

        const basePrice = selectedVariant.price;
        const months = parseInt(monthsSelect.value);
        let interestRate;
        if (months <= 3) {
            interestRate = 3;
        } else {
            interestRate = 5;
        }
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
        window.cart = [{
            id: `split_deposit_${selectedProduct.id}`,
            name: `50% Deposit for ${selectedProduct.name} (${selectedVariant.storage} - ${selectedColor})`,
            price: deposit,
            image: selectedProduct.image,
            quantity: 1
        }];
        localStorage.setItem('cart', JSON.stringify(window.cart));

        // Update cart UI and open checkout
        updateCartUI();
        openCheckout();
    });
});
