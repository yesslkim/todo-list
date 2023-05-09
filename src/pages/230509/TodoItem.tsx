const TodoItem = () => {
	return (
		<li>
			<div>
				<input type='text' />
				<label htmlFor='isCompleted' className='sr-only'>
					완료여부
				</label>
				<input type='checkbox' name='isCompleted' id='isCompleted' />
				<label htmlFor='isFavorite' className='sr-only'>
					즐겨찾기 등록
				</label>
				<input type='checkbox' name='isFavorite' id='isFavorite' />
			</div>
		</li>
	);
};

export default TodoItem;
