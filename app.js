function LoadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(res => DisplayShow(res))
}
function DisplayShow(res){
    console.log(res)
}
