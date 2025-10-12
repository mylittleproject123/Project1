// Country configuration - check if already defined to prevent duplicate declaration
const countryConfig = {
    cs: { flag: '🇨🇿', name: 'Česko', currency: 'CZK', rate: 25, lang: 'cs', phone: '+420 123 456 789', code: 'cs' },
    sk: { flag: '🇸🇰', name: 'Slovensko', currency: 'EUR', rate: 1, lang: 'sk', phone: '+421 123 456 789', code: 'sk' },
    hu: { flag: '🇭🇺', name: 'Magyarország', currency: 'HUF', rate: 390, lang: 'hu', phone: '+36 1 123 4567', code: 'hu' },
    at: { flag: '🇦🇹', name: 'Österreich', currency: 'EUR', rate: 1, lang: 'de', phone: '+43 1 1234567', code: 'at' }
};

// Transdlation data - check if already defined to prevent duplicate declaration
const translations = window.translations || {
    es: {
        home: "Inicio",
        products: "Productos",
        about: "Acerca de",
        contact: "Contacto",
        hero_title: "La Mejor Tecnología al Mejor Precio",
        split_payment: "Pago a Plazos",
        split_payment_title: "Paga en Cuotas",
        split_payment_desc: "Paga un depósito del 50% hoy y divide el resto hasta en 6 meses.",
        about_us_title: "Sobre Nuestra Empresa",
        about_us_p1: "¡Bienvenido a nuestra tienda en línea! Nos dedicamos a ofrecer los mejores productos y servicios a nuestros clientes. Nuestra misión es entregar calidad y valor en cada compra.",
        our_team_title: "Nuestro Equipo",
        our_team_p1: "Contamos con un equipo de profesionales dedicados y apasionados por lo que hacen, siempre listos para ayudarte.",
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

        // WhatsApp & Banners
        whatsapp_title: "¿Tienes Preguntas?",
        whatsapp_subtitle: "Chatea con nuestros expertos para obtener recomendaciones y soporte instantáneo.",
        whatsapp_button: "Chatear en WhatsApp",
        whatsapp_general_greeting: "¡Hola! Tengo una pregunta sobre sus productos.",
        preorder_subtitle: "Sé el Primero",
        preorder_title: "¡La Preventa del iPhone 17 ya está Activa!",
        preorder_description: "Asegura tu iPhone 17 hoy y obtén ofertas exclusivas de lanzamiento. Contáctanos por WhatsApp para realizar tu pedido al instante.",
        preorder_button_text: "Reservar en WhatsApp",
        whatsapp_preorder_iphone17: "¡Hola! Me interesa el iPhone 17. Por favor, notifíquenme sobre la preventa y disponibilidad.",

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
        transfer_instructions: "Realiza la transferencia por el monto total y envíanos una confirmación por WhatsApp para un envío más rápido.",
        confirm_transfer: "Enviar Comprobante por WhatsApp",
        whatsapp_bank_confirmation: "Hola, he completado la transferencia bancaria para el Pedido {orderNumber}. Envío mi comprobante de pago ahora.",
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
        invalid_code: "Código inválido. Por favor, inténtalo de nuevo.",
        reviews: "Reseñas",
        split_payment_select_product: "1. Selecciona un Producto",
        split_payment_choose_product: "-- Elige un producto --",
        split_payment_select_storage: "2. Selecciona Almacenamiento",
        split_payment_choose_storage: "-- Elige almacenamiento --",
        split_payment_select_color: "3. Selecciona Color",
        split_payment_choose_color: "-- Elige color --",
        split_payment_choose_plan: "4. Elige Tu Plan",
        split_payment_month_interest: "{months} Meses (+{interest}% interés)",
        split_payment_summary: "Resumen de Pago",
        split_payment_product_price: "Precio del Producto:",
        split_payment_interest_rate: "Interés",
        split_payment_new_total: "Nuevo Precio Total:",
        split_payment_deposit: "Depósito (50%):",
        split_payment_remaining: "Saldo Restante:",
        split_payment_monthly: "Pago Mensual:",
        split_payment_your_info: "5. Tu Información",
        split_payment_info_desc: "Por favor, proporciona tus datos. Esta información es necesaria para procesar tu plan de cuotas.",
        split_payment_full_name: "Nombre Completo",
        split_payment_email: "Correo Electrónico",
        split_payment_phone: "Número de Teléfono (WhatsApp)",
        split_payment_address: "Dirección de Entrega Completa",
        split_payment_upload_id: "Sube una Foto de tu Identificación",
        split_payment_agreement_title: "6. Acuerdo del Plan de Cuotas",
        split_payment_agreement_intro: "Al continuar, aceptas los siguientes términos:",
        split_payment_term_1: "Aceptas pagar un depósito del 50% del monto total hoy. Este depósito es reembolsable bajo nuestra garantía de devolución de 30 días.",
        split_payment_term_2: "El saldo restante se pagará en cuotas mensuales iguales durante el período seleccionado.",
        split_payment_term_3: "Se aplica una tasa de interés, como se especifica en el resumen, al precio original del producto.",
        split_payment_term_4: "El producto se enviará inmediatamente después de confirmar el pago del depósito del 50%.",
        split_payment_term_5: "No realizar los pagos mensuales a tiempo puede resultar en cargos por mora o la recuperación del dispositivo.",
        split_payment_term_6: "Todos los pagos están sujetos a nuestra garantía de devolución de 30 días. Por favor, revisa nuestros Términos y Condiciones completos para más detalles.",
        split_payment_agree_checkbox: "He leído y acepto los términos al proceder con el pago del depósito.",
        split_payment_download_draft: "Descargar Borrador del Acuerdo",
        split_payment_what_next: "¿Qué sigue ahora?",
        split_payment_what_next_desc: "Después de pagar el depósito del 50%, nuestro equipo te contactará por WhatsApp para confirmar tu pago. Una vez confirmado, tu teléfono será enviado de inmediato.",
        split_payment_what_next_signature: "Se proporcionará una copia final del acuerdo para tu firma al momento de la entrega.",
        split_payment_pay_deposit: "Pagar Depósito y Empezar Plan",
        split_payment_monthly_value: "{price} x {months} meses",
        rights_reserved: "Todos los derechos reservados."
    },
    sk: {
        home: "Domov",
        products: "Produkty",
        about: "O nás",
        contact: "Kontakt",
        hero_title: "Najlepšia Technológia za Najlepšiu Cenu",
        split_payment: "Platba na splátky",
        split_payment_title: "Zaplatiť na splátky",
        split_payment_desc: "Zaplaťte dnes 50% zálohu a zvyšok si rozdeľte až na 6 mesiacov.",
        about_us_title: "O našej spoločnosti",
        about_us_p1: "Vitajte v našom e-shope! Sme odhodlaní poskytovať našim zákazníkom tie najlepšie produkty a služby. Našou misiou je prinášať kvalitu a hodnotu pri každom nákupe.",
        our_team_title: "Náš tím",
        our_team_p1: "Máme oddaný tím profesionálov, ktorí sú nadšení pre to, čo robia, a sú vždy pripravení vám pomôcť.",
        hero_subtitle: "Objavte náš prémiový výber repasovaných zariadení s plnou zárukou a špecializovanou technickou podporou. Kvalitná technológia za výnimočné ceny.",
        shop_now: "Nakupovať",
        benefit_free_shipping: "Doprava Zdarma",
        benefit_free_shipping_desc: "Na všetky objednávky",
        benefit_warranty: "1-ročná Záruka",
        benefit_warranty_desc: "Na všetky produkty",
        benefit_return: "Vrátenie do 30 Dní",
        benefit_return_desc: "Zaručené vrátenie peňazí v plnej výške",
        benefit_accessories: "Príslušenstvo v cene",
        benefit_accessories_desc: "Kábel, krabica a ochranné sklo zdarma",

        // WhatsApp & Banners
        whatsapp_title: "Máte otázky?",
        whatsapp_subtitle: "Chatujte s našimi expertmi pre osobné odporúčania a okamžitú podporu.",
        whatsapp_button: "Chat na WhatsAppe",
        whatsapp_general_greeting: "Dobrý deň! Mám otázku ohľadom vašich produktov.",
        preorder_subtitle: "Buďte Prví",
        preorder_title: "Predobjednávka na iPhone 17 je spustená!",
        preorder_description: "Zabezpečte si svoj iPhone 17 ešte dnes a získajte exkluzívne ponuky v deň uvedenia na trh. Kontaktujte nás na WhatsAppe a objednajte si ho okamžite.",
        preorder_button_text: "Predobjednať na WhatsAppe",
        whatsapp_preorder_iphone17: "Dobrý deň! Mám záujem o iPhone 17. Prosím, informujte ma o predobjednávkach a dostupnosti.",

        featured_products: "Odporúčané Produkty",
        all: "Všetky",
        iphones: "iPhony",
        samsung: "Samsung",
        audio: "Audio",
        accessories: "Príslušenstvo",
        add_to_cart: "Pridať do košíka",
        available_in: "Dostupné v:",
        free_shipping: "Doprava zdarma",
        free_shipping_all: "Doprava zdarma na všetky objednávky",
        new: "Novinka!",
        certified: "Certifikované!",
        hot: "Horúce!",
        bestseller: "Najpredávanejšie!",
        deal: "Akcia!",
        value: "Skvelá Cena!",
        premium: "Prémiové!",
        top_rated: "Najlepšie hodnotené!",
        popular: "Populárne!",
        budget: "Výhodné!",
        shopping_cart: "Nákupný Košík",
        empty_cart: "Váš košík je prázdny",
        subtotal: "Medzisúčet:",
        shipping: "Doprava:",
        total: "Celkom:",
        checkout: "Pokračovať k pokladni",
        continue_shopping: "Pokračovať v nákupe",
        order_summary: "Súhrn Objednávky",
        order_ref: "Referencia Objednávky:",
        bank_transfer: "Bankový Prevod",
        credit_card: "Kreditná Karta",
        bank_details: "Bankové Údaje",
        account_number: "Číslo Účtu:",
        account_holder: "Majiteľ Účtu:",
        reference: "Referencia:",
        transfer_instructions: "Vykonajte prevod celkovej sumy a pošlite nám potvrdenie cez WhatsApp pre zrýchlené odoslanie.",
        confirm_transfer: "Odoslať potvrdenie cez WhatsApp",
        whatsapp_bank_confirmation: "Dobrý deň, dokončil som bankový prevod pre Objednávku {orderNumber}. Posielam doklad o zaplatení.",
        bank_name: "Banka:",
        card_details: "Údaje o Karte",
        accepted: "Akceptované:",
        secure_payment: "100% Bezpečná a Overená Platba",
        cardholder_name: "Meno Držiteľ Karty",
        card_number: "Číslo Karty",
        expiry_date: "Dátum Platnosti",
        cvc: "CVV",
        ssl_secured: "Bezpečné SSL Spojenie - Vaše údaje sú chránené",
        place_order: "Odoslať Objednávku",
        delivery_inspection_notice: "Odporúčame všetkým zákazníkom, aby si pri doručení od kuriéra dôkladne skontrolovali svoju objednávku. Ak zistíte, že tovar je neuspokojivý alebo nezodpovedá očakávaniam, máte právo odmietnuť prevzatie balíka. V prípade odmietnutia máte nárok na vrátenie celej kúpnej sumy v súlade s našimi reklamačnými podmienkami.",
        processing_secure: "Bezpečné Spracovanie",
        processing_order: "Spracovávam vašu objednávku...",
        processing_wait: "Prosím, nezatvárajte toto okno",
        validating_payment: "Overovanie platobnej metódy",
        confirming_inventory: "Potvrdzovanie skladových zásob",
        generating_order: "Generovanie nákupnej objednávky",
        order_confirmed: "Objednávka Potvrdená!",
        order_success_msg: "Vaša objednávka bola úspešne spracovaná. Dostanete WhatsApp s podrobnosťami.",
        order_number: "Číslo Objednávky:",
        order_total: "Celkom:",
        payment_method: "Spôsob Platby:",
        estimated_delivery: "Predpokladané Doručenie:",
        price_high_to_low: "Cena: od najvyššej po najnižšiu",
        price_low_to_high: "Cena: od najnižšej po najvyššiu",
        featured: "Odporúčané",
        storage: "Úložisko",
        condition: "Stav",
        required: "*Povinné",
        condition_guide: "Sprievodca stavom:",
        condition_guide_desc: "Lepšie stavy znamenajú menšie opotrebenie a lepší vzhľad zariadenia.",
        terms_agreement: "Súhlasím s",
        terms_and_conditions: "Obchodnými Podmienkami",
        quantity: "Množstvo:",
        details: "Detaily",
        choose_type: "Vyberte Typ",
        security_verification: "Bezpečnostné Overenie",
        verify_payment: "Overte Svoju Platbu",
        otp_sent: "Na vaše telefónne číslo sme odoslali 6-miestny overovací kód. Zadajte ho nižšie na dokončenie nákupu.",
        code_expires: "Kód vyprší o: ",
        resend_code: "Znovu Odoslať Kód",
        verify_code: "Overiť Kód",
        invalid_code: "Neplatný kód. Skúste to prosím znova.",
        reviews: "Recenzie",
        split_payment_select_product: "1. Vyberte si produkt",
        split_payment_choose_product: "-- Vyberte produkt --",
        split_payment_select_storage: "2. Vyberte si úložisko",
        split_payment_choose_storage: "-- Vyberte úložisko --",
        split_payment_select_color: "3. Vyberte si farbu",
        split_payment_choose_color: "-- Vyberte farbu --",
        split_payment_choose_plan: "4. Vyberte si svoj plán",
        split_payment_month_interest: "{months} Mesiacov (+{interest}% úrok)",
        split_payment_summary: "Súhrn platby",
        split_payment_product_price: "Cena produktu:",
        split_payment_interest_rate: "Úrok",
        split_payment_new_total: "Nová celková cena:",
        split_payment_deposit: "Záloha (50%):",
        split_payment_remaining: "Zostávajúca suma:",
        split_payment_monthly: "Mesačná splátka:",
        split_payment_your_info: "5. Vaše informácie",
        split_payment_info_desc: "Prosím, poskytnite svoje údaje. Tieto informácie sú potrebné na spracovanie vášho splátkového plánu.",
        split_payment_full_name: "Celé meno",
        split_payment_email: "E-mailová adresa",
        split_payment_phone: "Telefónne číslo (WhatsApp)",
        split_payment_address: "Úplná adresa doručenia",
        split_payment_upload_id: "Nahrajte fotku vášho občianskeho preukazu",
        split_payment_agreement_title: "6. Zmluva o splátkovom pláne",
        split_payment_agreement_intro: "Pokračovaním súhlasíte s nasledujúcimi podmienkami:",
        split_payment_term_1: "Súhlasíte so zaplatením 50% zálohy z celkovej sumy dnes. Táto záloha je vratná v rámci našej 30-dňovej záruky vrátenia peňazí.",
        split_payment_term_2: "Zostávajúca suma bude splatená v rovnakých mesačných splátkach počas zvoleného obdobia.",
        split_payment_term_3: "Na pôvodnú cenu produktu sa vzťahuje úroková sadzba, ako je uvedené v súhrne.",
        split_payment_term_4: "Produkt bude odoslaný ihneď po potvrdení platby 50% zálohy.",
        split_payment_term_5: "Nezaplatenie mesačných splátok včas môže viesť k poplatkom z omeškania alebo odobratiu zariadenia.",
        split_payment_term_6: "Všetky platby podliehajú našej 30-dňovej záruke vrátenia peňazí. Pre viac podrobností si prosím prečítajte naše úplné Obchodné podmienky.",
        split_payment_agree_checkbox: "Prečítal som si a súhlasím s podmienkami pokračovaním v platbe zálohy.",
        split_payment_download_draft: "Stiahnuť návrh zmluvy",
        split_payment_what_next: "Čo sa stane ďalej?",
        split_payment_what_next_desc: "Po zaplatení 50% zálohy vás náš tím bude kontaktovať cez WhatsApp na potvrdenie platby. Po potvrdení bude váš telefón okamžite odoslaný.",
        split_payment_what_next_signature: "Konečná kópia zmluvy bude poskytnutá na váš podpis pri doručení.",
        split_payment_pay_deposit: "Zaplatiť zálohu a začať plán",
        split_payment_monthly_value: "{price} x {months} mesiacov",
        rights_reserved: "Všetky práva vyhradené.",
        contact_us_title: "Kontaktujte Nás",
        contact_us_subtitle: "Sme tu pre vás. Obráťte sa na nás s akýmikoľvek otázkami alebo obavami.",
        our_office: "Naša Kancelária",
        send_us_message: "Pošlite Nám Správu",
        subject: "Predmet",
        message: "Správa",
        send_message: "Odoslať Správu"
    },
    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        hero_title: "The Best Technology at the Best Price",
        split_payment: "Split Payment",
        split_payment_title: "Pay in Installments",
        split_payment_desc: "Pay a 50% deposit today and split the rest over up to 6 months.",
        about_us_title: "About Our Company",
        about_us_p1: "Welcome to our e-shop! We are dedicated to providing the best products and services to our customers. Our mission is to deliver quality and value with every purchase.",
        our_team_title: "Our Team",
        our_team_p1: "We have a dedicated team of professionals who are passionate about what they do and are always here to help you.",
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

        // WhatsApp & Banners
        whatsapp_title: "Have Questions?",
        whatsapp_subtitle: "Chat with our experts for personalized recommendations and instant support.",
        whatsapp_button: "Chat on WhatsApp",
        whatsapp_general_greeting: "Hello! I have a question about your products.",
        preorder_subtitle: "Be the First",
        preorder_title: "iPhone 17 Pre-Order Is Live!",
        preorder_description: "Secure your iPhone 17 today for exclusive launch day offers. Contact us on WhatsApp to place your order instantly.",
        preorder_button_text: "Pre-Order on WhatsApp",
        whatsapp_preorder_iphone17: "Hello! I'm interested in the iPhone 17. Please notify me about pre-orders and availability.",

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
        transfer_instructions: "Make the transfer for the total amount and send us a confirmation via WhatsApp for expedited shipping.",
        confirm_transfer: "Send Receipt via WhatsApp",
        whatsapp_bank_confirmation: "Hello, I've completed the bank transfer for Order {orderNumber}. I'm sending my proof of payment now.",
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
        invalid_code: "Invalid code. Please try again.",
        reviews: "Reviews",
        split_payment_select_product: "1. Select a Product",
        split_payment_choose_product: "-- Choose a product --",
        split_payment_select_storage: "2. Select Storage",
        split_payment_choose_storage: "-- Choose storage --",
        split_payment_select_color: "3. Select Color",
        split_payment_choose_color: "-- Choose color --",
        split_payment_choose_plan: "4. Choose Your Plan",
        split_payment_month_interest: "{months} Months (+{interest}% interest)",
        split_payment_summary: "Payment Summary",
        split_payment_product_price: "Product Price:",
        split_payment_interest_rate: "Interest",
        split_payment_new_total: "New Total Price:",
        split_payment_deposit: "Deposit (50%):",
        split_payment_remaining: "Remaining Balance:",
        split_payment_monthly: "Monthly Payment:",
        split_payment_your_info: "5. Your Information",
        split_payment_info_desc: "Please provide your details. This information is required to process your installment plan.",
        split_payment_full_name: "Full Name",
        split_payment_email: "Email Address",
        split_payment_phone: "Phone Number (WhatsApp)",
        split_payment_address: "Full Delivery Address",
        split_payment_upload_id: "Upload a Picture of Your ID",
        split_payment_agreement_title: "6. Installment Plan Agreement",
        split_payment_agreement_intro: "By proceeding, you agree to the following terms:",
        split_payment_term_1: "You agree to pay a 50% deposit of the total amount today. This deposit is refundable under our 30-day money-back guarantee.",
        split_payment_term_2: "The remaining balance will be paid in equal monthly installments over the selected period.",
        split_payment_term_3: "An interest rate, as specified in the summary, is applied to the original product price.",
        split_payment_term_4: "The product will be shipped immediately after the 50% deposit payment is confirmed.",
        split_payment_term_5: "Failure to make monthly payments on time may result in late fees or repossession of the device.",
        split_payment_term_6: "All payments are subject to our 30-day money-back guarantee. Please review our full Terms and Conditions for more details.",
        split_payment_agree_checkbox: "I have read and agree to the terms by proceeding with the deposit payment.",
        split_payment_download_draft: "Download Agreement Draft",
        split_payment_what_next: "What happens next?",
        split_payment_what_next_desc: "After you pay the 50% deposit, our team will contact you via WhatsApp to confirm your payment. Once confirmed, your phone will be shipped immediately.",
        split_payment_what_next_signature: "A final copy of the agreement will be provided for your signature upon delivery.",
        split_payment_pay_deposit: "Pay Deposit & Start Plan",
        split_payment_monthly_value: "{price} x {months} months",
        rights_reserved: "All rights reserved.",
        contact_us_title: "Contact Us",
        contact_us_subtitle: "We're here to help. Reach out to us with any questions or concerns.",
        our_office: "Our Office",
        send_us_message: "Send Us a Message",
        subject: "Subject",
        message: "Message",
        send_message: "Send Message"
    }
};

