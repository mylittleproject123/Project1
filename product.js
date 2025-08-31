// Product database with detailed information
const productDatabase = {
    screenprotector: {
        name: "Premium Gorilla Glass Screen Protector",
        subtitle: "9H Hardness Tempered Glass with Oleophobic Coating",
        description: "Professional-grade screen protection with 9H hardness and crystal-clear transparency.",
        price: 8.99,
        originalPrice: 19.99,
        discount: 40,
        category: "accessories",
        images: [
            "https://m.media-amazon.com/images/I/61NGYQsztvL._UF1000,1000_QL80_FMwebp_.jpg"
        ],
        conditionOptions: {
            "new": { name: "New", priceAdjustment: 0, description: "Brand new product" }
        },
        features: [
            { icon: "fas fa-shield-alt", title: "9H Hardness", desc: "Maximum protection" },
            { icon: "fas fa-eye", title: "Crystal Clear", desc: "Perfect transparency" },
            { icon: "fas fa-droplet", title: "Oleophobic", desc: "Fingerprint resistant" },
            { icon: "fas fa-mobile-alt", title: "Bubble Free", desc: "Easy installation" }
        ],
        specifications: {
            "Material": "Tempered Glass",
            "Hardness": "9H",
            "Thickness": "0.3mm",
            "Transparency": "99.9%",
            "Coating": "Oleophobic",
            "Installation": "Bubble-free",
            "Compatibility": "Universal",
            "Warranty": "1 year"
        }
    },
    usbccable: {
        name: "USB-C Fast Charging Cable",
        subtitle: "20W Power Adapter with 3ft Cable",
        description: "Professional-grade USB-C charging cable with fast charging capabilities.",
        price: 6.99,
        originalPrice: 12.99,
        discount: 35,
        category: "accessories",
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/P/209656_1718112776.jpg"
        ],
        conditionOptions: {
            "new": { name: "New", priceAdjustment: 0, description: "Brand new product" }
        },
        features: [
            { icon: "fas fa-bolt", title: "Fast Charging", desc: "20W power delivery" },
            { icon: "fas fa-sync", title: "Data Sync", desc: "High-speed transfer" },
            { icon: "fas fa-certificate", title: "MFi Certified", desc: "Apple approved" },
            { icon: "fas fa-ruler", title: "3ft Length", desc: "Perfect size" }
        ],
        specifications: {
            "Cable Type": "USB-C to Lightning",
            "Power": "20W Fast Charging",
            "Length": "3 feet (1 meter)",
            "Data Transfer": "480 Mbps",
            "Certification": "MFi Certified",
            "Compatibility": "iPhone 8 and later",
            "Material": "TPE jacket",
            "Warranty": "1 year"
        }
    },
    powerbank: {
        name: "Portable Power Bank 5000mAh",
        subtitle: "Compact Fast Charging Power Bank",
        description: "Ultra-compact power bank with 5000mAh capacity and fast charging technology.",
        price: 16,
        originalPrice: 25,
        discount: 36,
        category: "accessories",
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/D/190950_1664522191.jpg"
        ],
        conditionOptions: {
            "new": { name: "New", priceAdjustment: 0, description: "Brand new product" }
        },
        features: [
            { icon: "fas fa-battery-full", title: "5000mAh", desc: "High capacity" },
            { icon: "fas fa-bolt", title: "Fast Charging", desc: "Quick power delivery" },
            { icon: "fas fa-lightbulb", title: "LED Indicator", desc: "Battery status" },
            { icon: "fas fa-shield-alt", title: "Safety", desc: "Multiple protections" }
        ],
        specifications: {
            "Capacity": "5000mAh",
            "Input": "USB-C 5V/2A",
            "Output": "USB-A 5V/2.4A",
            "Size": "Compact portable",
            "Weight": "Light weight",
            "LED Indicator": "4-level display",
            "Safety": "Over-charge protection",
            "Warranty": "1 year"
        }
    },
    jblgoportable: {
        name: "JBL GO 3 Portable Speaker",
        subtitle: "Bluetooth Wireless Speaker - Blue",
        description: "JBL GO 3 Portable Bluetooth Speaker with JBL Pro Sound and IP67 waterproof rating.",
        price: 19.99,
        originalPrice: 79,
        discount: 75,
        category: "audio",
        variants: {
            blue: {
                name: "Blue",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
                ]
            },
            black: {
                name: "Black",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
                ]
            }
        },
        conditionOptions: {
            "new_open_box": { name: "New - Open Box", priceAdjustment: 0, description: "New product, box opened only" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
        ],
        features: [
            { icon: "fas fa-music", title: "JBL Pro Sound", desc: "Powerful clear sound" },
            { icon: "fas fa-droplet", title: "IP67 Waterproof", desc: "Water and dust proof" },
            { icon: "fas fa-battery-full", title: "5h Battery", desc: "Continuous playback" },
            { icon: "fas fa-bluetooth-b", title: "Bluetooth 5.1", desc: "Stable connection" }
        ],
        specifications: {
            "Connectivity": "Bluetooth 5.1",
            "Charging": "USB-C",
            "Water Resistance": "IP67",
            "Drivers": "43mm driver",
            "Frequency Response": "110Hz - 20kHz",
            "Battery Life": "Up to 5 hours",
            "Condition": "New - Open Box Only",
            "Warranty": "Full manufacturer warranty"
        }
    },
    otherearbuds: {
        name: "Bluetooth TWS Earbuds",
        subtitle: "Wireless Bluetooth Earbuds with Charging Case",
        description: "Bluetooth TWS earbuds with HD stereo sound and portable charging case.",
        price: 12.99,
        originalPrice: 49,
        discount: 73,
        category: "audio",
        variants: {
            black: {
                name: "Black",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
                ]
            },
            white: {
                name: "White",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
                ]
            }
        },
        conditionOptions: {
            "new_open_box": { name: "New - Open Box", priceAdjustment: 0, description: "New product, box opened only" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/9143073/1.jpg?3903"
        ],
        features: [
            { icon: "fas fa-music", title: "HD Sound", desc: "High quality stereo audio" },
            { icon: "fas fa-microphone", title: "Built-in Mic", desc: "Hands-free calls" },
            { icon: "fas fa-battery-full", title: "20h Battery", desc: "With charging case" },
            { icon: "fas fa-bluetooth-b", title: "Bluetooth 5.0", desc: "Stable connection" }
        ],
        specifications: {
            "Connectivity": "Bluetooth 5.0",
            "Charging Case": "USB-C",
            "Water Resistance": "IPX4",
            "Drivers": "6mm dynamic",
            "Frequency Response": "20Hz - 20kHz",
            "Battery Life": "Up to 20 hours with case",
            "Condition": "New - Open Box Only",
            "Warranty": "Full manufacturer warranty"
        }
    },
    iphone16promax: {
        name: "iPhone 16 Pro Max",
        subtitle: "Titanio Natural, 256GB - La máxima expresión de innovación de Apple",
        description: "El iPhone más avanzado hasta la fecha con el revolucionario chip A18 Pro, cámaras profesionales y pantalla Super Retina XDR de 6.9 pulgadas.",
        price: 769,
        originalPrice: 1000,
        discount: 25,
        category: "phone",
        variants: {
            black: {
                name: "Negro Titanio",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/1.jpg?7763",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/3.jpg?7763",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/4.jpg?7763",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/5.jpg?7763",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/7.jpg?7763"
                ]
            },
            gold: {
                name: "Dorado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/1.jpg?6300",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/2.jpg?6300",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/3.jpg?6300",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/4.jpg?6300"
                ]
            }
        },
        memoryOptions: {
            "256GB": { price: 769, originalPrice: 1000 },
            "512GB": { price: 819, originalPrice: 1050 },
            "1TB": { price: 869, originalPrice: 1100 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 60, description: "Display piece, never used, open box" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/1.jpg?7763",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/3.jpg?7763",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/4.jpg?7763",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/5.jpg?7763",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/7.jpg?7763",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/1.jpg?6300",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/2.jpg?6300",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/3.jpg?6300",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0510004/4.jpg?6300"
        ],
        features: [
            { icon: "fas fa-battery-full", title: "29h Batería", desc: "Reproducción de video" },
            { icon: "fas fa-microchip", title: "Chip A18 Pro", desc: "Rendimiento revolucionario" },
            { icon: "fas fa-camera", title: "Cámara 48MP", desc: "Sistema de cámaras Pro" },
            { icon: "fas fa-mobile-alt", title: "6.9\" ProMotion", desc: "Super Retina XDR" }
        ],
        specifications: {
            "Pantalla": "6.9\" Super Retina XDR OLED",
            "Procesador": "Apple A18 Pro",
            "Almacenamiento": "256GB",
            "RAM": "8GB",
            "Cámara Principal": "48MP f/1.78",
            "Cámara Ultra Wide": "12MP f/2.2",
            "Cámara Teleobjetivo": "12MP f/2.8",
            "Batería": "4422 mAh",
            "Sistema Operativo": "iOS 18",
            "Conectividad": "5G, Wi-Fi 7, Bluetooth 5.3",
            "Resistencia": "IP68",
            "Dimensiones": "159.9 x 76.7 x 8.25 mm",
            "Peso": "227g",
            "Estado": "Reacondicionado certificado",
            "Salud de Batería": "90% garantizada"
        }
    },
    iphone15promax: {
        name: "iPhone 15 Pro Max",
        subtitle: "Titanio Natural, 256GB - Potencia extraordinaria",
        description: "Construido con titanio aeroespacial, cuenta con el potente chip A17 Pro y el nuevo puerto USB-C para una experiencia Pro definitiva.",
        price: 649,
        originalPrice: 820,
        discount: 25,
        category: "phone",
        variants: {
            naturaltitanium: {
              name: "Titanio Natural",
              images: [
                  "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/B/163129_1713554391.jpg",
                  "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/G/163129_1713554459.jpg",
                  "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/L/163129_1713554475.jpg",
                  "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/K/163129_1713554492.jpg",
                  "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/A/163129_1713554526.jpg"
              ]
            },
            blue: {
                name: "Azul Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/B/163129_1713554391.jpg"
                ]
            },
            white: {
                name: "Blanco Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/B/163129_1713554391.jpg"
                ]
            },
            black: {
                name: "Negro Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/B/163129_1713554391.jpg"
                ]
            }
        },
        memoryOptions: {
            "256GB": { price: 649, originalPrice: 820 },
            "512GB": { price: 699, originalPrice: 870 },
            "1TB": { price: 749, originalPrice: 920 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 60, description: "Display piece, never used, open box" }
        },
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/B/163129_1713554391.jpg"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Chip A17 Pro", desc: "Rendimiento revolucionario" },
            { icon: "fas fa-mountain", title: "Titanio", desc: "Construcción aeroespacial" },
            { icon: "fas fa-usb", title: "USB-C", desc: "Conectividad universal" },
            { icon: "fas fa-camera", title: "Zoom 5x", desc: "Teleobjetivo profesional" }
        ],
        specifications: {
            "Pantalla": "6.7\" Super Retina XDR OLED",
            "Procesador": "Apple A17 Pro",
            "Almacenamiento": "256GB",
            "RAM": "8GB",
            "Cámara Principal": "48MP f/1.78",
            "Cámara Ultra Wide": "12MP f/2.2",
            "Cámara Teleobjetivo": "12MP f/2.8 (5x)",
            "Batería": "4441 mAh",
            "Sistema Operativo": "iOS 17",
            "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
            "Puerto": "USB-C",
            "Resistencia": "IP68",
            "Material": "Titanio aeroespacial",
            "Peso": "221g",
            "Estado": "Reacondicionado certificado",
            "Salud de Batería": "90% garantizada"
        }
    },
    iphone14promax: {
        name: "iPhone 14 Pro Max",
        subtitle: "Morado Profundo, 128GB - Dynamic Island revolucionario",
        description: "Presenta el revolucionario Dynamic Island y el chip A16 Bionic para un rendimiento excepcional.",
        price: 429,
        originalPrice: 334,
        discount: 25,
        category: "phone",
        variants: {
            deeppurple: {
                name: "Morado Profundo",
                images: [
                   "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/7645104/2.jpg?9725",
                   "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/7645104/1.jpg?9725"
                ]
            },
            gold: {
                name: "Dorado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/1544104/1.jpg?5804"
                ]
            },
            spaceblack: {
                name: "Negro Espacial",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/7645104/2.jpg?9725"
                ]
            },
            silver: {
                name: "Plateado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/7645104/2.jpg?9725"
                ]
            }
        },
        memoryOptions: {
            "128GB": { price: 429, originalPrice: 334 },
            "256GB": { price: 479, originalPrice: 384 },
            "512GB": { price: 529, originalPrice: 434 },
            "1TB": { price: 579, originalPrice: 484 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 60, description: "Display piece, never used, open box" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/7645104/2.jpg?9725"
        ],
        features: [
            { icon: "fas fa-circle", title: "Dynamic Island", desc: "Interfaz revolucionaria" },
            { icon: "fas fa-microchip", title: "Chip A16", desc: "Bionic avanzado" },
            { icon: "fas fa-camera", title: "48MP", desc: "Cámara principal" },
            { icon: "fas fa-mobile-alt", title: "6.7\"", desc: "ProMotion 120Hz" }
        ],
        specifications: {
            "Pantalla": "6.7\" Super Retina XDR OLED",
            "Procesador": "Apple A16 Bionic",
            "Almacenamiento": "128GB",
            "RAM": "6GB",
            "Cámara Principal": "48MP f/1.78",
            "Dynamic Island": "Sí",
            "Batería": "4323 mAh",
            "Sistema Operativo": "iOS 16",
            "Resistencia": "IP68",
            "Peso": "240g",
            "Estado": "Reacondicionado certificado",
            "Salud de Batería": "90% garantizada"
        }
    },
    galaxys25ultra: {
        name: "Samsung Galaxy S25 Ultra",
        subtitle: "Negro Titanio, 512GB - AI revolucionario con S Pen",
        description: "El Galaxy S más avanzado con inteligencia artificial de próxima generación, S Pen integrado y cámaras profesionales.",
        price: 719,
        originalPrice: 999,
        discount: 28,
        category: "phone",
        variants: {
            black: {
                name: "Negro Titanio",
                images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAgI28zAfjp7Ul1FlOn7TVRg4Fff-A5lnOMYejXAJx0qdmKxjpYMyJkvkSOnBgb6Fio4&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAgI28zAfjp7Ul1FlOn7TVRg4Fff-A5lnOMYejXAJx0qdmKxjpYMyJkvkSOnBgb6Fio4&usqp=CAU"
                ]
            },
            silver: {
                name: "Plateado Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/B/67343_1732713967.jpg"
                ]
            },
            blue: {
                name: "Azul Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/B/67343_1732713967.jpg"
                ]
            },
            green: {
                name: "Verde Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/B/67343_1732713967.jpg"
                ]
            }
        },
        memoryOptions: {
            "256GB": { price: 669, originalPrice: 949 },
            "512GB": { price: 719, originalPrice: 999 },
            "1TB": { price: 819, originalPrice: 1099 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 40, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 80, description: "Display piece, never used, open box" }
        },
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/B/67343_1732713967.jpg",
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/Y/67343_1732713999.jpg"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Snapdragon 8 Gen 4", desc: "Procesador de vanguardia" },
            { icon: "fas fa-robot", title: "Galaxy AI avanzado", desc: "IA de siguiente generación" },
            { icon: "fas fa-pen", title: "S Pen integrado", desc: "Productividad sin límites" },
            { icon: "fas fa-camera", title: "Cámara 200MP", desc: "Fotografía revolucionaria" }
        ],
        specifications: {
            "Pantalla": "6.8\" Dynamic AMOLED 2X, 120Hz",
            "Procesador": "Snapdragon 8 Gen 4 para Galaxy",
            "Almacenamiento": "512GB UFS 4.0",
            "RAM": "12GB LPDDR5X",
            "Cámara Principal": "200MP f/1.7 con OIS",
            "Cámara Ultra Wide": "12MP f/2.2, 120°",
            "Cámara Teleobjetivo": "50MP f/3.4 (5x zoom óptico)",
            "Cámara Frontal": "12MP f/2.2",
            "S Pen": "Sí, integrado con Bluetooth",
            "Batería": "5000 mAh con carga rápida 45W",
            "Sistema Operativo": "Android 15 + One UI 7.0",
            "Conectividad": "5G, Wi-Fi 7, Bluetooth 5.3",
            "Resistencia": "IP68, Gorilla Glass Victus 3",
            "Dimensiones": "162.3 x 79.0 x 8.6 mm",
            "Peso": "230g",
            "Material": "Marco de titanio",
            "Seguridad": "Ultrasonico en pantalla, Face ID",
            "Salud de Batería": "95% garantizada",
            "Estado": "Reacondicionado certificado"
        }
    },
    galaxys24ultra: {
        name: "Samsung Galaxy S24 Ultra",
        subtitle: "Negro, 256GB - Galaxy AI a tu alcance",
        description: "El smartphone más inteligente de Samsung con Galaxy AI integrado, S Pen incorporado y cámaras profesionales para creadores de contenido.",
        price: 529,
        originalPrice: 749,
        discount: 29,
        category: "phone",
        variants: {
            black: {
                name: "Negro Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/D/67343_1707126048.jpg",
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/E/67343_1707126076.jpg",
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/K/67343_1707126081.jpg"
                ]
            },
            gray: {
                name: "Gris Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/D/67343_1707126048.jpg"
                ]
            },
            violet: {
                name: "Violeta Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/D/67343_1707126048.jpg"
                ]
            },
            yellow: {
                name: "Amarillo Titanio",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/D/67343_1707126048.jpg"
                ]
            }
        },
        memoryOptions: {
            "256GB": { price: 529, originalPrice: 749 },
            "512GB": { price: 579, originalPrice: 799 },
            "1TB": { price: 629, originalPrice: 849 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 35, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 70, description: "Display piece, never used, open box" }
        },
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/D/67343_1707126048.jpg",
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/E/67343_1707126076.jpg",
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/K/67343_1707126081.jpg"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Snapdragon 8 Gen 3", desc: "Procesador de elite" },
            { icon: "fas fa-robot", title: "Galaxy AI", desc: "Inteligencia artificial integrada" },
            { icon: "fas fa-pen", title: "S Pen", desc: "Incluido en el dispositivo" },
            { icon: "fas fa-camera", title: "Cámara 200MP", desc: "Fotografía profesional" }
        ],
        specifications: {
            "Pantalla": "6.8\" Dynamic AMOLED 2X, 120Hz, 3120x1440",
            "Procesador": "Snapdragon 8 Gen 3 para Galaxy",
            "Almacenamiento": "256GB UFS 4.0",
            "RAM": "12GB LPDDR5X",
            "Cámara Principal": "200MP f/1.7 con OIS",
            "Cámara Ultra Wide": "12MP f/2.2, 120°",
            "Cámara Teleobjetivo 1": "10MP f/2.4 (3x zoom óptico)",
            "Cámara Teleobjetivo 2": "50MP f/3.4 (5x zoom óptico)",
            "Cámara Frontal": "12MP f/2.2",
            "Zoom Digital": "Hasta 100x Space Zoom",
            "S Pen": "Sí, integrado con Bluetooth",
            "Batería": "5000 mAh con carga rápida 45W",
            "Carga Inalámbrica": "15W, carga inversa 4.5W",
            "Sistema Operativo": "Android 14 + One UI 6.1",
            "Galaxy AI": "Traducción en vivo, Circle to Search",
            "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
            "Resistencia": "IP68, Gorilla Glass Armor",
            "Dimensiones": "162.3 x 79.0 x 8.6 mm",
            "Peso": "232g",
            "Material": "Marco de titanio grado aeroespacial",
            "Seguridad": "Ultrasonico en pantalla, reconocimiento facial",
            "Salud de Batería": "95% garantizada",
            "Estado": "Reacondicionado certificado"
        }
    },
    galaxys23ultra: {
        name: "Samsung Galaxy S23 Ultra",
        subtitle: "Rojo, 512GB - Captura la noche como nunca antes",
        description: "Potencia sin límites con cámara de 200MP, S Pen integrado y el procesador Snapdragon 8 Gen 2 optimizado para Galaxy.",
        price: 329,
        originalPrice: 529,
        discount: 38,
        category: "phone",
        variants: {
            red: {
                name: "Rojo",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/141488_1684232842.jpg"
                ]
            },
            skyblue: {
                name: "Azul Cielo",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/V/141488_1684232622.jpg"
                ]
            },
            black: {
                name: "Negro Fantasma",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/141488_1684232842.jpg"
                ]
            },
            cream: {
                name: "Crema",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/141488_1684232842.jpg"
                ]
            },
            green: {
                name: "Verde",
                images: [
                    "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/141488_1684232842.jpg"
                ]
            }
        },
        memoryOptions: {
            "256GB": { price: 299, originalPrice: 499 },
            "512GB": { price: 329, originalPrice: 529 },
            "1TB": { price: 379, originalPrice: 579 }
        },
        conditionOptions: {
             "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 60, description: "Display piece, never used, open box" }
        },
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/141488_1684232842.jpg"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Snapdragon 8 Gen 2", desc: "Para Galaxy optimizado" },
            { icon: "fas fa-camera", title: "Cámara 200MP", desc: "Máxima resolución" },
            { icon: "fas fa-pen", title: "S Pen", desc: "Productividad sin límites" },
            { icon: "fas fa-moon", title: "Nightography", desc: "Fotos nocturnas épicas" }
        ],
        specifications: {
            "Pantalla": "6.8\" Dynamic AMOLED 2X, 120Hz, 3088x1440",
            "Procesador": "Snapdragon 8 Gen 2 para Galaxy",
            "Almacenamiento": "512GB UFS 4.0",
            "RAM": "12GB LPDDR5X",
            "Cámara Principal": "200MP f/1.7 con OIS",
            "Cámara Ultra Wide": "12MP f/2.2, 120°",
            "Cámara Teleobjetivo 1": "10MP f/2.4 (3x zoom óptico)",
            "Cámara Teleobjetivo 2": "10MP f/4.9 (10x zoom óptico)",
            "Cámara Frontal": "12MP f/2.2",
            "Zoom Digital": "Hasta 100x Space Zoom",
            "Video": "8K a 30fps, 4K a 60fps",
            "S Pen": "Sí, integrado con Bluetooth",
            "Batería": "5000 mAh con carga rápida 45W",
            "Carga Inalámbrica": "15W, carga inversa 4.5W",
            "Sistema Operativo": "Android 13 + One UI 5.1",
            "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
            "Resistencia": "IP68, Gorilla Glass Victus 2",
            "Dimensiones": "163.4 x 78.1 x 8.9 mm",
            "Peso": "234g",
            "Material": "Marco de aluminio con acabado mate",
            "Seguridad": "Ultrasonico en pantalla, reconocimiento facial",
            "Estado": "Reacondicionado certificado",
            "Salud de Batería": "95% garantizada"
        }
    },
    galaxys22ultra: {
        name: "Samsung Galaxy S22 Ultra",
        subtitle: "Negro, 256GB - El Note reinventado con S Pen incorporado",
        description: "La evolución del Galaxy Note con S Pen integrado, cámara de 108MP y el poder del Snapdragon 8 Gen 1.",
        price: 229,
        originalPrice: 399,
        discount: 43,
        category: "phone",
        variants: {
            black: {
                name: "Negro Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/5971252/1.jpg?7934"
                ]
            },
            purple: {
                name: "Púrpura",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/4988493/1.jpg?7063",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/4988493/2.jpg?7063",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/4988493/3.jpg?7063",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/4988493/4.jpg?7063",
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/4988493/5.jpg?7063"
                ]
            },
            white: {
                name: "Blanco Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/5971252/1.jpg?7934"
                ]
            },
            green: {
                name: "Verde",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/5971252/1.jpg?7934"
                ]
            },
            red: {
                name: "Rojo",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/5971252/1.jpg?7934"
                ]
            }
        },
        memoryOptions: {
            "128GB": { price: 199, originalPrice: 369 },
            "256GB": { price: 229, originalPrice: 399 },
            "512GB": { price: 279, originalPrice: 449 },
            "1TB": { price: 329, originalPrice: 499 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 25, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 50, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 75, description: "Display piece, never used, open box" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/5971252/1.jpg?7934"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Snapdragon 8 Gen 1", desc: "Rendimiento flagship" },
            { icon: "fas fa-camera", title: "Cámara 108MP", desc: "Detalles increíbles" },
            { icon: "fas fa-pen", title: "S Pen", desc: "El Note ha vuelto" },
            { icon: "fas fa-video", title: "8K Video", desc: "Grabación profesional" }
        ],
        specifications: {
            "Pantalla": "6.8\" Dynamic AMOLED 2X, 120Hz, 3088x1440",
            "Procesador": "Snapdragon 8 Gen 1 (4nm)",
            "Almacenamiento": "256GB UFS 3.1",
            "RAM": "12GB LPDDR5",
            "Cámara Principal": "108MP f/1.8 con OIS",
            "Cámara Ultra Wide": "12MP f/2.2, 120°",
            "Cámara Teleobjetivo 1": "10MP f/2.4 (3x zoom óptico)",
            "Cámara Teleobjetivo 2": "10MP f/4.9 (10x zoom óptico)",
            "Cámara Frontal": "40MP f/2.2",
            "Zoom Digital": "Hasta 100x Space Zoom",
            "Video": "8K a 24fps, 4K a 60fps",
            "S Pen": "Sí, integrado con Bluetooth",
            "Batería": "5000 mAh con carga rápida 45W",
            "Carga Inalámbrica": "15W, carga inversa 4.5W",
            "Sistema Operativo": "Android 12 + One UI 4.1",
            "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.2",
            "Resistencia": "IP68, Gorilla Glass Victus+",
            "Dimensiones": "163.3 x 77.9 x 8.9 mm",
            "Peso": "228g",
            "Material": "Marco de aluminio con acabado mate",
            "Seguridad": "Ultrasonico en pantalla, reconocimiento facial",
            "Estado": "Reacondicionado certificado",
            "Salud de Batería": "90% garantizada"
        }
    },
    galaxys21ultra: {
        name: "Samsung Galaxy S21 Ultra",
        subtitle: "Negro, 128GB - Ultra en todo sentido con zoom 100x",
        description: "El primer Galaxy S Ultra con zoom espacial 100x, pantalla de 120Hz y compatibilidad con S Pen (vendido por separado).",
        price: 119,
        originalPrice: 299,
        discount: 60,
        category: "phone",
        variants: {
            black: {
                name: "Negro Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
                ]
            },
            silver: {
                name: "Plateado Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
                ]
            },
            violet: {
                name: "Violeta Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
                ]
            },
            brown: {
                name: "Marrón Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
                ]
            },
            navy: {
                name: "Azul Marino Fantasma",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
                ]
            }
        },
        memoryOptions: {
            "128GB": { price: 119, originalPrice: 299 },
            "256GB": { price: 149, originalPrice: 329 },
            "512GB": { price: 179, originalPrice: 359 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 20, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 40, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 60, description: "Display piece, never used, open box" }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/4905482/1.jpg?2892"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Exynos 2100", desc: "Procesador flagship" },
            { icon: "fas fa-search-plus", title: "Zoom 100x", desc: "Space Zoom épico" },
            { icon: "fas fa-mobile-alt", title: "120Hz", desc: "Pantalla suave" },
            { icon: "fas fa-video", title: "8K Video", desc: "Calidad cinematográfica" }
        ],
        specifications: {
            "Pantalla": "6.8\" Dynamic AMOLED 2X",
            "Procesador": "Exynos 2100",
            "Almacenamiento": "128GB",
            "RAM": "12GB",
            "Cámara Principal": "108MP f/1.8",
            "Cámara Ultra Wide": "12MP f/2.2",
            "Cámara Teleobjetivo": "10MP f/2.4 (3x), 10MP f/4.9 (10x)",
            "Zoom": "Hasta 100x Space Zoom",
            "Batería": "5000 mAh",
            "Sistema Operativo": "Android 11 + One UI 3.1",
            "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.0",
            "Resistencia": "IP68",
            "Dimensiones": "165.1 x 75.6 x 8.9 mm",
            "Peso": "227g",
            "S Pen": "Soporte (vendido por separado)",
            "Estado": "Reacondicionado certificado"
        }
    },
    iphone13promax: {
        name: "iPhone 13 Pro Max",
        subtitle: "Azul Sierra, 128GB - Pro en todos los sentidos",
        description: "iPhone 13 Pro Max con pantalla Super Retina XDR de 6.7 pulgadas, chip A15 Bionic y sistema de cámaras Pro avanzado.",
        price: 359,
        originalPrice: 288,
        discount: 25,
        category: "phone",
        variants: {
           sierrablue: {
               name: "Azul Sierra",
               images: [
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/B/163129_1685917309.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/B/163129_1685917324.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/G/163129_1685917338.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/H/163129_1685917469.jpg"
               ]
           },
           alpinegreen: {
               name: "Verde Alpino",
               images: [
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/A/163129_1685917034.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/G/163129_1685917049.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/G/163129_1685917066.jpg",
                   "https://www-konga-com-res.cloudinary.com/w_250,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/G/163129_1685917083.jpg"
               ]
           },
           gold: {
               name: "Dorado",
               images: [
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/B/163129_1685917309.jpg"
               ]
           },
           graphite: {
               name: "Grafito",
               images: [
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/B/163129_1685917309.jpg"
               ]
           },
           silver: {
               name: "Plateado",
               images: [
                   "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/B/163129_1685917309.jpg"
               ]
           }
        },
        memoryOptions: {
            "128GB": { price: 359, originalPrice: 288 },
            "256GB": { price: 409, originalPrice: 338 },
            "512GB": { price: 459, originalPrice: 388 },
            "1TB": { price: 509, originalPrice: 438 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "new_open_box": { name: "Display piece, never used", description: "Display piece, never used, open box", priceAdjustment: 60 }
        },
        images: [
            "https://www-konga-com-res.cloudinary.com/w_300,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/B/163129_1685917309.jpg"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Chip A15 Bionic", desc: "Rendimiento excepcional" },
            { icon: "fas fa-camera", title: "Sistema ProRAW", desc: "Fotografía profesional" },
            { icon: "fas fa-mobile-alt", title: "ProMotion 120Hz", desc: "Pantalla fluida" },
            { icon: "fas fa-video", title: "ProRes Video", desc: "Video cinematográfico" }
        ],
        specifications: {
            "Pantalla": "6.7\" Super Retina XDR OLED",
            "Procesador": "Apple A15 Bionic",
            "Almacenamiento": "128GB",
            "RAM": "6GB",
            "Cámara Principal": "12MP f/1.5",
            "Cámara Ultra Wide": "12MP f/1.8",
            "Cámara Teleobjetivo": "12MP f/2.8 (3x)",
            "Batería": "4352 mAh",
            "Sistema Operativo": "iOS 15",
            "Resistencia": "IP68",
            "Peso": "238g",
            "Estado": "Reacondicionado certificado"
        }
    },
    iphone12promax: {
        name: "iPhone 12 Pro Max",
        subtitle: "Grafito, 128GB - El primer iPhone 5G",
        description: "iPhone 12 Pro Max con conectividad 5G, chip A14 Bionic y sistema de cámaras Pro con LiDAR.",
        price: 219,
        originalPrice: 640,
        discount: 25,
        category: "phone",
        variants:{
            graphite: {
                name: "Grafito",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/1204812/1.jpg?0962"
                ]
            },
            gold: {
                name: "Dorado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/5605523/1.jpg?3388"
                ]
            },
            silver: {
                name: "Plateado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/1204812/1.jpg?0962"
                ]
            },
            pacificblue: {
                name: "Azul Pacífico",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/1204812/1.jpg?0962"
                ]
            }
        },
        memoryOptions: {
            "128GB": { price: 219, originalPrice: 640 },
            "256GB": { price: 269, originalPrice: 690 },
            "512GB": { price: 319, originalPrice: 740 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "excellent_new_battery": { name: "Excellent with New Battery", description: "Display piece, never used, open box", priceAdjustment: 60 }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/1204812/1.jpg?0962"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Chip A14 Bionic", desc: "Primer chip 5nm" },
            { icon: "fas fa-signal", title: "5G ultra rápido", desc: "Conectividad de siguiente generación" },
            { icon: "fas fa-shield-alt", title: "Ceramic Shield", desc: "4x más resistente a caídas" },
            { icon: "fas fa-camera", title: "LiDAR Scanner", desc: "Enfoque automático mejorado" }
        ],
        specifications: {
            "Pantalla": "6.7\" Super Retina XDR OLED",
            "Procesador": "Apple A14 Bionic",
            "Almacenamiento": "128GB",
            "RAM": "6GB",
            "Cámara Principal": "12MP f/1.6",            "Cámara Ultra Wide": "12MP f/2.4",
            "Cámara Teleobjetivo": "12MP f/2.2 (2.5x)",
            "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.0",
            "Batería": "3687 mAh",
            "Sistema Operativo": "iOS 14",
            "Resistencia": "IP68",
            "Peso": "228g",
            "Estado": "Reacondicionado certificado"
        }
    },
    iphone11promax: {
        name: "iPhone 11 Pro Max",
        subtitle: "Verde Noche, 64GB - Cámara triple revolucionaria",
        description: "iPhone 11 Pro Max con sistema de cámara triple, chip A13 Bionic y pantalla Super Retina XDR.",
        price: 149,
        originalPrice: 505,
        discount: 25,
        category: "phone",
        variants:{
            gold: {
                name: "Dorado",
                images: [
                     "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/2566612/1.jpg?1771",
                     "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/2566612/2.jpg?1771"
                ]
            },
            spacegray: {
                name: "Gris Espacial",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/7646952/1.jpg?0549"
                ]
            },
            silver: {
                name: "Plateado",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/2566612/1.jpg?1771"
                ]
            },
            midnightgreen: {
                name: "Verde Noche",
                images: [
                    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/7646952/1.jpg?0549"
                ]
            }
        },
        memoryOptions: {
            "64GB": { price: 149, originalPrice: 505 },
            "256GB": { price: 199, originalPrice: 555 },
            "512GB": { price: 249, originalPrice: 605 }
        },
        conditionOptions: {
            "great": { name: "Great", priceAdjustment: 0, description: "Light wear, fully functional" },
            "excellent": { name: "Excellent", priceAdjustment: 30, description: "Minor signs of use" },
            "excellent_new_battery": { name: "Excellent with New Battery", description: "Like new with brand new battery", priceAdjustment: 60 }
        },
        images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/2566612/1.jpg?1771"
        ],
        features: [
            { icon: "fas fa-microchip", title: "Chip A13 Bionic", desc: "El chip más rápido en un smartphone" },
            { icon: "fas fa-camera", title: "Sistema de cámara triple", desc: "Ultra Wide, Wide y Teleobjetivo" },
            { icon: "fas fa-mobile-alt", title: "Super Retina XDR", desc: "Pantalla más brillante" },
            { icon: "fas fa-moon", title: "Modo Noche", desc: "Fotos increíbles en poca luz" }
        ],
        specifications: {
            "Pantalla": "6.5\" Super Retina XDR OLED",
            "Procesador": "Apple A13 Bionic",
            "Almacenamiento": "64GB",
            "RAM": "4GB",
            "Cámara Principal": "12MP f/1.8",
            "Cámara Ultra Wide": "12MP f/2.4",
            "Cámara Teleobjetivo": "12MP f/2.0 (2x)",
            "Batería": "3969 mAh",
            "Sistema Operativo": "iOS 13",
            "Resistencia": "IP68",
            "Peso": "226g",
            "Estado": "Reacondicionado certificado"
        }
    },
    airpods4: {
        name: "Apple AirPods 4",
        subtitle: "With Active Noise Cancellation - USB-C Charging Case",
        description: "AirPods 4 With Active Noise Cancellation - USB-C Charging Case",
        price: 90,
        originalPrice: 130,
        discount: 40,
        category: "audio",
        images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/2933714/1.jpg?9024",
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/2933714/2.jpg?9024",
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/2933714/4.jpg?9024"
        ],
        conditionOptions: {
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 0, description: "Producto nuevo, solo caja abierta" }
        },
        features: [
            { icon: "fas fa-microchip", title: "H2 chip", desc: "More sound" },
            { icon: "fas fa-volume-mute", title: "Active Noise Cancellation", desc: "Up to 2x more" },
            { icon: "fas fa-battery-full", title: "24h battery life", desc: "Extra hours of power" },
            { icon: "fas fa-magic", title: "Spatial Audio", desc: "Personalised experience" }
        ],
        specifications: {
            "Connectivity": "Bluetooth 5.3",
            "Charging Case": "USB-C",
            "Water Resistance": "IPX4",
            "Spatial Audio": "Personalised",
            "Noise Cancellation": "Active",
            "Battery Life": "Up to 24 hours",
            "Condition": "New - Open Box Only",
            "Warranty": "Full manufacturer warranty"
        }
    },
     airpod3: {
        name: "Apple AirPods 3",
        subtitle: "Los mejores AirPods para uso diario",
        description: "Los nuevos Apple AirPods 3 con Audio Espacial y batería de larga duración",
        price: 45,
        originalPrice: 70,
        discount: 25,
        category: "audio",
        images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/4529033/1.jpg?8756",
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/4529033/2.jpg?8756",
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/4529033/4.jpg?8756"
        ],
        conditionOptions: {
            "new_open_box": { name: "Display piece, never used", priceAdjustment: 0, description: "Producto nuevo, solo caja abierta" }
        },
        features: [
            { icon: "fas fa-microchip", title: "H1 chip", desc: "Sonido superior" },
            { icon: "fas fa-music", title: "Audio Espacial", desc: "Experiencia inmersiva" },
            { icon: "fas fa-battery-full", title: "30h batería", desc: "Con estuche de carga" },
            { icon: "fas fa-droplet", title: "Resistente al sudor", desc: "IPX4 certificado" }
        ],
        specifications: {
            "Connectivity": "Bluetooth 5.0",
            "Charging Case": "Lightning",
            "Water Resistance": "IPX4",
            "Spatial Audio": "Sí, con seguimiento dinámico de cabeza",
            "Battery Life": "Hasta 30 horas con estuche",
            "Condition": "Nuevo - Solo Caja Abierta",
            "Warranty": "Garantía completa del fabricante"
        }
    }
};


