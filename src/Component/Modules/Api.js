const API = 'http://5a6f2daf7a276d0012b2f64e.mockapi.io/myshop';

export function fetchData(){
    fetch(API)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log(error))
} 

