
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => displayData(response))
}
function displayData(data){
    const postContainer = document.getElementById('explor-api')
    for(const user of data){
        const postdiv = document.createElement('div')
        postdiv.classList.add('post')
        postdiv.innerHTML =`
        <h4>User ${user.userId}</h4>
        <h5>Title ${user.title}</h5>
        <h4>User Description ${user.body}</h4>
        `
        postContainer.appendChild(postdiv)
    }
}

loadData()