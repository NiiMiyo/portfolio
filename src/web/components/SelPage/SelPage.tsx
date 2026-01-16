import { useContext } from "react";

import SelPageContext from "@/web/contexts";
import { PageContatos, PageExperiencias, PageFormacoes, PageProjetos } from "./pages";

import styles from "./SelPage.module.less";

export function SelPage() {
	const context = useContext( SelPageContext )!;

	return <div className={ styles.page }>
		{
			context.page === "projetos"
				? <PageProjetos />
			: context.page === "experiências"
				? <PageExperiencias />
			: context.page === "formações"
				? <PageFormacoes />
			: context.page === "contato"
				? <PageContatos />
			: <p>não implementado</p>
		}
	</div>;
}
