function deleteTodo(){
    console.log('delete!');
}
function render(){
    document.getElementById('todo-list').innerHTML = '';
        WebTransportBidirectionalStream.forEach (function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title+''+ todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innertext = 'Delete';
        deleteButton.style = 'margin left 12px;';
        deleteButton.onclick = deleteTodo;
        element.appendChild(deleteButton);
    }
}