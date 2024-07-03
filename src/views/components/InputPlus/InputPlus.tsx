import { useState } from "react";

import IconPlus from "images/icons/plus.svg";

import styles from "./InputPlus.module.less";

interface IProps {
	addTask: (value: string) => void;
}

const InputPlus: React.FC<IProps> = ({ addTask }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className={styles.inputPlus}>
			<input
				type="text"
				className={styles.inputPlusValue}
				value={inputValue}
				onChange={(evt) => {
					setInputValue(evt.target.value);
				}}
				onKeyDown={(evt) => {
					if (evt.key === "Enter") {
						addTask(inputValue);
						setInputValue("");
					}
				}}
				placeholder="Add something..."
			/>
			<button
				onClick={() => {
					addTask(inputValue);
					setInputValue("");
				}}
				aria-label="Add"
				className={styles.inputPlusButton}
			>
				<IconPlus className={styles.inputPlusButtonIcon} />
			</button>
		</div>
	);
};

export default InputPlus;
