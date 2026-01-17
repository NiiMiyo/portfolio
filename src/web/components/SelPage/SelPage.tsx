import { Outlet, useLocation } from "react-router";

import { PagesTitle } from "@/config";

import styles from "./SelPage.module.less";

export function SelPage() {
	const location = useLocation();
	const pageTitle = PagesTitle[ location.pathname as SelPath ];

	return <div className={ styles.page }>
		<div className={ styles.title }>{ pageTitle }</div>
		<Outlet />
	</div>;
}
