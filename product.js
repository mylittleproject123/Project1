function getProductDatabase() {
    return {
  iphone16promax: {
    name: t("iphone16promax_name"),
    description: t("iphone_desc"),
    price: 903,
    originalPrice: 1104,
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
        "256GB": { price: 903, originalPrice: 994 },
        "512GB": { price: 953, originalPrice: 1054 },
        "1TB": { price: 1024, originalPrice: 1204 }
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

iphone17: {
    name: t("iphone17_name"),
    description: t("iphone_desc"),
    price: 1199, // Corrected from iphone17-split-payment.js
    originalPrice: 1299,
    discount: 8,
    category: "phone",
    variants: {
        mistyblue: {
            name: t("color_misty_blue"),
            images: [
                "https://image.alza.cz/products/RI054b3/RI054b3.jpg?width=500&height=500",
            ]
        },
        sagegreen: {
            name: t("color_sage_green"),
            images: [
                "https://image.alza.cz/products/RI054c4/RI054c4.jpg?width=500&height=500",
            ]
        },
        black: {
            name: t("color_black"),
            images: [
                "https://image.alza.cz/products/RI054b1/RI054b1-SK.jpg?width=500&height=500",
            ]
        }
    },
    memoryOptions: {
        "256GB": { price: 1199, originalPrice: 1299 },
        "512GB": { price: 1349, originalPrice: 1449 },
    },
    features: [
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: "A19 Chip" },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: "Advanced Dual-Camera" },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: "6.3\" Super Retina XDR" }
    ],
    specifications: {
        [t("spec_display")]: "6.3\" Super Retina XDR",
        [t("spec_processor")]: "Apple A19",
        [t("spec_storage")]: "256GB, 512GB",
        [t("spec_ram")]: "8GB",
        [t("spec_main_camera")]: "48MP Main, 12MP Ultrawide",
        [t("spec_battery")]: "4000 mAh",
        [t("spec_os")]: "iOS 19",
        [t("spec_condition")]: t("spec_condition_new_open_box"),
        [t("spec_battery_health")]: "100%"
    }
},

iphone17pro: {
    name: t("iphone17pro_name"),
    description: t("iphone_desc"),
    price: 1399, // Corrected from iphone17-split-payment.js
    originalPrice: 1499,
    discount: 7,
    category: "phone",
    variants: {
        midnight: { name: t("color_midnight"), images: ["https://image.alza.cz/products/RI055b1/RI055b1.jpg?width=500&height=500"] },
        cosmicorange: { name: t("color_cosmic_orange"), images: ["https://image.alza.cz/products/RI055b2/RI055b2.jpg?width=500&height=500"] },
        silver: { name: t("color_silver"), images: ["https://image.alza.cz/products/RI055c3/RI055c3.jpg?width=500&height=500"] }
    },
    memoryOptions: {
        "256GB": { price: 1399, originalPrice: 1499 },
        "512GB": { price: 1649, originalPrice: 1749 },
        "1TB": { price: 1899, originalPrice: 1999 }
    },
    features: [
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: "A19 Pro Chip" },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: "Pro Camera System" },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: "6.5\" ProMotion Display" }
    ],
    specifications: {
        [t("spec_display")]: "6.5\" ProMotion XDR",
        [t("spec_processor")]: "Apple A19 Pro",
        [t("spec_storage")]: "256GB, 512GB, 1TB",
        [t("spec_ram")]: "10GB",
        [t("spec_main_camera")]: "48MP Main, 12MP Ultrawide, 12MP Telephoto",
        [t("spec_battery")]: "4500 mAh",
        [t("spec_os")]: "iOS 19",
        [t("spec_condition")]: t("spec_condition_new_open_box"),
        [t("spec_battery_health")]: "100%"
    }
},

