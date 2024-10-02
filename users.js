function LoadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => displayUser(res))
}

function displayUser(users){
    const ul = document.getElementById('LiList')
    for(const user of users){
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }

    
}