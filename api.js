const url_string = "https://iskarr.github.io/austindonovan.github.io/api/business.json"


fetch(url_string)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    })


