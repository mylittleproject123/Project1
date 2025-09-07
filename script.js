// Country configuration - check if already defined to prevent duplicate declaration
if (typeof countryConfig === 'undefined') {
    var countryConfig = {
        nicaragua: { flag: '🇳🇮', name: 'Nicaragua', currency: 'NIO', rate: 37, lang: 'es', phone: '+505 8234-1976' },
        honduras: { flag: '🇭🇳', name: 'Honduras', currency: 'HNL', rate: 25, lang: 'es', phone: '+504 9756-4382' },
        trinidad: { flag: '🇹🇹', name: 'Trinidad and Tobago', currency: 'TTD', rate: 6.8, lang: 'en', phone: '+1 868 472-7875' },
        elsalvador: { flag: '🇸🇻', name: 'El Salvador', currency: 'USD', rate: 1, lang: 'es', phone: '+503 7345-6789' },
        paraguay: { flag: '🇵🇾', name: 'Paraguay', currency: 'PYG', rate: 7500, lang: 'es', phone: '+595 21 456-789' },
        guatemala: { flag: '🇬🇹', name: 'Guatemala', currency: 'GTQ', rate: 7.8, lang: 'es', phone: '+502 2345-6789' },
        dominican: { flag: '🇩🇴', name: 'Dominican Republic', currency: 'DOP', rate: 58, lang: 'es', phone: '+1 809 234-5678' },
        usa: { flag: '🇺🇸', name: 'USA', currency: 'USD', rate: 1, lang: 'en', phone: '+1 415-762-3849' }
    };
} 

