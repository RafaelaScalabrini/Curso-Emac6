
class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
constructor(){
   super();
   this.usuario = 'Diego';
}
addTodo(){
    this.todos.push('Novo todo')
    console.log(this.todos);
}

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo('Novo todo');
}