import { TechStack } from "@/web/components";
import { esig, universime } from "@/data/experiencias";

import styles from "./PageExperiencias.module.less";

export function PageExperiencias() {
	return <>
		<div className={ styles.title }>Experiências</div>

		<Experiencia experiencia={ universime } />
		<Experiencia experiencia={ esig } />
	</>;
}

function Experiencia( props: Readonly<{ experiencia: Experiencia }> ) {
	const { local, tipo, tecnologias, inicio, fim, descricao } = props.experiencia;

	return <div className={ styles.experiencia }>
		<div>
			<div className={ styles.tipo }>{ tipo } – { local }</div>
			<div>De { inicio } a { fim }</div>
		</div>

		<TechStack tecnologias={ tecnologias } wrapper={ { className: styles.tecnologias } } />

		<div className={ styles.descricao }>
			{ descricao }
		</div>
	</div>
}
