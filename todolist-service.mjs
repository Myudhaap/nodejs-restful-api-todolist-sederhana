export class TodolistService{

  todolist = ['yudha', 'adi', 'pratama'];

  getJSONTodolist(){
    return JSON.stringify({
        code: 200,
        status: "OK",
        data: this.todolist.map((val, index) => {
          return{
            id: index,
            todo: val
          }
        }) 
    })
  }

  getTodolist(req, res){
    res.write(this.getJSONTodolist())
    res.end()
  }

  createTodolist(req, res){
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo)

      this.getTodolist(req, res)
    })
  }

  updateTodolist(req, res){
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if(this.todolist[body.id]){
        this.todolist[body.id] = body.todo;
      }

      this.getTodolist(req, res)
    })
  }

  deleteTodolist(req, res){
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if(this.todolist[body.id]){
        this.todolist.splice(body.id, 1)
      }

      this.getTodolist(req, res)
    })
  }

}