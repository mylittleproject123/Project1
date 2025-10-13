// This file contains all the logic specific to the product details page (product.html)

let productScriptInitialized = false;

async function initializeProductPage() {
    if (productScriptInitialized) return;
    productScriptInitialized = true;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error('Product ID is missing from the URL.');
        // Optionally, redirect to a 404 page or the homepage
        // window.location.href = '/index.html';
        return;
    }

    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const product = products.find(p => p.id === productId);

        if (product) {
            populateProductDetails(product);
            setupProductInteractions(product);
        } else {
            console.error('Product not found:', productId);
            // Optionally, display a "product not found" message on the page
            const productSection = document.querySelector('.product-details-section');
            if (productSection) {
                productSection.innerHTML = '<h1>Product Not Found</h1><p>The product you are looking for does not exist.</p>';
            }
        }
    } catch (error) {
        console.error('Error fetching or processing product data:', error);
    }
}

function populateProductDetails(product) {
    // Update breadcrumbs
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = t(product.name_key);
    }

    // Main product details
    document.getElementById('product-name').textContent = t(product.name_key);
    document.getElementById('product-description').textContent = t(product.description_key);

    // Main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.images[0];
        mainImage.alt = t(product.name_key);
    }

    // Thumbnail images
    const thumbnailsContainer = document.getElementById('thumbnail-images');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
        `).join('');
    }

    // Pricing
    const priceElement = document.getElementById('product-price');
    if (priceElement) {
        priceElement.setAttribute('data-usd-price', product.price);
        priceElement.textContent = convertPrice(product.price);
    }

    // Storage options
    const storageContainer = document.getElementById('storage-options');
    if (storageContainer && product.memoryOptions) {
        storageContainer.innerHTML = Object.keys(product.memoryOptions).map(mem => `
            <button class="option-btn storage-btn" data-storage="${mem}">${mem}</button>
        `).join('');
    } else if (storageContainer) {
        storageContainer.style.display = 'none';
        document.querySelector('label[for="storage-options"]').style.display = 'none';
    }

    // Condition options
    const conditionContainer = document.getElementById('condition-options');
    if (conditionContainer && product.conditionOptions) {
        conditionContainer.innerHTML = Object.keys(product.conditionOptions).map(cond => `
            <button class="option-btn condition-btn" data-condition="${cond}">
                ${t(product.conditionOptions[cond].name_key)}
                <span class="condition-desc">${t(product.conditionOptions[cond].desc_key)}</span>
            </button>
        `).join('');
    } else if (conditionContainer) {
        conditionContainer.style.display = 'none';
        document.querySelector('label[for="condition-options"]').style.display = 'none';
    }

    // Color/Variant options
    const colorContainer = document.getElementById('color-options');
    if (colorContainer && product.variants) {
        colorContainer.innerHTML = Object.keys(product.variants).map(variantKey => `
            <button class="option-btn color-btn" data-variant="${variantKey}" style="background-color: ${product.variants[variantKey].colorCode};" title="${t(product.variants[variantKey].name_key)}"></button>
        `).join('');
    } else if (colorContainer) {
        colorContainer.style.display = 'none';
        document.querySelector('label[for="color-options"]').style.display = 'none';
    }

    // Key Features
    const keyFeaturesContainer = document.getElementById('key-features');
    if (keyFeaturesContainer && product.features) {
        keyFeaturesContainer.innerHTML = product.features.map(feature => `
            <div class="feature">
                <i class="${feature.icon}"></i>
                <div>
                    <h4>${t(feature.title_key)}</h4>
                    <p>${t(feature.desc_key)}</p>
                </div>
            </div>
        `).join('');
    }

    // Technical Specifications
    const techSpecsContainer = document.getElementById('tech-specs');
    if (techSpecsContainer && product.specs) {
        techSpecsContainer.innerHTML = product.specs.map(spec => `
            <li>
                <strong>${t(spec.name_key)}:</strong>
                <span>${t(spec.value_key)}</span>
            </li>
        `).join('');
    }
}

function setupProductInteractions(product) {
    let currentMemory = null;
    let currentCondition = null;
    let currentVariant = null;

    const priceElement = document.getElementById('product-price');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const quantityDisplay = document.getElementById('quantity-display');
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');

    function updatePriceAndButton() {
        let basePrice = product.price;
        let finalPrice = basePrice;

        if (product.memoryOptions && currentMemory) {
            finalPrice = product.memoryOptions[currentMemory].price;
        }

        if (product.conditionOptions && currentCondition) {
            finalPrice += product.conditionOptions[currentCondition].priceAdjustment || 0;
        }

        priceElement.setAttribute('data-usd-price', finalPrice);
        priceElement.textContent = convertPrice(finalPrice);

        validateSelections();
        updateAddToCartButtonData();
    }

    function validateSelections() {
        let isValid = true;
        if (product.memoryOptions && !currentMemory) isValid = false;
        if (product.conditionOptions && !currentCondition) isValid = false;
        if (product.variants && !currentVariant) isValid = false;

        if (addToCartBtn) {
            addToCartBtn.disabled = !isValid;
            if (!isValid) {
                addToCartBtn.querySelector('span').textContent = t('choose_options'); // Assuming you add this translation key
            } else {
                addToCartBtn.querySelector('span').textContent = t('add_to_cart');
            }
        }
        return isValid;
    }

    function updateAddToCartButtonData() {
        if (!validateSelections()) return;

        let currentPrice = parseFloat(priceElement.getAttribute('data-usd-price'));
        let productName = t(product.name_key);
        if (currentMemory) productName += ` ${currentMemory}`;
        if (currentVariant) productName += ` - ${t(product.variants[currentVariant].name_key)}`;

        let productImage = product.images[0];
        if (currentVariant && product.variants[currentVariant].images && product.variants[currentVariant].images.length > 0) {
            productImage = product.variants[currentVariant].images[0];
        }

        const cartItemId = `${product.id}_${currentVariant || 'default'}_${currentMemory || 'default'}_${currentCondition || 'default'}`;

        const productData = {
            id: cartItemId,
            name: productName,
            price: currentPrice,
            image: productImage
        };
        addToCartBtn.setAttribute('data-product', JSON.stringify(productData));
    }

    // Event Listeners
    document.getElementById('storage-options')?.addEventListener('click', e => {
        if (e.target.classList.contains('storage-btn')) {
            document.querySelectorAll('.storage-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentMemory = e.target.dataset.storage;
            updatePriceAndButton();
        }
    });

    document.getElementById('condition-options')?.addEventListener('click', e => {
        if (e.target.classList.contains('condition-btn')) {
            document.querySelectorAll('.condition-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCondition = e.target.dataset.condition;
            updatePriceAndButton();
        }
    });

    document.getElementById('color-options')?.addEventListener('click', e => {
        if (e.target.classList.contains('color-btn')) {
            document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentVariant = e.target.dataset.variant;

            // Change main image based on variant
            const variantData = product.variants[currentVariant];
            if (variantData && variantData.images && variantData.images.length > 0) {
                changeMainImage(variantData.images[0], document.querySelector(`.thumbnail[src='${variantData.images[0]}']`));
            }
            updatePriceAndButton();
        }
    });

    // Quantity controls
    decreaseBtn?.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.value);
        if (current > 1) {
            quantityDisplay.value = current - 1;
        }
    });

    increaseBtn?.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.value);
        quantityDisplay.value = current + 1;
    });

    // Add to cart button
    addToCartBtn?.addEventListener('click', e => {
        e.preventDefault();
        if (addToCartBtn.disabled) return;

        const productDataString = addToCartBtn.getAttribute('data-product');
        if (productDataString) {
            const productData = JSON.parse(productDataString);
            productData.quantity = parseInt(quantityDisplay.value);
            
            // The global addToCart function in script.js will handle the rest
            // We just need to make sure the data is correct.
            // The global click listener will pick this up.
        } else {
            console.error("Product data not set on add to cart button.");
        }
    });

    // Initial state
    validateSelections();
}

function changeMainImage(src, thumbnailElement) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;
    }

    // Update active state on thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    if (thumbnailElement) {
        thumbnailElement.classList.add('active');
    }
}

// This is the main entry point for the product page
document.addEventListener('DOMContentLoaded', async function() {
    // This check prevents the script from running multiple times
    if (window.productScriptInitialized) {
        return;
    }
    window.productScriptInitialized = true;

    // The main script.js should have already handled country and language initialization.
    // We just need to ensure the page content is updated.
    try {
        // Wait for a very short moment to ensure main script has set the language
        await new Promise(resolve => setTimeout(resolve, 50));

        // Run functions that are safe to run on every page load
        if (typeof updateLanguage === 'function') {
            updateLanguage(currentLanguage);
        }
        if (typeof updatePrices === 'function') {
            updatePrices();
        }
        if (typeof setupDynamicWhatsAppLinks === 'function') {
            setupDynamicWhatsAppLinks();
        }
        
        // Update cart UI on product page load
        if (typeof updateCartUI === 'function') {
            updateCartUI();
        }

        // Initialize product-specific functionality
        await initializeProductPage();

    } catch (error) {
        console.error("Error initializing product page:", error);
    }
});
