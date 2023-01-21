import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput() {
  const name = countryInput.value.trim();
  if (name === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '');
  }

// function onSearch (e) {
//     e.preventDefault();

//     fetchCountries(name)
// }


  fetchCountries(name)
  .then(countries => {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    if (countries.length === 1) {
      countryList.insertAdjacentHTML(
        'beforeend',
        renderCountryList(countries)
      );
      countryInfo.insertAdjacentHTML(
        'beforeend',
        renderCountryInfo(countries)
      );
    } else if (countries.length >= 10) {
      alertTooManyMatches();
    } else {
      countryList.insertAdjacentHTML(
        'beforeend',
        renderCountryList(countries)
      );
    }
  })
  .catch(alertWrongName);
}

function renderCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `;
    })
    .join('');
  return markup;
}

function renderCountryInfo(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `
        <ul class="country-info__list">
            <li class="country-info__item"><p class="country-info__text"><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p class="country-info__text"><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p class="country-info__text"><b>Languages: </b>${Object.values(
              languages
            ).join(', ')}</p></li>
        </ul>
        `;
    })
    .join('');
  return markup;
}

function alertWrongName() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function alertTooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}




// const refs = {
//     searchForm: document.querySelector('#search-box')
// };

// refs.searchForm.addEventListener('submit', onSearch);



// function fetchCountries(name) {
// return fetch(
// `https://restcountries.com/v3.1/name/${name}`
// ).then(response => response.json());
// };
