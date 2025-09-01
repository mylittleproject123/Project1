// Product database with detailed information
const productDatabase = {
    
   iphone16promax: {
    name: "iPhone 16 Pro Max",
    description: t("iphone_desc"), // Example key: "La máxima expresión de innovación de Apple"
    price: 769,
    originalPrice: 1000,
    discount: 25,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: [
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/1.jpg?7763",
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/3.jpg?7763",
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/4.jpg?7763",
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/5.jpg?7763",
                "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/1505814/7.jpg?7763"
            ]
        },
        gold: {
            name: t("color_rose_gold"),
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
        great: {
            name: t("condition_great"),
            priceAdjustment: 0,
            description: t("condition_great_desc")
        },
        excellent: {
            name: t("condition_excellent"),
            priceAdjustment: 30,
            description: t("condition_excellent_desc")
        },
        new_open_box: {
            name: t("condition_display_piece"),
            priceAdjustment: 60,
            description: t("condition_display_piece_desc")
        }
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
  price: 999,
  originalPrice: 1199,
  discount: 17,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/71QkWOSDkmL._AC_SX569_.jpg"] },
    gold: { name: t("color_rose_gold"), images: ["https://m.media-amazon.com/images/I/71QkWOSDkmL._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 999, originalPrice: 1199 },
    "256GB": { price: 1099, originalPrice: 1299 }
  },
  conditionOptions: {
    great: { name: t("condition_great"), priceAdjustment: 0, description: t("condition_great_desc") },
    excellent: { name: t("condition_excellent"), priceAdjustment: 50, description: t("condition_excellent_desc") },
    new_open_box: { name: t("condition_display_piece"), priceAdjustment: 100, description: t("condition_display_piece_desc") }
  },
  images: ["https://m.media-amazon.com/images/I/71QkWOSDkmL._AC_SX569_.jpg"],
  features: [
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") },
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") }
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"] },
    gold: { name: t("color_rose_gold"), images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 649, originalPrice: 899 },
    "256GB": { price: 749, originalPrice: 999 }
  },
  conditionOptions: { /* same as above */ },
  images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"],
  features: [ /* similar */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51H8+zCj2cL._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 699, originalPrice: 899 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51H8+zCj2cL._AC_SX569_.jpg"],
  features: [ /* similar */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY606_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 579, originalPrice: 749 },
    "256GB": { price: 679, originalPrice: 849 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY606_.jpg"],
  features: [ /* similar */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51wqFSpP20L._AC_SL1000_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 429, originalPrice: 699 },
    "256GB": { price: 529, originalPrice: 799 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51wqFSpP20L._AC_SL1000_.jpg"],
  features: [ /* similar */ ],
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

iphone13promax: {
  name: t("iphone13promax_name"),
  description: t("iphone_desc"),
  price: 359,
  originalPrice: 599,
  discount: 40,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 359, originalPrice: 599 },
    "256GB": { price: 459, originalPrice: 699 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX569_.jpg"],
  features: [ /* similar */ ],
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
  originalPrice: 499,
  discount: 56,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 219, originalPrice: 499 },
    "256GB": { price: 319, originalPrice: 599 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg"],
  features: [ /* similar */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61UC1mk6dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 149, originalPrice: 399 },
    "128GB": { price: 199, originalPrice: 449 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/61UC1mk6dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* similar */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51z1UO6N6LL._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 129, originalPrice: 299 },
    "128GB": { price: 179, originalPrice: 349 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51z1UO6N6LL._AC_SX569_.jpg"],
  features: [ /* similar */ ],
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
  name: t("galaxys25ultra_name"),
  description: t("samsung_desc"),
  price: 1299,
  originalPrice: 1659,
  discount: 22,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg"] },
    silver: { name: t("color_silver"), images: ["https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "256GB": { price: 1299, originalPrice: 1659 },
    "512GB": { price: 1399, originalPrice: 1759 },
    "1TB":   { price: 1499, originalPrice: 1859 }
  },
  conditionOptions: { /* same as before: great, excellent, display piece */ },
  images: ["https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg"],
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

galaxys24ultra: {
  name: t("galaxys24ultra_name"),
  description: t("samsung_desc"),
  price: 999,
  originalPrice: 1299,
  discount: 23,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "256GB": { price: 999, originalPrice: 1299 },
    "512GB": { price: 1099, originalPrice: 1399 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same as above */ ],
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

galaxys24plus: {
  name: t("galaxys24plus_name"),
  description: t("samsung_desc"),
  price: 699,
  originalPrice: 849,
  discount: 18,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/517wd0xP59L.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "256GB": { price: 699, originalPrice: 849 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/517wd0xP59L.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
  price: 599,
  originalPrice: 899,
  discount: 33,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/513vXUcPFrL._AC_SX569_.jpg"] }
  },
  memoryOptions: {
    "256GB": { price: 599, originalPrice: 899 },
    "512GB": { price: 699, originalPrice: 999 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/513vXUcPFrL._AC_SX569_.jpg"],
  features: [ /* same */ ],
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

galaxys22ultra: {
  name: t("galaxys22ultra_name"),
  description: t("samsung_desc"),
  price: 499,
  originalPrice: 799,
  discount: 38,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "256GB": { price: 499, originalPrice: 799 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
    galaxya545g: {
  name: t("galaxya545g_name"),
  description: t("samsung_desc"),
  price: 389,
  originalPrice: 499,
  discount: 22,
  category: "phone",
  variants: {
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] },
    peach: { name: t("color_peach"), images: ["https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 389, originalPrice: 499 },
    "256GB": { price: 459, originalPrice: 579 }
  },
  conditionOptions: {
    great: { name: t("condition_great"), priceAdjustment: 0, description: t("condition_great_desc") },
    excellent: { name: t("condition_excellent"), priceAdjustment: 30, description: t("condition_excellent_desc") },
    new_open_box: { name: t("condition_display_piece"), priceAdjustment: 60, description: t("condition_display_piece_desc") }
  },
  images: ["https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [
    { icon: "fas fa-microchip", title: t("feature_chip_title"), desc: t("feature_chip_desc") },
    { icon: "fas fa-camera", title: t("feature_camera_title"), desc: t("feature_camera_desc") },
    { icon: "fas fa-battery-full", title: t("feature_battery_title"), desc: t("feature_battery_desc") },
    { icon: "fas fa-mobile-alt", title: t("feature_display_title"), desc: t("feature_display_desc") }
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] },
    green: { name: t("color_green"), images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "128GB": { price: 249, originalPrice: 329 },
    "256GB": { price: 299, originalPrice: 379 }
  },
  conditionOptions: { /* same as above */ },
  images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same as above */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] },
    blue: { name: t("color_blue"), images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 189, originalPrice: 249 },
    "128GB": { price: 229, originalPrice: 289 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"] },
    green: { name: t("color_green"), images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 199, originalPrice: 279 },
    "128GB": { price: 239, originalPrice: 319 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg"] },
    green: { name: t("color_green"), images: ["https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 229, originalPrice: 299 },
    "128GB": { price: 269, originalPrice: 349 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/41tFC8GKz8L._SX300_SY300_QL70_FMwebp_.jpg"] },
    copper: { name: t("color_copper"), images: ["https://m.media-amazon.com/images/I/41tFC8GKz8L._SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "64GB": { price: 199, originalPrice: 269 },
    "128GB": { price: 239, originalPrice: 319 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/41tFC8GKz8L._SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* same */ ],
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
    midnight_black: { name: t("color_midnight_black"), images: ["https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg"] },
    sage_green: { name: t("color_sage_green"), images: ["https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg"] }
  },
  memoryOptions: {
    "4GB + 128GB": { price: 169, originalPrice: 199 },
    "6GB + 128GB": { price: 199, originalPrice: 229 },
    "8GB + 256GB": { price: 229, originalPrice: 269 }
  },
  conditionOptions: { /* same structure as others */ },
  images: ["https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg"],
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
    midnight_black: { name: t("color_midnight_black"), images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 299, originalPrice: 399 },
    "12GB + 512GB": { price: 359, originalPrice: 479 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
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
    black: { name: t("color_black"), images: ["https://m.media-amazon.com/images/I/61qXnVmcxxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 249, originalPrice: 329 }
  },
  conditionOptions: { /* same */ },
  images: ["https://m.media-amazon.com/images/I/61qXnVmcxxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"],
  features: [ /* similar features */ ],
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
        free_shipping: "Envío gratis a partir",
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
