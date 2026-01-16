import { Link, useLocation } from "react-router";

import { BootstrapIcon } from "@/web/components";
import { PagesPath } from "@/config/RouterSettings";
import { WebUtils } from "@/utils";

import styles from "./SelNav.module.less";

export function SelNav() {
	return <div className={ styles.nav }>
		<SelNavButton page="projetos">
			<BootstrapIcon icon="person-workspace"/> Projetos
		</SelNavButton>

		<SelNavButton page="formações">
			<BootstrapIcon icon="mortarboard-fill"/> Formações
		</SelNavButton>

		<SelNavButton page="experiências">
			<BootstrapIcon icon="stars"/> Experiências
		</SelNavButton>

		<SelNavButton page="contato">
			<BootstrapIcon icon="person-lines-fill"/> Contato
		</SelNavButton>
	</div>;
}

function SelNavButton( props: Readonly<SelNavButtonProps> ) {
	const { children, page } = props;
	const location = useLocation();

	return <Link
		to={ PagesPath[ page ] }
		className={ WebUtils.className( styles.link, location.pathname === PagesPath[ page ] && styles.selected ) }
	>
		{ children }
	</Link>;
}
