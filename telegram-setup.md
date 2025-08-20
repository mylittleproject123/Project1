
# Telegram Bot Setup Instructions

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat and send `/newbot`
3. Follow the instructions to name your bot
4. Copy the bot token provided by BotFather

## Step 2: Get Your Chat ID

1. Start a chat with your new bot
2. Send any message to the bot
3. Open this URL in your browser (replace YOUR_BOT_TOKEN with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for the "chat" object and copy the "id" value

## Step 3: Set Environment Variables

Add these to your Replit Secrets:

1. `TELEGRAM_BOT_TOKEN` - Your bot token from BotFather
2. `TELEGRAM_CHAT_ID` - Your chat ID from step 2

## Step 4: Test the Bot

The bot will automatically send notifications when:
- User clicks "Proceed to Checkout" with credit card
- User confirms bank transfer payment
- User submits credit card details

## Example Notifications

**Checkout Started:**
```
🛒 New Checkout Started (Credit Card)
📱 Customer proceeding to checkout with credit card payment
💰 Total Amount: $599.99
🛍️ Items: 2 item(s)
🆔 Order Reference: TZ-20240101-ABCD
⏰ Time: 1/1/2024, 3:00:00 PM
Customer is now on the payment page
```

**Bank Transfer Confirmed:**
```
💳 Bank Transfer Confirmed
✅ Customer confirmed bank transfer payment
💰 Amount: $599.99
🆔 Order Reference: TZ-20240101-ABCD
🏦 Payment Method: Bank Transfer
⏰ Confirmed at: 1/1/2024, 3:05:00 PM
⚠️ Please verify the bank transfer in your account
```

**Card Details Submitted:**
```
💳 Credit Card Details Submitted
✅ Customer submitted credit card information
👤 Cardholder: John Doe
💰 Amount: $599.99
🆔 Order Reference: TZ-20240101-ABCD
🔒 Card Number: ****-****-****-1234
⏰ Submitted at: 1/1/2024, 3:07:00 PM
🔄 Processing payment...
```
