import debounce from 'lodash.debounce';
console.log(debounce);

const listEl = document.querySelector('.country-list');
const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onInputEl, 300));
function onInputEl(evt) {
    let name = evt.target.value;
    console.log(name);
    fetchCountries(name).then(data => {
        createMarkup(data);
    })
}




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
