({searchForm:document.querySelector("#search-box")}).searchForm.addEventListener("submit",(function(e){e.preventDefault(),function(e){fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json()))}(name)}));
//# sourceMappingURL=index.a801d4ce.js.map
