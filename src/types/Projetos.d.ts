declare namespace Projeto {
	declare type Projeto = {
		nome: string;
		descricao: NonNullable<React.ReactNode>;
		tecnologias: string[];
		urls: Projeto.URL[];
	};

	declare type URL = {
		nome: string;
		href: string;
		bsIcon?: string;
	};
}

declare type Projeto = Projeto.Projeto;