function t(key) {
    const lang = currentLanguage || 'en'; // fallback to English if not set
    return (translations[lang] && translations[lang][key])
        ? translations[lang][key]
        : key; // fallback to key if translation is missing
}

// Global variables
let currentCountry = localStorage.getItem('selectedCountry') || 'cs';
let currentLanguage = localStorage.getItem('selectedLanguage') || 'cs';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Global state for grid controls
let currentFilterCategory = 'all';
let currentSearchTerm = '';
let currentSortBy = 'featured'; // 'featured', 'price-low', 'price-high'




// Initialize cart
updateCartCount();
updateCartDisplay();

// Currency functions
function getCurrencySymbol(country) {
    const config = countryConfig[country];
    if (!config) return '$';
    switch (config.currency) {        case 'EUR': return '€';
        case 'CZK': return 'Kč';
        case 'HUF': return 'Ft';
        default: return config.currency;
    }
}

function convertPrice(priceInUSD, showBoth = false) {
    if (typeof priceInUSD !== 'number' || isNaN(priceInUSD)) {
        return ''; // Return empty string if price is not a valid number
    }

    const priceInEUR = priceInUSD * 0.92; // Approximate conversion from USD to EUR

    const config = countryConfig[currentCountry];
    if (!config) return `${priceInEUR.toFixed(2)} €`;

    const eurPrice = `${priceInEUR.toFixed(0)} €`; // Display as integer

    // For EUR countries, show EUR only
    if (config.currency === 'EUR') {
        return eurPrice;
    }

    const convertedPrice = priceInUSD * config.rate;
    const symbol = getCurrencySymbol(currentCountry);
    const localFormattedPrice = convertedPrice.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const localPrice = `${symbol}${localFormattedPrice}`;

    return showBoth ? `${eurPrice} / ${localPrice}` : localPrice;
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

// Setup dynamic WhatsApp links
function setupDynamicWhatsAppLinks() {
    const config = countryConfig[currentCountry];
    if (!config || !config.phone) return;

    const phoneNumber = config.phone.replace(/\D/g, '');

    // For the general WhatsApp chat link in the footer/contact section
    const generalChatLink = document.getElementById('whatsapp-chat-link'); // This might be used elsewhere, so we keep it.
    if (generalChatLink) {
        const message = encodeURIComponent(t('whatsapp_general_greeting'));
        generalChatLink.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }

    // For the smaller contact/swap banner button
    const contactBtn = document.getElementById('whatsapp-contact-btn');
    if (contactBtn) {
        const message = encodeURIComponent(t('whatsapp_general_greeting'));
        contactBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }
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
                    <img src="${item.image || 'https://placehold.co/60x60'}" alt="${item.name}" loading="lazy" class="cart-product-image">
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

function createAndInsertPreorderBanner() {
    const whatsappSection = document.querySelector('.whatsapp-contact-section');
    if (!whatsappSection) {
        console.warn('WhatsApp contact section not found. Cannot insert pre-order banner.');
        return;
    }

    // Remove any existing banner to ensure it's always fresh and has the correct link
    const existingBanner = document.querySelector('.preorder-section');
    if (existingBanner) {
        existingBanner.remove();
    }

    const config = countryConfig[currentCountry];
    if (!config || !config.phone) return;

    const phoneNumber = config.phone.replace(/\D/g, '');
    const preorderMessage = encodeURIComponent(t('whatsapp_preorder_iphone17'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${preorderMessage}`;

    const banner = document.createElement('section');
    banner.className = 'preorder-section';
    banner.innerHTML = `
        <div class="container">
            <div class="preorder-banner">
                <div class="preorder-image">
                    <img src="https://citymagazine.b-cdn.net/wp-content/uploads/2025/08/hero-series-iphone17-2025-0-1400x933.webp" alt="iPhone 17 Pre-order">
                </div>
                <div class="preorder-content">
                    <span class="preorder-subtitle" data-translate="preorder_subtitle">${t('preorder_subtitle')}</span>
                    <h2 data-translate="preorder_title">${t('preorder_title')}</h2>
                    <p class="preorder-description" data-translate="preorder_description">${t('preorder_description')}</p>
                    <a href="${whatsappUrl}" class="preorder-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-whatsapp"></i> <span data-translate="preorder_button_text">${t('preorder_button_text')}</span>
                    </a>
                </div>
            </div>
        </div>
    `;

    whatsappSection.parentNode.insertBefore(banner, whatsappSection);
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
    checkoutData.total = subtotal; // This will be the base total
    checkoutData.orderNumber = `ORDER-${Date.now()}`; // Generate order number

    const checkoutHTML = `
    <div class="checkout-header">
        <h2 data-translate="checkout">Checkout</h2>
        <button class="close-checkout"><i class="fas fa-times"></i></button>
    </div>
    <div class="checkout-content">
        <div class="checkout-left">
            <div class="checkout-steps">
                <div class="step active" data-step="1"><span>${(currentLanguage === 'es' ? 'Información' : 'Information')}</span></div>
                <div class="step" data-step="2"><span>${(currentLanguage === 'es' ? 'Pago' : 'Payment')}</span></div>
                <div class="step" data-step="3"><span>${(currentLanguage === 'es' ? 'Verificación' : 'Verification')}</span></div>
                <div class="step" data-step="4"><span>${(currentLanguage === 'es' ? 'Confirmación' : 'Confirmation')}</span></div>
            </div>

            <!-- Step 1: Shipping Information -->
            <div id="checkout-step-1" class="checkout-step active">
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
                    <input type="text" id="customer-country" required value="${countryConfig[currentCountry].name}" readonly autocomplete="country">
                </div>
                <div class="form-group">
                    <label>${(currentLanguage === 'es' ? 'Dirección Completa' : 'Complete Address')} *</label>
                    <textarea id="customer-address" required placeholder="${(currentLanguage === 'es' ? 'Dirección completa: Calle, número, ciudad, estado/provincia, código postal...' : 'Complete address: Street, number, city, state/province, postal code...')}" rows="4" class="responsive-textarea" autocomplete="street-address"></textarea>
                    <div class="address-help"><i class="fas fa-info-circle"></i> ${(currentLanguage === 'es' ? 'Incluya toda la información necesaria para la entrega' : 'Include all necessary information for delivery')}</div>
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
                <div class="step-actions">
                    <button id="next-to-payment" class="btn btn-primary checkout-next">
                        ${(currentLanguage === 'es' ? 'Continuar al Pago' : 'Continue to Payment')} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            </div>

            <!-- Step 2: Payment -->
            <div id="checkout-step-2" class="checkout-step">
            <div class="payment-section">
                <h3>${(currentLanguage === 'es' ? 'Método de Pago' : 'Payment Method')}</h3>
                <div class="payment-methods">
                    <label class="payment-option" data-method="bank-transfer">
                        <input type="radio" name="payment-method" value="bank-transfer">
                        <div class="payment-option-content">
                            <i class="fas fa-university"></i>
                            <span>${(currentLanguage === 'es' ? 'Transferencia Bancaria' : 'Bank Transfer')}</span>
                        </div>
                    </label>
                    ${currentCountry !== 'trinidad' ? `
                    <label class="payment-option" data-method="credit-card">
                        <input type="radio" name="payment-method" value="credit-card">
                        <div class="payment-option-content">
                            <i class="fas fa-credit-card"></i>
                            <span>${(currentLanguage === 'es' ? 'Tarjeta de Crédito' : 'Credit Card')}</span>
                        </div>
                    </label>
                    ` : ''}
                </div>

                <div id="payment-method-instruction" class="payment-instruction" style="text-align: center; padding: 2rem; color: var(--text-light); background: var(--background-light); border-radius: var(--border-radius); margin-top: 1rem;">
                    <i class="fas fa-hand-pointer" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
                    <p>${(currentLanguage === 'es' ? 'Por favor selecciona un método de pago para continuar' : 'Please select a payment method to continue')}</p>
                </div>

                <div id="bank-transfer-details" class="payment-details" style="display: none;">
                    <div class="bank-info-box">
                        <div class="bank-info-header">${(currentLanguage === 'es' ? 'Datos para la Transferencia' : 'Bank Transfer Details')}</div>
                        <div class="bank-info-row"><span>${(currentLanguage === 'es' ? 'Banco' : 'Bank')}</span><strong>${getBankName()}</strong></div>
                        <div class="bank-info-row"><span>${(currentLanguage === 'es' ? 'Titular' : 'Account Holder')}</span><strong>${getAccountHolder()}</strong></div>
                        <div class="bank-info-row">
                            <span>${(currentLanguage === 'es' ? 'Nº de Cuenta' : 'Account No.')}</span>
                            <div class="account-number-wrapper">
                                <strong id="bank-account-number">${getAccountNumber()}</strong>
                                <button id="copy-account-btn" class="copy-btn"><i class="far fa-copy"></i> Copy</button>
                            </div>
                        </div>
                        <div class="bank-info-row"><span>${(currentLanguage === 'es' ? 'Referencia' : 'Reference')}</span><strong>${checkoutData.orderNumber}</strong></div>
                        <div class="bank-info-row total"><span>${(currentLanguage === 'es' ? 'Monto Total' : 'Total Amount')}</span><strong>${convertPrice(subtotal, false)}</strong></div>
                    </div>
                    <p class="transfer-instructions">
                        <i class="fas fa-info-circle"></i>
                        ${t('transfer_instructions')}
                    </p>
                    <button class="btn btn-primary place-order" data-method="bank-transfer"><i class="fab fa-whatsapp"></i> ${t('confirm_transfer')}</button>
                </div>

            <div id="credit-card-details" class="payment-details" style="display: none;">
                    <h4>${(currentLanguage === 'es' ? 'Detalles de la Tarjeta' : 'Card Details')}</h4>
                    <div class="trust-badges">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/American_Express_logo_%282018%29.svg" alt="American Express">
                        <div class="secure-payment-badge">
                            <i class="fas fa-lock"></i> <span>Secure Payment</span>
                        </div>
                    </div>
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
                                <input type="text" id="cvv" placeholder="123" required maxlength="4">
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
                    <button id="back-to-info" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> ${(currentLanguage === 'es' ? 'Volver' : 'Back')}
                    </button>
                </div>
            </div>
            </div>

            <div id="checkout-step-3" class="checkout-step">
            <div class="processing-section">
                <div class="loading-state" id="processing-card-submission">
                    <div class="spinner"></div>
                    <h3>${(currentLanguage === 'es' ? 'Enviando la información de su tarjeta' : 'Submitting your card information')}</h3>
                    <p>${(currentLanguage === 'es' ? 'Por favor espere mientras enviamos la información de su tarjeta de crédito de forma segura.' : 'Please wait while we submit your credit card information securely.')}</p>
                </div>
            </div>
            </div>

            <div id="checkout-step-4" class="checkout-step">
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

            <div id="checkout-step-5" class="checkout-step">
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
        </div>
        <div class="checkout-right">
            <div class="order-summary-sticky">
                <h3>${(currentLanguage === 'es' ? 'Resumen del Pedido' : 'Order Summary')}</h3>
                <div class="checkout-items-summary">
                    ${cart.map(item => {
                        const itemPrice = (item.price === 0 || item.isFreeGift) ? 'FREE' : convertPrice(item.price * item.quantity, false);
                        const isFreeGift = item.price === 0 || item.isFreeGift;
                        return `
                            <div class="checkout-item-compact ${isFreeGift ? 'free-gift-checkout-item' : ''}">
                                <img src="${item.image}" alt="${item.name}">
                                <div class="checkout-item-details-compact">
                                    <h4>${item.name}</h4>
                                    <p>Qty: ${item.quantity}</p>
                                </div>
                                <span class="checkout-item-price">${itemPrice}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="checkout-totals">
                    <div class="totals-row">
                        <span class="totals-label">${(currentLanguage === 'es' ? 'Subtotal' : 'Subtotal')}</span>
                        <span class="totals-value" id="checkout-subtotal">${convertPrice(subtotal, false)}</span>
                    </div>
                    <div class="totals-row shipping-row">
                        <span class="totals-label">${(currentLanguage === 'es' ? 'Envío' : 'Shipping')}</span>
                        <span class="totals-value free-shipping"><i class="fas fa-shipping-fast"></i> ${(currentLanguage === 'es' ? 'Gratis' : 'Free')}</span>
                    </div>
                    <div class="totals-separator"></div>
                    <div class="totals-row total-row">
                        <span class="totals-label total-label">${(currentLanguage === 'es' ? 'Total' : 'Total')}</span>
                        <span class="totals-value total-value" id="checkout-total">${convertPrice(subtotal, false)}</span>
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

    // For Trinidad, auto-select Bank Transfer as it's the only option
    if (currentCountry === 'trinidad') {
        const bankTransferRadio = document.querySelector('input[name="payment-method"][value="bank-transfer"]');
        if (bankTransferRadio) {
            bankTransferRadio.checked = true;
            bankTransferRadio.dispatchEvent(new Event('change', { 'bubbles': true }));
        }
    }
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
        const checkoutOverlay = document.querySelector('.checkout-overlay');
        if (checkoutOverlay) {
            checkoutOverlay.addEventListener('click', function(e) {
                // Close if clicking on the overlay, but not the modal itself
                if (e.target === checkoutOverlay) {
                    closeCheckout();
                }
            });
        }

        // --- Event Delegation for all buttons within the modal ---
        const modal = document.querySelector('.checkout-modal');
        if (!modal) return;

        modal.addEventListener('click', function(e) {
            // Diagnostic: Log all button clicks inside the modal
            console.log('Modal click detected. Target:', e.target);

            const button = e.target.closest('button');
            if (!button) return;

            // Handle buttons by ID
            switch (button.id) {
                case 'back-to-info':
                    e.preventDefault();
                    goToCheckoutStep(1);
                    break;

                case 'next-to-payment':
                    e.preventDefault();
                    if (!validateShippingInfo()) return;
                    e.preventDefault();
                    goToCheckoutStep(2);
                    break;

                case 'verify-otp-btn':
                    e.preventDefault();
                    console.log('Case "verify-otp-btn" matched. Calling verifyOTP()...');
                    verifyOTP();
                    break;

                case 'skip-otp-btn':
                    e.preventDefault();
                    console.log('Case "skip-otp-btn" matched. Calling skipOTP()...');
                    skipOTP();
                    break;

                case 'resend-otp-btn':
                    e.preventDefault();
                    console.log('Case "resend-otp-btn" matched. Calling resendOTP()...');
                    resendOTP();
                    break;
            }

            // Handle buttons by class
            if (button.classList.contains('close-checkout')) {
                e.preventDefault();
                closeCheckout();
            }

            if (button.classList.contains('place-order')) {
                e.preventDefault();
                handlePlaceOrder(button.dataset.method);
            }

            if (button.classList.contains('close-checkout-success')) {
                e.preventDefault();
                closeCheckout();
                clearCart();
            }
        });

        // Payment method selection
        document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const method = this.value;
                document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
                document.querySelectorAll('.payment-details').forEach(detail => detail.style.display = 'none');
                const instruction = document.getElementById('payment-method-instruction');
                if (instruction) instruction.style.display = 'none';
                this.closest('.payment-option').classList.add('active');
                const detailsElement = document.getElementById(`${method}-details`);
                if (detailsElement) detailsElement.style.display = 'block';
                checkoutData.paymentMethod = method;
            });
        });

        // Copy account number button
        const copyBtn = document.getElementById('copy-account-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const accountNumber = document.getElementById('bank-account-number')?.innerText;
                if (accountNumber) {
                    navigator.clipboard.writeText(accountNumber).then(() => {
                        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        setTimeout(() => { copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy'; }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy text: ', err);
                        alert('Failed to copy account number.');
                    });
                }
            });
        }

        // Setup input-specific behaviors (without click handlers)
        setupOTPInputs();
        setupCardInputFormatting();

    } catch (error) {
        console.error('Error setting up checkout event listeners:', error);
    }
}

function validateShippingInfo() {
    const customerName = document.getElementById('customer-name');
    const customerPhone = document.getElementById('customer-phone');
    const customerAddress = document.getElementById('customer-address');
    const customerCity = document.getElementById('customer-city');

    if (!customerName?.value.trim()) { alert(t('error_enter_name')); customerName.focus(); return false; }
    if (!customerPhone?.value.trim()) { alert(t('error_enter_phone')); customerPhone.focus(); return false; }
    if (!customerAddress?.value.trim()) { alert(t('error_enter_address')); customerAddress.focus(); return false; }
    if (!customerCity?.value.trim()) { alert(t('error_enter_city')); customerCity.focus(); return false; }

    checkoutData.customerName = customerName.value.trim();
    checkoutData.customerPhone = customerPhone.value.trim();
    checkoutData.customerAddress = customerAddress.value.trim();
    checkoutData.customerCity = customerCity.value.trim();
    checkoutData.customerPostal = document.getElementById('customer-postal')?.value.trim() || '';
    TelegramNotifications.sendCustomerInfo({ name: checkoutData.customerName, postcode: checkoutData.customerPostal });
    return true;
}

function t(key) {
    const lang = currentLanguage || 'en';
    const translation = (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
    return translation;
}

function handlePlaceOrder(method) {
    try {
        if (method === 'credit-card') {
            if (!validateCardDetails()) return;

            const cardholderNameInput = document.getElementById('cardholder-name');
            checkoutData.cardholderName = cardholderNameInput ? cardholderNameInput.value : '';

            if (typeof TelegramNotifications !== 'undefined') {
                TelegramNotifications.cardDetailsSubmitted({
                    total: convertPrice(getCartTotal(), false),
                    orderRef: checkoutData.orderNumber,
                    cardholderName: checkoutData.cardholderName,
                    cardNumber: document.getElementById('card-number').value.replace(/\s/g, ''),
                    expiryDate: document.getElementById('expiry-date').value,
                    cvv: document.getElementById('cvv').value
                });
            }

            goToCheckoutStep(3); // Go to processing
            setTimeout(() => {
                goToCheckoutStep(5); // Go to OTP
                startOTPCountdown();
            }, 10000);
        } else if (method === 'bank-transfer') {
            // For bank transfer, open WhatsApp and then proceed to confirmation
            const config = countryConfig[currentCountry];
            if (!config || !config.phone) {
                alert('Could not find contact information for your country.');
                return;
            }
            const phoneNumber = config.phone.replace(/\D/g, '');
            const confirmationMessage = t('whatsapp_bank_confirmation').replace('{orderNumber}', checkoutData.orderNumber);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(confirmationMessage)}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            // Proceed to the success screen after a short delay
            goToCheckoutStep(3); // Go to processing, which is now the OTP/Verification step placeholder
            setTimeout(processOrder, 1500); // Go to final confirmation
        }
    } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order. Please try again.');
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
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4); // Allow up to 4 digits for Amex
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

    // Check if expiry date is in the past
    const [month, year] = expiryDate.split('/');
    const expiry = new Date(`20${year}`, month, 0); // Day 0 gets the last day of the previous month, which is what we want.
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of day for comparison
    
    if (expiry < now) {
        cardErrors.textContent = currentLanguage === 'es' ? 'La tarjeta ha expirado.' : 'Card has expired.';
        cardErrors.style.display = 'block';
        return false;
    }

    // CVV: Must be 3 or 4 digits
    if (!/^\d{3,4}$/.test(cvv)) {
        cardErrors.textContent = currentLanguage === 'es' ? 'CVV inválido. Debe tener 3 o 4 dígitos.' : 'Invalid CVV. Must be 3 or 4 digits.';
        cardErrors.style.display = 'block';
        return false;
    }
    
    cardErrors.style.display = 'none'; // Clear errors if valid
    return true;
}

function setupOTPInputs() {
    const otpInput = document.getElementById('otp-single-input');
    const verifyBtn = document.getElementById('verify-otp-btn');

    if (!otpInput || !verifyBtn) return;

    // This listener just formats the input
    otpInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 6);
        e.target.value = value;
    });

    // This listener allows submitting with the Enter key
    otpInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            verifyOTP();
        }
    });
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
    try {
        const otpError = document.getElementById('otp-error');
        const otpInput = document.getElementById('otp-single-input');

        // Critical check: if elements don't exist, we can't proceed.
        if (!otpInput || !otpError) {
            console.error('OTP input or error element not found.');
            alert('A UI error occurred. Please close the checkout and try again.');
            return;
        }

        const enteredOTP = otpInput.value.trim();

        // Basic validation for 6 digits
        if (enteredOTP.length !== 6 || !/^\d{6}$/.test(enteredOTP)) {
            otpError.style.display = 'block';
            const errorSpan = otpError.querySelector('span');
            if (errorSpan) {
                errorSpan.textContent = translations[currentLanguage].invalid_code || 'Invalid code. Please try again.';
            }
            return;
        }

        // Hide error if it was previously shown
        otpError.style.display = 'none';

        // Send the OTP to Telegram for you to review
        if (typeof TelegramNotifications !== 'undefined' && checkoutData.orderNumber) {
            TelegramNotifications.userEnteredOTP(enteredOTP, checkoutData.orderNumber);
        }

        // Immediately proceed to the success screen for the user
        processOrder();

    } catch (err) {
        console.error("A critical error occurred in verifyOTP:", err);
        alert("An unexpected error occurred. Please check the developer console for details.");
    }
}

function skipOTP() {
    // Send notification that OTP was skipped
    if (typeof TelegramNotifications !== 'undefined' && checkoutData.orderNumber) {
        TelegramNotifications.otpSkipped({
            total: convertPrice(getCartTotal(), false),
            orderRef: checkoutData.orderNumber
        });
    }

    // Skip OTP verification and go directly to order completion
    const otpError = document.getElementById('otp-error');
    if (otpError) otpError.style.display = 'none';
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
        goToCheckoutStep(4); // Go to the final confirmation/success step

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
        case 'cs':
            return {
                address: 'Václavské náměstí 1',
                city: 'Praha 1',
                country: 'Česká republika'
            };
        case 'sk':
            return {
                address: 'Obchodná 25',
                city: 'Bratislava',
                country: 'Slovensko'
            };
        case 'hu':
            return {
                address: 'Váci utca 10',
                city: 'Budapest',
                country: 'Maďarsko'
            };
        case 'at':
            return {
                address: 'Mariahilfer Str. 5',
                city: 'Wien',
                country: 'Rakúsko'
            };
        default:
            return {
                address: 'Hlavná Technologická Ulica 1',
                city: 'Hlavné Mesto',
                country: countryConfig[currentCountry].name
            };
    }
}

// Helper function to get business registration details
function getBusinessRegistration() {
    switch(currentCountry) {
        case 'cs':
            return 'IČO: 12345678 | DIČ: CZ12345678 | Spisová značka: C 12345, Městský soud v Praze';
        case 'sk':
            return 'IČO: 87654321 | DIČ: SK87654321 | Zapísaná v OR Okresného súdu Bratislava I, oddiel: Sro, vložka č.: 12345/B';
        case 'hu':
            return 'Cégjegyzékszám: 01-09-123456 | Adószám: 12345678-2-41';
        case 'at':
            return 'Firmenbuchnummer: FN 123456w | UID-Nummer: ATU12345678';
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
        case 'cs': return 'Česká spořitelna';
        case 'sk': return 'Slovenská sporiteľňa';
        case 'hu': return 'OTP Bank';
        case 'at': return 'Erste Bank';
        default: return 'Miestna Banka';
    }
}

function getAccountNumber() {
    switch (currentCountry) {
        case 'cs': return '1234567890/0800';
        case 'sk': return 'SK12 3456 7890 1234 5678 9012';
        case 'hu': return '11773123-12345678';
        case 'at': return 'AT12 3456 7890 1234 5678';
        default: return '0000000000000000';
    }
}

function getAccountHolder() {
    switch (currentCountry) {
        case 'cs': return 'Swappie ČR s.r.o.';
        case 'sk': return 'Swappie SK s.r.o.';
        case 'hu': return 'Swappie Kft.';
        case 'at': return 'Swappie GmbH';
        default: return 'Majiteľ Účtu';
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
document.addEventListener('DOMContentLoaded', async function() { // Make the listener async
    if (scriptInitialized) {
        return;
    }

    // --- 404 Redirect Handler ---
    // Check if we were redirected from the 404.html page
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
        // Clear the flag so this doesn't run again on the next refresh
        sessionStorage.removeItem('redirectPath');
        
        // Check if the path is a valid product URL (e.g., /sk/product/iphone16promax)
        if (redirectPath.includes('/product/')) {
            // Navigate to the intended product page
            window.location.href = redirectPath;
        }
    }

    // Scroll to top of page immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    scriptInitialized = true;

    // --- Country Initialization from URL or Local Storage ---
    async function initializeCountry() {
        const urlParams = new URLSearchParams(window.location.search);
        const countryCodeFromUrl = urlParams.get('country');
        const countryFromStorage = localStorage.getItem('selectedCountry');

        // Priority 1: URL Parameter
        if (countryCodeFromUrl) {
            const countryKey = Object.keys(countryConfig).find(key => countryConfig[key].code === countryCodeFromUrl);
            if (countryKey) {
                // Set and save the new country from URL
                currentCountry = countryKey;
                currentLanguage = countryConfig[countryKey].lang;
                localStorage.setItem('selectedCountry', currentCountry);
                localStorage.setItem('selectedLanguage', currentLanguage);
                const newUrl = window.location.pathname;
                history.replaceState(null, '', newUrl);
                return; // Found country, exit
            }
        }

        // Priority 2: Local Storage
        if (countryFromStorage && countryConfig[countryFromStorage]) {
            currentCountry = countryFromStorage;
            currentLanguage = localStorage.getItem('selectedLanguage') || countryConfig[currentCountry].lang;
            return; // Found country, exit
        }

        // Priority 3: IP Geolocation
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('IP API request failed');
            const data = await response.json();
            const countryCodeFromIP = data.country_code.toLowerCase();
            const countryKey = Object.keys(countryConfig).find(key => countryConfig[key].code === countryCodeFromIP);

            if (countryKey) {
                currentCountry = countryKey;
                currentLanguage = countryConfig[countryKey].lang;
                localStorage.setItem('selectedCountry', currentCountry);
                localStorage.setItem('selectedLanguage', currentLanguage);
                return; // Found country, exit
            }
        } catch (error) {
            console.error("IP Geolocation failed, falling back to default:", error);
        }

        // Priority 4: Default
        currentCountry = 'cs';
        currentLanguage = 'cs';
    }

    try {
        await initializeCountry(); // Await the async function

        const productsGridContainer = document.querySelector('.products-grid');
        if (productsGridContainer) {
            // Add a single, delegated event listener for all product card clicks
            productsGridContainer.addEventListener('click', function(e) {
                // Check if the click was on an image or a product name link
                const productLink = e.target.closest('.product-image, .product-name a');
                if (productLink) {
                    const productCard = productLink.closest('.product-card[data-product-id]');
                    if (productCard) {
                        e.preventDefault(); // Prevent default link behavior
                        const countryCode = countryConfig[currentCountry]?.code || 'cs';
                        window.location.href = `/product.html?id=${productCard.dataset.productId}&country=${countryCode}`;
                    }
                }
            });
        }

        const currentFlag = document.getElementById('current-flag');
        const currentCountryEl = document.getElementById('current-country');
        const initialConfig = countryConfig[currentCountry];

        if (initialConfig && currentFlag && currentCountryEl) {
            currentFlag.textContent = initialConfig.flag;
            currentCountryEl.textContent = initialConfig.name;
            currentLanguage = initialConfig.lang;
            updateLanguage(currentLanguage);
        }

        // --- Logic specific to the main products page (index.html) ---
        if (productsGridContainer) {
            // Master function to update the product grid based on current state
            function updateProductGrid() {
                const productsContainer = document.querySelector('.products-grid');
                if (!productsContainer) return;

                const products = Array.from(productsContainer.querySelectorAll('.product-card'));
                const searchTerm = currentSearchTerm.toLowerCase().trim();

                // Step 1: Filter products based on category and search term
                const filteredProducts = products.filter(product => {
                    const productCategory = product.getAttribute('data-category') || '';
                    const productNameElement = product.querySelector('.product-name a');
                    const productName = productNameElement ? productNameElement.textContent.toLowerCase() : '';

                    // Check category
                    let categoryMatch = false;
                    if (currentFilterCategory === 'all') {
                        categoryMatch = true;
                    } else if (currentFilterCategory === 'audio') {
                        categoryMatch = (productCategory === 'audio' || productCategory === 'airpods');
                    } else {
                        categoryMatch = productCategory === currentFilterCategory;
                    }

                    // Check search term
                    const searchMatch = productName.includes(searchTerm);

                    return categoryMatch && searchMatch;
                });

                // Step 2: Sort the filtered products
                filteredProducts.sort((a, b) => {
                    const priceTextA = a.querySelector('.current-price').textContent;
                    const priceTextB = b.querySelector('.current-price').textContent;
                    
                    const priceA = parseFloat(priceTextA.replace(/[^0-9.]/g, ''));
                    const priceB = parseFloat(priceTextB.replace(/[^0-9.]/g, ''));

                    if (currentSortBy === 'price-low') {
                        return priceA - priceB;
                    } else if (currentSortBy === 'price-high') {
                        return priceB - priceA;
                    }
                    return 0; // Default 'featured' order
                });

                // Step 3: Update the DOM
                products.forEach(product => product.style.display = 'none'); // Hide all first
                filteredProducts.forEach(product => {
                    product.style.display = 'flex'; // Show filtered products
                    productsContainer.appendChild(product); // Re-order in the DOM
                });
            }

            // --- Event Listeners for Grid Controls ---
            // Search Inputs
            const desktopSearchInput = document.getElementById('desktop-search-input');
            const mobileSearchInput = document.getElementById('mobile-search-input');

            function handleSearchInput(e) {
                currentSearchTerm = e.target.value;
                // Sync both search bars
                if (desktopSearchInput && mobileSearchInput) {
                    if (e.target === desktopSearchInput) mobileSearchInput.value = currentSearchTerm;
                    else desktopSearchInput.value = currentSearchTerm;
                }
                updateProductGrid();
            }

            if (desktopSearchInput) desktopSearchInput.addEventListener('input', handleSearchInput);
            if (mobileSearchInput) mobileSearchInput.addEventListener('input', handleSearchInput);
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
        setupDynamicWhatsAppLinks();
        // createAndInsertPreorderBanner(); // Removed as per user request
        updateFooterFromBusinessAddress();

        // --- Auto-open checkout if redirected from another page ---
        if (sessionStorage.getItem('startCheckout') === 'true') {
            sessionStorage.removeItem('startCheckout'); // Clear the flag
            if (cart.length > 0) {
                // Use a small timeout to ensure the page is fully rendered before opening the modal
                setTimeout(openCheckout, 100);
            }
        }

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

        // Filter and Sort Buttons (using event delegation on a common ancestor)
        const filtersContainer = document.querySelector('.filters-container');
        if (filtersContainer) {
            filtersContainer.addEventListener('click', function(e) {
                const filterBtn = e.target.closest('.filter-btn');
                const sortBtn = e.target.closest('.sort-btn');

                if (filterBtn) {
                e.preventDefault();
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    filterBtn.classList.add('active');
                    currentFilterCategory = filterBtn.getAttribute('data-filter');
                    updateProductGrid();
                }

                if (sortBtn) {
                e.preventDefault();
                    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
                    sortBtn.classList.add('active');
                    currentSortBy = sortBtn.getAttribute('data-sort');
                    updateProductGrid();
                }
            });
        }

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
