<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** Thanks for checking out the ShopScout project. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue. Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<p align="center">
  <a href="https://github.com/IdealisticINTJ/ShopScout">		  
    <img src="https://github.com/IdealisticINTJ/ShopScout/assets/65449934/d752e2cf-b1b0-4252-a10c-c867e674b288" alt="Logo" width="130">
  </a>
</p>

## <p align="center">Elevate Your E-commerce Intelligence</p>

<p align="center">
    An advanced price comparison tool designed to simplify the process of comparing product prices across various websites. 
    <br/>
    <a href="https://docs.google.com/document/d/17jfGy-oLZas7haOnenJluC_ct5VxzirVCmd4PKs1Opo/edit?usp=sharing"><strong>Explore the design specification »</strong></a>
    <br />
    <a href="your-deployed-website-link"><strong>View deployed website »</strong></a>
    <br />
    <a href="your-vide-demo-link">View Video Demo</a>
    ·
    <a href="https://sourceforge.net/projects/ShopScout/">Check backend API docs</a>
    ·
    <a href="https://github.com/IdealisticINTJ/ShopScout/issues">Request Feature</a>
</p>

# Table of Contents
- [Features](#features)
- [Backend (API)](#backend-api)
  - [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Future Scope](#future-scope)
- [Utilities](#utilities)
- [Contributing](#contributing)
- [Support and Contact](#support-and-contact)
- [License](#license)

## Features

Effortlessly compare prices, review counts, ratings, and more from a variety of websites, providing you with comprehensive insights. Tailor your search experience with customizable parameters, including search terms, filters for highest/lowest price or review rating, and the ability to specify the number of top results. Benefit from multi-website support, allowing you to fetch and compare data from a minimum of five distinct comparison websites. 

[Currently supported e-commerce platforms](): **Amazon, Flipkart, AliBaba, Snapdeal, Myntra**.

The responsive web interface ensures a user-friendly experience, while backend caching optimizes performance by storing spot price comparisons for efficient retrieval during repeat searches. 
ShopScout is your go-to tool for making informed purchasing decisions with ease.

## Backend (API)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/IdealisticINTJ/ShopScout)

### Tech Stack

- Node.js
- Express.js
- Fetch for web scraping
- Cheerio for HTML parsing

# Installation

_Follow the below instructions to clone the ShopScout repo and start the backend and frontend server._

1. ```bash
   # Clone the repo
   git clone https://github.com/IdealisticINTJ/ShopScout.git

2. ```bash
   # Create a new .env file in the root directory 
   PORT=3001
   # Add any other necessary environment variables

3. ```bash
   # Navigate to the `api` directory and install NPM packages for the backend
   cd api
   npm install

4. ```bash
   # Start the backend server
   npm start

5. ```bash
   # Open a new terminal and go to the `web` directory
   cd ../web

6. ```bash
   # Install NPM packages for the frontend
   npm install

7. ```bash
   # Run the frontend application
   npm start

Both the backend and frontend servers are up and running. You can view the ShopScout web interface at `http://localhost:3000` and access the API at `http://localhost:3001/api/compare`.

<details>
<summary>Additional Notes
</summary>
Make sure you have NodeJS installed on your machine. If needed, adjust the port numbers and other environment variables in the .env file. Configure environment variables and handle sensitive information securely, especially in production deployments.
</details>
<p align="right">(<a href="#top">Back to Top</a>)</p>
</p>

## Future Scope 

| Feature                            | Description                                                                                                                       | Status                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| **Localized Currency and Deal Analysis** | Provide users with the option to choose localized currencies based on their regions. Implement a system to analyze and highlight special deals, discounts, or promotions from various retailers. | <ul><li>[ ] To Do</li></ul> |
| **Integration with Shopping Lists** | Enable users to create, manage, and organize shopping lists within the application. Implement notifications for significant price changes. | <ul><li>[ ] To Do</li></ul> |
| **Price History Visualization**    | Include a graphical representation of the price history for products, allowing users to visually track trends and fluctuations.       | <ul><li>[ ] To Do</li></ul> |
| **Drop Probability Analysis**      | Integrate a feature that estimates the probability of a price drop in the near future based on current price and historical data.      | <ul><li>[ ] To Do</li></ul> |
| **Price Change Alerts**            | Implement a feature for users to set price change alerts. Users receive notifications when the price drops below a predefined threshold. | <ul><li>[ ] To Do</li></ul> |

## Utilities

- [x] Consider data minimization by saving only the previous data and updating when necessary.
- [x] Notification via Whatsapp
- [ ] Best Deals Section
- [ ] A NPM Package ([ShopScout](https://npm.io/package/ShopScout))
- [ ] Discord Bot
- [ ] Telegram Bot

### Idea on Data Minimization:

Save new data only if something has changed, avoiding unnecessary hourly data storage.

Mathematical Estimation:

- In 1 year: n(products) * 24 * 365
- For example, with n = 100: 876k data points
- For n = 400: 3.5 Million data points

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support and Contact

For any questions, suggestions, or issues, please contact:

- **Salma Shaik**
  - GitHub: [IdealisticINTJ](https://github.com/IdealisticINTJ)
  - Email: [salmasaa02@gmail.com](mailto:salmasaa02@gmail.com)
    
## License
This project is licensed under the [GNU General Public License v3.0](LICENSE).


Enjoy comparing prices with ShopScout! 🛍️
---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------


[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

