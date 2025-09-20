const productsForSplitPayment = [
    {
        id: 'iphone16promax',
        name: 'iPhone 16 Pro Max',
        variants: [
            { storage: '256GB', price: 799 },
            { storage: '512GB', price: 849 },
            { storage: '1TB', price: 920 },
        ],
        colors: ['Black Titanium', 'Desert Titanium'],
        image: 'https://m.media-amazon.com/images/I/61UMlmDXG+L.AC_SX466.jpg'
    },
    {
        id: 'iphone15promax',
        name: 'iPhone 15 Pro Max',
        variants: [
            { storage: '256GB', price: 699 },
            { storage: '512GB', price: 759 }
        ],
        colors: ['Black Titanium'],
        image: 'https://m.media-amazon.com/images/I/61v5Jay9F5L._AC_SX569_.jpg'
    },
    {
        id: 'galaxys25ultra',
        name: 'Samsung Galaxy S25 Ultra',
        variants: [
            { storage: '256GB', price: 719 },
            { storage: '512GB', price: 829 },
            { storage: '1TB', price: 949 }
        ],
        colors: ['Black', 'Silver', 'Icy Blue'],
        image: 'https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX569_.jpg'
    },
    {
        id: 'galaxys24ultra',
        name: 'Samsung Galaxy S24 Ultra',
        variants: [
            { storage: '256GB', price: 599 },
            { storage: '512GB', price: 624 },
            { storage: '1TB', price: 799 }
        ],
        colors: ['Violet', 'Black'],
        image: 'https://m.media-amazon.com/images/I/51E3rux4DgL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'iphone16',
        name: 'iPhone 16',
        variants: [
            { storage: '128GB', price: 650 },
            { storage: '256GB', price: 725 },
        ],
        colors: ['Black Titanium', 'White', 'Teal'],
        image: 'https://m.media-amazon.com/images/I/419CpsXXGQL.AC_SX466.jpg'
    },
    {
        id: 'iphone16e',
        name: 'iPhone 16 e',
        variants: [
            { storage: '128GB', price: 509 },
            { storage: '256GB', price: 620 },
        ],
        colors: ['Black', 'White'],
        image: 'https://m.media-amazon.com/images/I/51H8+zCj2cL._AC_SX569_.jpg'
    },
    {
        id: 'iphone15',
        name: 'iPhone 15',
        variants: [
            { storage: '128GB', price: 519 },
            { storage: '256GB', price: 599 },
        ],
        colors: ['Black', 'Blue'],
        image: 'https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_SY606_.jpg'
    },
    {
        id: 'iphone14promax',
        name: 'iPhone 14 Pro Max',
        variants: [
            { storage: '256GB', price: 529 },
            { storage: '512GB', price: 600 },
        ],
        colors: ['Black', 'Gold'],
        image: 'https://m.media-amazon.com/images/I/51wqFSpP20L._AC_SL1000_.jpg'
    },
    {
        id: 'iphone14',
        name: 'iPhone 14',
        variants: [
            { storage: '256GB', price: 379 },
            { storage: '512GB', price: 429 },
        ],
        colors: ['Black', 'Starlight'],
        image: 'https://m.media-amazon.com/images/I/51Yz9FaNIGL._AC_SL1000_.jpg'
    },
    {
        id: 'iphone13promax',
        name: 'iPhone 13 Pro Max',
        variants: [
            { storage: '256GB', price: 359 },
            { storage: '512GB', price: 549 },
        ],
        colors: ['Black', 'Sierra Blue'],
        image: 'https://m.media-amazon.com/images/I/51UtM-A3fdL._AC_SX569_.jpg'
    },
    {
        id: 'iphone12promax',
        name: 'iPhone 12 Pro Max',
        variants: [
            { storage: '256GB', price: 249 },
            { storage: '512GB', price: 279 },
        ],
        colors: ['Black Titanium'],
        image: 'https://m.media-amazon.com/images/I/5109dvnof9L._AC_SY606_.jpg'
    },
    {
        id: 'galaxyS25',
        name: 'Samsung Galaxy S25',
        variants: [
            { storage: '256GB', price: 599 },
            { storage: '512GB', price: 649 },
        ],
        colors: ['Silver', 'Blue'],
        image: 'https://m.media-amazon.com/images/I/61C17Al0dhL._AC_SX569_.jpg'
    },
    {
        id: 'galaxys24',
        name: 'Samsung Galaxy S24',
        variants: [
            { storage: '256GB', price: 449 },
            { storage: '512GB', price: 529 },
        ],
        colors: ['Black', 'Gray'],
        image: 'https://m.media-amazon.com/images/I/61uakkLoHxL._AC_SX569_.jpg'
    },
    {
        id: 'galaxys24plus',
        name: 'Samsung Galaxy S24 Plus',
        variants: [
            { storage: '256GB', price: 559 },
        ],
        colors: ['Black Titanium'],
        image: 'https://m.media-amazon.com/images/I/51bdK6FaR-L._AC_SX569_.jpg'
    },
    {
        id: 'galaxys23ultra',
        name: 'Samsung Galaxy S23 Ultra',
        variants: [
            { storage: '256GB', price: 349 },
            { storage: '512GB', price: 399 },
        ],
        colors: ['Black', 'Pink'],
        image: 'https://m.media-amazon.com/images/I/513vXUcPFrL._AC_SX569_.jpg'
    },
    {
        id: 'galaxys23',
        name: 'Samsung Galaxy S23',
        variants: [
            { storage: '256GB', price: 249 },
            { storage: '512GB', price: 279 },
        ],
        colors: ['Green', 'Cream'],
        image: 'https://m.media-amazon.com/images/I/51xj0EFyXHL._AC_SX522_.jpg'
    },
    {
        id: 'galaxys22ultra',
        name: 'Samsung Galaxy S22 Ultra',
        variants: [
            { storage: '256GB', price: 239 },
        ],
        colors: ['Black Titanium'],
        image: 'https://m.media-amazon.com/images/I/613Fp7fknhL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxya545g',
        name: 'Samsung Galaxy A54 5G',
        variants: [
            { storage: '128GB', price: 349 },
            { storage: '256GB', price: 399 },
        ],
        colors: ['Black', 'Peach'],
        image: 'https://m.media-amazon.com/images/I/51orKJJMfTL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxya35',
        name: 'Samsung Galaxy A35',
        variants: [
            { storage: '128GB', price: 199 },
            { storage: '256GB', price: 229 },
        ],
        colors: ['Black'],
        image: 'https://m.media-amazon.com/images/I/61R5WdNY8LL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxya155g',
        name: 'Samsung Galaxy A15 5G',
        variants: [
            { storage: '64GB', price: 189 },
            { storage: '128GB', price: 229 },
        ],
        colors: ['Black'],
        image: 'https://m.media-amazon.com/images/I/41vU1u8DZXL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxym15',
        name: 'Samsung Galaxy M15',
        variants: [
            { storage: '64GB', price: 169 },
            { storage: '128GB', price: 209 },
        ],
        colors: ['Black'],
        image: 'https://m.media-amazon.com/images/I/41k9aSrQRAL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'redmi14c',
        name: 'Xiaomi Redmi 14C',
        variants: [
            { storage: '4GB + 128GB', price: 129 },
            { storage: '6GB + 128GB', price: 179 },
            { storage: '8GB + 256GB', price: 209 },
        ],
        colors: ['Midnight Black', 'Sage Green'],
        image: 'https://m.media-amazon.com/images/I/612KZF3V+ZL._AC_SY300_SX300_.jpg'
    },
    {
        id: 'redminote14pro5g',
        name: 'Xiaomi Redmi Note 14 Pro 5G',
        variants: [
            { storage: '8GB + 256GB', price: 249 },
            { storage: '12GB + 512GB', price: 319 },
        ],
        colors: ['Midnight Black'],
        image: 'https://m.media-amazon.com/images/I/51AelgZWpaL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'redminote14',
        name: 'Xiaomi Redmi Note 14',
        variants: [
            { storage: '6GB + 128GB', price: 207 },
        ],
        colors: ['Gray'],
        image: 'https://m.media-amazon.com/images/I/81L4MbrSEBL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'redminote13pro',
        name: 'Xiaomi Redmi Note 13 Pro',
        variants: [
            { storage: '8GB + 256GB', price: 223 },
        ],
        colors: ['Black'],
        image: 'https://m.media-amazon.com/images/I/71ZjanVe7oL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxywatch6',
        name: 'Samsung Galaxy Watch 6',
        variants: [
            { storage: 'Standard', price: 229 },
        ],
        colors: ['Default'],
        image: 'https://m.media-amazon.com/images/I/81Dm65eja8L._AC_SX425_.jpg'
    },
    {
        id: 'pocof6',
        name: 'Xiaomi Poco F6',
        variants: [
            { storage: 'Standard', price: 329 },
        ],
        colors: ['Default'],
        image: 'https://m.media-amazon.com/images/I/61O1Ey0bwxL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        id: 'galaxys20ultra',
        name: 'Samsung Galaxy S20 Ultra 5G',
        variants: [
            { storage: '512GB', price: 211 },
        ],
        colors: ['Cosmic Gray'],
        image: 'https://m.media-amazon.com/images/I/51Tsn0W3XFL._AC_SX522_.jpg'
    },
    {
        id: 'galaxys21ultra',
        name: 'Samsung Galaxy S21 Ultra 5G',
        variants: [
            { storage: '512GB', price: 246 },
        ],
        colors: ['Phantom Black', 'Phantom Navy'],
        image: 'https://m.media-amazon.com/images/I/610KvwSCMYL._AC_SX466_.jpg'
    }
];
