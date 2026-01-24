import { graduacao_lcc, libras_intermediario } from "@/data/formacoes";
import { useSetPageTitle } from "@/web/hooks";
import styles from "./PageFormacoes.module.less";

export function PageFormacoes() {
	useSetPageTitle( "Formações" );

	return <>
		<Formacao formacao={ graduacao_lcc } />
		<Formacao formacao={ libras_intermediario } />
	</>;
}

function Formacao( props: Readonly<{ formacao: Formacao }> ) {
	const { tipo, curso, local, inicio, fim, descricao } = props.formacao;

	return <div className={ styles.formacao }>
		<div>
			<div className={ styles.tipo }>{ tipo } – {curso}</div>
			<div>{ local }, de { inicio } a {fim}</div>
		</div>

		<div className={ styles.descricao }>
			{ descricao }
		</div>
	</div>;
}
