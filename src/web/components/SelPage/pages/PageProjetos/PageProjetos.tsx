import { edoex, tetris, universime } from "@/data/projetos";
import { BootstrapIcon, TechStack } from "@/web/components";

import styles from "./PageProjetos.module.less";

export function PageProjetos() {
	return <>
		<div className={ styles.title }>Projetos</div>

		<Projeto projeto={ universime } />
		<Projeto projeto={ edoex } />
		<Projeto projeto={ tetris } />
	</>;
}

function Projeto( props: Readonly<{ projeto: Projeto }> ) {
	const { nome, descricao, tecnologias, urls } = props.projeto;

	return <details className={ styles.projeto } open>
		<summary className={ styles.nome }>
			<BootstrapIcon icon="chevron-right" className={ styles.marker } />
			{ nome }
		</summary>

		<TechStack
			tecnologias={ tecnologias }
			wrapper={ { className: styles.tecnologias } }
		/>

		<div className={ styles.descricao }>
			{ descricao }
		</div>

		<div className={ styles.urls }>
			{/* Disponível em: */}
			{ urls.map( u => <a key={ u.nome } className={ styles.url } href={ u.href } target="_blank">
				<BootstrapIcon icon={ u.bsIcon ?? "box-arrow-up-right" } /> { u.nome }
			</a> ) }
		</div>
	</details>;
}
