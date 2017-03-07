const templateTodo = function(todo) {
    var status = ''
    var checked = ''
    if(todo.done) {
        status = 'done'
        checked = 'checked'
    }
    log('todo.done', todo.done)
    var t = `
    <div class='todo-cell ${status}' data-id=${todo.id}>
        <input type="checkbox" class='todo-done' ${checked}>
        <span class='todo-time'>${todo.time}</span>
        <span class='todo-content' >${todo.title}</span>
    </div>
    `
    return t
}

const openTodoEditor = function(todo) {
    var date = dateFormat(todo.time)
    var time = hourMinuteFormat(todo.time)
    var container = e('.todo-item')
    html = `
    <div class="todo-editor" data-id=${todo.id}>
        <div class="edit-title">
            <input placeholder="新建事件" class=input-title value="${todo.title}">
        </div>
        <div class="edit-time">
            <input type="date" id='date-selector' value=${date}>
            <input type="time" id='time-selector' value=${time}>
        </div>
        <div class="edit-content">
            <textarea rows="8" cols="40" class=input-content>${todo.content}</textarea>
        </div>
        <div class="">
            <button class=todo-save>Save</button>
            <button class=todo-delete>Delete</button>
        </div>
    </div>
    `
    container.innerHTML = ''
    container.insertAdjacentHTML('beforeend', html);
}

const insertTodoToHtml = function(todo) {
    var todoContainer = e('#id-div-container')
    todo.time = dateFormat(todo.time)
    var t = templateTodo(todo)
    todoContainer.insertAdjacentHTML('beforeend', t);
}