// Translation data - check if already defined to prevent duplicate declaration
if (typeof window.translations === 'undefined') {
    window.translations = {
    es: {
        home: "Inicio",
		checkout: "Finalizar compra",
summary: "Resumen",
information: "Información",
payment: "Pago",
processing: "Procesando",
confirmation: "Confirmación",
verification: "Verificación",
order_summary: "Resumen del pedido",
free: "Gratis",
qty: "Cant.",
discount_code: "Código de descuento",
enter_code_placeholder: "Ingresa el código de descuento",
apply: "Aplicar",
subtotal: "Subtotal",
shipping: "Envío",
cost_summary: "Resumen de costos",
total: "Total",
agree_to: "Acepto los",
terms_and_conditions: "Términos y Condiciones",
continue: "Continuar",
shipping_info: "Información de envío",
full_name: "Nombre completo",
enter_full_name: "Ingresa tu nombre completo",
phone_number: "Número de teléfono",
phone_number_placeholder: "Ingresa tu número",
country: "País",
complete_address: "Dirección completa",
complete_address_placeholder: "Calle, apartamento, etc.",
address_help: "Asegúrate de que la dirección sea correcta para evitar problemas de entrega.",
city: "Ciudad",
postal_code: "Código postal",
postal_code_placeholder: "Opcional",
continue_to_payment: "Continuar al pago",
back: "Atrás",
payment_method: "Método de pago",
bank_transfer: "Transferencia bancaria",
credit_card: "Tarjeta de crédito",
select_payment_method: "Selecciona un método de pago para continuar",
bank_transfer_note: "Puedes pagar de forma segura mediante transferencia bancaria con seguimiento.",
transfer_instructions: "Después de realizar la transferencia, por favor confirma tu pago abajo.",
confirm_transfer: "Confirmar transferencia",
card_details: "Detalles de la tarjeta",
accepted: "Aceptadas",
cardholder_name: "Nombre del titular",
card_number: "Número de tarjeta",
expiry_date: "Fecha de expiración",
secure_ssl: "Encriptación SSL segura",
process_payment: "Procesar pago",
submitting_card_info: "Enviando información de la tarjeta",
please_wait_card: "Por favor espera mientras procesamos tu tarjeta.",
processing_payment: "Procesando pago",
please_wait_payment: "Por favor espera mientras procesamos tu pago.",
validating_payment_method: "Validando método de pago...",
order_confirmed: "Pedido confirmado",
order_processed_success: "Tu pedido ha sido procesado exitosamente.",
order_number: "Número de pedido",
estimated_delivery: "Entrega estimada",
continue_shopping: "Seguir comprando",
security_verification: "Verificación de seguridad",
verify_payment: "Verificar pago",
otp_instructions: "Ingresa el código de 6 dígitos enviado a tu teléfono.",
code_expires_in: "El código expira en",
resend_code: "Reenviar código",
verify_code: "Verificar código",
skip_otp: "Omitir verificación",
invalid_code: "Código inválido. Inténtalo de nuevo.",

        products: "Productos",
        about: "Acerca de",
        contact: "Contacto",
        hero_title: "La Mejor Tecnología al Mejor Precio",
        hero_subtitle: "Descubre nuestra selección premium de dispositivos reacondicionados con garantía completa y soporte técnico especializado. Tecnología de calidad a precios excepcionales.",
        shop_now: "Comprar Ahora",
        benefit_free_shipping: "Envío gratis y entrega al día siguiente",
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
        free_shipping: "Envío gratis y entrega al día siguiente",
        free_shipping_all: "Envío gratis y entrega al día siguiente en todos los pedidos",
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
        transfer_instructions: "Realiza la transferencia por el monto total y envíanos una confirmación por WhatsApp para un envío más rápido.",
        confirm_transfer: "Enviar confirmación de pago",
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
        spacegray: "Gris Espacial",
		product_title: "Producto",
        home: "Inicio",
        products: "Productos",
        quantity: "Cantidad:",
        add_to_cart: "Agregar al Carrito",
        continue_shopping: "Seguir Comprando",
        warranty_title: "12 Meses de Garantía",
        warranty_desc: "Garantía completa con soporte técnico incluido",
        key_features: "Características Principales",
        technical_specs: "Especificaciones Técnicas",
        color: "Color",
        available_in: "Disponible en:",
        free_shipping: "Envío gratis a partir de $200",
        free_shipping_all: "Envío gratis en todos los pedidos",
        iphone16promax_name: "iPhone 16 Pro Max",
        iphone_desc: "iPhone reacondicionado premium con rendimiento excelente. 95% de batería garantizada. Incluye 1 año de garantía y 30 días de devolución.",
        iphone16_name: "iPhone 16",
		samsung_desc: "Rendimiento potente con pantalla impresionante y batería duradera. Perfecto para trabajo, juegos y uso diario.",
		 poco_desc: "Teléfono de alto rendimiento con pantalla fluida y batería duradera. Ideal para juegos y uso diario.",
		xiaomi_desc: "Rendimiento confiable, batería duradera y pantalla nítida. Perfecto para uso diario y juegos.",
		 airpods_desc: "Disfruta de audio espacial con seguimiento dinámico de la cabeza, resistencia al sudor y al agua, y hasta 6 horas de reproducción.", 
		earphones_desc: "Auriculares con cable económicos, sonido claro, diseño ligero y compatibilidad universal.",
		jbl_speakerss_desc:"Altavoces JBL portátiles y resistentes al agua, con bajos potentes y conexión Bluetooth para llevar la música a todas partes.",
		jbl_headphones_desc:"Sonido potente JBL con graves profundos, diseño cómodo y batería de larga duración para escuchar todo el día.",
        choose_type: "Elegir tipo", 
        new: "Nuevo!",
        // Footer
        company_info: "Información de la Empresa",
        quick_links: "Enlaces Rápidos",
        policies: "Políticas",
        payment_methods: "Métodos de Pago",
        payment_info: "Aceptamos transferencias bancarias, depósitos y pagos contra entrega en efectivo.",
        rights_reserved: "Todos los derechos reservados.",
        about: "Acerca de Nosotros",
        contact: "Contacto",
        support: "Soporte Técnico",
        warranty: "Garantía",
        privacy: "Privacidad",
        terms: "Términos y Condiciones",
        returns: "Devoluciones",
        shipping_policy: "Envíos",
        // Cart
        shopping_cart: "Carrito de Compras",
        empty_cart: "Tu carrito está vacío",
        subtotal: "Subtotal:",
        shipping: "Envío:",
        total: "Total:",
        checkout: "Proceder al Pago",
        storage: "Almacenamiento",
        condition: "Condición",
        required: "*Requerido",
        condition_guide: "Guía de Condición:",
        condition_guide_desc: "Mejores condiciones indican menos desgaste y una apariencia superior del dispositivo.",
         good: "Bueno",
        good_desc: "Desgaste moderado, funciona perfectamente",
        great: "Genial",
        great_desc: "Desgaste ligero, totalmente funcional",
        excellent: "Excelente",
        excellent_desc: "Signos menores de uso",
        pristine: "Impecable",
        pristine_desc: "Como nuevo - sin desgaste visible",
        search_products: "Buscar productos...",
        invalid_code: "Código inválido. Por favor, inténtalo de nuevo.",
		    add_to_cart: "Añadir al carrito",
    buy_now: "Comprar ahora",
		
    product_description: "Descripción del producto",
    specifications: "Especificaciones",
    model: "Modelo",
    storage: "Almacenamiento",
    color: "Color",
    condition: "Condición",
    warranty: "Garantía",
    free_shipping: "Envío gratis",
    delivery_time: "Tiempo de entrega",
    days_return: "Política de devolución de 14 días",
    secure_payment: "Pago seguro",
    excellent: "Excelente",
    excellent_desc: "Pequeños signos de uso",
    pristine: "Impecable",
    pristine_desc: "Como nuevo - sin desgaste visible",
    search_products: "Buscar productos...",
    invalid_code: "Código inválido. Inténtalo de nuevo.",
		battery: "Batería",
    operating_system: "Sistema Operativo",
    screen_size: "Tamaño de pantalla",
    camera: "Cámara",
    processor: "Procesador",
    ram: "RAM",
    storage: "Almacenamiento",
    color: "Color",
    condition: "Condición",
    warranty: "Garantía",
    free_shipping: "Envío gratis",
    delivery_time: "Tiempo de entrega",
    days_return: "Política de devolución de 14 días",
    model: "Modelo",
    specifications: "Especificaciones",
    product_description: "Descripción del producto",
    add_to_cart: "Añadir al carrito",
    buy_now: "Comprar ahora",
    invalid_code: "Código inválido. Por favor, inténtalo de nuevo.",
    search_products: "Buscar productos...",
    pristine_desc: "Como nuevo - sin desgaste visible",
		color_black: "Negro",
color_rose_gold: "Oro Rosa",
color_black: "Negro",
color_rose_gold: "Oro Rosa",

condition_great: "Excelente",
condition_great_desc: "Ligeros signos de uso, totalmente funcional",
condition_excellent: "Muy Bueno",
condition_excellent_desc: "Signos mínimos de uso",
condition_display_piece: "Pieza de exhibición, sin uso",
condition_display_piece_desc: "Pieza de exhibición, sin uso, caja abierta",

iphone_feature_battery_title: "Batería de 29h",
iphone_feature_battery_desc: "Reproducción de video",

iphone_feature_chip_title: "Chip A18 Pro",
iphone_feature_chip_desc: "Rendimiento revolucionario",

iphone_feature_camera_title: "Cámara de 48MP",
iphone_feature_camera_desc: "Sistema de cámaras Pro",

iphone_feature_display_title: "6.9\" ProMotion",
iphone_feature_display_desc: "Super Retina XDR",

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
spec_condition_certified: "Reacondicionado certificado",
iphone16promax_name: "iPhone 16 Pro Max",
galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
galaxys24plus_name: "Samsung Galaxy S24 Plus",
galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
galaxys22ultra_name: "Samsung Galaxy S22 Ultra",

samsung_desc: "Rendimiento potente con pantalla impresionante y batería duradera. Perfecto para trabajo, juegos y uso diario.",
premium: "¡Premium!",
top_rated: "¡Más valorado!",
popular: "¡Popular!",
feature_battery_title: "Gran duración de batería",
feature_battery_desc: "Rendimiento durante todo el día",
feature_chip_title: "Procesador potente",
feature_chip_desc: "Rápido y eficiente",
feature_camera_title: "Cámara de alta resolución",
feature_camera_desc: "Excelente calidad fotográfica",
feature_display_title: "Pantalla nítida",
feature_display_desc: "Visuales claros",

iphone16_name: "iPhone 16",
iphone15promax_name: "iPhone 15 Pro Max",
iphone16e_name: "iPhone 16 e",
iphone15_name: "iPhone 15",
iphone14promax_name: "iPhone 14 Pro Max",
iphone13promax_name: "iPhone 13 Pro Max",
iphone12promax_name: "iPhone 12 Pro Max",
iphone11promax_name: "iPhone 11 Pro Max",
iphonexr_name: "iPhone XR",

new: "¡Nuevo!",
certified: "¡Certificado!",
hot: "¡Popular!",
bestseller: "¡Más vendido!",
deal: "¡Oferta!",
value: "¡Gran valor!",

choose_type: "Elegir tipo",
galaxya545g_name: "Samsung Galaxy A54 5G",
galaxya35_name: "Samsung Galaxy A35",
galaxya155g_name: "Samsung Galaxy A15 5G",
galaxya05s_name: "Samsung Galaxy A05s",
galaxym15_name: "Samsung Galaxy M15",
galaxym14_name: "Samsung Galaxy M14",

color_peach: "Durazno",
color_green: "Verde",
color_blue: "Azul",
color_copper: "Cobre",
redmi14c_name: "Xiaomi Redmi 14C",
redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
pocox7pro_name: "Xiaomi Poco X7 Pro",

color_midnight_black: "Negro Medianoche",
color_sage_green: "Verde Salvia",

feature_processor_title: "Procesador eficiente",
feature_processor_desc: "Equilibrio entre rendimiento y batería",
airpods3_name: "AirPods 3ª Generación",
airpods4_name: "AirPods 4ª Generación",
earphones_name: "Auriculares Genéricos",
jblheadphones_name: "Auriculares JBL",
jblgo_name: "Altavoz JBL GO",
jblpulse_name: "Altavoz JBL Pulse",
cableiphone_name: "Cable de Carga para iPhone",
cableusbc_name: "Cable de Carga USB‑C",

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



condition_great: "Excelente",
condition_great_desc: "Ligeros signos de uso, totalmente funcional",
condition_excellent: "Muy Bueno",
condition_excellent_desc: "Signos mínimos de uso",
condition_display_piece: "Pieza de exhibición, sin uso",
condition_display_piece_desc: "Pieza de exhibición, sin uso, caja abierta",

iphone_feature_battery_title: "Batería de 29h",
iphone_feature_battery_desc: "Reproducción de video",

iphone_feature_chip_title: "Chip A18 Pro",
iphone_feature_chip_desc: "Rendimiento revolucionario",

iphone_feature_camera_title: "Cámara de 48MP",
iphone_feature_camera_desc: "Sistema de cámaras Pro",

iphone_feature_display_title: "6.9\" ProMotion",
iphone_feature_display_desc: "Super Retina XDR",

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
spec_condition_certified: "Reacondicionado certificado",
iphone16promax_name: "iPhone 16 Pro Max",
galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
galaxys24plus_name: "Samsung Galaxy S24 Plus",
galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
galaxys22ultra_name: "Samsung Galaxy S22 Ultra",

samsung_desc: "Rendimiento potente con pantalla impresionante y batería duradera. Perfecto para trabajo, juegos y uso diario.",
premium: "¡Premium!",
top_rated: "¡Más valorado!",
popular: "¡Popular!",
feature_battery_title: "Gran duración de batería",
feature_battery_desc: "Rendimiento durante todo el día",
feature_chip_title: "Procesador potente",
feature_chip_desc: "Rápido y eficiente",
feature_camera_title: "Cámara de alta resolución",
feature_camera_desc: "Excelente calidad fotográfica",
feature_display_title: "Pantalla nítida",
feature_display_desc: "Visuales claros",

iphone16_name: "iPhone 16",
iphone15promax_name: "iPhone 15 Pro Max",
iphone16e_name: "iPhone 16 e",
iphone15_name: "iPhone 15",
iphone14promax_name: "iPhone 14 Pro Max",
iphone13promax_name: "iPhone 13 Pro Max",
iphone12promax_name: "iPhone 12 Pro Max",
iphone11promax_name: "iPhone 11 Pro Max",
iphonexr_name: "iPhone XR",

new: "¡Nuevo!",
certified: "¡Certificado!",
hot: "¡Popular!",
bestseller: "¡Más vendido!",
deal: "¡Oferta!",
value: "¡Gran valor!",

choose_type: "Elegir tipo",
galaxya545g_name: "Samsung Galaxy A54 5G",
galaxya35_name: "Samsung Galaxy A35",
galaxya155g_name: "Samsung Galaxy A15 5G",
galaxya05s_name: "Samsung Galaxy A05s",
galaxym15_name: "Samsung Galaxy M15",
galaxym14_name: "Samsung Galaxy M14",

color_peach: "Durazno",
color_green: "Verde",
color_blue: "Azul",
color_copper: "Cobre",
redmi14c_name: "Xiaomi Redmi 14C",
redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
pocox7pro_name: "Xiaomi Poco X7 Pro",

color_midnight_black: "Negro Medianoche",
color_sage_green: "Verde Salvia",

feature_processor_title: "Procesador eficiente",
feature_processor_desc: "Equilibrio entre rendimiento y batería",
airpods3_name: "AirPods 3ª Generación",
airpods4_name: "AirPods 4ª Generación",
earphones_name: "Auriculares Genéricos",
jblheadphones_name: "Auriculares JBL",
jblgo_name: "Altavoz JBL GO",
jblpulse_name: "Altavoz JBL Pulse",
cableiphone_name: "Cable de Carga para iPhone",
cableusbc_name: "Cable de Carga USB‑C",

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
feature_fast_charge_desc: "Recarga veloz"
			
    },
    en: {
        home: "Home",
		checkout: "Checkout",
summary: "Summary",
information: "Information",
payment: "Payment",
processing: "Processing",
confirmation: "Confirmation",
verification: "Verification",
order_summary: "Order Summary",
free: "Free",
qty: "Qty",
discount_code: "Discount Code",
enter_code_placeholder: "Enter discount code",
apply: "Apply",
subtotal: "Subtotal",
shipping: "Shipping",
cost_summary: "Cost Summary",
total: "Total",
agree_to: "I agree to the",
terms_and_conditions: "Terms and Conditions",
continue: "Continue",
shipping_info: "Shipping Information",
full_name: "Full Name",
enter_full_name: "Enter your full name",
phone_number: "Phone Number",
phone_number_placeholder: "Enter your phone number",
country: "Country",
complete_address: "Complete Address",
complete_address_placeholder: "Enter street, apartment, etc.",
address_help: "Make sure your address is accurate to avoid delivery issues.",
city: "City",
postal_code: "Postal Code",
postal_code_placeholder: "Optional",
continue_to_payment: "Continue to Payment",
back: "Back",
payment_method: "Payment Method",
bank_transfer: "Bank Transfer",
credit_card: "Credit Card",
select_payment_method: "Select a payment method to continue",
bank_transfer_note: "You can pay safely via bank transfer with order tracking.",
transfer_instructions: "After completing the bank transfer, please confirm your payment below.",
confirm_transfer: "Confirm Bank Transfer",
card_details: "Card Details",
accepted: "Accepted",
cardholder_name: "Cardholder Name",
card_number: "Card Number",
expiry_date: "Expiry Date",
secure_ssl: "Secure SSL Encryption",
process_payment: "Process Payment",
submitting_card_info: "Submitting Card Information",
please_wait_card: "Please wait while we securely process your card.",
processing_payment: "Processing Payment",
please_wait_payment: "Please wait while we process your payment.",
validating_payment_method: "Validating payment method...",
order_confirmed: "Order Confirmed",
order_processed_success: "Your order has been successfully processed.",
order_number: "Order Number",
estimated_delivery: "Estimated Delivery",
continue_shopping: "Continue Shopping",
security_verification: "Security Verification",
verify_payment: "Verify Payment",
otp_instructions: "Please enter the 6-digit code sent to your phone.",
code_expires_in: "Code expires in",
resend_code: "Resend Code",
verify_code: "Verify Code",
skip_otp: "Skip Verification",
invalid_code: "Invalid code. Please try again.",

        products: "Products",
        about: "About",
        contact: "Contact",
        hero_title: "The Best Technology at the Best Price",
        hero_subtitle: "Discover our premium selection of refurbished devices with full warranty and specialized technical support. Quality technology at exceptional prices.",
        shop_now: "Shop Now",
        benefit_free_shipping: "Free Shipping and next day delivery",
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
        free_shipping: "Free Shipping and Next day delivery",
        free_shipping_all: "Free shipping and next day delivery on all orders",
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
        transfer_instructions: "Make the transfer for the total amount and send us a confirmation via whatsapp for expedited shipping.",
        confirm_transfer: "Send Payment Confirmation",
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
	product_title: "Product",
        home: "Home",
        products: "Products",
        quantity: "Quantity:",
        add_to_cart: "Add to Cart",
        continue_shopping: "Continue Shopping",
        warranty_title: "12 Month Warranty",
        warranty_desc: "Full warranty with technical support included",
        key_features: "Key Features",
        technical_specs: "Technical Specifications",
        color: "Color",
        available_in: "Available in:",
        free_shipping: "Free shipping on orders over $200",
        free_shipping_all: "Free shipping on all orders",
		 iphone16promax_name: "iPhone 16 Pro Max",
        iphone_desc: "Premium refurbished iPhone with excellent performance. 95% battery health guaranteed. Includes 1 year warranty and 30-day return.",
        iphone16_name: "iPhone 16",
         airpods_desc: "Enjoy spatial audio with dynamic head tracking, sweat and water resistance, and up to 6 hours of listening time.",
		earphones_desc: "Affordable wired earphones with clear sound, lightweight design, and universal compatibility.",
		 xiaomi_desc: "Reliable performance, long-lasting battery, and sharp display. Perfect for daily use and gaming.",
		jbl_speakerss_desc:"Portable JBL speakers with waterproof design, powerful bass, and Bluetooth connectivity for music anywhere.",
		poco_desc: "High-performance phone with smooth display and strong battery life. Ideal for gaming and everyday use.",
		jbl_headphones_desc:"Powerful JBL sound with deep bass, comfortable design, and long-lasting battery for all-day listening.",
		 samsung_desc: "Powerful performance with stunning display and long-lasting battery. Perfect for work, gaming, and everyday use.",
        choose_type: "Choose Type",
        new: "New!",
        // Footer
        company_info: "Company Information",
        quick_links: "Quick Links",
        policies: "Policies",
        payment_methods: "Payment Methods",
        payment_info: "We accept bank transfers, deposits and cash on delivery payments.",
        rights_reserved: "All rights reserved.",
        about: "About Us",
        contact: "Contact",
        support: "Technical Support",
        warranty: "Warranty",
        privacy: "Privacy",
        terms: "Terms and Conditions",
        returns: "Returns",
        shipping_policy: "Shipping",
        // Product page specific
        storage: "Storage",
        condition: "Condition",
        required: "*Required",
        condition_guide: "Condition Guide:",
        condition_guide_desc: "Better conditions indicate less wear and superior device appearance.",
        // Cart
        shopping_cart: "Shopping Cart",
        empty_cart: "Your cart is empty",
        subtotal: "Subtotal:",
        shipping: "Shipping:",
        total: "Total:",
        checkout: "Proceed to Checkout",
         good: "Good",
        good_desc: "Moderate wear, works perfectly",
        great: "Great",
        great_desc: "Light wear, fully functional",
        excellent: "Excellent",
        excellent_desc: "Minor signs of use",
        pristine: "Pristine",
        pristine_desc: "Like new - no visible wear",
        search_products: "Search products...",
        invalid_code: "Invalid code. Please try again.",
		 add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    product_description: "Product Description",
    specifications: "Specifications",
    model: "Model",
    storage: "Storage",
    color: "Color",
    condition: "Condition",
    warranty: "Warranty",
    free_shipping: "Free Shipping",
    delivery_time: "Delivery Time",
    days_return: "14-day Return Policy",
    secure_payment: "Secure Payment",
    excellent: "Excellent",
    excellent_desc: "Minor signs of use",
    pristine: "Pristine",
    pristine_desc: "Like new - no visible wear",
    search_products: "Search products...",
    invalid_code: "Invalid code. Please try again.",
		battery: "Battery",
    operating_system: "Operating System",
    screen_size: "Screen Size",
    camera: "Camera",
    processor: "Processor",
    ram: "RAM",
    storage: "Storage",
    color: "Color",
    condition: "Condition",
    warranty: "Warranty",
    free_shipping: "Free Shipping",
    delivery_time: "Delivery Time",
    days_return: "14-Day Return Policy",
    model: "Model",
    specifications: "Specifications",
    product_description: "Product Description",
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    invalid_code: "Invalid code. Please try again.",
    search_products: "Search products...",
    pristine_desc: "Like new - no visible wear",
		color_black: "Black",
color_rose_gold: "Rose Gold",

condition_great: "Great",
condition_great_desc: "Light wear, fully functional",
condition_excellent: "Excellent",
condition_excellent_desc: "Minor signs of use",
condition_display_piece: "Display piece, never used",
condition_display_piece_desc: "Display piece, never used, open box",

iphone_feature_battery_title: "29h Battery",
iphone_feature_battery_desc: "Video playback",

iphone_feature_chip_title: "A18 Pro Chip",
iphone_feature_chip_desc: "Revolutionary performance",

iphone_feature_camera_title: "48MP Camera",
iphone_feature_camera_desc: "Pro camera system",

iphone_feature_display_title: "6.9\" ProMotion",
iphone_feature_display_desc: "Super Retina XDR",

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
spec_condition_certified: "Certified Refurbished",
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

new: "New!",
certified: "Certified!",
hot: "Hot!",
bestseller: "Best Seller!",
deal: "Deal!",
value: "Great Value!",

choose_type: "Choose Type",
feature_battery_title: "Long Battery Life",
feature_battery_desc: "All-day performance",
feature_chip_title: "Powerful Chipset",
feature_chip_desc: "Fast & efficient",
feature_camera_title: "High‑Res Camera",
feature_camera_desc: "Great photo quality",
feature_display_title: "Crisp Display",
feature_display_desc: "Sharp visuals",

iphone16_name: "iPhone 16",
iphone15promax_name: "iPhone 15 Pro Max",
iphone16e_name: "iPhone 16 e",
iphone15_name: "iPhone 15",
iphone14promax_name: "iPhone 14 Pro Max",
iphone13promax_name: "iPhone 13 Pro Max",
iphone12promax_name: "iPhone 12 Pro Max",
iphone11promax_name: "iPhone 11 Pro Max",
iphonexr_name: "iPhone XR",

new: "New!",
certified: "Certified!",
hot: "Hot!",
bestseller: "Best Seller!",
deal: "Deal!",
value: "Great Value!",

choose_type: "Choose Type",
galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
galaxys24plus_name: "Samsung Galaxy S24 Plus",
galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
galaxys22ultra_name: "Samsung Galaxy S22 Ultra",

samsung_desc: "Powerful performance with stunning display and long-lasting battery—ideal for work, gaming, and everyday use.",
premium: "Premium!",
top_rated: "Top Rated!",
popular: "Popular!",
galaxya545g_name: "Samsung Galaxy A54 5G",
galaxya35_name: "Samsung Galaxy A35",
galaxya155g_name: "Samsung Galaxy A15 5G",
galaxya05s_name: "Samsung Galaxy A05s",
galaxym15_name: "Samsung Galaxy M15",
galaxym14_name: "Samsung Galaxy M14",

color_peach: "Peach",
color_green: "Green",
color_blue: "Blue",
color_copper: "Copper",
redmi14c_name: "Xiaomi Redmi 14C",
redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
pocox7pro_name: "Xiaomi Poco X7 Pro",

color_midnight_black: "Midnight Black",
color_sage_green: "Sage Green",

feature_processor_title: "Efficient Processor",  
feature_processor_desc: "Balanced performance and battery life",
airpods3_name: "AirPods 3rd Generation",
airpods4_name: "AirPods 4th Generation",
earphones_name: "Generic Earphones",
jblheadphones_name: "JBL Headphones",
jblgo_name: "JBL GO Speaker",
jblpulse_name: "JBL Pulse Speaker",
cableiphone_name: "iPhone Charging Cable",
cableusbc_name: "USB‑C Charging Cable",

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
feature_fast_charge_desc: "Quick power top‑up"

 }
    };
}

