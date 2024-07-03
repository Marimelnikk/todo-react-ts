import IconCheck from "../../../images/icons/check.svg";

import styles from "./Check.module.less";

interface IProps {
	data: { id: number; title: string; isCompleted: boolean };
}

const Check: React.FC<IProps> = ({ data }) => {
	return <div className={styles.iconBorder}>{data.isCompleted && <IconCheck className={styles.iconCheck} />}</div>;
};

export default Check;
