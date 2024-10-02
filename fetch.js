// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function LoadData() {
    const Url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(Url)
        .then(Response => Response.json())
        .then(Response => console.log(Response))
}

