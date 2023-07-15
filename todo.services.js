const { deleteToDo } = require("../controller/todo.controller");
const ToDoModel = require("../model/todo.model");

class ToDoService{
    static async createToDo(userId,title,description){
            const createToDo = new ToDoModel({userId,title,description});
            return await createToDo.save();
    }

    static async getTododata(userId){
        const tododata = await ToDoModel.find({userId})
        return tododata;
    }

   static async deleteToDo(id){
        const deleted = await ToDoModel.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = ToDoService;