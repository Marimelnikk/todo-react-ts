import React from "react";

import { InputPlus } from "../components/InputPlus/InputPlus";

import styles from "./App.module.less";

const App: React.FC = () => {
	return (
		<article className={styles.article}>
			<h1 className={styles.articleTitle}>To Do List</h1>
			<section className={styles.articleSection}>
				<InputPlus />
			</section>
			<section className={styles.articleSection}></section>
		</article>
	);
};

export default App;
