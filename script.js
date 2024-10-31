
const countriesContainer = document.getElementById('countries-container');
const showMoreButton = document.getElementById('show-more');
const wishlistButton = document.getElementById('wishlistBtn');
const goBackButton = document.getElementById('goBackBtn');
const searchBar = document.getElementById('search-bar');
const darkModeToggle = document.getElementById('darkModeToggle');

let currentPage = 1;
const pageSize = 10;
let allCountries = [];
let favoriteCountries = JSON.parse(localStorage.getItem('favorites')) || [];


async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    allCountries = await response.json();
    displayCountries(allCountries.slice(0, pageSize));
}

function displayCountries(countries) {
    countriesContainer.innerHTML = '';
    countries.forEach(country => {
        const countryCard = createCountryCard(country);
        countriesContainer.appendChild(countryCard);
    });
    showMoreButton.style.display = countries.length < pageSize ? 'none' : 'block';
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const flag = document.createElement('img');
    flag.src = country.flags.png;
    flag.alt = `${country.name.common} Flag`;

    const name = document.createElement('h2');
    name.textContent = country.name.common;

    const wishlistBtn = document.createElement('button');
    wishlistBtn.textContent = favoriteCountries.includes(country.name.common) ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist';
    wishlistBtn.classList.add('wishlist-btn');
    wishlistBtn.addEventListener('click', () => toggleFavorite(country.name.common, wishlistBtn));

    const details = document.createElement('div');
    details.classList.add('country-details');
    details.innerHTML = `
        <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p>Region: ${country.region}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area} km²</p>
    `;

    card.appendChild(flag);
    card.appendChild(name);
    card.appendChild(wishlistBtn);
    card.appendChild(details);
    return card;
}

function toggleFavorite(countryName, button) {
    if (favoriteCountries.includes(countryName)) {
        favoriteCountries = favoriteCountries.filter(name => name !== countryName);
        button.textContent = '🤍 Add to Wishlist';
    } else {
        favoriteCountries.push(countryName);
        button.textContent = '❤️ Remove from Wishlist';
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteCountries));
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌒 Dark Mode';
});

showMoreButton.addEventListener('click', () => {
    currentPage++;
    displayCountries(allCountries.slice(0, currentPage * pageSize));
});

wishlistButton.addEventListener('click', showWishlist);
goBackButton.addEventListener('click', () => {
    goBackButton.style.display = 'none';
    wishlistButton.style.display = 'block';
    displayCountries(allCountries.slice(0, pageSize));
    currentPage = 1;
});

searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(searchText));
    displayCountries(filteredCountries.slice(0, pageSize));
});

function showWishlist() {
    countriesContainer.innerHTML = '';
    goBackButton.style.display = 'block';
    wishlistButton.style.display = 'none';

    const favoriteCountryNames = allCountries.filter(country => favoriteCountries.includes(country.name.common));
    displayCountries(favoriteCountryNames);
}

fetchCountries();
