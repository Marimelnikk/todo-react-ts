import React, { useState } from "react";

import InputPlus from "../components/InputPlus/InputPlus";
import List from "../components/List/List";

import styles from "./App.module.less";

const App: React.FC = () => {
	const [tasks, setTasks] = useState<{ id: number; title: string; isCompleted: boolean }[]>([]);

	const addTask = (title: string) => {
		const newTasks = [{ id: Math.random(), title, isCompleted: false }, ...tasks]; // уникальный id?
		setTasks(newTasks);
	};

	const changeTodo = (id: number) => {
		const newTasks = [...tasks];
		const taskId = newTasks.find((i) => i.id === id);
		// taskId.isCompleted = !taskId?.isCompleted;
		setTasks(newTasks);
	};
	console.log(tasks);
	return (
		<article className={styles.article}>
			<h1 className={styles.articleTitle}>To Do List</h1>
			<section className={styles.articleSection}>
				<InputPlus addTask={addTask} />
			</section>
			<section className={styles.articleSection}>
				<List tasks={tasks} changeTodo={changeTodo} />
			</section>
		</article>
	);
};

export default App;
