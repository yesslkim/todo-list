import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const TodoProject = () => {
	return (
		<main>
			<RecoilRoot>
				<div>
					<h2>TODO LIST</h2>
					<TodoList>
						<TodoItem />
					</TodoList>
				</div>
			</RecoilRoot>
		</main>
	);
};

export default TodoProject;
