export default {
	nome: "Tetris",
	urls: [
		{
			nome: "Repositório",
			href: "https://github.com/NiiMiyo/Tetris",
			bsIcon: "github",
		}
	],
	tecnologias: [
		"C",
		"SDL2",
	],

	descricao: <>
		<p>
			Recriação simplificada do jogo <a href="https://pt.wikipedia.org/wiki/Tetris">Tetris</a> em C utilizando apenas
			a biblioteca SDL2 para gerenciamento dos gráficos e controles do jogo.
		</p>

		<p>
			Este projeto foi criado com o propósito de aprendizado da linguagem C e suas diferenças em relação a outras
			linguagens que aprendi anteriormente, como TypeScript, Python e Java. Conta com peças coloridas geradas
			aleatoriamente e rotação das peças, mas não conta com sons, sistema de pontuação ou aumento progressivo da
			velocidade do jogo.
		</p>
	</>,
} as const satisfies Projeto;
