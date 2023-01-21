import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


// const refs = {
//     searchForm: document.querySelector('#search-box')
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch (e) {
//     e.preventDefault();

//     fetchCountries(name)
// }



// function fetchCountries(name) {
// return fetch(
// `https://restcountries.com/v3.1/name/${name}`
// ).then(response => response.json());
// };
