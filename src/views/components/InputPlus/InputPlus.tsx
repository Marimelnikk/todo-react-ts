import React, { useState } from "react";

import IconPlus from "images/icons/plus.svg";

import styles from "./InputPlus.module.less";

export const InputPlus: React.FC = () => {
	const [ inputValue, setInputValue ] = useState('');

	const addTask = () => {
		
	}

	return (
		<div className={styles.inputPlus}>
			<input
				type="text"
				className={styles.inputPlusValue}
				value={inputValue}
				onChange={(evt) => {
					setInputValue(evt.target.value)
				}}
				onKeyDown={(evt) => {
					if (evt.key === "Enter") {
						addTask();
					}
				}}
				placeholder="Add something..."
			/>
			<button onClick={addTask} aria-label="Add" className={styles.inputPlusButton}>
				<IconPlus className={styles.inputPlusButtonIcon} />
			</button>
		</div>
	);
};
