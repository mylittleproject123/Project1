// Translation data - check if already defined to prevent duplicate declaration
if (typeof window.translations === 'undefined') {
    window.translations = {
    es: {
        // General & Navigation
        home: "Inicio",
        products: "Productos",
        about: "Acerca de Nosotros",
        contact: "Contacto",
        all: "Todos",
        details: "Detalles",
        shop_now: "Comprar Ahora",
        buy_now: "Comprar ahora",
        continue_shopping: "Seguir Comprando",
        search_products: "Buscar productos...",

        // Hero & Benefits
        hero_title: "La Mejor Tecnología al Mejor Precio",
        hero_subtitle: "Descubre nuestra selección premium de dispositivos reacondicionados con garantía completa y soporte técnico especializado. Tecnología de calidad a precios excepcionales.",
        benefit_free_shipping: "Envío gratis y entrega al día siguiente",
        benefit_free_shipping_desc: "En todos los pedidos",
        benefit_warranty: "Garantía 1 Año",
        benefit_warranty_desc: "En todos los productos",
        benefit_return: "Devolución 30 Días",
        benefit_return_desc: "Reembolso completo garantizado",
        benefit_accessories: "Accesorios Incluidos",
        benefit_accessories_desc: "Cable, caja y protector de pantalla gratis",

        // Contact & Support
        whatsapp_title: "¿Quieres cambiar por un modelo inferior o necesitas más información?",
        whatsapp_subtitle: "Chatea con nuestros expertos en WhatsApp para recomendaciones personalizadas y soporte instantáneo",
        whatsapp_button: "Chatear en WhatsApp",
        support: "Soporte Técnico",

        // Product Categories
        featured_products: "Productos Destacados",
        iphones: "iPhones",
        samsung: "Samsung",
        audio: "Audio",
        accessories: "Accesorios",

        // Product Details
        product_title: "Producto",
        product_description: "Descripción del producto",
        specifications: "Especificaciones",
        key_features: "Características Principales",
        technical_specs: "Especificaciones Técnicas",
        available_in: "Disponible en:",
        quantity: "Cantidad:",
        choose_type: "Elegir tipo",
        model: "Modelo",
        storage: "Almacenamiento",
        condition: "Condición",
        color: "Color",
        battery: "Batería",
        operating_system: "Sistema Operativo",
        screen_size: "Tamaño de pantalla",
        camera: "Cámara",
        processor: "Procesador",
        ram: "RAM",
        required: "*Requerido",

        // Product Badges
        new: "¡Nuevo!",
        certified: "¡Certificado!",
        hot: "¡Popular!",
        bestseller: "¡Más vendido!",
        deal: "¡Oferta!",
        value: "¡Gran valor!",
        premium: "¡Premium!",
        top_rated: "¡Más valorado!",
        popular: "¡Popular!",
        budget: "¡Económico!",

        // Cart
        shopping_cart: "Carrito de Compras",
        add_to_cart: "Añadir al carrito",
        empty_cart: "Tu carrito está vacío",
        subtotal: "Subtotal:",
        shipping: "Envío:",
        total: "Total:",

        // Checkout
        checkout: "Proceder al Pago",
        order_summary: "Resumen del Pedido",
        order_ref: "Número de Referencia:",
        payment_method: "Método de Pago:",
        bank_transfer: "Transferencia Bancaria",
        credit_card: "Tarjeta de Crédito",
        bank_details: "Datos Bancarios",
        bank_name: "Banco:",
        account_number: "Número de Cuenta:",
        account_holder: "Titular de la Cuenta:",
        reference: "Referencia:",
        transfer_instructions: "Realiza la transferencia por el monto total y envíanos una confirmación por WhatsApp para un envío más rápido.",
        confirm_transfer: "Enviar confirmación de pago",
        card_details: "Detalles de la Tarjeta",
        accepted: "Aceptado:",
        secure_payment: "Pago seguro",
        cardholder_name: "Nombre del Titular",
        card_number: "Número de Tarjeta",
        expiry_date: "Fecha de Vencimiento",
        cvc: "CVV",
        ssl_secured: "Conexión SSL Segura - Tus datos están protegidos",
        place_order: "Realizar Pedido",
        terms_agreement: "Acepto los",
        terms_and_conditions: "Términos y Condiciones",

        // Order Processing & Confirmation
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
        estimated_delivery: "Entrega Estimada:",

        // OTP & Security
        security_verification: "Verificación de Seguridad",
        verify_payment: "Verifica tu Pago",
        otp_sent: "Hemos enviado un código de verificación de 6 dígitos a tu número de teléfono. Por favor, ingrésalo a continuación para completar tu compra.",
        code_expires: "El código expira en: ",
        resend_code: "Reenviar Código",
        verify_code: "Verificar Código",
        invalid_code: "Código inválido. Por favor, inténtalo de nuevo.",

        // Shipping & Delivery
        free_shipping: "Envío gratis",
        free_shipping_all: "Envío gratis en todos los pedidos",
        delivery_time: "Tiempo de entrega",
        delivery_inspection_notice: "Animamos a todos los clientes a inspeccionar minuciosamente su pedido al momento de la entrega por parte del transportista. Si encuentra que el artículo no es satisfactorio o no es como se esperaba, tiene derecho a rechazar la aceptación del paquete. En caso de rechazo, será elegible para un reembolso completo de su monto de compra de acuerdo con nuestra política de devoluciones.",

        // Sorting
        price_high_to_low: "Precio: Mayor a Menor",
        price_low_to_high: "Precio: Menor a Mayor",
        featured: "Destacados",

        // Conditions
        condition_guide: "Guía de Condición:",
        condition_guide_desc: "Mejores condiciones indican menos desgaste y una apariencia superior del dispositivo.",
        good: "Bueno",
        good_desc: "Desgaste moderado, funciona perfectamente",
        great: "Genial",
        great_desc: "Desgaste ligero, totalmente funcional",
        excellent: "Muy Bueno",
        excellent_desc: "Signos mínimos de uso",
        pristine: "Impecable",
        pristine_desc: "Como nuevo - sin desgaste visible",
        condition_great: "Excelente",
        condition_great_desc: "Ligeros signos de uso, totalmente funcional",
        condition_excellent: "Muy Bueno",
        condition_excellent_desc: "Signos mínimos de uso",
        condition_display_piece: "Pieza de exhibición, sin uso",
        condition_display_piece_desc: "Pieza de exhibición, sin uso, caja abierta",

        // Colors
        spacegray: "Gris Espacial",
        color_black: "Black Titanium",
        color_rose_gold: "Oro Rosa",
        color_peach: "Durazno",
        color_green: "Verde",
        color_blue: "Azul",
        color_copper: "Cobre",
        color_midnight_black: "Negro Medianoche",
        color_sage_green: "Verde Salvia",

        // Warranty & Policies
        warranty_title: "12 Meses de Garantía",
        warranty_desc: "Garantía completa con soporte técnico incluido",
        warranty: "Garantía",
        days_return: "Política de devolución de 14 días",
        privacy: "Privacidad",
        terms: "Términos y Condiciones",
        returns: "Devoluciones",
        shipping_policy: "Envíos",

        // Footer
        company_info: "Información de la Empresa",
        quick_links: "Enlaces Rápidos",
        policies: "Políticas",
        payment_methods: "Métodos de Pago",
        payment_info: "Aceptamos transferencias bancarias, depósitos y pagos contra entrega en efectivo.",
        rights_reserved: "Todos los derechos reservados.",

        // Product Specific Descriptions
        iphone_desc: "iPhone reacondicionado premium con rendimiento excelente. 95% de batería garantizada. Incluye 1 año de garantía y 30 días de devolución.",
        samsung_desc: "Rendimiento potente con pantalla impresionante y batería duradera. Perfecto para trabajo, juegos y uso diario.",
        poco_desc: "Teléfono de alto rendimiento con pantalla fluida y batería duradera. Ideal para juegos y uso diario.",
        xiaomi_desc: "Rendimiento confiable, batería duradera y pantalla nítida. Perfecto para uso diario y juegos.",
        airpods_desc: "Disfruta de audio espacial con seguimiento dinámico de la cabeza, resistencia al sudor y al agua, y hasta 6 horas de reproducción.",
        earphones_desc: "Auriculares con cable económicos, sonido claro, diseño ligero y compatibilidad universal.",
        jbl_speakerss_desc: "Altavoces JBL portátiles y resistentes al agua, con bajos potentes y conexión Bluetooth para llevar la música a todas partes.",
        jbl_headphones_desc: "Sonido potente JBL con graves profundos, diseño cómodo y batería de larga duración para escuchar todo el día.",

        // Product Specific Names
        iphone16promax_name: "iPhone 16 Pro Max",
        iphone16_name: "iPhone 16",
        iphone15promax_name: "iPhone 15 Pro Max",
        iphone16e_name: "iPhone 16 e",
        iphone15_name: "iPhone 15",
        iphone14promax_name: "iPhone 14 Pro Max",
        iphone13promax_name: "iPhone 13 Pro Max",
        iphone12promax_name: "iPhone 12 Pro Max",
        iphone11promax_name: "iPhone 11 Pro Max",
        iphonexr_name: "iPhone XR",
        galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
        galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
        galaxys24plus_name: "Samsung Galaxy S24 Plus",
        galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
        galaxys22ultra_name: "Samsung Galaxy S22 Ultra",
        galaxya545g_name: "Samsung Galaxy A54 5G",
        galaxya35_name: "Samsung Galaxy A35",
        galaxya155g_name: "Samsung Galaxy A15 5G",
        galaxya05s_name: "Samsung Galaxy A05s",
        galaxym15_name: "Samsung Galaxy M15",
        galaxym14_name: "Samsung Galaxy M14",
        redmi14c_name: "Xiaomi Redmi 14C",
        redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
        pocox7pro_name: "Xiaomi Poco X7 Pro",
        airpods3_name: "AirPods 3ª Generación",
        airpods4_name: "AirPods 4ª Generación",
        earphones_name: "Auriculares Genéricos",
        jblheadphones_name: "Auriculares JBL",
        jblgo_name: "Altavoz JBL GO",
        jblpulse_name: "Altavoz JBL Pulse",
        cableiphone_name: "Cable de Carga para iPhone",
        cableusbc_name: "Cable de Carga USB‑C",

        // Product Features
        iphone_feature_battery_title: "Batería de 29h",
        iphone_feature_battery_desc: "Reproducción de video",
        iphone_feature_chip_title: "Chip A18 Pro",
        iphone_feature_chip_desc: "Rendimiento revolucionario",
        iphone_feature_camera_title: "Cámara de 48MP",
        iphone_feature_camera_desc: "Sistema de cámaras Pro",
        iphone_feature_display_title: "6.9\" ProMotion",
        iphone_feature_display_desc: "Super Retina XDR",
        feature_battery_title: "Gran duración de batería",
        feature_battery_desc: "Rendimiento durante todo el día",
        feature_chip_title: "Procesador potente",
        feature_chip_desc: "Rápido y eficiente",
        feature_camera_title: "Cámara de alta resolución",
        feature_camera_desc: "Excelente calidad fotográfica",
        feature_display_title: "Pantalla nítida",
        feature_display_desc: "Visuales claros",
        feature_processor_title: "Procesador eficiente",
        feature_processor_desc: "Equilibrio entre rendimiento y batería",
        feature_spatial_audio: "Audio Espacial",
        feature_spatial_audio_desc: "Sonido envolvente 3D",
        feature_h1_chip: "Chip H1",
        feature_h1_chip_desc: "Emparejamiento rápido y voz",
        feature_ipx4: "Resistencia IPX4 al agua",
        feature_ipx4_desc: "Diseño resistente a salpicaduras",
        feature_battery_airpods3_desc: "Hasta 6 h de audio o 30 h con estuche",
        feature_h2_chip: "Chip H2",
        feature_h2_chip_desc: "Mejor rendimiento y sonido",
        feature_noise_cancellation: "Cancelación de Ruido Activa",
        feature_noise_cancellation_desc: "Bloquea el sonido exterior",
        feature_ip54: "Resistencia al Agua y Polvo IP54",
        feature_battery_airpods4_desc: "Hasta 5 h de audio o 30 h con estuche",
        feature_tough_build: "Construcción Robusta",
        feature_tough_build_desc: "Barato y resistente",
        feature_clear_sound: "Sonido Claro",
        feature_clear_sound_desc: "Buen audio para llamadas y música",
        feature_wireless: "Conectividad Inalámbrica",
        feature_wireless_desc: "Comodidad Bluetooth",
        feature_jbl_sound: "Sonido JBL Característico",
        feature_jbl_sound_desc: "Audio rico y claro",
        feature_portable: "Ultra-portátil",
        feature_portable_desc: "Fácil de llevar",
        feature_led_lights: "Luces LED",
        feature_led_lights_desc: "Efectos visuales con la música",
        feature_mfi: "Certificado MFi",
        feature_mfi_desc: "Accesorios aprobados por Apple",
        feature_fast_charge: "Carga Rápida",
        feature_fast_charge_desc: "Recarga veloz",

        // Specifications
        spec_display: "Pantalla",
        spec_processor: "Procesador",
        spec_storage: "Almacenamiento",
        spec_ram: "RAM",
        spec_main_camera: "Cámara Principal",
        spec_ultrawide_camera: "Cámara Ultra Ancha",
        spec_telephoto_camera: "Cámara Teleobjetivo",
        spec_battery: "Batería",
        spec_os: "Sistema Operativo",
        spec_connectivity: "Conectividad",
        spec_resistance: "Resistencia al Agua y Polvo",
        spec_dimensions: "Dimensiones",
        spec_weight: "Peso",
        spec_condition: "Estado",
        spec_battery_health: "Salud de Batería",
        spec_battery_health_value: "90% garantizada",
        spec_condition_certified: "Reacondicionado certificado"
    },
    en: {
        // General & Navigation
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        all: "All",
        details: "Details",
        shop_now: "Shop Now",
        buy_now: "Buy Now",
        continue_shopping: "Continue Shopping",
        search_products: "Search products...",

        // Hero & Benefits
        hero_title: "The Best Technology at the Best Price",
        hero_subtitle: "Discover our premium selection of refurbished devices with full warranty and specialized technical support. Quality technology at exceptional prices.",
        benefit_free_shipping: "Free Shipping and next day delivery",
        benefit_free_shipping_desc: "On all orders",
        benefit_warranty: "1 Year Warranty",
        benefit_warranty_desc: "On all products",
        benefit_return: "30 Day Return",
        benefit_return_desc: "Full refund guaranteed",
        benefit_accessories: "Accessories Included",
        benefit_accessories_desc: "Cable, box and free screen protector",

        // Contact & Support
        whatsapp_title: "Want to swap for a lower model or need more information?",
        whatsapp_subtitle: "Chat with our experts on WhatsApp for personalized recommendations and instant support",
        whatsapp_button: "Chat on WhatsApp",
        support: "Technical Support",

        // Product Categories
        featured_products: "Featured Products",
        iphones: "iPhones",
        samsung: "Samsung",
        audio: "Audio",
        accessories: "Accessories",

        // Product Details
        product_title: "Product",
        product_description: "Product Description",
        specifications: "Specifications",
        key_features: "Key Features",
        technical_specs: "Technical Specifications",
        available_in: "Available in:",
        quantity: "Quantity:",
        choose_type: "Choose Type",
        model: "Model",
        storage: "Storage",
        condition: "Condition",
        color: "Color",
        battery: "Battery",
        operating_system: "Operating System",
        screen_size: "Screen Size",
        camera: "Camera",
        processor: "Processor",
        ram: "RAM",
        required: "*Required",

        // Product Badges
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

        // Cart
        shopping_cart: "Shopping Cart",
        add_to_cart: "Add to Cart",
        empty_cart: "Your cart is empty",
        subtotal: "Subtotal:",
        shipping: "Shipping:",
        total: "Total:",

        // Checkout
        checkout: "Proceed to Checkout",
        order_summary: "Order Summary",
        order_ref: "Order Reference:",
        payment_method: "Payment Method:",
        bank_transfer: "Bank Transfer",
        credit_card: "Credit Card",
        bank_details: "Bank Details",
        bank_name: "Bank:",
        account_number: "Account Number:",
        account_holder: "Account Holder:",
        reference: "Reference:",
        transfer_instructions: "Make the transfer for the total amount and send us a confirmation via whatsapp for expedited shipping.",
        confirm_transfer: "Send Payment Confirmation",
        card_details: "Card Details",
        accepted: "Accepted:",
        secure_payment: "100% Secure and Verified Payment",
        cardholder_name: "Cardholder Name",
        card_number: "Card Number",
        expiry_date: "Expiry Date",
        cvc: "CVV",
        ssl_secured: "Secure SSL Connection - Your data is protected",
        place_order: "Place Order",
        terms_agreement: "I agree to the",
        terms_and_conditions: "Terms and Conditions",

        // Order Processing & Confirmation
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
        estimated_delivery: "Estimated Delivery:",

        // OTP & Security
        security_verification: "Security Verification",
        verify_payment: "Verify Your Payment",
        otp_sent: "We've sent a 6-digit verification code to your phone number. Please enter it below to complete your purchase.",
        code_expires: "Code expires in: ",
        resend_code: "Resend Code",
        verify_code: "Verify Code",
        invalid_code: "Invalid code. Please try again.",

        // Shipping & Delivery
        free_shipping: "Free Shipping",
        free_shipping_all: "Free shipping on all orders",
        delivery_time: "Delivery Time",
        delivery_inspection_notice: "We encourage all customers to thoroughly inspect their order upon delivery from the carrier. Should you find the item unsatisfactory or not as expected, you have the right to refuse acceptance of the package. In the event of refusal, you will be eligible for a complete refund of your purchase amount in accordance with our return policy.",

        // Sorting
        price_high_to_low: "Price: High to Low",
        price_low_to_high: "Price: Low to High",
        featured: "Featured",

        // Conditions
        condition_guide: "Condition Guide:",
        condition_guide_desc: "Better conditions indicate less wear and superior device appearance.",
         good: "Good",
        good_desc: "Moderate wear, works perfectly",
        great: "Great",
        great_desc: "Light wear, fully functional",
        excellent: "Excellent",
        excellent_desc: "Minor signs of use",
        pristine: "Pristine",
        pristine_desc: "Like new - no visible wear",
        condition_great: "Great",
        condition_great_desc: "Light wear, fully functional",
        condition_excellent: "Excellent",
        condition_excellent_desc: "Minor signs of use",
        condition_display_piece: "Display piece, never used",
        condition_display_piece_desc: "Display piece, never used, open box",

        // Colors
        color_black: "Black",
        color_rose_gold: "Rose Gold",
        color_peach: "Peach",
        color_green: "Green",
        color_blue: "Blue",
        color_copper: "Copper",
        color_midnight_black: "Midnight Black",
        color_sage_green: "Sage Green",

        // Warranty & Policies
        warranty_title: "12 Month Warranty",
        warranty_desc: "Full warranty with technical support included",
        warranty: "Warranty",
        days_return: "14-Day Return Policy",
        privacy: "Privacy",
        terms: "Terms and Conditions",
        returns: "Returns",
        shipping_policy: "Shipping",

        // Footer
        company_info: "Company Information",
        quick_links: "Quick Links",
        policies: "Policies",
        payment_methods: "Payment Methods",
        payment_info: "We accept bank transfers, deposits and cash on delivery payments.",
        rights_reserved: "All rights reserved.",

        // Product Specific Descriptions
        iphone_desc: "Premium refurbished iPhone with excellent performance. 95% battery health guaranteed. Includes 1 year warranty and 30-day return.",
        samsung_desc: "Powerful performance with stunning display and long-lasting battery—ideal for work, gaming, and everyday use.",
        poco_desc: "High-performance phone with smooth display and strong battery life. Ideal for gaming and everyday use.",
        xiaomi_desc: "Reliable performance, long-lasting battery, and sharp display. Perfect for daily use and gaming.",
        airpods_desc: "Enjoy spatial audio with dynamic head tracking, sweat and water resistance, and up to 6 hours of listening time.",
        earphones_desc: "Affordable wired earphones with clear sound, lightweight design, and universal compatibility.",
        jbl_speakerss_desc: "Portable JBL speakers with waterproof design, powerful bass, and Bluetooth connectivity for music anywhere.",
        jbl_headphones_desc: "Powerful JBL sound with deep bass, comfortable design, and long-lasting battery for all-day listening.",

        // Product Specific Names
        iphone16promax_name: "iPhone 16 Pro Max",
        iphone16_name: "iPhone 16",
        iphone15promax_name: "iPhone 15 Pro Max",
        iphone16e_name: "iPhone 16 e",
        iphone15_name: "iPhone 15",
        iphone14promax_name: "iPhone 14 Pro Max",
        iphone13promax_name: "iPhone 13 Pro Max",
        iphone12promax_name: "iPhone 12 Pro Max",
        iphone11promax_name: "iPhone 11 Pro Max",
        iphonexr_name: "iPhone XR",
        galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
        galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
        galaxys24plus_name: "Samsung Galaxy S24 Plus",
        galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
        galaxys22ultra_name: "Samsung Galaxy S22 Ultra",
        galaxya545g_name: "Samsung Galaxy A54 5G",
        galaxya35_name: "Samsung Galaxy A35",
        galaxya155g_name: "Samsung Galaxy A15 5G",
        galaxya05s_name: "Samsung Galaxy A05s",
        galaxym15_name: "Samsung Galaxy M15",
        galaxym14_name: "Samsung Galaxy M14",
        redmi14c_name: "Xiaomi Redmi 14C",
        redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
        pocox7pro_name: "Xiaomi Poco X7 Pro",
        airpods3_name: "AirPods 3rd Generation",
        airpods4_name: "AirPods 4th Generation",
        earphones_name: "Generic Earphones",
        jblheadphones_name: "JBL Headphones",
        jblgo_name: "JBL GO Speaker",
        jblpulse_name: "JBL Pulse Speaker",
        cableiphone_name: "iPhone Charging Cable",
        cableusbc_name: "USB‑C Charging Cable",

        // Product Features
        iphone_feature_battery_title: "29h Battery",
        iphone_feature_battery_desc: "Video playback",
        iphone_feature_chip_title: "A18 Pro Chip",
        iphone_feature_chip_desc: "Revolutionary performance",
        iphone_feature_camera_title: "48MP Camera",
        iphone_feature_camera_desc: "Pro camera system",
        iphone_feature_display_title: "6.9\" ProMotion",
        iphone_feature_display_desc: "Super Retina XDR",
        feature_battery_title: "Long Battery Life",
        feature_battery_desc: "All-day performance",
        feature_chip_title: "Powerful Chipset",
        feature_chip_desc: "Fast & efficient",
        feature_camera_title: "High‑Res Camera",
        feature_camera_desc: "Great photo quality",
        feature_display_title: "Crisp Display",
        feature_display_desc: "Sharp visuals",
        feature_processor_title: "Efficient Processor",
        feature_processor_desc: "Balanced performance and battery life",
        feature_spatial_audio: "Spatial Audio",
        feature_spatial_audio_desc: "Immersive 3D sound",
        feature_h1_chip: "H1 Chip",
        feature_h1_chip_desc: "Smooth pairing & voice access",
        feature_ipx4: "IPX4 Water Resistance",
        feature_ipx4_desc: "Splash‑resistant design",
        feature_battery_airpods3_desc: "Up to 6 h listening or 30 h with case",
        feature_h2_chip: "H2 Chip",
        feature_h2_chip_desc: "Enhanced performance & sound",
        feature_noise_cancellation: "Active Noise Cancellation",
        feature_noise_cancellation_desc: "Block external noise",
        feature_ip54: "IP54 Dust/Water Resistance",
        feature_battery_airpods4_desc: "Up to 5 h listening or 30 h with case",
        feature_tough_build: "Durable Build",
        feature_tough_build_desc: "Affordable and sturdy",
        feature_clear_sound: "Clear Sound",
        feature_clear_sound_desc: "Good audio for calls and music",
        feature_wireless: "Wireless Connectivity",
        feature_wireless_desc: "Bluetooth convenience",
        feature_jbl_sound: "Signature JBL Sound",
        feature_jbl_sound_desc: "Rich audio quality",
        feature_portable: "Ultra-Portable",
        feature_portable_desc: "Easy to carry anywhere",
        feature_led_lights: "LED Light Show",
        feature_led_lights_desc: "Visuals that sync with music",
        feature_mfi: "MFi Certified",
        feature_mfi_desc: "Apple‑approved accessories",
        feature_fast_charge: "Fast Charging",
        feature_fast_charge_desc: "Quick power top‑up",

        // Specifications
        spec_display: "Display",
        spec_processor: "Processor",
        spec_storage: "Storage",
        spec_ram: "RAM",
        spec_main_camera: "Main Camera",
        spec_ultrawide_camera: "Ultra Wide Camera",
        spec_telephoto_camera: "Telephoto Camera",
        spec_battery: "Battery",
        spec_os: "Operating System",
        spec_connectivity: "Connectivity",
        spec_resistance: "Water & Dust Resistance",
        spec_dimensions: "Dimensions",
        spec_weight: "Weight",
        spec_condition: "Condition",
        spec_battery_health: "Battery Health",
        spec_battery_health_value: "Guaranteed 90% health",
        spec_condition_certified: "Certified Refurbished"
 }
    };
}

