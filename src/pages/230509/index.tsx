import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const THIS_YEAR = new Date().getFullYear();

const TodoProject = () => {
	return (
		<main className='todo-area'>
			<RecoilRoot>
				<article className='todo-inner'>
					<h2 className='todo-title'>
						Todo List <span>{THIS_YEAR}</span>
					</h2>
					<input type='text' placeholder='Add a task...' />
					<TodoList>
						<TodoItem />
					</TodoList>
				</article>
			</RecoilRoot>
		</main>
	);
};

export default TodoProject;
