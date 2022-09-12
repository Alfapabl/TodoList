import React, {useState} from 'react';



const ToDo = () => {
	const [todoValue, setTodo ] = useState('');
	const [todoList, setTodoList ] = useState([]);
	
	const changeList = (e) => {
		if(e.key == 'Enter'){
			{setTodoList([...todoList, todoValue])}
		}
		
		
	}
	const deleteList = (index) => {
		let newList = todoList.filter((e, i)=>{
			if (index !== i){
				return e;
			}
		})
			setTodoList(newList);
			console.log(todoList)
		
	}



	return (
		<div class="align-self-center">
			<h1>ToDos</h1>
			<input type="text" placeholder="What needs to be done" 
			onChange={e => setTodo(e.target.value)} 
			onKeyDown={changeList}/> 
			
			{todoList.map((item, index)=><li key={index}>{item}
			<span onClick={()=>deleteList(index)}> x </span>
			</li>)}
			<div>{todoList.length} items left</div> 
			{console.log(todoList)}
			
			


		</div>
		

	
	);
};

export default ToDo;
