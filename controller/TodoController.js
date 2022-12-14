const Todo=require('../models/todoModel');

const getAll=async (req,res)=>{
    const todoGet=await Todo.find({}).sort({createdAt:-1});

    res.status(200).json(todoGet);
}

const createNewTodo=async(req,res)=>{

    // const {title}=req.body;

    try{
        const newTodo=await Todo.create({...req.body});
        res.status(200).json(newTodo);
    }catch(error){
        res.status(400).json({error:error.message});
    }

}

const updateTodo=async(req,res)=>{
    const {id}=req.params;

    const todo23=await Todo.findByIdAndUpdate({_id:id},{...req.body});

    if(!todo23){
        res.status(400).json({error:'No such workout to update'})
    }

    res.status(200).json(todo23);

}

const deleteTodo=async(req,res)=>{
    const {id}=req.params;

    const todo67=await Todo.findOneAndDelete({_id:id});

    if(!todo67){
        res.status(400).json({error:'No such workout to delete'})
    }

    res.status(200).json(todo67);

}




module.exports={getAll,createNewTodo,updateTodo,deleteTodo};

