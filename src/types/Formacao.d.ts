declare namespace Formacao {
	type Formacao = {
		local: NonNullable<React.ReactNode>;
		tipo: string;
		curso: string;

		inicio: string;
		fim: string;

		descricao: NonNullable<React.ReactNode>;
	};
}

declare type Formacao = Formacao.Formacao;
