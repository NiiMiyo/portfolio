import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import App from "@/App";
import { PageContatos, PageExperiencias, PageFormacoes, PageProjetos } from "@/web/components/SelPage/pages";

export const PagesPath: Record<SelPagina, string> = {
	projetos: "/projetos",
	formações: "/formacoes",
	contato: "/contato",
	experiências: "/experiencias",
} as const;

export function SelRouter() {
	return <RouterProvider
		router={ createHashRouter( [
			{
				path: "/",
				Component: App,
				errorElement: <PageNotFound />,
				children: [
					{
						Component: PageNotFound,
						path: "/",
					},
					{
						Component: PageProjetos,
						path: PagesPath.projetos,
					},
					{
						Component: PageExperiencias,
						path: PagesPath.experiências,
					},
					{
						Component: PageFormacoes,
						path: PagesPath.formações,
					},
					{
						Component: PageContatos,
						path: PagesPath.contato,
					},
				],
			}
		] ) }
	/>;
}

export default SelRouter;

function PageNotFound() {
	return <Navigate to={ PagesPath.projetos } />;
}
