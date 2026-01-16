import { BootstrapIcon } from "@/web/components";
import styles from "./PageContatos.module.less";

export function PageContatos() {
	return <>
		<div className={ styles.title }>Contato</div>

		<div className={ styles.contatos }>
			Contatos
			<Contato icon="envelope-at-fill" link="mailto:selene.haruno.ss@gmail.com">Email: selene.haruno.ss@gmail.com</Contato>
		</div>

		<div className={ styles.contatos }>
			Outros Links
			<Contato icon="linkedin" link="https://linkedin.com/in/selene-haruno">LinkedIn</Contato>
			<Contato icon="github" link="https://github.com/NiiMiyo">GitHub</Contato>
		</div>
	</>;
}

function Contato( props: Readonly<React.PropsWithChildren<ContatoProps>> ) {
	const { link, icon, children } = props;

	return <a href={ link } className={ styles.contato } target="_blank">
		<BootstrapIcon icon={ icon }/> { children }
	</a>;
}

type ContatoProps = {
	link: React.AnchorHTMLAttributes<HTMLAnchorElement>[ "href" ];
	icon: BootstrapIconProps[ "icon" ];
};
