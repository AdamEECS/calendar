const bindAddButton = function() {
    var addButton = e('#id-todo-add')
    addButton.addEventListener('click', function(){
        var todo = new Todo()
        todo.init()
        openTodoEditor(todo)
    })
}

const bindContainer = function() {
    var todoContainer = e('#id-div-container')
    todoContainer.addEventListener('click', function(event){
        var target = event.target
        log('container click', event, target)
        if(target.classList.contains('todo-done')) {
            log('done')
            var todoDiv = target.parentElement
            var id = todoDiv.dataset.id
            toggleDone(id)
        } else {
            var id = target.closest('.todo-cell').dataset.id
            log('id', id)
            var todo = queryDb(id, 'todos')
            openTodoEditor(todo)
        }
    })
}

const bindEditor = function() {
    var todoEditorContainer = e('.todo-item')
    todoEditorContainer.addEventListener('click', function(event){
        var target = event.target
        var todoEditor = target.closest('.todo-editor')
        if(target.classList.contains('todo-save')) {
            var todo = new Todo()
            todo.id = todoEditor.dataset.id
            todo.title = todoEditor.querySelector('.input-title').value
            todo.content = todoEditor.querySelector('.input-content').value
            todo.time = getDateTimeById('date-selector', 'time-selector')
            log('todo', todo)
            updateDb(todo, 'todos')
            loadTodos()
        } else if (target.classList.contains('todo-delete')) {
            log('delete')
            var id = todoEditor.dataset.id
            todo = new Todo(id)
            deleteDb(todo, 'todos')
            loadTodos()
        }
    })
}

const bindAll = function() {
    bindAddButton()
    bindContainer()
    bindEditor()
}

const main = function() {
    bindAll()
    loadTodos()
}

main()
