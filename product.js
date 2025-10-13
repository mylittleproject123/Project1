function getProductDatabase() {
    return {
  iphone16promax: {
    name: t("iphone16promax_name"),
    description: t("iphone_desc"),
    price: 853,
    originalPrice: 1054,
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
        "256GB": { price: 853, originalPrice: 944 },
        "512GB": { price: 903, originalPrice: 1004 },
        "1TB": { price: 974, originalPrice: 1154 }
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
    price: 704,
    originalPrice: 753,
    discount: 17,
    category: "phone",
    variants: {
        black: { name: t("color_black_titanium"), images: ["https://m.media-amazon.com/images/I/419CpsXXGQL.AC_SX466.jpg"] },
        white: { name: t("color_white"), images: ["https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX425_.jpg"] },
        teal: { name: t("color_blue"), images: ["https://m.media-amazon.com/images/I/71dAfxOFDuL._AC_SX425_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 704, originalPrice: 753 },
        "256GB": { price: 779, originalPrice: 853 }
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
    price: 753,
    originalPrice: 953,
    discount: 28,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 753, originalPrice: 853 },
        "512GB": { price: 813, originalPrice: 913 }
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
    price: 563,
    originalPrice: 953,
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
        "128GB": { price: 563, originalPrice: 653 },
        "256GB": { price: 674, originalPrice: 753 }
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
  price: 633,
  originalPrice: 803,
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
        "128GB": { price: 573, originalPrice: 703 },
        "256GB": { price: 653, originalPrice: 903 }
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
  price: 583,
  originalPrice: 753,
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
    "256GB": { price: 583, originalPrice: 753 },
    "512GB": { price: 654, originalPrice: 853 }
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
  price: 453,
  originalPrice: 653,
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
    "256GB": { price: 433, originalPrice: 653 },
    "512GB": { price: 483, originalPrice: 803 }
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
  price: 413,
  originalPrice: 453,
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
    "256GB": { price: 413, originalPrice: 653 },
    "512GB": { price: 603, originalPrice: 803 }
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
    price: 303,
    originalPrice: 353,
    discount: 56,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg"]
        }
    },
    memoryOptions: {
        "256GB": { price: 303, originalPrice: 353 },
        "512GB": { price: 333, originalPrice: 453 }
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
    price: 203,
    originalPrice: 453,
    discount: 63,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/61UC1mk6dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
        }
    },
    memoryOptions: {
        "128GB": { price: 203, originalPrice: 453 },
        "256GB": { price: 253, originalPrice: 503 }
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
    price: 183,
    originalPrice: 353,
    discount: 57,
    category: "phone",
    variants: {
        black: {
            name: t("color_black"),
            images: ["https://m.media-amazon.com/images/I/51z1UO6N6LL._AC_SX569_.jpg"]
        }
    },
    memoryOptions: {
        "64GB": { price: 183, originalPrice: 353 },
        "128GB": { price: 233, originalPrice: 403 }
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
    price: 224,
    category: "phone",
    variants: {
        spacegray: { name: t("color_space_gray"), images: ["https://m.media-amazon.com/images/I/518PnIKjQ3L._AC_SY606_.jpg"] },
        gold: { name: t("color_gold"), images: ["https://m.media-amazon.com/images/I/61k3k4QZftL._AC_SY606_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 224, originalPrice: 274 }
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
  price: 1353,
  originalPrice: 1713,
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
    "256GB": { price: 773, originalPrice: 1713 },
    "512GB": { price: 883, originalPrice: 1813 },
    "1TB": { price: 1003, originalPrice: 1913 }
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
    price: 953,
    originalPrice: 1153,
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
        "256GB": { price: 653, originalPrice: 1153 },
        "512GB": { price: 703, originalPrice: 1253 }
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
    price: 533,
    originalPrice: 654,
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
        "256GB": { price: 653, originalPrice: 654 },
        "512GB": { price: 678, originalPrice: 684 },
		"1TB": { price: 853, originalPrice: 904 },
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
    price: 583,
    originalPrice: 1053,
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
        "256GB": { price: 503, originalPrice: 1053 },
        "512GB": { price: 583, originalPrice: 1103 }
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
  price: 753,
  originalPrice: 903,
  discount: 18,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 613, originalPrice: 703 }
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
  price: 403,
  originalPrice: 454,
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
    "256GB": { price: 403, originalPrice: 453 },
    "512GB": { price: 453, originalPrice: 493 }
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
  price: 553,
  originalPrice: 753,
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
    "256GB": { price: 303, originalPrice: 353 },
    "512GB": { price: 333, originalPrice: 383 }
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
  price: 293,
  originalPrice: 853,
  discount: 38,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "256GB": { price: 293, originalPrice: 354 }
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
  price: 433,
  originalPrice: 703,
  discount: 42,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61M4ndNetDL._AC_SX569_.jpg"]
    }
  },
  memoryOptions: {
    "128GB": { price: 203, originalPrice: 703 },
    "256GB": { price: 233, originalPrice: 753 }
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
  price: 443,
  originalPrice: 553,
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
    "128GB": { price: 403, originalPrice: 553 },
    "256GB": { price: 453, originalPrice: 633 }
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
  price: 303,
  originalPrice: 383,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "128GB": { price: 253, originalPrice: 383 },
    "256GB": { price: 283, originalPrice: 433 }
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
  price: 243,
  originalPrice: 303,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 243, originalPrice: 303 },
    "128GB": { price: 283, originalPrice: 343 }
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
  price: 253,
  originalPrice: 333,
  discount: 29,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/51neXjpArML.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    },
  },
  memoryOptions: {
    "64GB": { price: 183, originalPrice: 333 },
    "128GB": { price: 203, originalPrice: 373 }
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
  price: 283,
  originalPrice: 353,
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
  price: 253,
  originalPrice: 323,
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
    "64GB": { price: 193, originalPrice: 323 },
    "128GB": { price: 233, originalPrice: 373 }
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
  price: 223,
  originalPrice: 253,
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
    "4GB + 128GB": { price: 183, originalPrice: 253 },
    "6GB + 128GB": { price: 233, originalPrice: 283 },
    "8GB + 256GB": { price: 263, originalPrice: 323 }
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
  price: 353,
  originalPrice: 453,
  discount: 25,
  category: "phone",
  variants: {
    midnight_black: {
      name: t("color_midnight_black"),
      images: ["https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 303, originalPrice: 453 },
    "12GB + 512GB": { price: 373, originalPrice: 533 }
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
  price: 303,
  originalPrice: 383,
  discount: 24,
  category: "phone",
  variants: {
    black: {
      name: t("color_black"),
      images: ["https://m.media-amazon.com/images/I/61qXnVmcxxL.__AC_SX300_SY300_QL70_FMwebp_.jpg"]
    }
  },
  memoryOptions: {
    "8GB + 256GB": { price: 233, originalPrice: 383 }
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
  price: 253,
  originalPrice: 303,
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
  price: 261,
  originalPrice: 313,
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
  price: 277,
  originalPrice: 333,
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
  price: 237,
  originalPrice: 283,
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
    display_piece: { name: t("condition_display_piece"), priceAdjustment: 40, description: t("condition_display_piece_desc") },
    new_open_box: { name: t("condition_new_open_box"), priceAdjustment: 50, description: t("condition_new_open_box_desc") }
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
    price: 233,
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
    price: 383,
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
    price: 162,
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
    price: 176,
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
    price: 189,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/61gJyqFqX9L._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 135, originalPrice: 180 },
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
    price: 238,
    category: "phone",
    variants: {
        glow: { name: t("color_aura_glow"), images: ["https://m.media-amazon.com/images/I/51S--oy0ASL._AC_SX679_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 184, originalPrice: 240 },
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
    price: 168,
    category: "phone",
    variants: {
        white: { name: t("color_prism_white"), images: ["https://www-konga-com-res.cloudinary.com/image/upload/f_auto,fl_lossy,dpr_auto,q_auto,w_1080/media/catalog/product/C/V/163129_1675444177.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 114, originalPrice: 150 },
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
    price: 224,
    category: "phone",
    variants: {
        navy: { name: t("color_cloud_navy"), images: ["https://m.media-amazon.com/images/I/51yxI5nkPWL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 170, originalPrice: 220 },
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
    price: 246,
    category: "phone",
    variants: {
        black: { name: t("color_cosmic_black"), images: ["https://m.media-amazon.com/images/I/71C4k+Ej67L._AC_SX466_.jpg"] }
    },
    memoryOptions: {
        "128GB": { price: 192, originalPrice: 250 },
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
    price: 265,
    category: "phone",
    variants: {
        gray: { name: t("color_cosmic_gray"), images: ["https://m.media-amazon.com/images/I/51Tsn0W3XFL._AC_SX522_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 211, originalPrice: 280 },
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
    price: 249,
    category: "phone",
    variants: {
        silver: { name: t("color_phantom_silver"), images: ["https://m.media-amazon.com/images/I/61yn+RcQ08S._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "256GB": { price: 195, originalPrice: 260 },
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
    price: 300,
    category: "phone",
    variants: {
        black: { name: t("color_phantom_black"), images: ["https://m.media-amazon.com/images/I/610KvwSCMYL._AC_SX466_.jpg"] },
        navy: { name: t("color_phantom_navy"), images: ["https://m.media-amazon.com/images/I/51gfaY6FQwL._AC_SX569_.jpg"] }
    },
    memoryOptions: {
        "512GB": { price: 246, originalPrice: 290 },
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

// Get product ID from URL parameters
function getProductId() {    
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'iphone16promax'; // Default to a product if no ID is found
}

// Global variables for product page state
let currentMemory = null;
let currentCondition = null;
let currentVariant = null;

// Load and display product
function loadProduct() {
    const productDatabase = getProductDatabase();
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
        let basePrice = 0;
        let baseOriginalPrice = 0;

        // Apply memory pricing if available
        if (product.memoryOptions && Object.keys(product.memoryOptions).length > 0 && currentMemory) {
            basePrice = product.memoryOptions[currentMemory].price;
            baseOriginalPrice = product.memoryOptions[currentMemory].originalPrice;
        } else {
            basePrice = product.price;
            baseOriginalPrice = product.originalPrice;
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

    // Setup condition selection
    const conditionContainer = document.getElementById('condition-selection-container');
    const conditionOptions = document.getElementById('condition-options');

    if (product.conditionOptions && conditionContainer && conditionOptions) {
        conditionContainer.style.display = 'block';

        const conditionTitle = document.createElement('h3');
        conditionTitle.style.cssText = 'font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--secondary-color);'; 
        conditionTitle.innerHTML = `${window.translations[window.currentLanguage].condition || 'Condition'} <span style="color: #ef4444; font-size: 0.9rem;">${window.translations[window.currentLanguage].required || '*Required'}</span>`;

        const conditionGuide = document.createElement('div');
        conditionGuide.style.cssText = 'margin-bottom: 1rem; padding: 0.75rem; background: var(--background-light); border-radius: 6px; font-size: 0.875rem; color: var(--text-light);';
        conditionGuide.innerHTML = `
            <i class="fas fa-info-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i> 
            <strong>${window.translations[window.currentLanguage].condition_guide || 'Condition Guide:'}</strong> ${window.translations[window.currentLanguage].condition_guide_desc || 'Better conditions indicate less wear and superior device appearance.'}
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

            const conditionName = window.translations[window.currentLanguage][key] || condition.name;
            const conditionDesc = window.translations[window.currentLanguage][key + '_desc'] || condition.description;

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
        memoryTitle.innerHTML = `${window.translations[window.currentLanguage].storage || 'Storage'} <span style="color: #ef4444; font-size: 0.9rem;">${window.translations[window.currentLanguage].required || '*Required'}</span>`;

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

        // Update product information and pricing AFTER setting up options
        if (titleEl) titleEl.textContent = product.name;
        if (subtitleEl) subtitleEl.textContent = product.subtitle;
        if (discountEl) discountEl.textContent = `-${product.discount}%`;
        updatePricing(); // Call pricing update here
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
        let basePrice = 0;

        // Apply memory pricing if available
        if (product.memoryOptions && Object.keys(product.memoryOptions).length > 0 && currentMemory) {
            basePrice = product.memoryOptions[currentMemory].price;
        } else {
            basePrice = product.price;
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
            const conditionName = window.translations[window.currentLanguage][currentCondition] || product.conditionOptions[currentCondition].name;
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
            if (giftBadge && window.translations[window.currentLanguage] && window.translations[window.currentLanguage]['free_gift']) {
                giftBadge.textContent = window.translations[window.currentLanguage]['free_gift'] || 'FREE GIFT';
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
        const totalItems = window.cart.reduce((total, item) => total + item.quantity, 0);
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

        const existingItem = window.cart.find(item => item.id === product.id);

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

        localStorage.setItem('cart', JSON.stringify(window.cart));
        updateCartCount();
        updateCartDisplay();
        showAddToCartFeedback();
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

function removeFromCart(productId) {
    window.cart = window.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(window.cart));
    updateCartCount();
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const item = window.cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(window.cart));
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

    if (window.cart.length === 0) {
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

    window.cart.forEach((item) => {
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

            const item = window.cart.find(cartItem => cartItem.id === itemId);
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
        if (window.cart.length === 0) {
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
                window.currentCountry = countryKey;
                window.currentLanguage = countryConfig[countryKey].lang;
                localStorage.setItem('selectedCountry', window.currentCountry);
                localStorage.setItem('selectedLanguage', window.currentLanguage);
                // Clean the URL parameter after reading it
                history.replaceState(null, '', `${window.location.pathname}?id=${getProductId()}`);
                return; // Found country, exit
            } 
        }

        // Priority 2: Local Storage
        const countryFromStorage = localStorage.getItem('selectedCountry');
        if (countryFromStorage && countryConfig[countryFromStorage]) {
            window.currentCountry = countryFromStorage;
            window.currentLanguage = localStorage.getItem('selectedLanguage') || countryConfig[window.currentCountry].lang;
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
                localStorage.setItem('selectedCountry', window.currentCountry);
                localStorage.setItem('selectedLanguage', window.currentLanguage);
                return; // Found country, exit
            }
        } catch (error) {
            console.error("IP Geolocation failed, falling back to default:", error);
        }

        // Priority 4: Default
        window.currentCountry = 'honduras';
        window.currentLanguage = countryConfig[window.currentCountry].lang;
    }

    await initializeCountry(); // Await the async function

    const currentFlag = document.getElementById('current-flag');
    const currentCountryEl = document.getElementById('current-country');
    const initialConfig = countryConfig[window.currentCountry];
    if (initialConfig) {
        window.currentLanguage = initialConfig.lang;

        // Update country display
        if (currentFlag) currentFlag.textContent = initialConfig.flag;
        if (currentCountryEl) currentCountryEl.textContent = initialConfig.name;

        updateLanguage(window.currentLanguage);
    }

    updateFooterFromBusinessAddress();
    setupCountrySwitcherLinks();

    // Initialize product database after language is set
    setTimeout(loadProduct, 0); // Use a timeout to ensure translations are processed
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