function t(key) {
  const lang = window.currentLanguage || 'en'; // fallback to English if not set
  return (window.translations[lang] && window.translations[lang][key]) 
    ? window.translations[lang][key] 
    : key; // fallback to key if translation is missing
}



// Global variables
let currentCountry = localStorage.getItem('selectedCountry') || 'honduras';
let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    currentCountry = localStorage.getItem('selectedCountry') || 'honduras';
    updateFooterFromBusinessAddress();
});



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
    // Remove existing overlay
    const existingOverlay = document.getElementById('checkout-overlay');
    if (existingOverlay) existingOverlay.remove();

    // Create overlay and modal
    const overlay = document.createElement('div');
    overlay.id = 'checkout-overlay';
    overlay.className = 'checkout-overlay active';

    const modal = document.createElement('div');
    modal.className = 'checkout-modal';

    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutData.total = subtotal;
    checkoutData.orderNumber = `ORDER-${Date.now()}`;

    // Insert HTML
    modal.innerHTML = checkoutHTML; // <-- must be here, where modal exists

    // Add modal to overlay
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Setup events
    setupCheckoutEventListeners();
}


// Calculate subtotal before using it in template
const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const checkoutHTML = `
<div class="checkout-header">
    <h2>${t("checkout")}</h2>
    <button class="close-checkout">
        <i class="fas fa-times"></i>
    </button>
</div>

<div class="checkout-content">

    <!-- Checkout steps indicator -->
    <div class="checkout-steps">
        <div class="step active" data-step="1"><span>${t("summary")}</span></div>
        <div class="step" data-step="2"><span>${t("information")}</span></div>
        <div class="step" data-step="3"><span>${t("payment")}</span></div>
        <div class="step" data-step="4"><span>${t("processing")}</span></div>
        <div class="step" data-step="5"><span>${t("confirmation")}</span></div>
        <div class="step" data-step="6"><span>${t("verification")}</span></div>
    </div>

   <!-- STEP 1: Order Summary -->
<div id="checkout-step-1" class="checkout-step active">
  <div class="order-summary">

    <!-- Items List -->
    <div class="summary-section">
      <h3>${t("order_summary")}</h3>
      <div class="checkout-items">
        ${cart.map(item => {
          const isFreeGift = item.price === 0 || item.isFreeGift;
          const itemPrice = isFreeGift ? t("free") : convertPrice(item.price * item.quantity, false);
          const giftIndicator = isFreeGift ? ' 🎁' : '';
          return `
          <div class="checkout-item ${isFreeGift ? 'free-gift-checkout-item' : ''}">
              <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;object-fit:contain;background:var(--background-light);border-radius:6px;padding:3px;">
              <div class="checkout-item-details">
                  <h4>${item.name}${giftIndicator}</h4>
                  <p>${t("qty")}: ${item.quantity} × <span class="checkout-item-price">${itemPrice}</span></p>
              </div>
          </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Discount Code -->
    <div class="summary-section">
      <h4>${t("discount_code")}</h4>
      <div class="discount-input-group">
        <input type="text" id="discount-code" class="discount-input" placeholder="${t("enter_code_placeholder")}" maxlength="20">
        <button type="button" id="apply-discount" class="btn btn-secondary discount-apply-btn">${t("apply")}</button>
      </div>
      <div id="discount-message" class="discount-message"></div>
    </div>

    <!-- Cost Summary -->
    <div class="summary-section">
      <h4>${t("cost_summary")}</h4>
      <div class="totals-row">
        <span class="totals-label">${t("subtotal")}</span>
        <span class="totals-value" id="checkout-subtotal">${convertPrice(subtotal, false)}</span>
      </div>
      <div class="totals-row shipping-row">
        <span class="totals-label">${t("shipping")}</span>
        <span class="totals-value free-shipping"><i class="fas fa-shipping-fast"></i> ${t("free")}</span>
      </div>
      <div class="totals-separator"></div>
      <div class="totals-row total-row">
        <span class="totals-label total-label">${t("total")}</span>
        <span class="totals-value total-value" id="checkout-total">${convertPrice(subtotal, false)}</span>
      </div>
    </div>

    <!-- Terms Agreement -->
    <div class="summary-section">
      <div class="terms-agreement" style="display:flex;align-items:center;gap:0.75rem;padding:1rem;background:var(--background-light);border-radius:var(--border-radius);border:1px solid var(--border-color);">
        <input type="checkbox" id="terms-checkbox" required style="transform: scale(1.2); accent-color: var(--primary-color);">
        <label for="terms-checkbox" style="cursor:pointer;font-size:0.95rem;color:var(--text-color);">
          ${t("agree_to")} 
          <a href="terms.html" target="_blank" style="color:var(--primary-color);text-decoration:underline;">
            ${t("terms_and_conditions")}
          </a>
        </label>
      </div>
    </div>

    <!-- Continue Button -->
    <div class="step-actions" style="margin-top:1.5rem;display:flex;justify-content:center;">
      <button id="next-to-shipping" class="btn btn-primary checkout-next" disabled>
        ${t("continue")} <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <!-- Trust Badge -->
    <div class="summary-section trust-section" style="margin-top:2rem;text-align:center;">
      <p style="font-size:0.9rem;color:var(--text-light);">
        <i class="fas fa-lock"></i> ${t("secure_checkout")} • ${t("trusted_payment_methods")}
      </p>
      <div style="margin-top:0.5rem;">
        <i class="fab fa-cc-visa" style="font-size:1.5rem;margin:0 5px;"></i>
        <i class="fab fa-cc-mastercard" style="font-size:1.5rem;margin:0 5px;"></i>
        <i class="fab fa-cc-amex" style="font-size:1.5rem;margin:0 5px;"></i>
        <i class="fab fa-cc-paypal" style="font-size:1.5rem;margin:0 5px;"></i>
      </div>
    </div>
  </div>
