import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import App from "@/App";
import { PageContatos, PageExperiencias, PageFormacoes, PageProjetos, PageSobre } from "@/web/components/SelPage/pages";
import { isOnMobile } from "@/utils/web";

export const PagesPath: Record<SelPagina, SelPath> = {
	projetos: "/projetos",
	formações: "/formacoes",
	contato: "/contato",
	experiências: "/experiencias",
	sobre: "/sobre",
} as const;

export const PagesTitle: Record<SelPath, string> = {
	"/projetos": "Projetos",
	"/formacoes": "Formações",
	"/contato": "Contato",
	"/experiencias": "Experiências",
	"/sobre": "Sobre mim",
};

export function SelRouter() {
	return <RouterProvider
		router={ createBrowserRouter( [
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
						Component: PageSobre,
						path: PagesPath.sobre,
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
	return <Navigate to={ isOnMobile() ? PagesPath.sobre : PagesPath.projetos } />;
}
