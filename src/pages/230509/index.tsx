import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const THIS_YEAR = new Date().getFullYear();

const TodoProject = () => {
	return (
		<main className='todo-area'>
			<RecoilRoot>
				<article className='todo-inner'>
					<h2>
						Todo List <br /> {THIS_YEAR}
					</h2>
					<TodoList>
						<TodoItem />
					</TodoList>
				</article>
			</RecoilRoot>
		</main>
	);
};

export default TodoProject;
