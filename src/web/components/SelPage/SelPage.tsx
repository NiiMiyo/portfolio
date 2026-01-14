import { useContext } from "react";

import SelPageContext from "@/web/contexts";
import { PageExperiencias, PageProjetos } from "./pages";

import styles from "./SelPage.module.less";

export function SelPage() {
	const context = useContext( SelPageContext )!;

	return <div className={ styles.page }>
		{
			context.page === "projetos"
				? <PageProjetos />
			: context.page === "experiências"
				? <PageExperiencias />
				: <p>não implementado</p>
		}
	</div>;
}
