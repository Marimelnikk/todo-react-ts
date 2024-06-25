import React from "react";

import styles from "./Check.module.less";

import IconCheck from "../../../images/icons/check.svg";

interface IProps {
	data: { id: number; title: string; isCompleted: boolean };
}

const Check: React.FC<IProps> = (props) => {
	return (
		<div className={styles.iconBorder}>{props.data.isCompleted && <IconCheck className={styles.iconCheck} />}</div>
	);
};

export default Check;
