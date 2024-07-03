import React from "react";

import { Todo } from "../Task/Task";

interface IProps {
	tasks: Array<{ id: number; title: string; isCompleted: boolean }>;
	checkTask: (id: number) => void;
	removeTask: (id: number) => void;
}

const List: React.FC<IProps> = ({ tasks, checkTask, removeTask }) => {
	return (
		<div>
			<ul>
				{tasks.map((item) => (
					<Todo data={item} key={item.id} checkTask={checkTask} removeTask={removeTask} />
				))}
			</ul>
		</div>
	);
};

export default List;
