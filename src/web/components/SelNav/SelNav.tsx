import { Link, useLocation } from "react-router";

import { BootstrapIcon } from "@/web/components";
import { PagesPath, PagesTitle } from "@/config/RouterSettings";
import { WebUtils } from "@/utils";

import styles from "./SelNav.module.less";

const selNavId = "sel_nav_very_unique_id";
const selNavMobileAttr = "data-mobile-active";

export function SelNav() {
	return <div className={ styles.nav } id={ selNavId }>
		<SelNavButton page="sobre"        icon="person-lines-fill" className={ styles.sobre } />
		<SelNavButton page="projetos"     icon="person-workspace" />
		<SelNavButton page="formações"    icon="mortarboard-fill" />
		<SelNavButton page="experiências" icon="stars" />
		<SelNavButton page="contato"      icon="person-lines-fill" />
	</div>;
}

function SelNavButton( props: Readonly<SelNavButtonProps> ) {
	const { page, icon, className, ...link } = props;
	const location = useLocation();

	return <Link
		{ ...link }
		to={ PagesPath[ page ] }
		className={ WebUtils.className( styles.link, className, location.pathname === PagesPath[ page ] && styles.selected ) }
		onClick={ deactivateSelNavMobile }
	>
		<BootstrapIcon icon={ icon } /> { PagesTitle[ PagesPath[ page ] ] }
	</Link>;
}

export function activateSelNavMobile() {
	document.getElementById( selNavId )?.setAttribute( selNavMobileAttr, "" );
}

export function deactivateSelNavMobile() {
	document.getElementById( selNavId )?.removeAttribute( selNavMobileAttr );
}
