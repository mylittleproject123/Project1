// Country configuration - check if already defined to prevent duplicate declaration
const countryConfig = {
    cs: { flag: '🇨🇿', name: 'Česko', currency: 'CZK', rate: 25, lang: 'cs', phone: '+420 123 456 789', code: 'cs' },
    sk: { flag: '🇸🇰', name: 'Slovensko', currency: 'EUR', rate: 1, lang: 'sk', phone: '+421 123 456 789', code: 'sk' },
    hu: { flag: '🇭🇺', name: 'Magyarország', currency: 'HUF', rate: 390, lang: 'hu', phone: '+36 1 123 4567', code: 'hu' },
    at: { flag: '🇦🇹', name: 'Österreich', currency: 'EUR', rate: 1, lang: 'de', phone: '+43 1 1234567', code: 'at' }
};

// Translation data
const translations = {
    sk: {
   home: "Domov",
  products: "Produkty",
  about: "O nás",
  contact: "Kontakt",
  hero_title: "Najlepšia technológia za najlepšiu cenu",
  hero_subtitle: "Objavte náš prémiový výber repasovaných zariadení s plnou zárukou a odbornou technickou podporou. Kvalitná technika za výnimočné ceny.",
  shop_now: "Nakupovať teraz",
  benefit_free_shipping: "Doprava zdarma a doručenie nasledujúci deň",
  benefit_warranty: "Záruka 1 rok",
  benefit_return: "Vrátenie do 30 dní",
  benefit_accessories: "Príslušenstvo v cene",
  whatsapp_title: "Chcete vymeniť za nižší model alebo potrebujete viac informácií?",
  whatsapp_subtitle: "Chat s našimi odborníkmi na WhatsApp pre personalizované odporúčania a okamžitú podporu",
  whatsapp_button: "Chatovať na WhatsApp",
  featured_products: "Odporúčané Produkty",
  all: "Všetky",
  iphones: "iPhony",
  samsung: "Samsung",
  audio: "Audio",
  accessories: "Príslušenstvo",
  add_to_cart: "Pridať do košíka",
  available_in: "Dostupné v:",
  free_shipping: "Doprava zdarma a doručenie nasledujúci deň",
  benefit_free_shipping_desc: "Na všetky objednávky",
  benefit_warranty: "Záruka 1 rok",
  benefit_warranty_desc: "Na všetky produkty",
  benefit_return: "Vrátenie do 30 dní",
  benefit_return_desc: "Plné vrátenie peňazí garantované",
  benefit_accessories: "Príslušenstvo v cene",
  benefit_accessories_desc: "Kábel, krabica a ochranné sklo zdarma",
  free_shipping_all: "Doprava zdarma a doručenie nasledujúci deň na všetky objednávky",
  new: "Nové!",
  certified: "Certifikované!",
  hot: "Populárne!",
  bestseller: "Najpredávanejšie!",
  deal: "Ponuka!",
  value: "Výhodné!",
  premium: "Prémiové!",
  top_rated: "Najlepšie hodnotené!",
  popular: "Populárne!",
  budget: "Rozumné!",
  shopping_cart: "Nákupný košík",
  empty_cart: "Váš košík je prázdny",
  subtotal: "Medzisúčet:",
  shipping: "Doprava:",
  total: "Celkovo:",
  checkout: "Prejsť k platbe",
 continue_shopping: "Pokračovať v nákupe",
  order_summary: "Zhrnutie objednávky",
  order_ref: "Referenčné číslo:",
  bank_transfer: "Bankový prevod",
  credit_card: "Kreditná karta",
  bank_details: "Bankové údaje",
  account_number: "Číslo účtu:",
  account_holder: "Majiteľ účtu:",
  reference: "Referencia:",
  transfer_instructions: "Vykonajte prevod na celkovú sumu a pošlite nám potvrdenie cez WhatsApp pre rýchlejšie odoslanie.",
  confirm_transfer: "Odoslať potvrdenie platby",
  bank_name: "Banka:",
  card_details: "Detaily karty",
  accepted: "Prijímané:",
  secure_payment: "100% bezpečná a overená platba",
  cardholder_name: "Meno držiteľa karty",
  card_number: "Číslo karty",
  expiry_date: "Dátum platnosti",
  cvc: "CVV",
  ssl_secured: "SSL zabezpečené pripojenie – Vaše údaje sú chránené",
  place_order: "Zrealizovať objednávku",
  delivery_inspection_notice: "Odporúčame všetkým zákazníkom dôkladne skontrolovať objednávku pri doručení od dopravcu. Ak zistíte, že predmet nie je uspokojivý alebo nie je taký, ako ste očakávali, máte právo odmietnuť prijatie balíka. V prípade odmietnutia ste oprávnení na úplné vrátenie zaplatenej sumy podľa našej politiky vrátenia.",
  processing_secure: "Bezpečné spracovanie",
  processing_order: "Spracovávame vašu objednávku...",
  processing_wait: "Prosím, nezatvárajte toto okno",
  validating_payment: "Overujeme platobnú metódu",
  confirming_inventory: "Potvrdzujeme dostupnosť",
  generating_order: "Generujeme objednávku",
  order_confirmed: "Objednávka potvrdená!",
  order_success_msg: "Vaša objednávka bola úspešne spracovaná. Dostanete WhatsApp správu s detailmi.",
  order_number: "Číslo objednávky:",
  order_total: "Celková suma:",
  payment_method: "Spôsob platby:",
  estimated_delivery: "Odhadované doručenie:",
  price_high_to_low: "Cena: od najvyššej po najnižšiu",
  price_low_to_high: "Cena: od najnižšej po najvyššiu",
  featured: "Odporúčané",
  storage: "Ukladanie",
  condition: "Stav",
  required: "*Vyžadované",
  condition_guide: "Sprievodca stavom:",
  condition_guide_desc: "Lepšie stavy označujú menšie opotrebenie a lepší vzhľad zariadenia.",
  terms_agreement: "Súhlasím s",
  terms_and_conditions: "Všeobecnými podmienkami",
  quantity: "Množstvo:",
  details: "Detaily",
  choose_type: "Vybrať typ",
  security_verification: "Bezpečnostné overenie",
  verify_payment: "Overiť platbu",
  otp_sent: "Odoslali sme 6‑místny overovací kód na váš telefón. Prosím, zadajte ho nižšie, aby ste dokončili nákup.",
  code_expires: "Kód vyprší za: ",
  verify_code: "Overiť kód",
  spacegray: "Košmálne sivá",
  product_title: "Produkt",
  warranty_title: "12 mesiacov záruky",
  warranty_desc: "Plná záruka s technickou podporou v cene",
  key_features: "Hlavné vlastnosti",
  technical_specs: "Technické špecifikácie",
  color: "Farba",
  delivery_time: "Doba doručenia",
  days_return: "14‑dňová politika vrátenia",
  model: "Model",
  battery: "Batéria",
  operating_system: "Operačný systém",
  screen_size: "Veľkosť displeja",
  camera: "Fotoaparát",
  processor: "Procesor",
  ram: "RAM",
  spec_display: "Displej",
  spec_processor: "Procesor",
  spec_storage: "Ukladanie",
  spec_ram: "RAM",
  spec_main_camera: "Hlavný fotoaparát",
  spec_ultrawide_camera: "Ultraširoký fotoaparát",
  spec_telephoto_camera: "Telefoto fotoaparát",
  spec_battery: "Batéria",
  spec_os: "Systém",
  spec_connectivity: "Konektivita",
  spec_resistance: "Odolnosť voči vode a prachu",
  spec_dimensions: "Rozmery",
  spec_weight: "Hmotnosť",
  spec_condition: "Stav",
  spec_battery_health: "Zdravie batérie",
  spec_battery_health_value: "90 % garantované",
  spec_condition_certified: "Certifikovaný repasovaný",
  iphone16promax_name: "iPhone 16 Pro Max",
  galaxys25ultra_name: "Samsung Galaxy S25 Ultra",
  galaxys24ultra_name: "Samsung Galaxy S24 Ultra",
  galaxys24plus_name: "Samsung Galaxy S24 Plus",
  galaxys23ultra_name: "Samsung Galaxy S23 Ultra",
  galaxys22ultra_name: "Samsung Galaxy S22 Ultra",
  samsung_desc: "Výkonný výkon s pôsobivým displejom a výdržou batérie. Perfektný na prácu, hry aj každodenné použitie.",
  premium: "Prémiové!",
  top_rated: "Najhodnotenejšie!",
  popular: "Populárne!",
  feature_battery_title: "Vysoká výdrž batérie",
  feature_battery_desc: "Výkon po celý deň",
  feature_chip_title: "Výkonný procesor",
  feature_chip_desc: "Rýchly a efektívny",
  feature_camera_title: "Vysoké rozlíšenie fotoaparátu",
  feature_camera_desc: "Výborná kvalita fotografií",
  feature_display_title: "Jasný displej",
  feature_display_desc: "Klaritné vizuály",
  feature_6_5_display_title: "6.5\" Super Retina",
  feature_6_5_display_desc: "Veľký OLED displej",
  feature_a12_chip_title: "Čip A12 Bionic",
  feature_a12_chip_desc: "Rýchly a efektívny",
  iphone16_name: "iPhone 16",
  iphone15promax_name: "iPhone 15 Pro Max",
  iphone16e_name: "iPhone 16 e",
  iphone15_name: "iPhone 15",
  iphone14promax_name: "iPhone 14 Pro Max",
  iphone13promax_name: "iPhone 13 Pro Max",
  iphone12promax_name: "iPhone 12 Pro Max",
  iphone11promax_name: "iPhone 11 Pro Max",
  iphonexr_name: "iPhone XR",
  certified: "Certifikované!",
  hot: "Populárne!",
  bestseller: "Najpredávanejšie!",
  deal: "Ponuka!",
  value: "Výhodné!",
  choose_type: "Vybrať typ",
  galaxya545g_name: "Samsung Galaxy A54 5G",
  galaxya35_name: "Samsung Galaxy A35",
  galaxya155g_name: "Samsung Galaxy A15 5G",
  galaxya05s_name: "Samsung Galaxy A05s",
  galaxym15_name: "Samsung Galaxy M15",
  galaxym14_name: "Samsung Galaxy M14",
  color_peach: "Broskyňová",
  color_green: "Zelená",
  color_blue: "Modrá",
  color_copper: "Medená",
  redmi14c_name: "Xiaomi Redmi 14C",
  redminote14pro5g_name: "Xiaomi Redmi Note 14 Pro 5G",
  pocox7pro_name: "Xiaomi Poco X7 Pro",
  color_midnight_black: "Polnočná čierna",
  color_sage_green: "Šalviová zelená",
  feature_processor_title: "Efektívny procesor",
  feature_processor_desc: "Rovnováha medzi výkonom a batériou",
  airpods_desc: "Užite si priestorový zvuk so sledovaním hlavy, odolnosťou proti potu a vode a až 6 hodín prehrávania.",
  earphones_desc: "Štandardné káblové slúchadlá, čistý zvuk, ľahký dizajn a univerzálna kompatibilita.",
  jbl_speakerss_desc: "Prenosné JBL reproduktory odolné voči vode, s výkonnými basmi a Bluetooth pripojením pre hudbu kdekoľvek.",
  jbl_headphones_desc: "Výkonný zvuk JBL s hlbokými basmi, pohodlným dizajnom a dlhou výdržou batérie na celodenné počúvanie.",
  new: "Nové!",
  certified: "Certifikované!",
  hot: "Populárne!",
  bestseller: "Najpredávanejšie!",
  deal: "Ponuka!",
  value: "Výhodné!",
  premium: "Prémiové!",
  top_rated: "Najhodnotenejšie!",
  popular: "Populárne!",
  feature_battery_title: "Výdrž batérie",
  feature_battery_desc: "Výkon počas celého dňa",
  feature_chip_title: "Výkonný čip",
  feature_chip_desc: "Rýchly a výkonný",
  feature_camera_title: "Kvalitná kamera",
  feature_camera_desc: "Vynikajúca fotografia",
  feature_display_title: "Ostrý displej",
  feature_display_desc: "Klaritné vizuály",
  iphone_feature_battery_title: "Batéria 29 h",
  iphone_feature_battery_desc: "Prehrávanie videa",
  iphone_feature_chip_title: "Čip A18 Pro",
  iphone_feature_chip_desc: "Revolučný výkon",
  iphone_feature_camera_title: "48 MP kamera",
  iphone_feature_camera_desc: "Pro kamerový systém",
  iphone_feature_display_title: "6,9\" ProMotion",
  iphone_feature_display_desc: "Super Retina XDR",
  split_payment_select_product: "1. Vyber produkt",
  split_payment_choose_product: "-- Vyber produkt --",
  split_payment_select_storage: "2. Vyber úložisko",
  split_payment_choose_storage: "-- Vyber úložisko --",
  split_payment_select_color: "3. Vyber farbu",
  split_payment_choose_color: "-- Vyber farbu --",
  split_payment_choose_plan: "4. Vyber svoj plán",
  split_payment_month_interest: "{months} mesiacov (+{interest}% úrok)",
  split_payment_summary: "Zhrnutie platby",
  split_payment_product_price: "Cena produktu",
  split_payment_interest_rate: "Úroková sadzba",
  split_payment_new_total: "Nová celková cena",
  split_payment_deposit: "Záloha (50%)",
  split_payment_remaining: "Zostávajúca suma",
  split_payment_monthly: "Mesačná platba:",
  split_payment_your_info: "5. Vaše údaje",
  split_payment_info_desc: "Prosím, zadajte svoje údaje. Tieto informácie sú potrebné na spracovanie vášho splátkového plánu.",
  split_payment_full_name: "Celé meno",
  split_payment_email: "E‑mail",
  split_payment_phone: "Telefónne číslo (WhatsApp)",
  split_payment_address: "Adresa doručenia",
  split_payment_upload_id: "Nahrajte fotku svojho dokladu totožnosti",
  split_payment_agreement_title: "6. Súhlas so splátkovým plánom",
  split_payment_agreement_intro: "Pokračovaním súhlasíte s nasledovnými podmienkami:",
  split_payment_term_1: "Súhlasíte so zaplatením 50 % zálohy z celkovej sumy dnes. Táto záloha je vratná podľa našej 30‑dňovej garancie vrátenia.",
  split_payment_term_2: "Zostávajúca suma sa uhradí v mesačných rovnakých splátkach počas zvoleného obdobia.",
  split_payment_term_3: "Na pôvodnú cenu produktu sa aplikuje úroková sadzba, ako je uvedené v zhrnutí.",
  split_payment_term_4: "Produkt bude odoslaný hneď po potvrdení platby zálohy 50 %.",
  split_payment_term_5: "Ak nebudete platiť mesačné splátky včas, môžu byť uplatnené poplatky z omeškania alebo môže dôjsť k odobratiu zariadenia.",
  split_payment_term_6: "Všetky platby podliehajú našej 30‑dňovej garancii vrátenia. Pozrite si prosím naše kompletné Všeobecné podmienky pre viac detailov.",
  split_payment_agree_checkbox: "Prečítal(a) som si a súhlasím s podmienkami pri pokračovaní so zálohou.",
  split_payment_download_draft: "Stiahnuť návrh zmluvy",
  split_payment_what_next: "Čo bude ďalej?",
  split_payment_what_next_desc: "Po zaplatení 50 % zálohy vás náš tím kontaktuje cez WhatsApp, aby potvrdil vašu platbu. Po potvrdení bude telefón okamžite odoslaný.",
  split_payment_what_next_signature: "Kópia konečnej zmluvy na podpis bude poskytnutá pri doručení.",
  split_payment_pay_deposit: "Zaplatiť zálohu a začať plán",
  split_payment_monthly_value: "{price} x {months} mesiacov",
  galaxys21ultra_name: "Samsung Galaxy S21 Ultra 5G",
  galaxys21plus_name: "Samsung Galaxy S21+ 5G",
  resend_code: "Znovu odoslať kód",
  color_white: "Biela",
  color_black: "Čierna",
  color_black_titanium: "Čierny titán",
  color_desert_titanium: "Púštny titán",
  color_gold: "Zlatá",
  color_silver: "Strieborná",
  color_icy_blue: "Ľadovo modrá",
  color_violet: "Fialová",
  color_gray: "Sivá",
  color_starlight: "Hviezdna biela",
  color_sierra_blue: "Horská modrá",
  color_space_gray: "Vesmírna šedá",
  color_mystic_bronze: "Mystická bronzová",
  color_mystic_green: "Mystická zelená",
  color_mystic_black: "Mystická čierna",
  color_aura_red: "Aura červená",
  color_aura_glow: "Aura žiara",
  color_aura_black: "Aura čierna",
  color_prism_white: "Prizmatická biela",
  color_cloud_navy: "Oblačná modrá",
  color_cosmic_gray: "Kozmická šedá",
  color_phantom_silver: "Fantómová strieborná",
  color_phantom_black: "Fantómová čierna",
  color_phantom_navy: "Fantómová tmavomodrá",
  color_default: "Predvolená",
  galaxys20ultra_name: "Samsung Galaxy S20 Ultra 5G",
  galaxys20plus_name: "Samsung Galaxy S20+ 5G",
  galaxys20fe_name: "Samsung Galaxy S20 FE",
  galaxys10_name: "Samsung Galaxy S10",
  galaxynote20_name: "Samsung Galaxy Note 20",
  galaxynote10lite_name: "Samsung Galaxy Note 10 Lite",
  galaxynote10_name: "Samsung Galaxy Note 10",
  galaxynote10plus_name: "Samsung Galaxy Note 10+ 5G",
  iphonexsmax_name: "iPhone XS Max",
  motogstylus5g_name: "Motorola Moto G Stylus 5G",
  motorola_desc: "Telefón s dotykovým perom, veľkým displejom a dlhou výdržou batérie. Ideálny na poznámky a kreatívnu prácu.",
  applewatchse2_name: "Apple Watch SE (2. gen)",
  wearable_desc: "Sledujte svoju aktivitu, srdcový tep a notifikácie priamo na zápästí. Perfektný spoločník pre aktívny životný štýl.",
  galaxywatch6_name: "Samsung Galaxy Watch 6",
  miband8_name: "Xiaomi Mi Band 8",
  pocof6_name: "Xiaomi Poco F6",
  airpodspro2_name: "AirPods Pro (2. gen)",
  spec_chip: "Čip",
  spec_water_resistance: "Odolnosť voči vode",
  spec_case: "Puzdro",
  spec_spatial_audio: "Priestorový zvuk",
  spec_noise_cancellation: "Potlačenie hluku",
  value_pick: "Dobrá voľba!"
   },
    en: {
        home: "Home",
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
feature_6_5_display_title: "6.5\" Super Retina",
feature_6_5_display_desc: "Large OLED display",
feature_a12_chip_title: "A12 Bionic Chip",
feature_a12_chip_desc: "Fast and efficient",

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

galaxys25_name: "Samsung Galaxy S25",
galaxys24_name: "Samsung Galaxy S24",
galaxys23_name: "Samsung Galaxy S23",
galaxys22_name: "Samsung Galaxy S22",
redminote14_name: "Xiaomi Redmi Note 14",
redminote13pro_name: "Xiaomi Redmi Note 13 Pro",
redminote13_name: "Xiaomi Redmi Note 13",
cable_iphone_desc: "Certified charging cable for iPhone, supports fast charging.",
cable_usbc_desc: "Durable USB-C to USB-C cable for fast charging and data transfer.",
jbl_speaker_desc: "Portable Bluetooth speaker with powerful sound and waterproof design.",

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
feature_fast_charge_desc: "Quick power top‑up",
powerbank_name: "Portable Power Bank 5000mAh",
powerbank_desc: "Compact 5000mAh power bank. Fast charging for phones and small devices. LED battery indicator and multiple protection systems.",
reviews: "Reviews"
        ,
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
        galaxys21ultra_name: "Samsung Galaxy S21 Ultra 5G",
        galaxys21plus_name: "Samsung Galaxy S21+ 5G",
  resend_code: "Znovu odoslať kód",
  color_white: "Biela",
  color_black: "Čierna",
  color_black_titanium: "Čierny titán",
  color_desert_titanium: "Púštny titán",
  color_gold: "Zlatá",
  color_silver: "Strieborná",
  color_icy_blue: "Ľadovo modrá",
  color_violet: "Fialová",
  color_gray: "Sivá",
  color_starlight: "Hviezdna biela",
  color_sierra_blue: "Horská modrá",
  color_space_gray: "Vesmírna šedá",
  color_mystic_bronze: "Mystická bronzová",
  color_mystic_green: "Mystická zelená",
  color_mystic_black: "Mystická čierna",
  color_aura_red: "Aura červená",
  color_aura_glow: "Aura žiara",
  color_aura_black: "Aura čierna",
  color_prism_white: "Prizmatická biela",
  color_cloud_navy: "Oblačná modrá",
  color_cosmic_gray: "Kozmická šedá",
  color_phantom_silver: "Fantómová strieborná",
  color_phantom_black: "Fantómová čierna",
  color_phantom_navy: "Fantómová tmavomodrá",
  color_default: "Predvolená",
  galaxys20ultra_name: "Samsung Galaxy S20 Ultra 5G",
        galaxys20plus_name: "Samsung Galaxy S20+ 5G",
        galaxys20fe_name: "Samsung Galaxy S20 FE",
        galaxys10_name: "Samsung Galaxy S10",
        galaxynote20_name: "Samsung Galaxy Note 20",
        galaxynote10lite_name: "Samsung Galaxy Note 10 Lite",
        galaxynote10_name: "Samsung Galaxy Note 10",
        galaxynote10plus_name: "Samsung Galaxy Note 10+ 5G",
        iphonexsmax_name: "iPhone XS Max",
        motogstylus5g_name: "Motorola Moto G Stylus 5G",
        motorola_desc: "A phone with a stylus, large display, and long battery life. Ideal for notes and creative work.",
        applewatchse2_name: "Apple Watch SE (2nd Gen)",
        wearable_desc: "Track your activity, heart rate, and notifications right on your wrist. The perfect companion for an active lifestyle.",
        galaxywatch6_name: "Samsung Galaxy Watch 6",
        miband8_name: "Xiaomi Mi Band 8",
        pocof6_name: "Xiaomi Poco F6",
        airpodspro2_name: "AirPods Pro (2nd Gen)",
        spec_chip: "Chip",
        spec_water_resistance: "Water Resistance",
        spec_case: "Case",
        spec_spatial_audio: "Spatial Audio",
        spec_noise_cancellation: "Noise Cancellation"
    },
    // Add new spec value translations here
    spec_iphone16promax_display_value: '6.9" Super Retina XDR OLED',
    spec_iphone16promax_processor_value: "Apple A18 Pro",
    spec_iphone16promax_ram_value: "8GB",
    spec_iphone16promax_main_camera_value: "48MP f/1.78",
    spec_iphone16promax_ultrawide_camera_value: "12MP f/2.2",
    spec_iphone16promax_telephoto_camera_value: "12MP f/2.8",
    spec_iphone16promax_battery_value: "4422 mAh",
    spec_iphone16promax_os_value: "iOS 18",
    spec_iphone16promax_connectivity_value: "5G, Wi-Fi 7, Bluetooth 5.3",
    spec_iphone16promax_resistance_value: "IP68",
    spec_iphone16promax_dimensions_value: "159.9 x 76.7 x 8.25 mm",
    spec_iphone16promax_weight_value: "227g"
};
window.translations = translations; // Make it globally available


