import React, {useState} from 'react';



const ToDo = () => {
	const [todoValue, setTodo ] = useState('');
	const [todoList, setTodoList ] = useState([]);
	const changeList = () => {
		{setTodoList([...todoList, todoValue])}
	}

	return (
		<div >
			<h1>ToDos</h1>
			<input type="text" placeholder="What needs to be done" onChange={e => setTodo(e.target.value)} onClick={() => changeList()}/>
			{todoList.map((item)=><li>{item}</li>)}
			{console.log(todoList)}
			
			


		</div>
		

	
	);
};

export default ToDo;
