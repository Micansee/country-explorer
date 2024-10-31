# Country Explorer 🌍

Country Explorer is a web app that lets users explore countries around the world. Users can search for countries, toggle between light and dark modes, view country details, and add countries to their wishlist.

## Features ✨
- **Search**: Quickly find any country by name.
- **Wishlist**: Mark countries as favorites and view them in a separate list.
- **Pagination**: Load more countries with a "Show More" button.
- **Dark Mode**: Switch between light and dark modes.
- **Responsive Design**: Optimized for all screen sizes.

## Technologies Used 🛠
- **HTML**
- **CSS**
- **JavaScript**
- **REST Countries API**

## Getting Started 🚀

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript.
- A GitHub account to deploy the project on GitHub Pages.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/country-explorer.git
   cd country-explorer

Deployment on GitHub Pages
Push the code to a GitHub repository.
Go to Settings > Pages and select main as the source branch.
GitHub Pages will provide a link to your live project.
Demo
Check out the live demo: Country Explorer on GitHub Pages

Usage 📖
Search: Use the search bar to find countries by name.
Wishlist: Click the ❤️ button to save a country to your wishlist.
Show More: Load more countries with the "Show More" button.
Dark Mode: Click the 🌒 button to toggle dark mode.
Difficulties Faced 🚧
Responsive Design: Ensuring that the design adjusts seamlessly across different devices was challenging. Using media queries effectively helped achieve a consistent look on all screens.
Wishlist Persistence: Initially, saving wishlist data proved tricky as it reset on every page refresh. Using localStorage solved this issue by storing favorite countries even when the page is reloaded.
API Data Handling: Managing large data sets from the REST Countries API was challenging, especially for pagination and searching. Efficient filtering and limiting the displayed countries improved performance.
Dark Mode Toggle: Implementing the dark mode toggle involved adding specific classes and styles for various components, which required thorough testing to ensure compatibility with the light mode.
Code Overview 📝
HTML (index.html): Contains the structure of the app.
CSS (style.css): Styles the app and provides responsive design.
JavaScript (script.js): Handles API requests, dark mode, wishlist, and pagination functionality.
API Reference 🌐
This project uses the REST Countries API to fetch country data, including names, flags, regions, and population.

