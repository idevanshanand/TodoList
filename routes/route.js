const express=require('express');
const router=express.Router();

const {getAll,createNewTodo,updateTodo,deleteTodo}=require('../controller/TodoController');

router.get('/',getAll);

router.post('/:id',createNewTodo);

router.patch('/:id',updateTodo);

router.delete('/:id',deleteTodo);

module.exports=router;
