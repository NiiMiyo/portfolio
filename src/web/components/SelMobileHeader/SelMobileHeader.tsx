import { useLocation } from "react-router";

import { PagesTitle } from "@/config";
import { BootstrapIcon } from "@/web/components";
import { activateSelNavMobile } from "@/web/components/SelNav";

import styles from "./SelMobileHeader.module.less";

export function SelMobileHeader() {
	const location = useLocation();

	return <div className={ styles.header }>
		<button className={ styles.nav_button } onClick={ activateSelNavMobile }>
			<BootstrapIcon icon="list" />
		</button>
		{ PagesTitle[ location.pathname as SelPath ] }
		<div/>
	</div>;
}