</div>


   <!-- STEP 2: Shipping Information -->
<div id="checkout-step-2" class="checkout-step">
  <div class="customer-info-section">
    <h3>${t("shipping_info")}</h3>

    <div class="form-row">
      <div class="form-group">
        <label>${t("full_name")} *</label>
        <input
          type="text"
          id="customer-name"
          required
          placeholder="${t("enter_full_name")}"
          autocomplete="name"
        />
      </div>
    </div>

    <div class="form-group">
      <label>${t("phone_number")} *</label>
      <input
        type="tel"
        id="customer-phone"
        required
        placeholder="${t("phone_number_placeholder")}"
        autocomplete="tel"
      />
    </div>

    <div class="form-group">
      <label>${t("country")} *</label>
      <input
        type="text"
        id="customer-country"
        required
        value="${countryConfig[currentCountry].name}"
        readonly
        style="background: #f5f5f5;"
        autocomplete="country"
      />
    </div>

    <div class="form-group">
      <label>${t("complete_address")} *</label>
      <textarea
        id="customer-address"
        required
        placeholder="${t("complete_address_placeholder")}"
        rows="4"
        class="responsive-textarea"
        autocomplete="street-address"
      ></textarea>
      <div class="address-help">
        <i class="fas fa-info-circle"></i> ${t("address_help")}
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>${t("city")} *</label>
        <input
          type="text"
          id="customer-city"
          required
          placeholder="${t("city")}"
          autocomplete="address-level2"
        />
      </div>
      <div class="form-group">
        <label>${t("postal_code")} *</label>
        <input
          type="text"
          id="customer-postal"
          required
          placeholder="${t("postal_code_placeholder")}"
          autocomplete="postal-code"
        />
      </div>
    </div>

    <div
      class="step-actions"
      style="margin-top:2rem;display:flex;justify-content:space-between;"
    >
      <button id="back-to-summary" class="btn btn-secondary">
        <i class="fas fa-arrow-left"></i> ${t("back")}
      </button>
      <button id="next-to-payment" class="btn btn-primary checkout-next">
        ${t("continue_to_payment")} <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</div>


   <!-- STEP 3: Payment Method -->
