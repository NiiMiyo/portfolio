export default {
	nome: "EdoEx",
	tecnologias: [
		"Go",
		"SQL",
	],

	urls: [
		{
			nome: "Repositório",
			href: "https://github.com/NiiMiyo/EdoEx",
			bsIcon: "github",
		},
		{
			nome: "Project Ignis",
			href: "https://projectignis.github.io/",
		},
	],

	descricao: <>
		<p>
			Uma ferramenta <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos">CLI</a> para criação de
			expansões para o jogo <a href="https://projectignis.github.io/">Project Ignis</a>, um simulador automático do
			jogo de cartas colecionáveis <a href="https://www.yugioh-card.com/">Yu-Gi-Oh!</a>.
		</p>

		<p>
			A ferramenta conta com a organização do projeto através de documentos <a href="https://yaml.org/">YAML</a> para
			a criação dos arquivos finais, que incluem uma base de dados SQLite3, imagens geradas automaticamente a partir
			dos dados informados nos documentos YAML, a criação dos arquivos de configuração necessários para a implementação
			no jogo e scripts em Lua escritos pelo usuário, além de conter comandos para integração caso o jogo já esteja
			instalado.
		</p>
	</>,
} as const satisfies Projeto;