// --- Utility Functions (moved from script.js) ---

// Global variables
let currentCountry = localStorage.getItem('selectedCountry') || 'cs';
let currentLanguage = localStorage.getItem('selectedLanguage') || 'cs';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function t(key) {
    const lang = window.currentLanguage || 'en'; // fallback to English if not set
    return (window.translations[lang] && window.translations[lang][key]) ?
        window.translations[lang][key] :
        key; // fallback to key if translation is missing
}

// Currency functions
function getCurrencySymbol(country) {
    const config = countryConfig[country];
    if (!config) return '$';
    switch (config.currency) {
        case 'EUR': return '€';
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
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });
}


// Product database with detailed information
function getProductDatabase() {
    return {
  iphone16promax: {
    name: t("iphone16promax_name"),
    description: t("iphone_desc"),
    price: 799,
    originalPrice: 1000,
    discount: 25,
    category: "phone",
    variants: {
        black: {
            name: t("color_black_titanium"),
            images: [
                "https://m.media-amazon.com/images/I/61UMlmDXG+L.AC_SX466.jpg",
                "https://m.media-amazon.com/images/I/51FEms6uxOL._AC_SY445_.jpg",
                "https://m.media-amazon.com/images/I/51IT3RUIUfL._AC_SY445_.jpg"
            ]
        },
        gold: {
            name: t("color_desert_titanium"),
            images: [
                "https://m.media-amazon.com/images/I/61qYXb0BfXL._AC_SX569_.jpg",
                "https://m.media-amazon.com/images/I/61Jv4TC20sL._AC_SX425_.jpg",
                "https://m.media-amazon.com/images/I/51hcQRAZF1L._AC_SX425_.jpg"
            ]
        }
    },
    memoryOptions: {
        "256GB": { price: 799, originalPrice: 890 },
        "512GB": { price: 849, originalPrice: 950 },
        "1TB": { price: 920, originalPrice: 1100 }
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
    price: 650,
    originalPrice: 699,
    discount: 17,
    category: "phone",
    variants: {
        black: { name: t("color_black_titanium"), images: ["https://m.media-amazon.com/images/I/419CpsXXGQL.AC_SX466.jpg"] },
        white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX425_.jpg"] },
        teal: { name: t("color_blue"), images: ["https://m.media-amazon.com/images/I/71dAfxOFDuL._AC_SX425_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 650, originalPrice: 699 },
        "256GB": { price: 725, originalPrice: 799 }
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
    price: 699,
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
        "256GB": { price: 699, originalPrice: 799 },
        "512GB": { price: 759, originalPrice: 859 }
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
    price: 509,
    originalPrice: 899,
    discount: 22,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/51H8+zCj2cL._AC_SX569_.jpg"]
        },
        white: {
            name: t("color_white"),
            images: ["https://m.media-amazon.com/images/I/61Zsers1VBL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {
        "128GB": { price: 509, originalPrice: 599 },
        "256GB": { price: 620, originalPrice: 699 }
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
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY606_.jpg"]
    },
    blue: {
      name: t("color_blue"),
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
  price: 529,
  originalPrice: 699,
  discount: 39,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51wqFSpP20L._AC_SL1000_.jpg"]
    },
    gold: {
      name: t("color_gold"),
      images: ["https://m.media-amazon.com/images/I/51GZNF-UxFL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 529, originalPrice: 699 },
    "512GB": { price: 600, originalPrice: 799 }
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
  name: t("iphone14_name"),
  description: t("iphone_desc"),
  price: 399,
  originalPrice: 599,
  discount: 33,
  category: "phone",

  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51Yz9FaNIGL._AC_SL1000_.jpg"]
    },
    starlight: {
      name: t("color_starlight"),
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
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51UtM-A3fdL._AC_SX569_.jpg"]
    },
    sierraBlue: {
      name: t("color_sierra_blue"),
      images: ["https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 359, originalPrice: 599 },
    "512GB": { price: 549, originalPrice: 749 }
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
    price: 249,
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
        "256GB": { price: 249, originalPrice: 299 },
        "512GB": { price: 279, originalPrice: 399 }
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

iphonexsmax: {
    name: t("iphonexsmax_name"),
    description: t("iphone_desc"),
    price: 170,
    category: "phone",
    variants: {
        spacegray: { name: t("color_space_gray"), images: ["https://m.media-amazon.com/images/I/518PnIKjQ3L._AC_SY606_.jpg"] },
        gold: { name: t("color_gold"), images: ["https://m.media-amazon.com/images/I/61k3k4QZftL._AC_SY606_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 170, originalPrice: 220 }
    },
    features: [
        { icon: "fas fa-mobile-alt", title: t("feature_6_5_display_title"), desc: t("feature_6_5_display_desc") },
        { icon: "fas fa-microchip", title: t("feature_a12_chip_title"), desc: t("feature_a12_chip_desc") },
        { icon: "fas fa-camera", title: t("feature_camera_title"), desc: "Duálny 12MP fotoaparát" }
    ],
    specifications: {
        [t("spec_display")]: "6.5\" OLED",
        [t("spec_processor")]: "A12 Bionic",
        [t("spec_ram")]: "4GB",
    [t("spec_main_camera")]: "12MP Dual Camera",
   [t("spec_water_resistance")]: "Odolnosť voči vode",
  [t("spec_case")]: "Puzdro",
  [t("spec_spatial_audio")]: "Priestorový zvuk",
  [t("spec_noise_cancellation")]: "Potlačenie hluku",
        [t("spec_battery")]: "3174 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},


galaxys25ultra: {
  name: t("galaxys25ultra_name"),
  description: t("samsung_desc"),
  price: 1299,
  originalPrice: 1659,
  discount: 22,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg"]
    },
    silver: {
      name: t("color_silver"),
      images: ["https://m.media-amazon.com/images/I/611uRZST+vL._AC_SX569_.jpg"]
    },
    icyBlue: {
      name: t("color_icy_blue"),
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
    name: t("galaxys25_name"),
    description: t("samsung_desc"),
    price: 899,
    originalPrice: 1099,
    discount: 18,
    category: "phone",
    variants: {
        silver: {
            name: t("color_silver"),
            images: ["https://m.media-amazon.com/images/I/61C17Al0dhL._AC_SX569_.jpg"]
        },
        blue: {
            name: t("color_blue"),
            images: ["https://m.media-amazon.com/images/I/61C17Al0dhL._AC_SX569_.jpg"]
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
            name: t("color_violet"),
            images: ["https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        },
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/51A-Q4eMBxL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 599, originalPrice: 600 },
        "512GB": { price: 624, originalPrice: 630 },
		"1TB": { price: 799, originalPrice: 850 },
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
    name: t("galaxys24_name"),
    description: t("samsung_desc"),
    price: 529,
    originalPrice: 999,
    discount: 25,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61uakkLoHxL._AC_SX569_.jpg"]
        },
        gray: {
            name: t("color_gray"),
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
  name: t("galaxys23ultra_name"),
  description: t("samsung_desc"),
  price: 349,
  originalPrice: 400,
  discount: 33,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/513vXUcPFrL._AC_SX569_.jpg"]
    },
    pink: {
      name: t("color_rose_gold"),
      images: ["https://m.media-amazon.com/images/I/51GvkWOYjIL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 349, originalPrice: 399 },
    "512GB": { price: 399, originalPrice: 439 }
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
  name: t("galaxys23_name"),
  description: t("samsung_desc"),
  price: 499,
  originalPrice: 699,
  discount: 29,
  category: "phone",
  variants: {
    green: {
      name: t("color_green"),
      images: ["https://m.media-amazon.com/images/I/51xj0EFyXHL._AC_SX522_.jpg"]
    },
    cream: {
      name: t("color_white"),
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
  price: 239,
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
    "256GB": { price: 239, originalPrice: 300 }
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
  name: t("galaxys22_name"),
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

redminote14pro5g: {
  name: t("redminote14pro5g_name"),
  description: t("xiaomi_desc"),
  price: 299,
  originalPrice: 399,
  discount: 25,
  category: "phone",
  variants: {
    midnight_black: {
      name: t("color_midnight_black"),
      images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 249, originalPrice: 399 },
    "12GB + 512GB": { price: 319, originalPrice: 479 }
  },
  features: [
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-microchip", title: t("feature_processor_title"), desc: t("feature_processor_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") }
  ],
  specifications: {
    [t("spec_display")]: "6.67\" AMOLED, 1.5K, 120 Hz, 3000 nits peak",
    [t("spec_processor")]: "Dimensity 7300‑Ultra",
    [t("spec_storage")]: "256/512 GB",
    [t("spec_ram")]: "8‑12 GB",
    [t("spec_main_camera")]: "200 MP + 8 MP + 2 MP",
    [t("spec_battery")]: "5 110 mAh, 45 W",
    [t("spec_connectivity")]: "5G, Wi‑Fi 6, IP68",
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
powerbank: {
    name: t("powerbank_name"),
    description: t("powerbank_desc"),
    price: 16,
    category: "accessories",
    variants: {
        default: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61vXihj6QjL._AC_SX679_.jpg"]
        }
    },
    features: [
        { icon: "fas fa-check", title: "5000mAh Capacity" },
        { icon: "fas fa-check", title: "Fast Charging" },
        { icon: "fas fa-check", title: "LED Indicator" }
    ],
    specifications: {
        "Capacity": "5000mAh",
        "Output": "5V/2.1A",
        "Input": "5V/2A"
    }
},

screenprotector: {
    name: "Premium Gorilla Glass Screen Protection",
    description: "Professional-grade 9H hardness tempered glass screen protector with oleophobic coating technology. Crystal-clear transparency with advanced bubble-free installation system for seamless device protection.",
    price: 11.99,
    category: "accessories",
    variants: {
        default: {
            name: t("color_white"),
            images: ["https://m.media-amazon.com/images/I/61NGYQsztvL._UF1000,1000_QL80_FMwebp_.jpg"]
        }
    },
    features: [
        { icon: "fas fa-check", title: "9H Hardness" },
        { icon: "fas fa-check", title: "Bubble-Free" },
        { icon: "fas fa-check", title: "Crystal Clear" }
    ],
    specifications: {
        "Material": "Tempered Glass",
        "Hardness": "9H",
        "Compatibility": "Universal (check size)"
    }
},

motogstylus5g: {
    name: t("motogstylus5g_name"),
    description: t("motorola_desc"),
    price: 179,
    category: "phone",
    variants: {
        default: {
            name: t("color_default"),
            images: ["https://m.media-amazon.com/images/I/61LE9-6KxdL._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {},
    features: [],
    specifications: {}
},

applewatchse2: {
    name: t("applewatchse2_name"),
    description: t("wearable_desc"),
    price: 189,
    category: "wearables",
    variants: {
        default: {
            name: t("color_default"),
            images: ["https://m.media-amazon.com/images/I/71LfnkRgZ4L._AC_SX679_.jpg"]
        }
    },
    memoryOptions: {},
    features: [],
    specifications: {}
},

galaxywatch6: {
    name: t("galaxywatch6_name"),
    description: t("wearable_desc"),
    price: 229,
    category: "wearables",
    variants: {
        default: {
            name: t("color_default"),
            images: ["https://m.media-amazon.com/images/I/81Dm65eja8L._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {},
    features: [],
    specifications: {}
},

miband8: {
    name: t("miband8_name"),
    description: t("wearable_desc"),
    price: 39,
    category: "wearables",
    variants: {
        default: {
            name: t("color_default"),
            images: ["https://m.media-amazon.com/images/I/41zIT8cTQcL._AC_SX425_.jpg"]
        }
    },
    memoryOptions: {},
    features: [],
    specifications: {}
},

pocof6: {
    name: t("pocof6_name"),
    description: t("poco_desc"),
    price: 329,
    category: "phone",
    variants: {
        default: {
            name: t("color_default"),
            images: ["https://m.media-amazon.com/images/I/61O1Ey0bwxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        }
    },
    memoryOptions: {},
    features: [
        { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
        { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") },
        { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.67\" AMOLED, 120Hz",
        [t("spec_processor")]: "Snapdragon 8s Gen 3",
        [t("spec_ram")]: "8GB / 12GB",
        [t("spec_main_camera")]: "50MP + 8MP",
        [t("spec_battery")]: "5000 mAh"
    }
},

airpodspro2: {
    name: t("airpodspro2_name"),
    description: t("airpods_desc"),
    price: 179,
    originalPrice: 249,
    category: "audio",
    variants: {
        default: {
            name: t("color_white"),
            images: ["https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg"]
        }
    },
    memoryOptions: {},
    features: [
        { icon: "fas fa-microchip", title: t("feature_h2_chip"), desc: t("feature_h2_chip_desc") },
        { icon: "fas fa-bullhorn", title: t("feature_noise_cancellation"), desc: t("feature_noise_cancellation_desc") },
        { icon: "fas fa-water", title: t("feature_ip54"), desc: t("feature_ip54_desc") }
    ],
    specifications: {
        "Chip": "H2",
        "Battery": "Up to 6h listening, 30h with case",
        "Water Resistance": "IP54",
        "Noise Cancellation": "Active Noise Cancellation & Adaptive Transparency"
    }
}
    ,

galaxynote20: {
    name: t("galaxynote20_name"),
    description: t("samsung_desc"),
    price: 108,
    category: "phone",
    variants: {
        bronze: { name: t("color_mystic_bronze"), images: ["https://m.media-amazon.com/images/I/81S-XYJ0-gL._AC_SX679_.jpg"] },
        green: { name: t("color_mystic_green"), images: ["https://m.media-amazon.com/images/I/816nFzoZ-SL._AC_SX679_.jpg"] },
        black: { name: t("color_mystic_black"), images: ["https://i.ebayimg.com/images/g/u78AAOSwDsdh2WXb/s-l960.webp"] }
    },
    memoryOptions: {
        "256GB": { price: 108, originalPrice: 149 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: "S-Pen Included", desc: "Presnosť a ovládanie" },
        { icon: "fas fa-camera", title: "Profi fotoaparát", desc: "Zachyťte úžasné fotografie" },
        { icon: "fas fa-battery-full", title: "Celodenná batéria", desc: "Energia na celý deň" }
        ,
        { icon: "fas fa-pen-fancy", title: t("feature_h1_chip"), desc: t("feature_h1_chip_desc") },
        { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
        { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" Super AMOLED Plus",
        [t("spec_processor")]: "Exynos 990",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "12MP + 64MP + 12MP",
        [t("spec_battery")]: "4300 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxynote10lite: {
    name: t("galaxynote10lite_name"),
    description: t("samsung_desc"),
    price: 122,
    category: "phone",
    variants: {
        red: { name: t("color_aura_red"), images: ["https://m.media-amazon.com/images/I/515c2WbyRJL._AC_SX679_.jpg"] },
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/71T0S6sQiKL._AC_SX679_.jpg"] },
        black: { name: t("color_aura_black"), images: ["https://m.media-amazon.com/images/I/71T0S6sQiKL._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 122, originalPrice: 160 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: "S-Pen v cene", desc: "Na poznámky a kreslenie" },
        { icon: "fas fa-camera", title: "Trojitý fotoaparát", desc: "Všestranná fotografia" },
        { icon: "fas fa-battery-full", title: "Veľká batéria", desc: "Dlhotrvajúca energia" }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" Super AMOLED",
        [t("spec_processor")]: "Exynos 9810",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "12MP + 12MP + 12MP",
        [t("spec_battery")]: "4500 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxynote10: {
    name: t("galaxynote10_name"),
    description: t("samsung_desc"),
    price: 135,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/61gJyqFqX9L._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 135, originalPrice: 180 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: "S-Pen v cene", desc: "Funkcie diaľkového ovládania" },
        { icon: "fas fa-film", title: "Filmový displej", desc: "Obrazovka od okraja po okraj" },
        { icon: "fas fa-camera", title: "Profi fotoaparát", desc: "Video so živým zaostrením" }
    ],
    specifications: {
        [t("spec_display")]: "6.3\" Dynamic AMOLED",
        [t("spec_processor")]: "Exynos 9825",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "12MP + 12MP + 16MP",
        [t("spec_battery")]: "3500 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxynote10plus: {
    name: t("galaxynote10plus_name"),
    description: t("samsung_desc"),
    price: 184,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/51S--oy0ASL._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 184, originalPrice: 240 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: "Pokročilý S-Pen", desc: "Vzdušné gestá a viac" },
        { icon: "fas fa-expand", title: "Veľký 6.8\" displej", desc: "Pohlcujúce sledovanie" },
        { icon: "fas fa-camera-retro", title: "DepthVision kamera", desc: "Pre 3D skenovanie" }
    ],
    specifications: {
        [t("spec_display")]: "6.8\" Dynamic AMOLED",
        [t("spec_processor")]: "Exynos 9825",
        [t("spec_ram")]: "12GB",
        [t("spec_main_camera")]: "12MP + 12MP + 16MP + TOF",
        [t("spec_battery")]: "4300 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys10: {
    name: t("galaxys10_name"),
    description: t("samsung_desc"),
    price: 114,
    category: "phone",
    variants: {
        white: { name: t("color_prism_white"), images: ["https://www-konga-com-res.cloudinary.com/image/upload/f_auto,fl_lossy,dpr_auto,q_auto,w_1080/media/catalog/product/C/V/163129_1675444177.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 114, originalPrice: 150 },
    },
    features: [
        { icon: "fas fa-fingerprint", title: "Ultrazvukový odtlačok", desc: "Bezpečný a rýchly" },
        { icon: "fas fa-camera", title: "Trojitý fotoaparát", desc: "Ultraširokouhlý objektív" },
        { icon: "fas fa-share-alt", title: "Bezdrôtové zdieľanie energie", desc: "Nabíjajte iné zariadenia" }
    ],
    specifications: {
        [t("spec_display")]: "6.1\" Dynamic AMOLED",
        [t("spec_processor")]: "Exynos 9820",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "12MP + 12MP + 16MP",
        [t("spec_battery")]: "3400 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys20fe: {
    name: t("galaxys20fe_name"),
    description: t("samsung_desc"),
    price: 170,
    category: "phone",
    variants: {
        navy: { name: t("color_cloud_navy"), images: ["https://m.media-amazon.com/images/I/51yxI5nkPWL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 170, originalPrice: 220 },
    },
    features: [
        { icon: "fas fa-tachometer-alt", title: "120Hz displej", desc: "Super plynulé posúvanie" },
        { icon: "fas fa-camera", title: "Profi trojitý fotoaparát", desc: "30x Space Zoom" },
        { icon: "fas fa-battery-full", title: "Celodenná batéria", desc: "Kapacita 4500 mAh" }
    ],
    specifications: {
        [t("spec_display")]: "6.5\" Super AMOLED, 120Hz",
        [t("spec_processor")]: "Snapdragon 865",
        [t("spec_ram")]: "6GB",
        [t("spec_main_camera")]: "12MP + 8MP + 12MP",
        [t("spec_battery")]: "4500 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys20plus: {
    name: t("galaxys20plus_name"),
    description: t("samsung_desc"),
    price: 192,
    category: "phone",
    variants: {
        black: { name: t("color_cosmic_black"), images: ["https://m.media-amazon.com/images/I/71C4k+Ej67L._AC_SX466_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 192, originalPrice: 250 },
    },
    features: [
        { icon: "fas fa-video", title: "8K Video Snap", desc: "Video vo vysokom rozlíšení" },
        { icon: "fas fa-camera", title: "64MP fotoaparát", desc: "30x Space Zoom" },
        { icon: "fas fa-tachometer-alt", title: "120Hz displej", desc: "Plynulý a responzívny" }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" Dynamic AMOLED 2X, 120Hz",
        [t("spec_processor")]: "Exynos 990",
        [t("spec_ram")]: "12GB",
        [t("spec_main_camera")]: "12MP + 64MP + 12MP + TOF",
        [t("spec_battery")]: "4500 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys20ultra: {
    name: t("galaxys20ultra_name"),
    description: t("samsung_desc"),
    price: 211,
    category: "phone",
    variants: {
        gray: { name: t("color_cosmic_gray"), images: ["https://m.media-amazon.com/images/I/51Tsn0W3XFL._AC_SX522_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 211, originalPrice: 280 },
    },
    features: [
        { icon: "fas fa-search-plus", title: "100x Space Zoom", desc: "Priblížte sa neuveriteľne blízko" },
        { icon: "fas fa-camera", title: "108MP fotoaparát", desc: "Úžasné detaily" },
        { icon: "fas fa-video", title: "8K nahrávanie videa", desc: "Video v kvalite kina" }
    ],
    specifications: {
        [t("spec_display")]: "6.9\" Dynamic AMOLED 2X, 120Hz",
        [t("spec_processor")]: "Exynos 990",
        [t("spec_ram")]: "12GB",
        [t("spec_main_camera")]: "108MP + 48MP + 12MP + TOF",
        [t("spec_battery")]: "5000 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys21plus: {
    name: t("galaxys21plus_name"),
    description: t("samsung_desc"),
    price: 195,
    category: "phone",
    variants: {
        silver: { name: t("color_phantom_silver"), images: ["https://m.media-amazon.com/images/I/61yn+RcQ08S._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 195, originalPrice: 260 },
    },
    features: [
        { icon: "fas fa-video", title: "8K Video Snap", desc: "Vytvárajte fotky z videa" },
        { icon: "fas fa-camera", title: "Profi fotoaparát", desc: "64MP teleobjektív" },
        { icon: "fas fa-tachometer-alt", title: "120Hz adaptívny displej", desc: "Plynulý a efektívny" }
    ],
    specifications: {
        [t("spec_display")]: "6.7\" Dynamic AMOLED 2X, 120Hz",
        [t("spec_processor")]: "Exynos 2100",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "12MP + 64MP + 12MP",
        [t("spec_battery")]: "4800 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
},

galaxys21ultra: {
    name: t("galaxys21ultra_name"),
    description: t("samsung_desc"),
    price: 246,
    category: "phone",
    variants: {
        black: { name: t("color_phantom_black"), images: ["https://m.media-amazon.com/images/I/610KvwSCMYL._AC_SX466_.jpg"] },
        navy: { name: t("color_phantom_navy"), images: ["https://m.media-amazon.com/images/I/51gfaY6FQwL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 246, originalPrice: 290 },
    },
    features: [
        { icon: "fas fa-search-plus", title: "Dvojitý teleobjektív", desc: "100x Space Zoom" },
        { icon: "fas fa-pen-fancy", title: "Kompatibilné s S-Pen", desc: "Prvýkrát pre Galaxy S" },
        { icon: "fas fa-camera", title: "108MP Pro senzor", desc: "Jasné nočné fotografie" }
    ],
    specifications: {
        [t("spec_display")]: "6.8\" Dynamic AMOLED 2X, 120Hz",
        [t("spec_processor")]: "Exynos 2100",
        [t("spec_ram")]: "12GB",
        [t("spec_main_camera")]: "108MP + 10MP + 10MP + 12MP",
        [t("spec_battery")]: "5000 mAh",
        [t("spec_condition")]: t("spec_condition_certified"),
        [t("spec_battery_health")]: t("spec_battery_health_value")
    }
}

    }
}

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
function updateFooterFromBusinessAddress() {
    const businessAddress = getBusinessAddress();
    const countryInfo = countryConfig[currentCountry];
    if (!businessAddress || !countryInfo) return;

    const fullAddress = `${businessAddress.address}, ${businessAddress.city}, ${businessAddress.country}`;
    const phoneNumber = countryInfo.phone;
    const email = `sales@swappie.shop`;
    const companyName = `Swappie ${countryInfo.name}`;

    const footerAddressEl = document.getElementById('footer-address');
    const footerPhoneEl = document.getElementById('footer-phone');
    const footerEmailEl = document.getElementById('footer-email');
    const footerBottomEl = document.querySelector('.footer-bottom p');

    if (footerBottomEl) {
        footerBottomEl.innerHTML = `&copy; 2024 ${companyName}. <span data-translate="rights_reserved">All rights reserved.</span>`;
    }
}

// Get product ID from URL parameters
// Get product ID from URL path
// Global variables
let productDatabase;

// Global selection state
let currentMemory = null;
let currentCondition = null;
let currentVariant = null;

function getProductId() {    
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'iphone16promax'; // Default to a product if no ID is found
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

    // Setup color selection if variants exist
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

        // Set initial value
        if (currentVariant) {
            colorSelect.value = currentVariant;
        }

        colorSelect.addEventListener('change', function() {
            currentVariant = this.value;
            const variant = product.variants[currentVariant];

            // Update main image and thumbnails
            updateProductImages(variant.images);

            // Update product name
            const titleEl = document.getElementById('product-title');
            if (titleEl) {
                titleEl.textContent = `${product.name} (${variant.name})`;
            }

            validateSelections(product);
        });

        // Initialize with current variant
        const currentVariantData = product.variants[currentVariant];
        if (currentVariantData) {
            updateProductImages(currentVariantData.images);
        }
    } else {
        // Use default images if no variants
        updateProductImages(product.images);
    }

    function updateProductImages(images) {
        const mainImage = document.getElementById('main-product-image');
        const thumbnailContainer = document.getElementById('thumbnail-container');

        if (!images || images.length === 0) {
            console.log('No images provided for product');
            if (mainImage) mainImage.src = 'https://placehold.co/400x400?text=No+Image';
            if (thumbnailContainer) thumbnailContainer.innerHTML = '';
            return;
        }

        // Helper to get a higher resolution image from Amazon URLs
        const getHighResImageUrl = (url) => {
            if (typeof url === 'string' && url.includes('amazon.com')) {
                // This regex removes the size constraint part of an Amazon image URL (e.g., ._AC_SX466_)
                // to request a higher resolution version. It's safer than replacing with a fixed size.
                return url.replace(/\._AC_.*?_/, '');
            }
            return url;
        };

        // Set the main image to the high-resolution version of the first image
        if (mainImage) {
            const highResSrc = getHighResImageUrl(images[0]);
            mainImage.src = highResSrc;
            mainImage.alt = product.name;
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

                thumbnail.onerror = function() {
                    console.log('Failed to load thumbnail:', image);
                    this.src = 'https://placehold.co/120x120?text=No+Image';
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
        }
    }

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
                <img src="${item.image || 'https://placehold.co/60x60'}" alt="${item.name}" loading="lazy">
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
        cartItems.innerHTML = /*html*/`
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

        cartHTML += /*html*/`
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

        // Set a flag in sessionStorage to trigger checkout on the main page
        sessionStorage.setItem('startCheckout', 'true');
        // Redirect to the main page where the full checkout modal logic exists
        window.location.href = '/index.html';
    } catch (error) {
        console.error('Error opening checkout:', error);
        alert('Error opening checkout. Please try again.');
    }
}

function setupCountrySwitcherLinks() {
    const productId = getProductId();
    const dropdown = document.getElementById('country-dropdown');    
    if (!dropdown) return;

    // Clear any static content
    dropdown.innerHTML = ''; // Clear static content

    Object.entries(countryConfig).forEach(([key, config]) => {
        const link = document.createElement('a');        
        link.href = `/product.html?id=${productId}&country=${config.code}`;
        link.className = 'country-option';        
        link.dataset.country = key;        
        link.innerHTML = `<span class="flag-icon">${config.flag}</span><span>${config.name}</span>`;
        dropdown.appendChild(link);    
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {

    if (!document.querySelector('.product-detail')) {
        return;
    }

    // Scroll to top of page immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // --- Country and Product Initialization ---
    async function initializeCountry() {
        const urlParams = new URLSearchParams(window.location.search);
        const countryCodeFromParam = urlParams.get('country');

        // Priority 1: URL Parameter (e.g., ?country=sk)
        if (countryCodeFromParam) {
            const countryKey = Object.keys(countryConfig).find(key => countryConfig[key].code === countryCodeFromParam);
            if (countryKey) {
                currentCountry = countryKey;
                currentLanguage = countryConfig[countryKey].lang;
                localStorage.setItem('selectedCountry', currentCountry);
                localStorage.setItem('selectedLanguage', currentLanguage);
                // Clean the URL parameter after reading it
                history.replaceState(null, '', `${window.location.pathname}?id=${getProductId()}`);
                return; // Found country, exit
            }
        }

        // Priority 2: Local Storage
        const countryFromStorage = localStorage.getItem('selectedCountry');
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
        currentCountry = 'honduras';
        currentLanguage = countryConfig[currentCountry].lang;
    }

    await initializeCountry(); // Await the async function

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

    updateFooterFromBusinessAddress();
    setupCountrySwitcherLinks();

    // Initialize product database after language is set
    productDatabase = getProductDatabase();

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
