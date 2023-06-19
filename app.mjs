import http from "http";
import {TodolistService} from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json")
  if(req.method === "GET"){
    service.getTodolist(req, res)
  }else if(req.method === "POST"){
    service.createTodolist(req, res)
  }else if(req.method === "PUT"){
    service.updateTodolist(req, res)
  }else if(req.method === "DELETE"){
    service.deleteTodolist(req, res)
  }
})

server.listen(3000)