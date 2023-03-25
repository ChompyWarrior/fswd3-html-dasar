// URI: alamat web/ alamat lokasi file
// base url -> alamat web
// endpoint -> alamat lokasi file/ resource/ data

const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "2bffe8ab9e7a4bbab2eee283f0fe7237";
const url = baseUrl + apiKey;
const endpointList = `${url}/list`;


// handle
const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// add button
const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

//let todos
let todos = [];

//event button 
addTaskBtn.addEventListener('click', function () {
    var input = document.getElementById('input').value;

    if (input.trim() != 0) {
        let localItems = getList()
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        const todo = {
            items : input
        }
        postList(todo);
        showItem(todo);
    }


    // if (inputVal.value.trim() != 0) {
    //     let localItems = JSON.parse(localStorage.getItem('localItem'))
    //     if (localItems === null) {
    //         taskList = []

    //     } else {
    //         taskList = localItems;
    //     }
    //     taskList.push(inputVal.value)
    //     localStorage.setItem('localItem', JSON.stringify(taskList));
    // }
    // postList(taskList)
    // console.log(taskList)
    // showItem()
})

//get list yang ada di item
const getList = () => {
    fetch(endpointList).then(handleSuccess).catch(handleError);
};

//load todos
function loadTodos(){
    fetch(url).then((response)=>{
        todos = response.json();
        todos.forEach((todo)=>{
            showItem(todo);
        })
    })
}
loadTodos()

// POST data/ menambah data
const postList = (task) => {
    fetch(endpointList, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    })
        .then(handleSuccess)
        .catch(handleError);
};


function showItem(todo) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }

    let arrList = [];

    //create li element to get the id
    const li = document.createElement("li");
    li.dataset.id = todo._id;
    li.innerText = todo.tittle;



    arrList = getList()
    console.log(arrList)

    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {


        html += `
   <div class="todoList">
   <p class="pText" onclick="coret(this)">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">x</button>
   </div>
   `
    })
    itemShow.innerHTML = html;
}


function coret(el) {
    el.style.textDecoration = "line-through";
    el.style.textDecorationColor = "red";
}

showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask() {
    localStorage.clear()
    showItem()
}