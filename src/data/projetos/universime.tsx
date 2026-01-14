export default {
	nome: "Universi.me",

	tecnologias: [
		"TypeScript",
		"React",
		"Vite",

		"Java",
		"Spring Framework",
		"JPA",
		"SQL",
		"PostgreSQL",
	],

	urls: [
		{
			nome: "Repositório do Cliente Web",
			href: "https://github.com/universi-me/universi-front",
			bsIcon: 'github',
		},
		{
			nome: "Repositório da API Rest",
			href: "https://github.com/universi-me/universi-api",
			bsIcon: 'github',
		},
		{
			nome: "Página no AYTY",
			href: "https://ayty.org/projects/universi.me/",
		},
	],

	descricao: <>
		<p>
			Uma rede social de desenvolvimento humano, focada em distribuir conteúdos
			para aperfeiçoamento profissional e técnico dos participantes construída
			através do Laboratório AYTY da Universidade Federal da Paraíba.
		</p>

		<p>
			Minhas responsabilidades incluíram a construção do cliente web utilizando
			TypeScript, React.JS e Vite e a construção e refatoramento da API Rest em Java,
			Spring Framework e JPA, além do design da base de dados em SQL e PostgreSQL.
		</p>
	</>,
} as const satisfies Projeto;