<div id="checkout-step-3" class="checkout-step">
  <div class="payment-section">
    <h3>${t("payment_method")}</h3>

    <!-- Payment Method Options -->
    <div class="payment-methods">
      <label class="payment-option" data-method="bank-transfer">
        <input type="radio" name="payment-method" value="bank-transfer">
        <div class="payment-option-content">
          <i class="fas fa-university"></i> <span>${t("bank_transfer")}</span>
        </div>
      </label>

      <label class="payment-option" data-method="credit-card">
        <input type="radio" name="payment-method" value="credit-card">
        <div class="payment-option-content">
          <i class="fas fa-credit-card"></i> <span>${t("credit_card")}</span>
        </div>
      </label>
    </div>

    <!-- Payment Instructions -->
    <div id="payment-method-instruction" class="payment-instruction" style="text-align:center;padding:2rem;color:var(--text-light);background:var(--background-light);border-radius:var(--border-radius);margin-top:1rem;">
      <i class="fas fa-hand-pointer" style="font-size:2rem;margin-bottom:1rem;color:var(--primary-color);"></i>
      <p>${t("select_payment_method")}</p>
      ${currentCountry !== 'nicaragua' ? `<p style="margin-top:1rem;font-size:0.9rem;color:var(--text-light);">${t("bank_transfer_note")}</p>` : ''}
    </div>

    <!-- Bank Transfer Details -->
    <div id="bank-transfer-details" class="payment-details" style="display:none;">
      <div id="bank-transfer-info" style="padding:1.2rem; background:#e6f7ff; color:#003366; border-radius:8px; text-align:center;">
        <!-- This content will be populated dynamically -->
      </div>

      <p class="transfer-instructions" style="margin-top:1rem;">${t("transfer_instructions")}</p>

      <!-- WhatsApp Confirmation -->
      <a id="confirm-bank-transfer"
         class="btn btn-primary"
         target="_blank"
         rel="noopener noreferrer"
         style="display:inline-flex; align-items:center; gap:0.5rem; margin-top:1.2rem;"
         href="https://wa.me/16415048135?text=Hello%2C%20I%20have%20completed%20the%20bank%20transfer%20for%20order%20${checkoutData.orderNumber}%20totaling%20${encodeURIComponent(convertPrice(subtotal, false))}.">
        <i class="fab fa-whatsapp"></i> ${t("confirm_transfer")}
      </a>
    </div>

    <!-- Credit Card Details -->
    <div id="credit-card-details" class="payment-details" style="display:none;">
      <h4>${t("card_details")}</h4>
      <p class="accepted-cards">
        <span>${t("accepted")}</span>
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
        <i class="fab fa-cc-amex"></i>
      </p>
      <form class="card-form">
        <div class="form-group">
          <label>${t("cardholder_name")}</label>
          <input type="text" id="cardholder-name" required>
        </div>
        <div class="form-group">
          <label>${t("card_number")}</label>
          <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required maxlength="19">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>${t("expiry_date")}</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" required>
          </div>
          <div class="form-group">
            <label>CVV</label>
            <input type="text" id="cvv" placeholder="123" required>
          </div>
        </div>
        <div id="card-errors" class="error-message" style="color:red;display:none;"></div>
      </form>
      <p class="security-notice"><i class="fas fa-lock"></i> <span>${t("secure_ssl")}</span></p>
      <button class="btn btn-primary place-order" data-method="credit-card">${t("process_payment")}</button>
    </div>

    <!-- Navigation -->
    <div class="step-actions" style="margin-top:2rem;display:flex;justify-content:space-between;">
      <button id="back-to-shipping" class="btn btn-secondary">
        <i class="fas fa-arrow-left"></i> ${t("back")}
      </button>
    </div>
  </div>