// Get product ID from URL parameters
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'iphone16promax'; // Default product
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

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }

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
        const thumbnailContainer = document.getElementById('thumbnail-container');

        if (!images || images.length === 0) {
            console.log('No images provided for product');
            return;
        }

        if (thumbnailContainer) {
            thumbnailContainer.innerHTML = '';
            const fragment = document.createDocumentFragment();

            images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image;
                thumbnail.alt = `${product.name} view ${index + 1}`;
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.loading = 'lazy';
                thumbnail.decoding = 'async';

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
                });

                fragment.appendChild(thumbnail);
            });

            thumbnailContainer.appendChild(fragment);
        }
    }

    // Update features
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid) {
        featuresGrid.innerHTML = '';
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

    // Update specifications
    const specsGrid = document.getElementById('specifications-grid');
    if (specsGrid) {
        specsGrid.innerHTML = '';
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

    // Setup add to cart functionality
    setupAddToCart(product);
    
    // Initialize cart display
    updateCartDisplay();
    
    // Initialize checkout functionality
    initializeCheckout();
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
        let productImage = product.images[0];

        if (product.variants && currentVariant) {
            const variant = product.variants[currentVariant];
            productName = `${product.name} (${variant.name})`;
            productImage = variant.images[0];
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

// Translation data for product pages
const translations = {
    es: {
        // Product page specific translations
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
        silver: "Plateado",
  midnightgreen: "Verde Noche",
  graphite: "Grafito",
  gold: "Dorado",
  pacificblue: "Azul Pacífico",
  alpinegreen: "Verde Alpino",
  black: "Negro",
  violet: "Violeta",
  brown: "Marrón",
  navy: "Azul Marino",
  purple: "Púrpura",
  white: "Blanco",
  green: "Verde",
  red: "Rojo",
  skyblue: "Azul Cielo",
  cream: "Crema",
  gray: "Gris",
  yellow: "Amarillo",
        available_in: "Disponible en:",
        free_shipping: "Envío gratis a partir de $200",
        free_shipping_all: "Envío gratis en todos los pedidos",
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
        search_products: "Buscar productos..."
    },
    en: {
        // Product page specific translations
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
         silver: "Silver",
  midnightgreen: "Midnight Green",
  graphite: "Graphite",
  gold: "Gold",
  pacificblue: "Pacific Blue",
  alpinegreen: "Alpine Green",
  black: "Black",
  violet: "Violet",
  brown: "Brown",
  navy: "Navy",
  purple: "Purple",
  white: "White",
  green: "Green",
  red: "Red",
  skyblue: "Sky Blue",
  cream: "Cream",
  gray: "Gray",
  yellow: "Yellow",
          spacegray: "Space Gray",
        available_in: "Available in:",
        free_shipping: "Free shipping on orders over $200",
        free_shipping_all: "Free shipping on all orders",
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
        search_products: "Search products..."
    }
};

// Adding the new translations to the dictionary
translations.es.great = "Genial";
translations.es.great_desc = "Desgaste ligero, totalmente funcional";
translations.es.excellent = "Excelente";
translations.es.excellent_desc = "Signos menores de uso";
translations.es.new_open_box = "Caja abierta, nuevo";
translations.es.excellent_new_battery_desc = "Como nuevo con batería totalmente nueva";

translations.en.great = "Great";
translations.en.great_desc = "Light wear, fully functional";
translations.en.excellent = "Excellent";
translations.en.excellent_desc = "Minor signs of use";
translations.en.new_open_box = "New open box";
translations.en.excellent_new_battery_desc = "Like new with brand new battery";
