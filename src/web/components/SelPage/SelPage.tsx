import styles from "./SelPage.module.less";
import { Outlet } from "react-router";

export function SelPage() {
	return <div className={ styles.page }>
		<Outlet />
	</div>;
}