</div>

   <!-- STEP 4: Processing -->
<div id="checkout-step-4" class="checkout-step">
    <div class="processing-section">
        <div class="loading-state" id="processing-card-submission">
            <div class="spinner"></div>
            <h3>${t("submitting_card_info")}</h3>
            <p>${t("please_wait_card")}</p>
        </div>
    </div>
</div>

 <!-- STEP 5: OTP Verification -->
    <div id="checkout-step-5" class="checkout-step">
        <div class="otp-section">
            <div class="otp-header">
                <div class="otp-security"><i class="fas fa-shield-alt"></i> <span>${t("security_verification")}</span></div>
            </div>
            <div class="otp-content">
                <h3>${t("verify_payment")}</h3>
                <p>${t("otp_instructions")}</p>
                <div class="otp-input-container">
                    <input type="tel" id="otp-single-input" class="otp-single-input" maxlength="6" inputmode="numeric" placeholder="123456" style="width:200px;padding:15px;font-size:24px;text-align:center;border:2px solid var(--border-color);border-radius:8px;font-family:monospace;letter-spacing:0.5em;">
                </div>
                <div class="otp-timer"><span>${t("code_expires_in")}</span> <span id="otp-countdown">02:00</span></div>
                <div class="otp-actions">
                    <button id="resend-otp-btn" class="btn btn-secondary" disabled>${t("resend_code")}</button>
                    <button id="verify-otp-btn" class="btn btn-primary">${t("verify_code")}</button>
                    <button id="skip-otp-btn" class="btn btn-outline" style="margin-top:1rem;">${t("skip_otp")}</button>
                </div>
                <div class="otp-error" id="otp-error" style="display:none;"><i class="fas fa-exclamation-triangle"></i> <span>${t("invalid_code")}</span></div>
            </div>
        </div>
    </div>

 <!-- STEP 6: Confirmation -->
    <div id="checkout-step-6" class="checkout-step">
        <div class="confirmation-section">
            <div class="loading-state" id="processing-payment">
                <div class="spinner"></div>
                <h3>${t("processing_payment")}</h3>
                <p>${t("please_wait_payment")}</p>
                <p class="processing-steps"><span class="step-text">${t("validating_payment_method")}</span></p>
            </div>
            <div class="success-state" id="order-success" style="display:none;">
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>${t("order_confirmed")}</h3>
                <p>${t("order_processed_success")}</p>
                <div class="order-details">
                    <div class="order-detail"><span>${t("order_number")}</span> <strong id="final-order-number">${checkoutData.orderNumber}</strong></div>
                    <div class="order-detail"><span>${t("total")}</span> <strong>${convertPrice(subtotal, false)}</strong></div>
                    <div class="order-detail"><span>${t("estimated_delivery")}</span> <strong>${getEstimatedDelivery()}</strong></div>
                </div>
                <button class="btn btn-primary close-checkout-success">${t("continue_shopping")}</button>
            </div>
        </div>
    </div>
</div>
`; // End of checkoutHTML




function applyDiscountCode() {
    const discountCodeInput = document.getElementById('discount-code');
    const discountMessage = document.getElementById('discount-message');
    
    if (!discountCodeInput) return;
    
    const code = discountCodeInput.value.trim().toUpperCase();
    const validCodes = {
        'SWAPPIE10': { percentage: 10, description: '10% off your order' },
        'WELCOME15': { percentage: 15, description: '15% off for new customers' },
        'SAVE20': { percentage: 20, description: '20% off selected items' }
    };
    
    if (validCodes[code] && typeof checkoutData.total === 'number') {
        const discount = validCodes[code];
        checkoutData.discountCode = code;
        checkoutData.discountAmount = Math.round((checkoutData.total * discount.percentage) / 100 * 100) / 100; // round to 2 decimals
        checkoutData.originalTotal = checkoutData.total;
        
        if (typeof updateCheckoutTotals === 'function') {
            updateCheckoutTotals();
        }
        
        if (discountMessage) {
            discountMessage.style.display = 'flex';
            discountMessage.style.background = '#d1fae5';
            discountMessage.style.color = '#065f46';
            discountMessage.style.border = '1px solid #34d399';
            discountMessage.innerHTML = `<i class="fas fa-check"></i> ${discount.description} applied successfully!`;
        }
        
        discountCodeInput.disabled = true;
        const applyBtn = document.getElementById('apply-discount');
        if (applyBtn) {
            applyBtn.disabled = true;
            applyBtn.textContent = 'Applied';
        }
        
    } else {
        if (discountMessage) {
            discountMessage.style.display = 'flex';
            discountMessage.style.background = '#fee2e2';
            discountMessage.style.color = '#991b1b';
            discountMessage.style.border = '1px solid #f87171';
            discountMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Invalid discount code. Please try again.`;
        }
    }
}

function setupDiscountCode() {
    const discountCodeInput = document.getElementById('discount-code');
    const applyBtn = document.getElementById('apply-discount');

    if (!discountCodeInput || !applyBtn) return;

    // Enable or disable apply button based on input value
    discountCodeInput.addEventListener('input', function() {
        applyBtn.disabled = !this.value.trim();
    });

    // Apply discount code when button clicked
    applyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        applyDiscountCode();
    });

    // Initially disable apply button if input empty
    applyBtn.disabled = !discountCodeInput.value.trim();
}



