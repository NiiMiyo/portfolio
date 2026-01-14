declare namespace Experiencias {
	type Experiencia = {
		local: NonNullable<React.ReactNode>;
		tipo: string;

		inicio: string;
		fim: string;

		tecnologias: string[];
		descricao: NonNullable<React.ReactNode>;
	};
}

declare type Experiencia = Experiencias.Experiencia;
