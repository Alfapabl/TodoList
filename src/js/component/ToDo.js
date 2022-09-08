import React, { useState } from 'react';

const AnyComponent = () => {
    const [todoValue, setTodo ] = useState('');
}



const ToDo = () => {

	return (
		<div >
			<h1>ToDos</h1>
			<input type="text" placeholder="What needs to be done" onChange={e => setTodo(e.target.value)}/>
			


		</div>
		

	
	);
};

export default ToDo;
