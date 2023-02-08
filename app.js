var editElement;
function addItems() {
    var input = document.getElementById('Input');
    var ul = document.getElementById('u_list');

    if (input.value == "") {
        alert("Enter your items please")
    } else {

        // li creation //

        var li = document.createElement('li')
        li.setAttribute("class","border_li")
        li.innerHTML = input.value + "<button onclick = deleteItem(event) class = 'same_btn' ><i class='fa-solid fa-trash-can'></i></button>" + "<button onclick = edit(event) class = 'same_btn' ><i class='fa-solid fa-pen'></i></button>"

        ul.appendChild(li);
        input.value = ""
    }
}
function deleteItem(event) {
    var btn = event.target;
    var li = btn.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
}
function edit(event) {

    // from prompt //

    // var userUbdate = prompt('enter your ubdate item')
    // var li = btn.parentElement;
    // li.innerHTML = userUbdate  + "<button onclick = deleteItem(event) class = 'delete , same_btn' >DELETE</button>" + "<button onclick = edit(event) class = 'edit'  >EDIT</button>" 

    // from input //
    
    var li = event.target.parentElement 
    var value = li.childNodes[0].nodeValue
    var input = document.getElementById('Input');
    // var btn = event.target.parentElement.firstChild.nodeValue    
    input.value = value

    // change add button into update

    var btns = document.getElementsByTagName('button');
    var addBtn = btns[0]
    var updateBtn = btns[1]

    addBtn.style.display = 'none'
    updateBtn.style.display = 'inline'

    editElement = li 
}
function update() {
    var input = document.getElementById('Input')
    editElement.childNodes[0].nodeValue = input.value

    input.value = ''

    var btns = document.getElementsByTagName('button');
    var addBtn = btns[0]
    var updateBtn = btns[1]

    addBtn.style.display = 'inline'
    updateBtn.style.display = 'none'

}