function t(key) {
  const lang = window.currentLanguage || 'en'; // fallback to English if not set
  return (window.translations[lang] && window.translations[lang][key]) 
    ? window.translations[lang][key] 
    : key; // fallback to key if translation is missing
}



// Product database with detailed information
const productDatabase = {
  iphone16promax: {
    name: "iPhone 16 Pro Max",
    description: t("iphone_desc"),
    price: 769,
    originalPrice: 1000,
    discount: 25,
    category: "phone",
    variants: {
        black: {
            name: "Black Titanium",
            images: [
                "https://m.media-amazon.com/images/I/617OBw7dFnL._AC_SX342_.jpg",
                "https://m.media-amazon.com/images/I/51FEms6uxOL._AC_SY445_.jpg",
                "https://m.media-amazon.com/images/I/51IT3RUIUfL._AC_SY445_.jpg"
            ]
        },
        gold: {
            name: "Desert Titanium",
            images: [
                "https://m.media-amazon.com/images/I/61qYXb0BfXL._AC_SX569_.jpg",
                "https://m.media-amazon.com/images/I/61Jv4TC20sL._AC_SX425_.jpg",
                "https://m.media-amazon.com/images/I/51hcQRAZF1L._AC_SX425_.jpg"
            ]
        }
    },
    memoryOptions: {
        "256GB": { price: 769, originalPrice: 890 },
        "512GB": { price: 819, originalPrice: 950 },
        "1TB": { price: 869, originalPrice: 1100 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: '6.9" Super Retina XDR OLED',
        [t("spec_processor")]: "Apple A18 Pro",
        [t("spec_storage")]: "256GB",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "48MP f/1.78",
        [t("spec_ultrawide_camera")]: "12MP f/2.2",
        [t("spec_telephoto_camera")]: "12MP f/2.8",
        [t("spec_battery")]: "4422 mAh",
        [t("spec_os")]: "iOS 18",
        [t("spec_connectivity")]: "5G, Wi-Fi 7, Bluetooth 5.3",
        [t("spec_resistance")]: "IP68",
        [t("spec_dimensions")]: "159.9 x 76.7 x 8.25 mm",
        [t("spec_weight")]: "227g",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


  iphone16: {
    name: t("iphone16_name"),
    description: t("iphone_desc"),
    price: 529,
    originalPrice: 699,
    discount: 17,
    category: "phone",
    variants: {
        black: { name: "Black Titanium", images: ["https://m.media-amazon.com/images/I/41qsyx+-ffL._AC_SX425_.jpg"] },
        white: { name: "White", images: ["https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX425_.jpg"] },
        teal: { name: "Teal", images: ["https://m.media-amazon.com/images/I/71dAfxOFDuL._AC_SX425_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 635, originalPrice: 699 },
        "256GB": { price: 765, originalPrice: 799 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.1‑6.7\" OLED",
        [t("spec_processor")]: "A18 Bionic",
        [t("spec_storage")]: "128‑512GB",
        [t("spec_ram")]: "6‑8GB",
        [t("spec_main_camera")]: "48 MP + Ultra Wide",
        [t("spec_battery")]: "Up to 4400 mAh est.",
        [t("spec_connectivity")]: "5G, Wi‑Fi 6/7",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


iphone15promax: {
    name: t("iphone15promax_name"),
    description: t("iphone_desc"),
    price: 649,
    originalPrice: 899,
    discount: 28,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 629, originalPrice: 699 },
        "512GB": { price: 729, originalPrice: 799 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" OLED",
        [t("spec_processor")]: "A17 Pro",
        [t("spec_storage")]: "128‑512GB",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "48 MP + Ultra Wide",
        [t("spec_battery")]: "Approx. 4300 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 6",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


iphone16e: {
    name: t("iphone16e_name"),
    description: t("iphone_desc"),
    price: 699,
    originalPrice: 899,
    discount: 22,
    category: "phone",
    variants: {
        black: {
            name: "Black",
            images: ["https://m.media-amazon.com/images/I/51H8+zCj2cL._AC_SX569_.jpg"]
        },
        white: {
            name: "White",
            images: ["https://m.media-amazon.com/images/I/61Zsers1VBL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {
        "128GB": { price: 539, originalPrice: 599 },
        "256GB": { price: 619, originalPrice: 699 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.1\" OLED",
        [t("spec_processor")]: "A18 Bionic",
        [t("spec_storage")]: "128GB",
        [t("spec_ram")]: "6GB",
        [t("spec_main_camera")]: "48 MP + Ultra Wide",
        [t("spec_battery")]: "Approx. 3200 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 6",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

iphone15: {
  name: t("iphone15_name"),
  description: t("iphone_desc"),
  price: 579,
  originalPrice: 749,
  discount: 23,
  category: "phone",
  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY606_.jpg"]
    },
    blue: {
      name: "Blue",
      images: ["https://m.media-amazon.com/images/I/51-dI0OmzyL._AC_SX569_.jpg"]
    }
  },

    memoryOptions: {
        "128GB": { price: 519, originalPrice: 649 },
        "256GB": { price: 599, originalPrice: 849 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.1\" OLED",
        [t("spec_processor")]: "A16 Bionic",
        [t("spec_storage")]: "128‑256GB",
        [t("spec_ram")]: "6GB",
        [t("spec_main_camera")]: "48 MP wide",
        [t("spec_battery")]: "Approx. 3200 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 6",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


iphone14promax: {
  name: t("iphone14promax_name"),
  description: t("iphone_desc"),
  price: 429,
  originalPrice: 699,
  discount: 39,
  category: "phone",
  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/51wqFSpP20L._AC_SL1000_.jpg"]
    },
    gold: {
      name: "Gold",
      images: ["https://m.media-amazon.com/images/I/51GZNF-UxFL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 429, originalPrice: 699 },
    "512GB": { price: 579, originalPrice: 799 }
  },
  features: [
    { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
    { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
    { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.7\" OLED",
    [t("spec_processor")]: "A16 Bionic",
    [t("spec_storage")]: "128‑256GB",
    [t("spec_ram")]: "6GB",
    [t("spec_main_camera")]: "48 MP + Ultra Wide",
    [t("spec_battery")]: "Approx. 4323 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},


iphone14: {
  name: "iPhone 14",
  description: t("iphone_desc"),
  price: 399,
  originalPrice: 599,
  discount: 33,
  category: "phone",

  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/51Yz9FaNIGL._AC_SL1000_.jpg"]
    },
    starlight: {
      name: "Starlight",
      images: ["https://m.media-amazon.com/images/I/51UE4EzWMDL._AC_SY606_.jpg"]
    }
  },

  memoryOptions: {
    "256GB": { price: 379, originalPrice: 599 },
    "512GB": { price: 429, originalPrice: 749 }
  },

  features: [
    { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
    { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
    { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
  ],

  specifications: {
    [t("spec_display")]: "6.1\" OLED",
    [t("spec_processor")]: "A15 Bionic",
    [t("spec_storage")]: "256‑512GB",
    [t("spec_ram")]: "6GB",
    [t("spec_main_camera")]: "12MP Dual Camera",
    [t("spec_battery")]: "Approx. 3279 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

iphone13promax: {
  name: t("iphone13promax_name"),
  description: t("iphone_desc"),
  price: 359,
  originalPrice: 399,
  discount: 40,
  category: "phone",
  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/51UtM-A3fdL._AC_SX569_.jpg"]
    },
    sierraBlue: {
      name: "Sierra Blue",
      images: ["https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 359, originalPrice: 599 },
    "512GB": { price: 399, originalPrice: 699 }
  },
  features: [
    { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
    { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
    { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.7\" OLED",
    [t("spec_processor")]: "A15 Bionic",
    [t("spec_storage")]: "128‑512GB",
    [t("spec_ram")]: "6GB",
    [t("spec_main_camera")]: "12 MP triple camera",
    [t("spec_battery")]: "Approx. 4352 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

iphone12promax: {
    name: t("iphone12promax_name"),
    description: t("iphone_desc"),
    price: 219,
    originalPrice: 299,
    discount: 56,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 219, originalPrice: 299 },
        "512GB": { price: 319, originalPrice: 399 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" OLED",
        [t("spec_processor")]: "A14 Bionic",
        [t("spec_storage")]: "128‑256GB",
        [t("spec_ram")]: "6GB",
        [t("spec_main_camera")]: "12 MP triple camera + LiDAR",
        [t("spec_battery")]: "Approx. 3687 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 6",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

iphone11promax: {
    name: t("iphone11promax_name"),
    description: t("iphone_desc"),
    price: 149,
    originalPrice: 399,
    discount: 63,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61UC1mk6dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        }
    },
    memoryOptions: {
        "128GB": { price: 149, originalPrice: 399 },
        "256GB": { price: 199, originalPrice: 449 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.5\" LCD",
        [t("spec_processor")]: "A13 Bionic",
        [t("spec_storage")]: "64‑128GB",
        [t("spec_ram")]: "4GB",
        [t("spec_main_camera")]: "12 MP triple camera",
        [t("spec_battery")]: "Approx. 3969 mAh",
        [t("spec_connectivity")]: "4G LTE",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

iphonexr: {
    name: t("iphonexr_name"),
    description: t("iphone_desc"),
    price: 129,
    originalPrice: 299,
    discount: 57,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/51z1UO6N6LL._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "64GB": { price: 129, originalPrice: 299 },
        "128GB": { price: 179, originalPrice: 349 }
    },
    features: [
        { icon: "fas fa-battery-full", title: t("iphone_feature_battery_title"), desc: t("iphone_feature_battery_desc") },
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: t("iphone_feature_chip_desc") },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: t("iphone_feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: t("iphone_feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.1\" LCD",
        [t("spec_processor")]: "A12 Bionic",
        [t("spec_storage")]: "64‑128GB",
        [t("spec_ram")]: "3GB",
        [t("spec_main_camera")]: "12 MP single camera",
        [t("spec_battery")]: "Approx. 2942 mAh",
        [t("spec_connectivity")]: "4G LTE",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


galaxys25ultra: {
  name: "Samsung Galaxy S 25 Ultra",
  description: t("samsung_desc"),
  price: 1299,
  originalPrice: 1659,
  discount: 22,
  category: "phone",
  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg"]
    },
    silver: {
      name: "Silver",
      images: ["https://m.media-amazon.com/images/I/611uRZST+vL._AC_SX569_.jpg"]
    },
    icyBlue: {
      name: "Icy Blue",
      images: ["https://m.media-amazon.com/images/I/61YvMOsT47L._AC_SX569_.jpg"]  // You can replace this with your actual Icy Blue image link
    }
  },
  memoryOptions: {
    "256GB": { price: 719, originalPrice: 1659 },
    "512GB": { price: 829, originalPrice: 1759 },
    "1TB": { price: 949, originalPrice: 1859 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.9\" Dynamic AMOLED 2X, 1440×3120, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Elite for Galaxy",
    [t("spec_storage")]: "256 GB / 512 GB / 1 TB",
    [t("spec_ram")]: "12 GB",
    [t("spec_main_camera")]: "200 MP + 50 MP UW + 10 MP 3× + 50 MP 5×",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 7, UWB",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

galaxyS25: {
    name: "Samsung Galaxy S 25",
    description: t("samsung_desc"),
    price: 899,
    originalPrice: 1099,
    discount: 18,
    category: "phone",
    variants: {
        silver: {
            name: "Silver",
            images: ["https://m.media-amazon.com/images/I/4148hrqqC+L._AC_SX425_.jpg"]
        },
        blue: {
            name: "Blue",
            images: ["https://m.media-amazon.com/images/I/61C17Al0dhL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 599, originalPrice: 1099 },
        "512GB": { price: 649, originalPrice: 1199 }
    },
    features: [
        { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
        { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
        { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.2\" Dynamic AMOLED 2X, 120 Hz",
        [t("spec_processor")]: "Snapdragon 8 Gen 4 (Galaxy variant)",
        [t("spec_storage")]: "128GB / 256GB",
        [t("spec_ram")]: "8 GB",
        [t("spec_main_camera")]: "50 MP + 12 MP UW + 10 MP telephoto",
        [t("spec_battery")]: "Approx. 4 000 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 7",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


galaxys24ultra: {
    name: t("galaxys24ultra_name"),
    description: t("samsung_desc"),
    price: 479,
    originalPrice: 600,
    discount: 23,
    category: "phone",
    variants: {
        violet: {
            name: "Violet",
            images: ["https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        },
        black: {
            name: "Black",
            images: ["https://m.media-amazon.com/images/I/51A-Q4eMBxL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 599, originalPrice: 600 },
        "512GB": { price: 624, originalPrice: 630 },
		"1TB": { price: 699, originalPrice: 600 },
    },
    features: [
        { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
        { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
        { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.8\" Dynamic AMOLED 2X, 1440×3120, 120 Hz",
        [t("spec_processor")]: "Snapdragon 8 Gen 3",
        [t("spec_storage")]: "256 GB / 512 GB / 1 TB",
        [t("spec_ram")]: "12 GB",
        [t("spec_main_camera")]: "200 MP + 50 MP UW + 10 MP 3× + 50 MP 5×",
        [t("spec_battery")]: "5 000 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 7",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},
galaxys24: {
    name: "Samsung Galaxy S 24",
    description: t("samsung_desc"),
    price: 529,
    originalPrice: 999,
    discount: 25,
    category: "phone",
    variants: {
        black: {
            name: "Black",
            images: ["https://m.media-amazon.com/images/I/61uakkLoHxL._AC_SX569_.jpg"]
        },
        gray: {
            name: "Gray",
            images: ["https://m.media-amazon.com/images/I/61bXUCHBw+L._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 449, originalPrice: 999 },
        "512GB": { price: 529, originalPrice: 1049 }
    },
    features: [
        { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
        { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
        { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.2\" Dynamic AMOLED 2X, 120 Hz",
        [t("spec_processor")]: "Snapdragon 8 Gen 3",
        [t("spec_storage")]: "128GB / 256GB",
        [t("spec_ram")]: "8 GB",
        [t("spec_main_camera")]: "50 MP + 12 MP UW + 10 MP telephoto",
        [t("spec_battery")]: "Approx. 4 000 mAh",
        [t("spec_connectivity")]: "5G, Wi‑Fi 7",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


galaxys24plus: {
  name: t("galaxys24plus_name"),
  description: t("samsung_desc"),
  price: 699,
  originalPrice: 849,
  discount: 18,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 559, originalPrice: 649 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.7\" Dynamic AMOLED 2X, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Gen 3",
    [t("spec_storage")]: "256 GB / 512 GB",
    [t("spec_ram")]: "12 GB",
    [t("spec_main_camera")]: "200 MP + UW + 10 MP + 50 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 7",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

galaxys23ultra: {
  name: "Samsung Galaxy S 23 Ultra",
  description: t("samsung_desc"),
  price: 329,
  originalPrice: 400,
  discount: 33,
  category: "phone",
  variants: {
    black: {
      name: "Black",
      images: ["https://m.media-amazon.com/images/I/513vXUcPFrL._AC_SX569_.jpg"]
    },
    pink: {
      name: "Pink",
      images: ["https://m.media-amazon.com/images/I/51GvkWOYjIL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 329, originalPrice: 399 },
    "512GB": { price: 379, originalPrice: 439 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.8\" Dynamic AMOLED 2X, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Gen 2",
    [t("spec_storage")]: "256 GB / 512 GB / 1 TB",
    [t("spec_ram")]: "12 GB",
    [t("spec_main_camera")]: "200 MP + UW + 10 MP + 50 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 7",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

	galaxys23: {
  name: "Samsung Galaxy S 23",
  description: t("samsung_desc"),
  price: 499,
  originalPrice: 699,
  discount: 29,
  category: "phone",
  variants: {
    green: {
      name: "Green",
      images: ["https://m.media-amazon.com/images/I/51xj0EFyXHL._AC_SX522_.jpg"]
    },
    cream: {
      name: "Cream",
      images: ["https://m.media-amazon.com/images/I/61oXcVnOdAL._AC_SX522_.jpg"]
    }
  }, 
  memoryOptions: {
    "256GB": { price: 249, originalPrice: 299 },
    "512GB": { price: 279, originalPrice: 329 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.1\" AMOLED, FHD+, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Gen 2",
    [t("spec_storage")]: "128GB / 256GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "50 MP + 12 MP UW + 10 MP telephoto",
    [t("spec_battery")]: "3 900 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6E",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},


galaxys22ultra: {
  name: t("galaxys22ultra_name"),
  description: t("samsung_desc"),
  price: 499,
  originalPrice: 799,
  discount: 38,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 229, originalPrice: 300 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.8\" Dynamic AMOLED 2X, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Gen 1",
    [t("spec_storage")]: "256 GB / 512 GB",
    [t("spec_ram")]: "12 GB",
    [t("spec_main_camera")]: "108 MP + UW + 10 MP + 10 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},
galaxys22: {
  name: "Samsung Galaxy S 22",
  description: t("samsung_desc"),
  price: 379,
  originalPrice: 649,
  discount: 42,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61M4ndNetDL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "128GB": { price: 149, originalPrice: 649 },
    "256GB": { price: 179, originalPrice: 699 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.1\" AMOLED, FHD+, 120 Hz",
    [t("spec_processor")]: "Snapdragon 8 Gen 1",
    [t("spec_storage")]: "128GB / 256GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "50 MP + 12 MP UW + 10 MP telephoto",
    [t("spec_battery")]: "3 700 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},


   galaxya545g: {
  name: t("galaxya545g_name"),
  description: t("samsung_desc"),
  price: 389,
  originalPrice: 499,
  discount: 22,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
    peach: {
      name: t("color_peach"),
      images: ["https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "128GB": { price: 349, originalPrice: 499 },
    "256GB": { price: 399, originalPrice: 579 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.4\" Super AMOLED, 1080×2340, 120 Hz",
    [t("spec_processor")]: "Exynos 1380",
    [t("spec_storage")]: "128 GB / 256 GB",
    [t("spec_ram")]: "6 GB / 8 GB",
    [t("spec_main_camera")]: "50 MP + 12 MP + 5 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

galaxya35: {
  name: t("galaxya35_name"),
  description: t("samsung_desc"),
  price: 249,
  originalPrice: 329,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "128GB": { price: 199, originalPrice: 329 },
    "256GB": { price: 229, originalPrice: 379 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.6\" AMOLED, 120 Hz",
    [t("spec_processor")]: "Exynos 1380",
    [t("spec_storage")]: "128 GB / 256 GB",
    [t("spec_ram")]: "6 GB / 8 GB",
    [t("spec_main_camera")]: "50 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

galaxya155g: {
  name: t("galaxya155g_name"),
  description: t("samsung_desc"),
  price: 189,
  originalPrice: 249,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 189, originalPrice: 249 },
    "128GB": { price: 229, originalPrice: 289 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.5\" PLS TFT, 90 Hz",
    [t("spec_processor")]: "MediaTek Dimensity 700",
    [t("spec_storage")]: "64 GB / 128 GB",
    [t("spec_ram")]: "4 GB",
    [t("spec_main_camera")]: "50 MP + 5 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},


galaxya05s: {
  name: t("galaxya05s_name"),
  description: t("samsung_desc"),
  price: 199,
  originalPrice: 279,
  discount: 29,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 129, originalPrice: 279 },
    "128GB": { price: 149, originalPrice: 319 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.5\" PLS TFT, 90 Hz",
    [t("spec_processor")]: "MediaTek MT6765 Helio P35",
    [t("spec_storage")]: "64 GB / 128 GB",
    [t("spec_ram")]: "4 GB / 6 GB",
    [t("spec_main_camera")]: "13 MP + 2 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "4G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

galaxym15: {
  name: t("galaxym15_name"),
  description: t("samsung_desc"),
  price: 229,
  originalPrice: 299,
  discount: 23,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 169, originalPrice: 299 },
    "128GB": { price: 209, originalPrice: 349 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.4\" Super AMOLED, 60 Hz",
    [t("spec_processor")]: "Exynos 1280",
    [t("spec_storage")]: "64 GB / 128 GB",
    [t("spec_ram")]: "4 GB / 6 GB",
    [t("spec_main_camera")]: "50 MP + 5 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "5G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},


galaxym14: {
  name: t("galaxym14_name"),
  description: t("samsung_desc"),
  price: 199,
  originalPrice: 269,
  discount: 26,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41tFC8GKz8L._SX300_SY300_QL70_FMwebp_.jpg"]
    },
    copper: {
      name: t("color_copper"),
      images: ["https://m.media-amazon.com/images/I/41tFC8GKz8L._SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "64GB": { price: 139, originalPrice: 269 },
    "128GB": { price: 179, originalPrice: 319 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.5\" PLS LCD, 60 Hz",
    [t("spec_processor")]: "Exynos 1330",
    [t("spec_storage")]: "64 GB / 128 GB",
    [t("spec_ram")]: "4 GB / 6 GB",
    [t("spec_main_camera")]: "50 MP + 5 MP",
    [t("spec_battery")]: "5 000 mAh",
    [t("spec_connectivity")]: "4G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

redmi14c: {
  name: t("redmi14c_name"),
  description: t("xiaomi_desc"),
  price: 169,
  originalPrice: 199,
  discount: 15,
  category: "phone",
  variants: {
    midnight_black: {
      name: t("color_midnight_black"),
      images: ["https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg"]
    },
    sage_green: {
      name: t("color_sage_green"),
      images: ["https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg"]
    }
  },
  memoryOptions: {
    "4GB + 128GB": { price: 129, originalPrice: 199 },
    "6GB + 128GB": { price: 179, originalPrice: 229 },
    "8GB + 256GB": { price: 209, originalPrice: 269 }
  },
  features: [
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-microchip", title: t("feature_processor_title"), desc: t("feature_processor_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.88\" LCD, 720×1640, 120 Hz",
    [t("spec_processor")]: "Helio G81‑Ultra",
    [t("spec_storage")]: "128/256 GB (expandable)",
    [t("spec_ram")]: "4‑8 GB",
    [t("spec_main_camera")]: "50 MP + 2 MP",
    [t("spec_battery")]: "5 160 mAh",
    [t("spec_connectivity")]: "4G LTE, Wi‑Fi 5, NFC",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

  pocox7pro: {
  name: t("pocox7pro_name"),
  description: t("poco_desc"),
  price: 249,
  originalPrice: 329,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61qXnVmcxxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 179, originalPrice: 329 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "Snapdragon 7s Gen 2",
    [t("spec_storage")]: "256 GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "108 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 67 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},
redminote14pro5g: {
  name: t("redminote14pro5g_name"),
  description: t("xiaomi_desc"),
  price: 199,
  originalPrice: 249,
  discount: 20,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 199, originalPrice: 249 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "Snapdragon 7 Gen 3",
    [t("spec_storage")]: "256 GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "200 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 67 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

	redminote14: {
  name: t("redminote14_name"),
  description: t("xiaomi_desc"),
  price: 207,
  originalPrice: 259,
  discount: 20,
  category: "phone",
  variants: {
    gray: {
      name: t("color_gray"),
      images: ["https://m.media-amazon.com/images/I/81L4MbrSEBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 207, originalPrice: 259 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "MediaTek Helio G99",
    [t("spec_storage")]: "128 GB",
    [t("spec_ram")]: "6 GB",
    [t("spec_main_camera")]: "108 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 33 W",
    [t("spec_connectivity")]: "4G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},
redminote13pro: {
  name: t("redminote13pro_name"),
  description: t("xiaomi_desc"),
  price: 223,
  originalPrice: 279,
  discount: 20,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/71ZjanVe7oL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 223, originalPrice: 279 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "Snapdragon 7s Gen 2",
    [t("spec_storage")]: "256 GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "200 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 100 mAh, 67 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

	redminote13: {
  name: t("redminote13_name"),
  description: t("xiaomi_desc"),
  price: 183,
  originalPrice: 229,
  discount: 20,
  category: "phone",
  variants: {
    blue: {
      name: t("color_blue"),
      images: ["https://m.media-amazon.com/images/I/31WbsYNtasL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 183, originalPrice: 229 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.6\" AMOLED, 120 Hz",
    [t("spec_processor")]: "MediaTek Dimensity 6100+",
    [t("spec_storage")]: "128 GB",
    [t("spec_ram")]: "6 GB",
    [t("spec_main_camera")]: "100 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 33 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},
redminote14: {
  name: t("redminote14_name"),
  description: t("xiaomi_desc"),
  price: 207,
  originalPrice: 259,
  discount: 20,
  category: "phone",
  variants: {
    gray: {
      name: t("color_gray"),
      images: ["https://m.media-amazon.com/images/I/81L4MbrSEBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 207, originalPrice: 259 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "MediaTek Helio G99",
    [t("spec_storage")]: "128 GB",
    [t("spec_ram")]: "6 GB",
    [t("spec_main_camera")]: "108 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 33 W",
    [t("spec_connectivity")]: "4G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},
redminote13pro: {
  name: t("redminote13pro_name"),
  description: t("xiaomi_desc"),
  price: 223,
  originalPrice: 279,
  discount: 20,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/71ZjanVe7oL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 223, originalPrice: 279 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 120 Hz",
    [t("spec_processor")]: "Snapdragon 7s Gen 2",
    [t("spec_storage")]: "256 GB",
    [t("spec_ram")]: "8 GB",
    [t("spec_main_camera")]: "200 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 100 mAh, 67 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

	redminote13: {
  name: t("redminote13_name"),
  description: t("xiaomi_desc"),
  price: 183,
  originalPrice: 229,
  discount: 20,
  category: "phone",
  variants: {
    blue: {
      name: t("color_blue"),
      images: ["https://m.media-amazon.com/images/I/31WbsYNtasL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 183, originalPrice: 229 }
  },
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.6\" AMOLED, 120 Hz",
    [t("spec_processor")]: "MediaTek Dimensity 6100+",
    [t("spec_storage")]: "128 GB",
    [t("spec_ram")]: "6 GB",
    [t("spec_main_camera")]: "100 MP + 2 MP",
    [t("spec_battery")]: "5 000 mAh, 33 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 5",
    [t("spec_condition")]: t("spec_condition_certified"),
    [t("spec_battery_health")]: t("spec_battery_health_value")
  }
},

	
        airpods3: {
  name: t("airpods3_name"),
  description: t("airpods_desc"),
  price: 99,
  originalPrice: 129,
  discount: 17,
  category: "audio",
  variants: {
    white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/61jcsHsFN8L.__AC_SY445_SX342_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: {
    great: { name: t("condition_great"), priceAdjustment: 0, description: t("condition_great_desc") },
    excellent: { name: t("condition_excellent"), priceAdjustment: 20, description: t("condition_excellent_desc") },
    new_open_box: { name: t("condition_display_piece"), priceAdjustment: 40, description: t("condition_display_piece_desc") }
  },
  images: ["https://m.media-amazon.com/images/I/61jcsHsFN8L.__AC_SY445_SX342_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-audio-description", title: t("feature_spatial_audio"), desc: t("feature_spatial_audio_desc") },
    { icon: "fas fa-microchip", title: t("feature_h1_chip"), desc: t("feature_h1_chip_desc") },
    { icon: "fas fa-shower", title: t("feature_ipx4"), desc: t("feature_ipx4_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_airpods3_desc") }
  ],
  specifications: {
  [t("spec_chip")]: "H1",
  [t("spec_battery")]: "Up to 6 h listening, 30 h with case",
  [t("spec_water_resistance")]: "IPX4",
  [t("spec_case")]: "Lightning or MagSafe case",
  [t("spec_spatial_audio")]: "Personalized Spatial Audio with dynamic head tracking"
}

},

airpods4: {
  name: t("airpods4_name"),
  description: t("airpods_desc"),
  price: 129,
  originalPrice: 199,
  discount: 10,
  category: "audio",
  variants: {
    white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/61df2M5+OnL._AC_SX466_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same as above */ },
  images: ["https://m.media-amazon.com/images/I/61df2M5+OnL._AC_SX466_.jpg"],
  features: [
    { icon: "fas fa-microchip", title: t("feature_h2_chip"), desc: t("feature_h2_chip_desc") },
    { icon: "fas fa-bullhorn", title: t("feature_noise_cancellation"), desc: t("feature_noise_cancellation_desc") },
    { icon: "fas fa-water", title: t("feature_ip54"), desc: t("feature_ip54_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_airpods4_desc") }
  ],
specifications: {
  [t("spec_chip")]: "H2",
  [t("spec_battery")]: "Up to 5 h listening, 30 h with case",
  [t("spec_water_resistance")]: "IP54",
  [t("spec_noise_cancellation")]: "Active Noise Cancellation (ANC) available"
}
},

earphones: {
  name: t("earphones_name"),
  description: t("earphones_desc"),
  price: 9.99,
  category: "audio",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/612SeIGYPUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/612SeIGYPUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-volume-up", title: t("feature_tough_build"), desc: t("feature_tough_build_desc") },
    { icon: "fas fa-music", title: t("feature_clear_sound"), desc: t("feature_clear_sound_desc") }
  ],
  specifications: {}
},

jblheadphones: {
  name: t("jblheadphones_name"),
  description: t("jbl_headphones_desc"),
  price: 39,
  originalPrice: 79,
  discount: 38,
  category: "audio",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61EL2AKKcBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/61EL2AKKcBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-bluetooth", title: t("feature_wireless"), desc: t("feature_wireless_desc") },
    { icon: "fas fa-music", title: t("feature_jbl_sound"), desc: t("feature_jbl_sound_desc") }
  ],
  specifications: {}
},

jblgo: {
  name: t("jblgo_name"),
  description: t("jbl_speaker_desc"),
  price: 19.99,
  originalPrice: 29.99,
  discount: 33,
  category: "audio",
  variants: {
    blue: { name: t("color_blue"), images: ["https://m.media-amazon.com/images/I/71kzInVwzgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/71kzInVwzgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-bolt", title: t("feature_portable"), desc: t("feature_portable_desc") },
    { icon: "fas fa-music", title: t("feature_jbl_sound"), desc: t("feature_jbl_sound_desc") }
  ],
  specifications: {}
},
jblpulse: {
  name: t("jblpulse_name"),
  description: t("jbl_speaker_desc"),
  price: 99,
  originalPrice: 129,
  discount: 23,
  category: "audio",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51gb2hWadiL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51gb2hWadiL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-lightbulb", title: t("feature_led_lights"), desc: t("feature_led_lights_desc") },
    { icon: "fas fa-music", title: t("feature_jbl_sound"), desc: t("feature_jbl_sound_desc") }
  ],
  specifications: {}
},
	
cableiphone: {
  name: t("cableiphone_name"),
  description: t("cable_iphone_desc"),
  price: 12,
  category: "accessories",
  variants: {
    white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/51ItdSbJFwL._SL1064_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51ItdSbJFwL._SL1064_.jpg"],
  features: [
    { icon: "fas fa-plug", title: t("feature_mfi"), desc: t("feature_mfi_desc") }
  ],
  specifications: {}
},
cableusbc: {
  name: t("cableusbc_name"),
  description: t("cable_usbc_desc"),
  price: 9.99,
  category: "accessories",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61AsLefMRqL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/61AsLefMRqL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-charging-station", title: t("feature_fast_charge"), desc: t("feature_fast_charge_desc") }
  ],
  specifications: {}
},
motogstylus5g: {
    name: "Motorola Moto G Stylus 5G",
    description: t("moto_g_stylus_desc"),
    price: 179,
    originalPrice: 249,
    discount: 28,
    category: "motorola",
    variants: {
        black: {
            name: "Cosmic Black",
            images: [
                "https://m.media-amazon.com/images/I/71VLA-564KL._AC_SX679_.jpg",
            ]
        }
    },
    memoryOptions: {
        "128GB": { price: 179, originalPrice: 249 },
        "256GB": { price: 209, originalPrice: 289 }
    },
    features: [
        { icon: "fas fa-pen-fancy", title: "Built-in Stylus", desc: "Jot notes, edit photos, and navigate with precision." },
        { icon: "fas fa-camera", title: "50MP Camera System", desc: "Capture sharp and bright photos in any light." },
        { icon: "fas fa-battery-full", title: "2-Day Battery", desc: "Go for days on a single charge." },
        { icon: "fas fa-mobile-alt", title: "6.8\" FHD+ Display", desc: "Enjoy an immersive viewing experience." }
    ],
    specifications: {
        [t("spec_display")]: "6.8\" FHD+ (2460 x 1080) 120Hz",
        [t("spec_processor")]: "Snapdragon 695 5G",
        [t("spec_storage")]: "128GB / 256GB",
        [t("spec_ram")]: "6GB",
        [t("spec_main_camera")]: "50MP + 8MP Ultra-wide",
        [t("spec_battery")]: "5000 mAh",
        [t("spec_os")]: "Android 13",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},
applewatchse2: {
    name: "Apple Watch SE (2nd Gen)",
    description: t("apple_watch_se_desc"),
    price: 189,
    originalPrice: 249,
    discount: 24,
    category: "wearables",
    variants: {
        midnight: {
            name: "Midnight Aluminum",
            images: [
                "https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SX679_.jpg",
            ]
        },
        starlight: {
            name: "Starlight Aluminum",
            images: [
                "https://m.media-amazon.com/images/I/713n46v38VL._AC_SX679_.jpg",
            ]
        }
    },
    memoryOptions: {
        "40mm": { price: 189, originalPrice: 249 },
        "44mm": { price: 219, originalPrice: 279 }
    },
    features: [
        { icon: "fas fa-heartbeat", title: "Health Tracking", desc: "Heart rate notifications, sleep stages, and more." },
        { icon: "fas fa-running", title: "Fitness Companion", desc: "Track all your daily activity and workouts." },
        { icon: "fas fa-shield-alt", title: "Safety Features", desc: "Crash Detection and Emergency SOS." },
        { icon: "fas fa-mobile-alt", title: "Seamless Connectivity", desc: "Stay connected to your iPhone." }
    ],
    specifications: {
        [t("spec_display")]: "Retina LTPO OLED display",
        [t("spec_processor")]: "S8 SiP",
        [t("spec_connectivity")]: "GPS, Wi-Fi, Bluetooth 5.3",
        [t("spec_resistance")]: "Water resistant 50 meters",
        [t("spec_battery")]: "Up to 18 hours",
        [t("spec_condition")]: t("spec_condition_certified"),
    }
},
galaxywatch6: {
    name: "Samsung Galaxy Watch 6",
    description: t("galaxy_watch_6_desc"),
    price: 229,
    originalPrice: 299,
    discount: 23,
    category: "wearables",
    variants: {
        graphite: {
            name: "Graphite",
            images: [
                "https://m.media-amazon.com/images/I/61n+2Y5qLUL._AC_SX679_.jpg",
            ]
        },
        silver: {
            name: "Silver",
            images: [
                "https://m.media-amazon.com/images/I/61G462UrtPL._AC_SX679_.jpg",
            ]
        }
    },
    memoryOptions: {
        "40mm": { price: 229, originalPrice: 299 },
        "44mm": { price: 259, originalPrice: 329 }
    },
    features: [
        { icon: "fas fa-moon", title: "Advanced Sleep Coaching", desc: "Manage your overall sleep quality." },
        { icon: "fas fa-heartbeat", title: "Heart Monitoring", desc: "Get readings on your heart with ECG." },
        { icon: "fas fa-dumbbell", title: "Workout Tracking", desc: "Auto-detects over 90 exercises." },
        { icon: "fas fa-mobile-alt", title: "Large Display", desc: "Our biggest screen on a Galaxy Watch yet." }
    ],
    specifications: {
        [t("spec_display")]: "Super AMOLED, Sapphire Crystal",
        [t("spec_processor")]: "Exynos W930",
        [t("spec_storage")]: "16GB",
        [t("spec_ram")]: "2GB",
        [t("spec_connectivity")]: "GPS, Wi-Fi, Bluetooth 5.3, NFC",
        [t("spec_resistance")]: "IP68, 5ATM",
        [t("spec_battery")]: "Up to 40 hours",
        [t("spec_condition")]: t("spec_condition_certified"),
    }
},
miband8: {
    name: "Xiaomi Mi Band 8",
    description: t("mi_band_8_desc"),
    price: 39,
    originalPrice: 59,
    discount: 34,
    category: "wearables",
    variants: {
        black: {
            name: "Black",
            images: [
                "https://m.media-amazon.com/images/I/61JW1k2n2KL._AC_SX679_.jpg",
            ]
        }
    },
    memoryOptions: {},
    features: [
        { icon: "fas fa-running", title: "150+ Fitness Modes", desc: "Comprehensive tracking for all your activities." },
        { icon: "fas fa-tint", title: "Blood Oxygen Monitoring", desc: "Keep an eye on your SpO2 levels." },
        { icon: "fas fa-battery-full", title: "16-Day Battery Life", desc: "Long-lasting power for continuous use." },
        { icon: "fas fa-swimmer", title: "5ATM Water Resistance", desc: "Wear it while swimming." }
    ],
    specifications: {
        [t("spec_display")]: "1.62\" AMOLED Touch Display",
        [t("spec_battery")]: "190mAh, up to 16 days",
        [t("spec_connectivity")]: "Bluetooth 5.1",
        [t("spec_resistance")]: "5ATM",
        [t("spec_condition")]: t("spec_condition_certified"),
    }
}
};


// Get product ID from URL parameters
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'iphone16promax'; // Default product if no ID is found in the URL
}

// Country configuration (reuse from main script)
const countryConfig = {
    nicaragua: { flag: '🇳🇮', name: 'Nicaragua', currency: 'NIO', rate: 37, lang: 'es', phone: '+505 8888-8888' },
    honduras: { flag: '🇭🇳', name: 'Honduras', currency: 'HNL', rate: 25, lang: 'es', phone: '+504 2216-8888' },
    trinidad: { flag: '🇹🇹', name: 'Trinidad and Tobago', currency: 'TTD', rate: 6.8, lang: 'en', phone: '+1 (868) 299-7324' },
    elsalvador: { flag: '🇸🇻', name: "El Salvador", currency: 'USD', rate: 1, lang: 'es', phone: '+503 7345-6789' },
    paraguay: { flag: '🇵🇾', name: 'Paraguay', currency: 'PYG', rate: 7500, lang: 'es', phone: '+595 21 456-789' },
    guatemala: { flag: '🇬🇹', name: 'Guatemala', currency: 'GTQ', rate: 7.8, lang: 'es', phone: '+502 2345-6789' },
    dominican: { flag: '🇩🇴', name: 'Dominican Republic', currency: 'DOP', rate: 58, lang: 'es', phone: '+1 809 234-5678' },
    usa: { flag: '🇺🇸', name: 'USA', currency: 'USD', rate: 1, lang: 'en', phone: '+1 (800) 555-TECH' }
};

// Global variables
let currentCountry = localStorage.getItem('selectedCountry') || 'honduras';
let currentLanguage = localStorage.getItem('selectedLanguage') || countryConfig[currentCountry]?.lang || 'es';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Global selection state
let currentMemory = null;
let currentCondition = null;
let currentVariant = null;

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

// Currency conversion functions
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
    if (config.currency === 'USD') return usdPrice;

    const convertedPrice = price * config.rate;
    const symbol = getCurrencySymbol(currentCountry);
    const localFormattedPrice = convertedPrice.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const localPrice = `${symbol}${localFormattedPrice}`;

    return showBoth ? `${usdPrice} / ${localPrice}` : localPrice;
}

// Load and display product
function loadProduct() {
    const productId = getProductId();
    const product = productDatabase[productId];

    if (!product) {
        const container = document.querySelector('.product-detail-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <h2>Producto no encontrado</h2>
                    <p>El producto que buscas no existe.</p>
                    <a href="index.html" class="btn btn-primary">Volver a la tienda</a>
                </div>
            `;
        }
        return;
    }

    // Initialize selection states
    currentMemory = product.memoryOptions ? Object.keys(product.memoryOptions)[0] : null;
    currentCondition = product.conditionOptions ? Object.keys(product.conditionOptions)[0] : null;
    currentVariant = product.variants ? Object.keys(product.variants)[0] : null;

    // Update page title and meta
    document.title = `${product.name} - Swappie`;
    const pageTitle = document.getElementById('product-page-title');
    if (pageTitle) {
        pageTitle.textContent = `${product.name} - Swappie`;
    }

    // Update breadcrumb based on language
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = product.name;
    }

    // Function to update pricing based on current selections
    function updatePricing() {
        let basePrice = product.price;
        let baseOriginalPrice = product.originalPrice;

        // Apply memory pricing if available
        if (product.memoryOptions && currentMemory) {
            basePrice = product.memoryOptions[currentMemory].price;
            baseOriginalPrice = product.memoryOptions[currentMemory].originalPrice;
        }

        // Apply condition adjustment if available
        if (product.conditionOptions && currentCondition) {
            const adjustment = product.conditionOptions[currentCondition].priceAdjustment || 0;
            basePrice = basePrice + adjustment;
            baseOriginalPrice = baseOriginalPrice + adjustment;
        }

        const priceEl = document.getElementById('product-price');
        const originalPriceEl = document.getElementById('product-original-price');
        if (priceEl) priceEl.textContent = convertPrice(basePrice);
        if (originalPriceEl) originalPriceEl.textContent = convertPrice(baseOriginalPrice);
    }

    // Update product information
    const titleEl = document.getElementById('product-title');
    const subtitleEl = document.getElementById('product-subtitle');
    const discountEl = document.getElementById('product-discount');

    if (titleEl) titleEl.textContent = product.name;
    if (subtitleEl) subtitleEl.textContent = product.subtitle;
    if (discountEl) discountEl.textContent = `-${product.discount}%`;

    updatePricing();

    // Setup condition selection
    const conditionContainer = document.getElementById('condition-selection-container');
    const conditionOptions = document.getElementById('condition-options');

    if (product.conditionOptions && conditionContainer && conditionOptions) {
        conditionContainer.style.display = 'block';

        const conditionTitle = document.createElement('h3');
        conditionTitle.style.cssText = 'font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--secondary-color);';
        conditionTitle.innerHTML = `${translations[currentLanguage].condition || 'Condition'} <span style="color: #ef4444; font-size: 0.9rem;">${translations[currentLanguage].required || '*Required'}</span>`;

        const conditionGuide = document.createElement('div');
        conditionGuide.style.cssText = 'margin-bottom: 1rem; padding: 0.75rem; background: var(--background-light); border-radius: 6px; font-size: 0.875rem; color: var(--text-light);';
        conditionGuide.innerHTML = `
            <i class="fas fa-info-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
            <strong>${translations[currentLanguage].condition_guide || 'Condition Guide:'}</strong> ${translations[currentLanguage].condition_guide_desc || 'Better conditions indicate less wear and superior device appearance.'}
        `;

        conditionContainer.innerHTML = '';
        conditionContainer.appendChild(conditionTitle);
        conditionContainer.appendChild(conditionGuide);

        const optionsContainer = document.createElement('div');
        optionsContainer.id = 'condition-options';
        optionsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;';

        // Add condition options with proper translations
        Object.entries(product.conditionOptions).forEach(([key, condition]) => {
            const conditionOption = document.createElement('div');
            conditionOption.className = `condition-option ${key === currentCondition ? 'selected' : ''}`;
            conditionOption.style.cssText = `
                border: 2px solid ${key === currentCondition ? 'var(--primary-color)' : 'var(--border-color)'};
                border-radius: 8px;
                padding: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                background: ${key === currentCondition ? 'var(--background-light)' : 'white'};
            `;

            const conditionName = translations[currentLanguage][key] || condition.name;
            const conditionDesc = translations[currentLanguage][key + '_desc'] || condition.description;

            conditionOption.innerHTML = `
                <h4 style="margin: 0 0 0.5rem 0; color: var(--secondary-color);">${conditionName}</h4>
                <p style="margin: 0; font-size: 0.875rem; color: var(--text-light);">${conditionDesc}</p>
            `;

            conditionOption.addEventListener('click', function() {
                document.querySelectorAll('.condition-option').forEach(opt => {
                    opt.classList.remove('selected');
                    opt.style.borderColor = 'var(--border-color)';
                    opt.style.background = 'white';
                });
                this.classList.add('selected');
                this.style.borderColor = 'var(--primary-color)';
                this.style.background = 'var(--background-light)';
                currentCondition = key;
                updatePricing();
                validateSelections(product);
            });
            optionsContainer.appendChild(conditionOption);
        });

        conditionContainer.appendChild(optionsContainer);
    }

    // Setup memory selection if available
    const memoryContainer = document.getElementById('memory-selection-container');
    const memoryOptions = document.getElementById('memory-options');

    if (product.memoryOptions && memoryContainer && memoryOptions) {
        memoryContainer.style.display = 'block';

        const memoryTitle = document.createElement('h3');
        memoryTitle.style.cssText = 'font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--secondary-color);';
        memoryTitle.innerHTML = `${translations[currentLanguage].storage || 'Storage'} <span style="color: #ef4444; font-size: 0.9rem;">${translations[currentLanguage].required || '*Required'}</span>`;

        memoryContainer.innerHTML = '';
        memoryContainer.appendChild(memoryTitle);

        const optionsContainer = document.createElement('div');
        optionsContainer.id = 'memory-options';
        optionsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;';

        Object.entries(product.memoryOptions).forEach(([memory, data]) => {
            const memoryOption = document.createElement('div');
            memoryOption.className = `memory-option ${memory === currentMemory ? 'selected' : ''}`;
            memoryOption.textContent = memory;
            memoryOption.style.cssText = `
                padding: 0.75rem 1rem;
                border: 2px solid ${memory === currentMemory ? 'var(--primary-color)' : 'var(--border-color)'};
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                background: ${memory === currentMemory ? 'var(--primary-color)' : 'white'};
                color: ${memory === currentMemory ? 'white' : 'var(--text-color)'};
                font-weight: 600;
                text-align: center;
            `;
            memoryOption.addEventListener('click', function() {
                document.querySelectorAll('.memory-option').forEach(opt => {
                    opt.classList.remove('selected');
                    opt.style.borderColor = 'var(--border-color)';
                    opt.style.background = 'white';
                    opt.style.color = 'var(--text-color)';
                });
                this.classList.add('selected');
                this.style.borderColor = 'var(--primary-color)';
                this.style.background = 'var(--primary-color)';
                this.style.color = 'white';
                currentMemory = memory;
                updatePricing();
                validateSelections(product);
            });
            optionsContainer.appendChild(memoryOption);
        });

        memoryContainer.appendChild(optionsContainer);
    }

    // --- Image and Color Selection Logic ---

    // 1. Determine the initial set of images to display.
    // This logic finds the images for the first variant, or falls back to the product's top-level images.
    let initialImages = [];
    if (product.variants && currentVariant && product.variants[currentVariant]) {
        initialImages = product.variants[currentVariant].images;
    } else if (product.images && product.images.length > 0) {
        initialImages = product.images;
    }

    // 2. Render the initial product images immediately.
    // This ensures images are displayed even if the color selector is not present in the HTML.
    updateProductImages(initialImages);

    // 3. Set up the color selector UI and its event listeners, if the elements exist.
    const colorContainer = document.getElementById('color-selection-container');
    const colorSelect = document.getElementById('product-color-select');

    if (product.variants && colorContainer && colorSelect) {
        colorContainer.style.display = 'block';
        colorSelect.innerHTML = '';
 
        Object.entries(product.variants).forEach(([key, variant]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = variant.name;
            colorSelect.appendChild(option);
        });
 
        if (currentVariant) colorSelect.value = currentVariant;
 
        colorSelect.addEventListener('change', function() {
            currentVariant = this.value;
            const variant = product.variants[currentVariant];
 
            if (variant) {
                // Update images and product title when a new color is selected.
                updateProductImages(variant.images || []);
                const titleEl = document.getElementById('product-title');
                if (titleEl) titleEl.textContent = `${product.name} (${variant.name})`;
                validateSelections(product);
            }
        });
    }

    function updateProductImages(images) {
        const mainImage = document.getElementById('main-product-image');
        const thumbnailContainer = document.getElementById('thumbnail-container');

        // Use a more robust check to ensure `images` is a non-empty array
        if (!Array.isArray(images) || images.length === 0) {
            console.error('No valid images array provided for product. Clearing image containers.');
            if (mainImage) mainImage.src = 'https://via.placeholder.com/400x400?text=No+Image';
            if (thumbnailContainer) thumbnailContainer.innerHTML = '';
            return;
        }

        // Helper to get a higher resolution image from Amazon URLs
        const getHighResImageUrl = (url) => {
            if (typeof url === 'string') {
                // This more generic regex removes various size constraints from Amazon image URLs
                // (e.g., ._AC_SX466_, .__AC_SY300_, ._SL1064_) to request the full-resolution version.
                return url.replace(/\._{1,2}.*?_/, '');
            }
            return url;
        };

        if (mainImage) {
            const highResSrc = getHighResImageUrl(images[0]);
            mainImage.src = highResSrc;
            mainImage.alt = product.name;
            // Defensive styling to ensure the image is large enough and scales properly
            mainImage.style.maxHeight = '500px';
            mainImage.style.width = 'auto';
            mainImage.style.maxWidth = '100%';
            mainImage.style.objectFit = 'contain';
        }

        if (thumbnailContainer) {
            thumbnailContainer.innerHTML = '';
            const fragment = document.createDocumentFragment();

            images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image; // Use original (smaller) image for fast-loading thumbnails
                thumbnail.alt = `${product.name} view ${index + 1}`;
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.loading = 'lazy';
                thumbnail.decoding = 'async';
                // Defensive styling to ensure thumbnails are not too small
                thumbnail.style.width = '80px';
                thumbnail.style.height = '80px';
                thumbnail.style.objectFit = 'contain';
                thumbnail.style.cursor = 'pointer';
                thumbnail.style.display = 'block'; // Ensure visibility, overriding potential CSS issues

                thumbnail.onerror = function() {
                    console.log('Failed to load thumbnail:', image);
                    this.src = 'https://via.placeholder.com/120x120?text=No+Image';
                };

                thumbnail.addEventListener('click', () => {
                    document.querySelectorAll('.thumbnail').forEach(t => {
                        t.classList.remove('active');
                        t.style.borderColor = 'transparent';
                    });
                    thumbnail.classList.add('active');
                    thumbnail.style.borderColor = 'var(--primary-color)';

                    // Update the main product image when a thumbnail is clicked
                    if (mainImage) { // Load the high-resolution version on click
                        mainImage.src = getHighResImageUrl(image);
                    }
                });

                fragment.appendChild(thumbnail);
            });

            thumbnailContainer.appendChild(fragment);
        }
    }

	// ---------------------
// Render Features
// ---------------------
const featuresGrid = document.getElementById('features-grid');
if (featuresGrid) {
    featuresGrid.innerHTML = '';

    if (Array.isArray(product.features)) {
        product.features.forEach(feature => {
            const featureCard = document.createElement('div');
            featureCard.className = 'feature-card';
            featureCard.innerHTML = `
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <div class="feature-title">${feature.title}</div>
                <div class="feature-desc">${feature.desc}</div>
            `;
            featuresGrid.appendChild(featureCard);
        });
    }
}

// ---------------------
// Render Specifications
// ---------------------
const specsGrid = document.getElementById('specifications-grid');
if (specsGrid) {
    specsGrid.innerHTML = '';

    if (product.specifications && typeof product.specifications === 'object') {
        Object.entries(product.specifications).forEach(([label, value]) => {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = `
                <span class="spec-label">${label}:</span>
                <span class="spec-value">${value}</span>
            `;
            specsGrid.appendChild(specItem);
        });

		
    // Setup add to cart functionality
    setupAddToCart(product);
    
    // Initialize cart display
    updateCartDisplay();
    
    // Initialize checkout functionality
    initializeCheckout();

    }
}


    }



// Validation function to check if all required selections are made
function validateSelections(product) {
    const addToCartBtn = document.getElementById('add-to-cart-product');
    if (!addToCartBtn) return false;

    let isValid = true;
    let missingSelections = [];

    // Check if memory selection is required and made
    if (product.memoryOptions && Object.keys(product.memoryOptions).length > 0) {
        if (!currentMemory) {
            isValid = false;
            missingSelections.push('Memory/Storage');
        }
    }

    // Check if condition selection is required and made
    if (product.conditionOptions && Object.keys(product.conditionOptions).length > 0) {
        if (!currentCondition) {
            isValid = false;
            missingSelections.push('Condition');
        }
    }

    // Check if color selection is required and made
    if (product.variants && Object.keys(product.variants).length > 0) {
        if (!currentVariant) {
            isValid = false;
            missingSelections.push('Color');
        }
    }

    // Update button state
    if (isValid) {
        addToCartBtn.disabled = false;
        addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i><span data-translate="add_to_cart">Add to Cart</span>';
        addToCartBtn.style.opacity = '1';
        addToCartBtn.style.cursor = 'pointer';
    } else {
        addToCartBtn.disabled = true;
        addToCartBtn.innerHTML = `<i class="fas fa-exclamation-triangle"></i><span>Select ${missingSelections.join(', ')}</span>`;
        addToCartBtn.style.opacity = '0.6';
        addToCartBtn.style.cursor = 'not-allowed';
    }

    return isValid;
}

// Setup add to cart functionality
function setupAddToCart(product) {
    const quantityDisplay = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const addToCartBtn = document.getElementById('add-to-cart-product');
    const cartItemsContainer = document.getElementById('cart-items');

    if (!quantityDisplay || !decreaseBtn || !increaseBtn || !addToCartBtn || !cartItemsContainer) {
        console.log('Required cart elements not found');
        return;
    }

    // Initial validation
    validateSelections(product);

    decreaseBtn.addEventListener('click', () => {
        const current = parseInt(quantityDisplay.value);
        if (current > 1) {
            quantityDisplay.value = current - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        const current = parseInt(quantityDisplay.value);
        if (current < 10) {
            quantityDisplay.value = current + 1;
        }
    });

    addToCartBtn.addEventListener('click', () => {
        // Validate selections before proceeding
        if (!validateSelections(product)) {
            return;
        }

        const quantity = parseInt(quantityDisplay.value);
        const productId = getProductId();

        // Get current pricing based on selections
        let basePrice = product.price;
        let baseOriginalPrice = product.originalPrice;

        // Apply memory pricing if available
        if (product.memoryOptions && currentMemory) {
            basePrice = product.memoryOptions[currentMemory].price;
            baseOriginalPrice = product.memoryOptions[currentMemory].originalPrice;
        }

        // Apply condition adjustment if available
        if (product.conditionOptions && currentCondition) {
            const adjustment = product.conditionOptions[currentCondition].priceAdjustment || 0;
            basePrice = basePrice + adjustment;
        }

        // Get current variant info
       let productName = product.name;
let productImage = product.images?.[0] || "fallback.jpg";

if (product.variants && currentVariant && product.variants[currentVariant]) {
    const variant = product.variants[currentVariant];
    productName = `${product.name} (${variant.name})`;

    if (variant.images?.[0]) {
        productImage = variant.images[0];
    }
}


        // Add memory and condition info to product name
        if (currentMemory) {
            productName += ` - ${currentMemory}`;
        }
        if (currentCondition && product.conditionOptions) {
            const conditionName = translations[currentLanguage][currentCondition] || product.conditionOptions[currentCondition].name;
            productName += ` - ${conditionName}`;
        }

        // Check if item already exists in cart (including all variants)
        const cartItemId = `${productId}_${currentVariant || 'default'}_${currentMemory || 'default'}_${currentCondition || 'default'}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: cartItemId,
                name: productName,
                price: basePrice,
                image: productImage,
                quantity: quantity
            });
        }

        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count
        updateCartCount();

        // Show feedback
        const originalText = addToCartBtn.innerHTML;
        addToCartBtn.innerHTML = '<i class="fas fa-check"></i> <span>Added to Cart!</span>';
        addToCartBtn.style.background = '#16a34a';

        setTimeout(() => {
            addToCartBtn.innerHTML = originalText;
            addToCartBtn.style.background = '';
        }, 2000);

         // Update cart UI
        updateCartUI();
    });

    // Function to update the cart UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let subtotal = 0;

        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';

            const priceDisplay = convertPrice(item.price * item.quantity, false);
            subtotal += item.price * item.quantity;

            // Check if the item is a free gift (for future promotions)
            const isFreeGift = item.name.toLowerCase().includes('free gift');

            cartItemDiv.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image || 'https://via.placeholder.com/60x60'}" alt="${item.name}" loading="lazy">
                ${isFreeGift ? '<div class="gift-overlay"><i class="fas fa-gift"></i></div>' : ''}
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-controls">
                    ${isFreeGift ? 
                        '<span class="free-gift-badge">FREE GIFT</span>' :
                        `<div class="quantity-controls">
                            <button type="button" data-action="decrease" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button type="button" data-action="increase" data-id="${item.id}">+</button>
                        </div>`
                    }
                    <div class="item-price ${isFreeGift ? 'free-price' : ''}">${priceDisplay}</div>
                    ${isFreeGift ? 
                        '<span class="gift-icon"><i class="fas fa-gift"></i></span>' :
                        `<button type="button" class="remove-item" data-action="remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>`
                    }
                </div>
            </div>
        `;

        // Apply translations to dynamic content
        const giftBadge = cartItemDiv.querySelector('.free-gift-badge');
        if (giftBadge && translations[currentLanguage] && translations[currentLanguage]['free_gift']) {
            giftBadge.textContent = translations[currentLanguage]['free_gift'] || 'FREE GIFT';
        }
            cartItemsContainer.appendChild(cartItemDiv);
        });

        // Update subtotal, shipping, and total
        const subtotalElement = document.getElementById('cart-subtotal');
        const totalElement = document.getElementById('cart-total');

        if (subtotalElement) {
            subtotalElement.textContent = convertPrice(subtotal, false);
        }

        if (totalElement) {
            totalElement.textContent = convertPrice(subtotal, false);
        }
    }

}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems.toString();
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
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

    const existingHandler = cartItems.getAttribute('data-handler-attached');
    if (!existingHandler) {
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

function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.removeEventListener('click', openCheckout);
        checkoutBtn.addEventListener('click', openCheckout);
    }
}

function openCheckout() {
    try {
        if (cart.length === 0) {
            alert(currentLanguage === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty');
            return;
        }

        window.location.href = 'index.html#checkout';
    } catch (error) {
        console.error('Error opening checkout:', error);
        alert('Error opening checkout. Please try again.');
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top of page immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Set initial country display and language
    const currentFlag = document.getElementById('current-flag');
    const currentCountryEl = document.getElementById('current-country');
    const initialConfig = countryConfig[currentCountry];

    if (initialConfig) {
        currentLanguage = initialConfig.lang;

        // Update country display
        if (currentFlag) currentFlag.textContent = initialConfig.flag;
        if (currentCountryEl) currentCountryEl.textContent = initialConfig.name;

        updateLanguage(currentLanguage);
    }

    loadProduct();
    updateCartCount();

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

                    // Update language and prices
                    updateLanguage(currentLanguage);
                    loadProduct(); // Reload product with new currency

                //Fix US pricing
                if (country === 'usa') {
                  currentLanguage = 'en';
                  updateLanguage(currentLanguage);
                }
                    updateCartCount(); // Update cart display
                    countryDropdown.classList.add('hidden');
                }
            });
        });
    }

    // Cart functionality
    const cartButton = document.getElementById('cart-button');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartButton = document.getElementById('close-cart');

    if (cartButton && cartOverlay) {
        cartButton.addEventListener('click', function(e) {
            e.preventDefault();
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeCartButton) {
        closeCartButton.addEventListener('click', function() {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', function(e) {
            if (e.target === cartOverlay) {
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
