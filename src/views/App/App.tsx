import React, { useState } from "react";

import InputPlus from "../components/InputPlus/InputPlus";
import List from "../components/List/List";

import styles from "./App.module.less";

const App: React.FC = () => {
	const [tasks, setTasks] = useState<{ id: number; title: string; isCompleted: boolean }[]>([]);

	const addTask = (title: string) => {
		if (title.length > 0) {
			setTasks([...tasks, { id: tasks.length++, title, isCompleted: false }]);
		}
	};

	const checkTask = (id: number) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, isCompleted: !task.isCompleted };
				}
				return task;
			})
		);
	};

	const removeTask = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<article className={styles.article}>
			<h1 className={styles.articleTitle}>To Do List</h1>
			<section className={styles.articleSection}>
				<InputPlus addTask={addTask} />
			</section>
			<section className={styles.articleSection}>
				<List tasks={tasks} checkTask={checkTask} removeTask={removeTask} />
			</section>
		</article>
	);
};

export default App;
