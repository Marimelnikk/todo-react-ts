import React from "react";

import Check from "../Check/Check";

import styles from "./Todo.module.less";

interface IProps {
	data: { id: number; title: string; isCompleted: boolean };
}

export const Todo: React.FC<IProps> = (props, { changeTodo }) => {
	return (
		<button className={styles.todoList} onClick={() => changeTodo(props.data.id)}>
			<Check data={props.data} />
			<li key={props.data.id} className={styles.todo}>
				{props.data.title}
			</li>
		</button>
	);
};
