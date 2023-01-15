const refs = {
    searchForm: document.querySelector('#search-box')
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch (e) {
    e.preventDefault();

    fetchCountries(name)
}



function fetchCountries(name) {
return fetch(
`https://restcountries.com/v3.1/name/${name}`
).then(response => response.json());
};
