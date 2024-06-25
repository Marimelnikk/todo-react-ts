import React from "react";

import { Todo } from "../Todo/Todo";

import styles from "./List.module.less";

interface IProps {
	tasks: Array<{ id: number; title: string; isCompleted: boolean }>;
	changeTodo: (id: number) => void;
}

const List: React.FC<IProps> = (props) => {
	return (
		<div>
			<ul className={styles.list}>
				{props.tasks.map((item) => (
					<Todo data={item} />
				))}
			</ul>
		</div>
	);
};

export default List;
