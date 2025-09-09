document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const storageGroup = document.getElementById('storage-group');
    const storageSelect = document.getElementById('storage-select');
    const monthsGroup = document.getElementById('months-group');
    const monthsSelect = document.getElementById('months-select');
    const summary = document.getElementById('calculation-summary');
    const checkoutBtn = document.getElementById('proceed-to-checkout');

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
            checkoutBtn.disabled = true;
        } else {
            storageGroup.style.display = 'none';
            monthsGroup.style.display = 'none';
            summary.style.display = 'none';
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
        checkoutBtn.disabled = false;
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
