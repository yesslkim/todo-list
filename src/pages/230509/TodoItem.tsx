const TodoItem = () => {
	return (
		<li>
			<div>
				<label htmlFor='isCompleted' className='checkbox'>
					<span className='sr-only'>완료여부</span>
				</label>
				<input type='checkbox' name='isCompleted' id='isCompleted' className='sr-only' />
			</div>
			<span className='text'>오늘은 무엇을 할까</span>
			{/* <input type='text' /> */}
			<button type='button'>메뉴</button>
			<ul>
				<li>
					<button type='button'>즐겨찾기 등록</button>
				</li>
				<li>
					<button type='button'>수정하기</button>
				</li>
				<li>
					<button type='button'>삭제하기</button>
				</li>
			</ul>
		</li>
	);
};

export default TodoItem;
