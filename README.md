# Estoque de Casa (en-US)
🛒 Minimalist Pantry management for your home.

## Features
- (Page) Current list of products
  - Filter by category
  - Edit and zero amount buttons
  - Missing items alert
  - Picture tooltip on hover
  - Price history per item
  - Minimum amount alert
  - Close to exp. date alert
- (Modal) Register new items via bar code scan
  - Manual add or scan barcode
  - Edit manually
  - Mark as recurrent
- (Page) Automatic shopping list
  - Generate shopping list according to current stock (cron job or button)
  - Shopping reminder on holidays and special dates
  - Include recurring items
  - Update current stock after buying list
- Extras
  - Google login
  - Look for close supermarkets
  - Voice commands
  - Scan receipt
  - Scrape deals websites

## How to run
1. Open a terminal and get to project folder
2. Create a .env file on root based on .env.example
3. Run `npm install` to install dependencies
4. Run `npm start` to start the application at http://localhost/

Created and maintained by (Eric Madureira)[https://www.linkedin.com/in/eric-madureira/].
