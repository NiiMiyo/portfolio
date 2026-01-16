import { graduacao_lcc } from "@/data/formacoes";
import styles from "./PageFormacoes.module.less";

export function PageFormacoes() {
	return <>
		<div className={ styles.title }>Formações</div>

		<Formacao formacao={ graduacao_lcc } />
	</>;
}

function Formacao( props: Readonly<{ formacao: Formacao }> ) {
	const { tipo, curso, local, inicio, fim, descricao } = props.formacao;

	return <div className={ styles.formacao }>
		<div>
			<div className={ styles.tipo }>{ tipo } em {curso}</div>
			<div>{ local }, de { inicio } a {fim}</div>
		</div>

		<div className={ styles.descricao }>
			{ descricao }
		</div>
	</div>;
}
