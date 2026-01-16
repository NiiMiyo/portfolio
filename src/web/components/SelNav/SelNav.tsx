import { useContext } from "react";

import { BootstrapIcon } from "@/web/components";
import SelPageContext from "@/web/contexts";
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
	const context = useContext( SelPageContext )!;
	const { children, page } = props;

	return <button
		type="button"
		onClick={ function(){ context.setPage( page ) } }
		className={ WebUtils.className( styles.button, context.page === page && styles.selected ) }
	>
		{ children }
	</button>;
}