iphone17promax: {
    name: t("iphone17promax_name"),
    description: t("iphone_desc"),
    price: 1799, // Corrected from iphone17-split-payment.js
    originalPrice: 1899,
    discount: 5,
    category: "phone",
    variants: {
        midnight: { name: t("color_midnight"), images: ["https://image.alza.cz/products/RI056c3/RI056c3.jpg?width=500&height=500"] },
        cosmicorange: { name: t("color_cosmic_orange"), images: ["https://image.alza.cz/products/RI056b2/RI056b2.jpg?width=500&height=500"] },
        silver: { name: t("color_silver"), images: ["https://image.alza.cz/products/RI056b1/RI056b1.jpg?width=500&height=500"] }
    },
    memoryOptions: {
        "512GB": { price: 1799, originalPrice: 1899 },
        "1TB": { price: 2099, originalPrice: 2199 },
    },
    features: [
        { icon: "fas fa-microchip", title: t("iphone_feature_chip_title"), desc: "A19 Pro Chip" },
        { icon: "fas fa-camera", title: t("iphone_feature_camera_title"), desc: "Pro Camera System" },
        { icon: "fas fa-mobile-alt", title: t("iphone_feature_display_title"), desc: "6.9\" ProMotion Display" }
    ],
    specifications: {
        [t("spec_display")]: "6.9\" ProMotion XDR",
        [t("spec_processor")]: "Apple A19 Pro",
        [t("spec_storage")]: "512GB, 1TB",
        [t("spec_ram")]: "12GB",
        [t("spec_main_camera")]: "48MP Main, 12MP Ultrawide, 12MP Periscope Telephoto",
        [t("spec_battery")]: "5000 mAh",
        [t("spec_os")]: "iOS 19",
        [t("spec_condition")]: t("spec_condition_new_open_box"),
        [t("spec_battery_health")]: "100%"
    }
},

  iphone16: {
    name: t("iphone16_name"),
    description: t("iphone_desc"),
    price: 754,
    originalPrice: 803,
    discount: 17,
    category: "phone",
    variants: {
        black: { name: t("color_black_titanium"), images: ["https://m.media-amazon.com/images/I/419CpsXXGQL.AC_SX466.jpg"] },
        white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX425_.jpg"] },
        teal: { name: t("color_blue"), images: ["https://m.media-amazon.com/images/I/71dAfxOFDuL._AC_SX425_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 754, originalPrice: 803 },
        "256GB": { price: 829, originalPrice: 903 }
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
    price: 803,
    originalPrice: 1003,
    discount: 28,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 803, originalPrice: 903 },
        "512GB": { price: 863, originalPrice: 963 }
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
    price: 613,
    originalPrice: 1003,
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
        "128GB": { price: 613, originalPrice: 703 },
        "256GB": { price: 724, originalPrice: 803 }
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
  price: 683,
  originalPrice: 853,
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
        "128GB": { price: 623, originalPrice: 753 },
        "256GB": { price: 703, originalPrice: 953 }
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
  price: 633,
  originalPrice: 803,
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
    "256GB": { price: 633, originalPrice: 803 },
    "512GB": { price: 704, originalPrice: 903 }
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
  price: 503,
  originalPrice: 703,
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
    "256GB": { price: 483, originalPrice: 703 },
    "512GB": { price: 533, originalPrice: 853 }
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
  price: 463,
  originalPrice: 503,
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
    "256GB": { price: 463, originalPrice: 703 },
    "512GB": { price: 653, originalPrice: 853 }
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
    price: 353,
    originalPrice: 403,
    discount: 56,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 353, originalPrice: 403 },
        "512GB": { price: 383, originalPrice: 503 }
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
    price: 253,
    originalPrice: 503,
    discount: 63,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61UC1mk6dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        }
    },
    memoryOptions: {
        "128GB": { price: 253, originalPrice: 503 },
        "256GB": { price: 303, originalPrice: 553 }
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
    price: 233,
    originalPrice: 403,
    discount: 57,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/51z1UO6N6LL._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "64GB": { price: 233, originalPrice: 403 },
        "128GB": { price: 283, originalPrice: 453 }
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
    price: 274,
    category: "phone",
    variants: {
        spacegray: { name: t("color_space_gray"), images: ["https://m.media-amazon.com/images/I/518PnIKjQ3L._AC_SY606_.jpg"] },
        gold: { name: t("color_gold"), images: ["https://m.media-amazon.com/images/I/61k3k4QZftL._AC_SY606_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 274, originalPrice: 324 }
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
  price: 1403,
  originalPrice: 1763,
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
    "256GB": { price: 823, originalPrice: 1763 },
    "512GB": { price: 933, originalPrice: 1863 },
    "1TB": { price: 1053, originalPrice: 1963 }
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
    price: 1003,
    originalPrice: 1203,
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
        "256GB": { price: 703, originalPrice: 1203 },
        "512GB": { price: 753, originalPrice: 1303 }
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
    price: 583,
    originalPrice: 704,
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
        "256GB": { price: 703, originalPrice: 704 },
        "512GB": { price: 728, originalPrice: 734 },
		"1TB": { price: 903, originalPrice: 954 },
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
    price: 633,
    originalPrice: 1103,
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
        "256GB": { price: 553, originalPrice: 1103 },
        "512GB": { price: 633, originalPrice: 1153 }
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
  price: 803,
  originalPrice: 953,
  discount: 18,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 663, originalPrice: 753 }
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
  price: 453,
  originalPrice: 504,
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
    "256GB": { price: 453, originalPrice: 503 },
    "512GB": { price: 503, originalPrice: 543 }
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
  price: 603,
  originalPrice: 803,
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
    "256GB": { price: 353, originalPrice: 403 },
    "512GB": { price: 383, originalPrice: 433 }
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
  price: 343,
  originalPrice: 903,
  discount: 38,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 343, originalPrice: 404 }
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
  price: 483,
  originalPrice: 753,
  discount: 42,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61M4ndNetDL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "128GB": { price: 253, originalPrice: 753 },
    "256GB": { price: 283, originalPrice: 803 }
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
  price: 493,
  originalPrice: 603,
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
    "128GB": { price: 453, originalPrice: 603 },
    "256GB": { price: 503, originalPrice: 683 }
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
  price: 353,
  originalPrice: 433,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "128GB": { price: 303, originalPrice: 433 },
    "256GB": { price: 333, originalPrice: 483 }
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
  price: 293,
  originalPrice: 353,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 293, originalPrice: 353 },
    "128GB": { price: 333, originalPrice: 393 }
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
  price: 303,
  originalPrice: 383,
  discount: 29,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 233, originalPrice: 383 },
    "128GB": { price: 253, originalPrice: 423 }
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
  price: 333,
  originalPrice: 403,
  discount: 23,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 219, originalPrice: 349 },
    "128GB": { price: 259, originalPrice: 399 }
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
  price: 303,
  originalPrice: 373,
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
    "64GB": { price: 243, originalPrice: 373 },
    "128GB": { price: 283, originalPrice: 423 }
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
  price: 273,
  originalPrice: 303,
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
    "4GB + 128GB": { price: 233, originalPrice: 303 },
    "6GB + 128GB": { price: 283, originalPrice: 333 },
    "8GB + 256GB": { price: 313, originalPrice: 373 }
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
  price: 403,
  originalPrice: 503,
  discount: 25,
  category: "phone",
  variants: {
    midnight_black: {
      name: t("color_midnight_black"),
      images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 353, originalPrice: 503 },
    "12GB + 512GB": { price: 423, originalPrice: 583 }
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
  price: 353,
  originalPrice: 433,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61qXnVmcxxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 283, originalPrice: 433 }
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
  price: 303,
  originalPrice: 353,
  discount: 20,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 249, originalPrice: 299 }
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
  price: 311,
  originalPrice: 363,
  discount: 20,
  category: "phone",
  variants: {
    gray: {
      name: t("color_gray"),
      images: ["https://m.media-amazon.com/images/I/81L4MbrSEBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 257, originalPrice: 309 }
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
  price: 327,
  originalPrice: 383,
  discount: 20,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/71ZjanVe7oL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 273, originalPrice: 329 }
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
  price: 287,
  originalPrice: 333,
  discount: 20,
  category: "phone",
  variants: {
    blue: {
      name: t("color_blue"),
      images: ["https://m.media-amazon.com/images/I/31WbsYNtasL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "6GB + 128GB": { price: 233, originalPrice: 279 }
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
  price: 153,
  originalPrice: 183,
  discount: 17,
  category: "audio",
  variants: {
    white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/61jcsHsFN8L.__AC_SY445_SX342_QL70_FMwebp_.jpg"] }
  },
  memoryOptions: {},
  conditionOptions: {
    great: { name: t("condition_great"), priceAdjustment: 0, description: t("condition_great_desc") },
    excellent: { name: t("condition_excellent"), priceAdjustment: 20, description: t("condition_excellent_desc") },    
    like_new_open_box: { name: t("condition_like_new_open_box"), priceAdjustment: 50, description: t("condition_like_new_open_box_desc") },
    display_piece: { name: t("condition_display_piece"), priceAdjustment: 40, description: t("condition_display_piece_desc") }
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
  price: 183,
  originalPrice: 253,
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
  price: 63.99,
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
  price: 93,
  originalPrice: 133,
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
  price: 73.99,
  originalPrice: 83.99,
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
  price: 153,
  originalPrice: 183,
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
  price: 66,
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
  price: 63.99,
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
    price: 70,
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
    price: 65.99,
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
    price: 283,
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
    price: 243,
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
    price: 283,
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
    price: 93,
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
    price: 433,
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
    price: 233,
    originalPrice: 303,
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
    price: 212,
    category: "phone",
    variants: {
        bronze: { name: t("color_mystic_bronze"), images: ["https://m.media-amazon.com/images/I/81S-XYJ0-gL._AC_SX679_.jpg"] },
        green: { name: t("color_mystic_green"), images: ["https://m.media-amazon.com/images/I/816nFzoZ-SL._AC_SX679_.jpg"] },
        black: { name: t("color_mystic_black"), images: ["https://i.ebayimg.com/images/g/u78AAOSwDsdh2WXb/s-l960.webp"] }
    },
    memoryOptions: {
        "256GB": { price: 158, originalPrice: 199 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: t("feature_spen_included"), desc: t("feature_spen_precision_desc") },
        { icon: "fas fa-camera", title: t("feature_pro_camera"), desc: t("feature_pro_camera_stunning_photos_desc") },
        { icon: "fas fa-battery-full", title: t("feature_all_day_battery"), desc: t("feature_all_day_battery_power_desc") }
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
    price: 226,
    category: "phone",
    variants: {
        red: { name: t("color_aura_red"), images: ["https://m.media-amazon.com/images/I/515c2WbyRJL._AC_SX679_.jpg"] },
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/71T0S6sQiKL._AC_SX679_.jpg"] },
        black: { name: t("color_aura_black"), images: ["https://m.media-amazon.com/images/I/71T0S6sQiKL._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 172, originalPrice: 210 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: t("feature_spen_included"), desc: t("feature_spen_notes_drawing_desc") },
        { icon: "fas fa-camera", title: t("feature_triple_camera"), desc: t("feature_triple_camera_versatile_desc") },
        { icon: "fas fa-battery-full", title: t("feature_large_battery"), desc: t("feature_large_battery_long_lasting_desc") }
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
    price: 239,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/61gJyqFqX9L._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 185, originalPrice: 230 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: t("feature_spen_included"), desc: t("feature_spen_remote_control_desc") },
        { icon: "fas fa-film", title: t("feature_cinematic_display"), desc: t("feature_cinematic_display_edge_to_edge_desc") },
        { icon: "fas fa-camera", title: t("feature_pro_camera"), desc: t("feature_pro_camera_live_focus_desc") }
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
    price: 288,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/51S--oy0ASL._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 234, originalPrice: 290 },
    },
    features: [
        { icon: "fas fa-pen-fancy", title: t("feature_advanced_spen"), desc: t("feature_advanced_spen_air_actions_desc") },
        { icon: "fas fa-expand", title: t("feature_large_display_6_8"), desc: t("feature_large_display_immersive_desc") },
        { icon: "fas fa-camera-retro", title: t("feature_depthvision_camera"), desc: t("feature_depthvision_camera_3d_scan_desc") }
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
    price: 218,
    category: "phone",
    variants: {
        white: { name: t("color_prism_white"), images: ["https://www-konga-com-res.cloudinary.com/image/upload/f_auto,fl_lossy,dpr_auto,q_auto,w_1080/media/catalog/product/C/V/163129_1675444177.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 164, originalPrice: 200 },
    },
    features: [
        { icon: "fas fa-fingerprint", title: t("feature_ultrasonic_fingerprint"), desc: t("feature_ultrasonic_fingerprint_secure_desc") },
        { icon: "fas fa-camera", title: t("feature_triple_camera"), desc: t("feature_triple_camera_ultrawide_desc") },
        { icon: "fas fa-share-alt", title: t("feature_wireless_powershare"), desc: t("feature_wireless_powershare_charge_desc") }
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
    price: 274,
    category: "phone",
    variants: {
        navy: { name: t("color_cloud_navy"), images: ["https://m.media-amazon.com/images/I/51yxI5nkPWL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 220, originalPrice: 270 },
    },
    features: [
        { icon: "fas fa-tachometer-alt", title: t("feature_120hz_display"), desc: t("feature_120hz_display_smooth_scroll_desc") },
        { icon: "fas fa-camera", title: t("feature_pro_triple_camera"), desc: t("feature_pro_triple_camera_30x_zoom_desc") },
        { icon: "fas fa-battery-full", title: t("feature_all_day_battery"), desc: t("feature_all_day_battery_4500mah_desc") }
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
    price: 296,
    category: "phone",
    variants: {
        black: { name: t("color_cosmic_black"), images: ["https://m.media-amazon.com/images/I/71C4k+Ej67L._AC_SX466_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 242, originalPrice: 300 },
    },
    features: [
        { icon: "fas fa-video", title: t("feature_8k_video_snap"), desc: t("feature_8k_video_snap_high_res_desc") },
        { icon: "fas fa-camera", title: t("feature_64mp_camera"), desc: t("feature_64mp_camera_30x_zoom_desc") },
        { icon: "fas fa-tachometer-alt", title: t("feature_120hz_display"), desc: t("feature_120hz_display_responsive_desc") }
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
    price: 315,
    category: "phone",
    variants: {
        gray: { name: t("color_cosmic_gray"), images: ["https://m.media-amazon.com/images/I/51Tsn0W3XFL._AC_SX522_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 261, originalPrice: 330 },
    },
    features: [
        { icon: "fas fa-search-plus", title: t("feature_100x_space_zoom"), desc: t("feature_100x_space_zoom_close_desc") },
        { icon: "fas fa-camera", title: t("feature_108mp_camera"), desc: t("feature_108mp_camera_stunning_detail_desc") },
        { icon: "fas fa-video", title: t("feature_8k_video_recording"), desc: t("feature_8k_video_recording_cinema_quality_desc") }
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
    price: 299,
    category: "phone",
    variants: {
        silver: { name: t("color_phantom_silver"), images: ["https://m.media-amazon.com/images/I/61yn+RcQ08S._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 245, originalPrice: 310 },
    },
    features: [
        { icon: "fas fa-video", title: t("feature_8k_video_snap"), desc: t("feature_8k_video_snap_stills_desc") },
        { icon: "fas fa-camera", title: t("feature_pro_camera"), desc: t("feature_pro_camera_64mp_telephoto_desc") },
        { icon: "fas fa-tachometer-alt", title: t("feature_120hz_adaptive_display"), desc: t("feature_120hz_adaptive_display_smooth_desc") }
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
    price: 350,
    category: "phone",
    variants: {
        black: { name: t("color_phantom_black"), images: ["https://m.media-amazon.com/images/I/610KvwSCMYL._AC_SX466_.jpg"] },
        navy: { name: t("color_phantom_navy"), images: ["https://m.media-amazon.com/images/I/51gfaY6FQwL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 296, originalPrice: 340 },
    },
    features: [
        { icon: "fas fa-search-plus", title: t("feature_dual_tele_zoom"), desc: t("feature_dual_tele_zoom_100x_desc") },
        { icon: "fas fa-pen-fancy", title: t("feature_spen_compatible"), desc: t("feature_spen_compatible_first_galaxy_s_desc") },
        { icon: "fas fa-camera", title: t("feature_108mp_pro_sensor"), desc: t("feature_108mp_pro_sensor_bright_night_desc") }
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

// Validate selections and enable/disable add to cart button
function validateSelections(product) {
    const addToCartBtn = document.getElementById('add-to-cart-product');
    if (!addToCartBtn) return false;

    let isValid = true;
    if (product.memoryOptions && !currentMemory) isValid = false;
    if (product.conditionOptions && !currentCondition) isValid = false;
    if (product.variants && !currentVariant) isValid = false;

    if (isValid) {
        addToCartBtn.disabled = false;
    } else {
        addToCartBtn.disabled = true;
    }
    return isValid;
}

// Setup add to cart functionality

// Get product ID from URL parameters
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'iphone16promax'; // Default to a product if no ID is found
}

// Global variables for product page state
let currentMemory = null;
let currentCondition = null;
let currentVariant = null;

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
    // This script should only run on the product detail page.
    if (!document.querySelector('.product-detail')) {
        return;
    }

    // The main `script.js` already handles country/language initialization.
    // We just need to load the product details.
    loadProductDetails();
});

function loadProductDetails() {
    const productId = getProductId();
    const productDatabase = getProductDatabase(); // This uses the t() function
    const product = productDatabase[productId];

    if (!product) {
        document.querySelector('main.container').innerHTML = '<h2>Product not found</h2>';
        return;
    }

    // Initialize selection states
    currentMemory = product.memoryOptions ? Object.keys(product.memoryOptions)[0] : null;
    currentCondition = product.conditionOptions ? Object.keys(product.conditionOptions)[0] : null;
    currentVariant = product.variants ? Object.keys(product.variants)[0] : null;

    // Update page title and breadcrumb
    document.title = `${product.name} - Swappie`;
    document.getElementById('product-page-title').textContent = `${product.name} - Swappie`;
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Update basic info
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-subtitle').textContent = product.description;
    document.getElementById('product-discount').textContent = `-${product.discount}%`;

    // Render dynamic sections
    renderColorOptions(product);
    renderMemoryOptions(product);
    renderFeatures(product);
    renderSpecifications(product);

    const initialVariant = product.variants ? product.variants[currentVariant] : null;
    const initialImages = initialVariant ? initialVariant.images : product.images;
    updateProductImages(product, initialImages);

    // Set initial price after all options are rendered
    updatePricing(product);
    // Setup interactive elements
    setupQuantityControls();
    setupAddToCartListener(product);
    validateSelections(product);
}

function updatePricing(product) {
    let basePrice = 0;
    let baseOriginalPrice = 0;

    // First, set the base price from the product itself.
    basePrice = product.price;
    baseOriginalPrice = product.originalPrice;

    // Then, if memory options exist and are selected, override the base price.
    if (product.memoryOptions && currentMemory && product.memoryOptions[currentMemory]) {
        basePrice = product.memoryOptions[currentMemory].price;
        baseOriginalPrice = product.memoryOptions[currentMemory].originalPrice;
    }

    if (product.conditionOptions && currentCondition) {
        basePrice += product.conditionOptions[currentCondition].priceAdjustment || 0;
        baseOriginalPrice += product.conditionOptions[currentCondition].priceAdjustment || 0;
    }

    document.getElementById('product-price').textContent = convertPrice(basePrice);
    document.getElementById('product-original-price').textContent = convertPrice(baseOriginalPrice);
}

function renderColorOptions(product) {
    const container = document.getElementById('color-selection-container');
    const select = document.getElementById('product-color-select');
    if (!product.variants || !container || !select) return;

    container.style.display = 'block';
    select.innerHTML = '';

    Object.entries(product.variants).forEach(([key, variant]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = variant.name;
        select.appendChild(option);
    });

    select.value = currentVariant;

    select.addEventListener('change', function() {
        currentVariant = this.value;
        const variant = product.variants[currentVariant];
        updateProductImages(product, variant.images);
        validateSelections(product);
    });
}

function renderMemoryOptions(product) {
    const container = document.getElementById('memory-selection-container');
    const grid = document.getElementById('memory-options');
    if (!product.memoryOptions || !container || !grid) return;

    container.style.display = 'block';
    grid.innerHTML = '';

    Object.keys(product.memoryOptions).forEach(memory => {
        const option = document.createElement('button');
        option.className = 'memory-option';
        option.textContent = memory;
        option.dataset.memory = memory;
        if (memory === currentMemory) {
            option.classList.add('selected');
        }
        option.addEventListener('click', () => {
            currentMemory = memory;
            document.querySelectorAll('.memory-option').forEach(btn => btn.classList.remove('selected'));
            option.classList.add('selected');
            updatePricing(product);
            validateSelections(product);
        });
        grid.appendChild(option);
    });

    // Explicitne zavolajte updatePricing po vykreslení, aby sa zobrazila počiatočná cena
    updatePricing(product);
}

function updateProductImages(product, images) {
    const mainImage = document.getElementById('main-product-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    if (!images || images.length === 0) {
        mainImage.src = 'https://placehold.co/600x600?text=No+Image';
        thumbnailContainer.innerHTML = '';
        return;
    }

    mainImage.src = images[0];
    mainImage.alt = product.name;

    thumbnailContainer.innerHTML = '';
    images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `${product.name} thumbnail ${index + 1}`;
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => {
            mainImage.src = imgSrc;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnailContainer.appendChild(thumb);
    });
}

function renderFeatures(product) {
    const grid = document.getElementById('features-grid');
    if (!grid || !product.features) return;
    grid.innerHTML = product.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon"><i class="${feature.icon}"></i></div>
            <div class="feature-title">${feature.title}</div>
            <div class="feature-desc">${feature.desc}</div>
        </div>
    `).join('');
}

function renderSpecifications(product) {
    const grid = document.getElementById('specifications-grid');
    if (!grid || !product.specifications) return;
    grid.innerHTML = Object.entries(product.specifications).map(([label, value]) => `
        <div class="spec-item">
            <span class="spec-label">${label}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
}

function setupQuantityControls() {
    const quantityDisplay = document.getElementById('quantity');
    document.getElementById('decrease-qty').addEventListener('click', () => {
        let current = parseInt(quantityDisplay.value);
        if (current > 1) quantityDisplay.value = current - 1;
    });
    document.getElementById('increase-qty').addEventListener('click', () => {
        let current = parseInt(quantityDisplay.value);
        if (current < 10) quantityDisplay.value = current + 1;
    });
}

function setupAddToCartListener(product) {
    const btn = document.getElementById('add-to-cart-product');
    btn.addEventListener('click', () => {
        if (!validateSelections(product)) return;

        const quantity = parseInt(document.getElementById('quantity').value);
        let basePrice = 0;
        let baseOriginalPrice = 0;

        if (product.memoryOptions && currentMemory) {
            basePrice = product.memoryOptions[currentMemory].price;
        } else {
            basePrice = product.price;
        }

        if (product.conditionOptions && currentCondition) {
            basePrice += product.conditionOptions[currentCondition].priceAdjustment || 0;
        }

        let productName = product.name;
        let productImage = (product.images && product.images[0]) || 'https://placehold.co/100x100';

        if (product.variants && currentVariant) {
            const variant = product.variants[currentVariant];
            productName += ` (${variant.name})`;
            if (variant.images && variant.images[0]) {
                productImage = variant.images[0];
            }
        }
        if (currentMemory) productName += ` - ${currentMemory}`;
        if (currentCondition) productName += ` - ${t(currentCondition)}`;

        const cartItem = {
            id: `${getProductId()}_${currentVariant || 'd'}_${currentMemory || 'd'}_${currentCondition || 'd'}`,
            name: productName,
            price: basePrice,
            image: productImage,
            quantity: quantity
        };

        addToCart(cartItem); // This function is in script.js
    });
}
