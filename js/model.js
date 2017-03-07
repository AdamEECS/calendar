var Todo = function(id) {
    this.id = id
    this.title = ''
    this.content = ''
    this.time = ''
    this.done = false
}
Todo.prototype.init = function () {
    this.id = new Date().getTime()
};

const save = function(array, name) {
    var s = JSON.stringify(array)
    localStorage[name] = s
}

const load = function(name) {
    var s = localStorage[name]
    if(s == undefined){
        s = '[]'
    }
    return JSON.parse(s)
}

var saveTodos = function() {
    log('save todos')
    var contents = document.querySelectorAll('.todo-content')
    var todos = []
    for (var i = 0; i < contents.length; i++) {
        var c = contents[i]
        var done = c.parentElement.classList.contains('done')
        var todo = new Todo(c.innerHTML)
        todo.done = done
        todos.push(todo)
    }
    save(todos, 'todos')
}

var loadTodos = function() {
    e('#id-div-container').innerHTML = ''
    var todos = load('todos')
    log('load todos', todos)
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        insertTodoToHtml(todo)
    }
}

const insertDb = function(todo, dbName) {
    var todos = load(dbName)
    todos.push(todo)
    log(todos)
    save(todos, dbName)
}

const deleteDb = function(todo, dbName) {
    var todos = load(dbName)
    for (var i = 0; i < todos.length; i++) {
        var t = todos[i]
        if(t.id == todo.id){
            todos.splice(i, 1)
            break
        }
    }
    save(todos, dbName)
}

const updateDb = function(todo, dbName) {
    var todos = load(dbName)
    var has = false
    for (var i = 0; i < todos.length; i++) {
        var t = todos[i]
        if(t.id == todo.id){
            todos[i] = todo
            has = true
            break
        }
    }
    if(has == false){
        return insertDb(todo, dbName)
    }
    save(todos, dbName)
}

const queryDb = function(id, dbName) {
    var todos = load(dbName)
    for (var i = 0; i < todos.length; i++) {
        var t = todos[i]
        if(t.id == id){
            return t
        }
    }
}

const toggleDone = function(id) {
    var todo = queryDb(id, 'todos')
    log('toggle', todo)
    todo.done = !todo.done
    updateDb(todo, 'todos')
    loadTodos()
}
