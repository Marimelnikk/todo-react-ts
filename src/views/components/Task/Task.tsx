import Check from "../Check/Check";

import RemoveIcon from "../../../images/icons/remove.svg";

import styles from "./Task.module.less";

interface IProps {
	data: { id: number; title: string; isCompleted: boolean };
	checkTask: (id: number) => void;
	removeTask: (id: number) => void;
}

export const Todo: React.FC<IProps> = ({ data, checkTask, removeTask }) => {
	return (
		<div className={styles.taskList}>
			<button className={styles.buttonCheck} onClick={() => checkTask(data.id)}>
				<Check data={data} />

				<li className={styles.task} style={{ textDecoration: data.isCompleted ? "line-through" : "none" }}>
					{data.title}
				</li>
			</button>
			<button className={styles.buttonRemoveIcon} onClick={() => removeTask(data.id)}>
				<RemoveIcon className={styles.removeIcon} />
			</button>
		</div>
	);
};
