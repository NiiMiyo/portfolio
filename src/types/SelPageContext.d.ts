declare type SelPageContextValue = Optional<{
	readonly page: SelPagina;
	setPage( page: SelPagina ): unknown;
}>;

declare type SelPagina = "projetos"
	| "experiências"
	| "formações"
	| "contato"
	| "sobre";

declare type SelPath = "/projetos"
	| "/formacoes"
	| "/contato"
	| "/experiencias"
	| "/sobre";