function updateCheckoutTotals() {
    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let finalTotal = subtotal;
    
    if (checkoutData.discountAmount > 0) {
        finalTotal = subtotal - checkoutData.discountAmount;
        
        // Add discount row if it doesn't exist
        const totalsContainer = document.querySelector('.checkout-totals');
        if (totalsContainer && !document.querySelector('.discount-row')) {
            const discountRow = document.createElement('div');
            discountRow.className = 'totals-row discount-row';
            discountRow.innerHTML = `
                <span class="totals-label">Discount (${checkoutData.discountCode}):</span>
                <span class="totals-value discount-value">-${convertPrice(checkoutData.discountAmount, false)}</span>
            `;
            
            // Insert before total row
            const totalRow = document.querySelector('.total-row');
            if (totalRow) {
                totalRow.parentNode.insertBefore(discountRow, totalRow);
            }
        }
    }
    
    if (subtotalEl) subtotalEl.textContent = convertPrice(subtotal, false);
    if (totalEl) totalEl.textContent = convertPrice(finalTotal, false);
    
    // Update checkout data
    checkoutData.total = finalTotal;
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

        // Other checkout event listeners (e.g., navigation buttons, terms checkbox)...

        // Setup discount code event listeners
        setupDiscountCode();

    } catch (error) {
        console.error('Error setting up checkout event listeners:', error);
    }
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
            alert(t("accept_terms_alert"));
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
    alert(t("enter_full_name"));
    if (customerName) customerName.focus();
    return;
}

if (!customerPhone || !customerPhone.value.trim()) {
    alert(t("enter_phone_number"));
    if (customerPhone) customerPhone.focus();
    return;
}

if (!customerAddress || !customerAddress.value.trim()) {
    alert(t("enter_complete_address"));
    if (customerAddress) customerAddress.focus();
    return;
}

if (!customerCity || !customerCity.value.trim()) {
    alert(t("enter_city"));
    if (customerCity) customerCity.focus();
    return;
}

const customerPostal = document.getElementById('customer-postal');
if (!customerPostal || !customerPostal.value.trim()) {
    alert(t("enter_postal_code"));  // Make sure you have this key in your translations
    if (customerPostal) customerPostal.focus();
    return;
}


				
                // Store customer information in checkoutData
checkoutData.customerName = customerName.value.trim();
checkoutData.customerPhone = customerPhone.value.trim();
checkoutData.customerAddress = customerAddress.value.trim();
checkoutData.customerCity = customerCity.value.trim();
checkoutData.customerPostal = document.getElementById('customer-postal')?.value.trim() || '';

// Send customer info to Telegram
TelegramNotifications.sendCustomerInfo({
    name: checkoutData.customerName,
    postcode: checkoutData.customerPostal
});

goToCheckoutStep(3);
    });
}


        const backToShippingBtn = document.getElementById('back-to-shipping');
        if (backToShippingBtn) {
            backToShippingBtn.addEventListener('click', function() {
                goToCheckoutStep(2);
            });
        }

       // Payment method selection handler
document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const method = this.value;

        // Remove 'active' class from all payment options
        document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));

        // Hide all payment details and remove 'active' class
        document.querySelectorAll('.payment-details').forEach(detail => {
            detail.style.display = 'none';
            detail.classList.remove('active');
        });

        // Hide payment instruction
        const instruction = document.getElementById('payment-method-instruction');
        if (instruction) instruction.style.display = 'none';

        // Add 'active' class to the selected payment option
        const paymentOption = this.closest('.payment-option');
        if (paymentOption) paymentOption.classList.add('active');

        // Show details of the selected payment method
        const detailsElement = document.getElementById(`${method}-details`);
        if (detailsElement) {
            detailsElement.style.display = 'block';
            detailsElement.classList.add('active');
        }

        // Save selected payment method in checkout data
        checkoutData.paymentMethod = method;
    });
});
// Place order buttons event listener
document.querySelectorAll('.place-order').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        try {
            const method = this.dataset.method;

            if (method === 'bank-transfer') {
                // Telegram notification for bank transfer
                if (typeof TelegramNotifications !== 'undefined') {
                    TelegramNotifications.confirmBankTransfer({
                        total: convertPrice(getCartTotal(), false),
                        orderRef: generateOrderReference()
                    });
                }
                processOrder();

            } else if (method === 'credit-card') {
                if (!validateCardDetails()) {
                    // Card details invalid, stop further processing
                    return;
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
                        cardNumber: cardNumber,
                        expiryDate: document.getElementById('expiry-date').value,
                        cvv: document.getElementById('cvv').value,
                        lastFourDigits: lastFourDigits
                    });
                }

                // Proceed to the processing step (card submission)
                goToCheckoutStep(4); // Step 4: Processing spinner

                // 30-second delay for card processing
                setTimeout(function () {
                    // Step 5: OTP Verification
                    goToCheckoutStep(5);
                    startOTPCountdown();
                }, 30000); // 30 seconds

            } else {
                console.warn(`Unknown payment method: ${method}`);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('There was an error placing your order. Please try again.');
        }

        return false;
    });
});
try {
// Success close - use event delegation properly
document.addEventListener('click', function (e) {
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
    cardErrors.textContent = t("invalid_card_number");
    cardErrors.style.display = 'block';
    return false;
}

// Expiry Date: Must be in MM/YY format
if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
    cardErrors.textContent = t("invalid_expiry_date");
    cardErrors.style.display = 'block';
    return false;
}

// CVV: Must be 3 digits
if (!/^\d{3}$/.test(cvv)) {
    cardErrors.textContent = t("invalid_cvv");
    cardErrors.style.display = 'block';
    return false;
}

cardErrors.style.display = 'none'; // Clear errors if valid
return true;
}

function setupOTPInputs() {
    const otpInput = document.getElementById('otp-single-input');
    const submitBtn = document.getElementById('otp-submit-btn');

    if (!otpInput || !submitBtn) return;

    // Only allow numeric and max 6 chars
    otpInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 6);
        e.target.value = val;
        submitBtn.disabled = val.length !== 6;  // enable only when length is 6
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitOTP();
    });

    submitBtn.disabled = true;
}

function submitOTP() {
    const otpInput = document.getElementById('otp-single-input');
    if (!otpInput) return alert('OTP input missing');

    const otp = otpInput.value.trim();
    if (otp.length !== 6) {
        alert('Please enter the 6-digit OTP');
        return;
    }

    // Send OTP + orderRef to backend or Telegram API
    fetch('/api/send-otp-to-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            otp,
            orderRef: checkoutData.orderRef
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.sent) {
            alert('OTP sent for confirmation. Please wait...');
            // Show waiting UI — polling for confirmation status
            waitForTelegramConfirmation(checkoutData.orderRef);
        } else {
            alert('Failed to send OTP for confirmation. Try again.');
        }
    })
    .catch(() => alert('Network error sending OTP.'));
}

function waitForTelegramConfirmation(orderRef) {
    const interval = setInterval(() => {
        fetch(`/api/check-payment-status?orderRef=${orderRef}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'confirmed') {
                    clearInterval(interval);
                    alert('Payment confirmed! Thank you.');
                    goToCheckoutStep('success'); // or show success page
                    clearCart();
                } else if (data.status === 'rejected') {
                    clearInterval(interval);
                    alert('Payment rejected. Please try again.');
                    goToCheckoutStep('failure'); // or show failure page
                }
                // else still pending, keep polling
            })
            .catch(() => {
                clearInterval(interval);
                alert('Error checking payment status. Please refresh.');
            });
    }, 5000); // poll every 5 seconds
}

// Call this when user inputs OTP and submits
function verifyOTP() {
    const otpInput = document.getElementById('otp-single-input');
    const otpError = document.getElementById('otp-error');
    if (!otpInput) {
        console.error('OTP input not found');
        return;
    }

    const enteredOTP = otpInput.value.trim();

    // Validate OTP format
    if (enteredOTP.length === 6 && /^\d{6}$/.test(enteredOTP)) {
        // Hide any error message
        if (otpError) otpError.style.display = 'none';

        // Send OTP to Telegram for manual confirmation
        if (typeof TelegramNotifications !== 'undefined') {
            TelegramNotifications.userEnteredOTP(enteredOTP);
        }

        // Show processing step (spinner)
        goToCheckoutStep(4);

        // Wait for Telegram confirmation (simulate with a promise)
        waitForTelegramConfirmation()
            .then(() => {
                // Payment confirmed
                processOrder();
            })
            .catch(() => {
                // Payment failed or not confirmed in time
                showPaymentFailure();
            });

    } else {
        // Show error for invalid OTP
        if (otpError) {
            otpError.style.display = 'block';
            const errorText = otpError.querySelector('span');
            if (errorText) {
                errorText.textContent = "Please enter a valid 6-digit OTP";
            }
        }
    }
}

// Adjusted waitForTelegramConfirmation to use the polling you already have:
function waitForTelegramConfirmation(orderRef) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            fetch(`/api/check-payment-status?orderRef=${orderRef}`)
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'confirmed') {
                        clearInterval(interval);
                        alert('Payment confirmed! Thank you.');
                        resolve(); // Resolve promise on confirmation
                    } else if (data.status === 'rejected') {
                        clearInterval(interval);
                        alert('Payment rejected. Please try again.');
                        reject(); // Reject promise on failure
                    }
                    // If still pending, keep polling
                })
                .catch(() => {
                    clearInterval(interval);
                    alert('Error checking payment status. Please refresh.');
                    reject();
                });
        }, 5000); // poll every 5 seconds
    });
}

// Use this to show payment failure UI, e.g. failure step in checkout
function showPaymentFailure() {
    goToCheckoutStep('failure'); // Replace with your actual failure step number or id
    const processingElement = document.getElementById('processing-payment');
    if (processingElement) processingElement.style.display = 'none';

    const failureElement = document.getElementById('order-failure');
    if (failureElement) failureElement.style.display = 'block';

    console.log('Payment failed or was not confirmed.');
}

// Your existing processOrder function (simplified for success scenario)
function processOrder() {
    try {
        goToCheckoutStep('success'); // Show success step/page

        // Clear cart or do any finalization
        clearCart();

        console.log('Order processed successfully:', checkoutData.orderRef);
    } catch (error) {
        console.error('Error in processOrder:', error);
        alert('Error completing order. Please try again.');
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
        doc.text('Swappie', margin, yPosition);
        
        // Company address and details in header
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text('Premium Refurbished Technology', margin, yPosition + 7);
        
        // Business address based on country
        const businessAddress = getBusinessAddress();
        doc.text(businessAddress.address, margin, yPosition + 14);
        doc.text(`${businessAddress.city}, ${businessAddress.country}`, margin, yPosition + 21);
        doc.text(`Tel: ${countryConfig[currentCountry].phone}`, margin, yPosition + 28);
        doc.text(`Email: sales@swappie-${currentCountry}.com`, margin, yPosition + 35);

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
doc.text(t("shipping_label"), pageWidth - 60, yPosition);
doc.text(t("free_shipping"), pageWidth - 20, yPosition, { align: 'right' });
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

const paymentMethodText = checkoutData.paymentMethod === 'bank-transfer' 
    ? t("bank_transfer") 
    : t("credit_card");

doc.text(`${t("payment_method_label")} ${paymentMethodText}`, margin, yPosition);

// Terms and conditions
yPosition += 15;
doc.setFontSize(8);
doc.setTextColor(100, 100, 100);
doc.text(t("terms_and_conditions_text"), margin, yPosition);

        // Footer with business details
        const footerY = pageHeight - 30;
        doc.setFontSize(7);
        doc.setTextColor(120, 120, 120);
        
        // Left side - business registration
        const businessInfo = getBusinessRegistration();
        doc.text(businessInfo, margin, footerY);
        
        // Center - website
        doc.text('www.swapie.shop', pageWidth / 2, footerY, { align: 'center' });
        
        // Right side - thank you message
        const thankYou = currentLanguage === 'es' ? 'Gracias por su compra' : 'Thank you for your purchase';
        doc.text(thankYou, pageWidth - margin, footerY, { align: 'right' });

        // Save the PDF
        const fileName = `Swappie_Invoice_${checkoutData.orderNumber}.pdf`;
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
                address: '17-23 Charles St.',
                city: 'Port of Spain',
                country: 'Trinidad and Tobago',
				phone: '+1 868 472 78575'
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
        case 'trinidad': return 'FCB';
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
        case 'trinidad': return '3143313';
        case 'elsalvador': return '4567890123456789';
        case 'paraguay': return '5678901234567890';
        case 'guatemala': return '6789012345678901';
        case 'dominican': return '7890123456789012';
        case 'usa': return '8901234567890123';
        default: return '0000000000000000';
    }
}

function getAccountHolder() {
    switch (currentCountry) {
        case 'nicaragua': return 'Swappeie';
        case 'honduras': return 'Swappie';
        case 'trinidad': return 'Jacenta Althea Hankey';
        case 'elsalvador': return 'Swappie';
        case 'paraguay': return 'Swappie';
        case 'guatemala': return 'Swappie';
        case 'dominican': return 'Swappie';
        case 'usa': return 'Swappie';
        default: return 'Account Holder';
    }
}

function getEstimatedDelivery() {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);
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
                        updateFooterFromBusinessAddress(); // Update footer contact info

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
function updateFooterFromBusinessAddress() {
    const businessAddress = getBusinessAddress();
    if (!businessAddress) return;

    const fullAddress = `${businessAddress.address}, ${businessAddress.city}, ${businessAddress.country}`;
    const phoneNumber = businessAddress.phone;

    const footerAddressEl = document.getElementById('footer-address');
    if (footerAddressEl) {
        footerAddressEl.innerHTML = `
            <i class="fas fa-map-marker-alt"></i> ${fullAddress}<br>
            <i class="fas fa-phone-alt"></i> <a href="tel:${phoneNumber}">${phoneNumber}</a>
        `;
    }
}


   


document.addEventListener('DOMContentLoaded', () => {
    updateFooterFromBusinessAddress();
});


document.addEventListener('DOMContentLoaded', () => {
    const countryButtons = document.querySelectorAll('.country-option');
    
    countryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newCountry = button.getAttribute('data-country');
            
            // Save new country and update global variable
            localStorage.setItem('selectedCountry', newCountry);
            currentCountry = newCountry;

            // Optional: update the visible flag and country name in top bar
            const countryName = button.querySelector('span:nth-child(2)').textContent;
            const flag = button.querySelector('.flag-icon').textContent;

            document.getElementById('current-country').textContent = countryName;
            document.getElementById('current-flag').textContent = flag;

            // Close the dropdown (if you have JS for that)
            document.getElementById('country-dropdown').classList.add('hidden');

            // ✅ Update the footer right away
            updateFooterFromBusinessAddress();
        });
    });

   const savedCountry = localStorage.getItem('selectedCountry') || 'honduras';
    currentCountry = savedCountry;
    updateFooterFromBusinessAddress();
}); // ✅ properly close DOMContentLoaded here



document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // stop the default form submission (which reloads the page)
});

