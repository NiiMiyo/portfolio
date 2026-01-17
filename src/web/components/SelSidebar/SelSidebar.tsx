import { BootstrapIcon, TechStack } from "@/web/components";

import { PROFILE_PIC } from "@/web/assets";
import { WebUtils } from "@/utils";

import styles from "./SelSidebar.module.less";


export default SelSidebar;
export function SelSidebar( props: Readonly<SelSidebarProps> ) {
	const { className, ...sidebarProps } = props;

	return <div { ...sidebarProps } className={ WebUtils.className( styles.sidebar, className ) }>
		<img src={ PROFILE_PIC } alt="" className={ styles.profile_pic } />
		<div className={ styles.nome }>Selene Haruno<br/>Silva dos Santos</div>

		<InfoBlock>
			<InfoBlockName>
				<BootstrapIcon icon="code"/> Desenvolvedora <BootstrapIcon icon="code-slash"/>
			</InfoBlockName>
			<TechStack tecnologias={ tecnologias }/>
		</InfoBlock>

		<InfoBlock>
			<InfoBlockName>
				<BootstrapIcon icon="info-circle"/> Sobre mim <BootstrapIcon icon="info-circle"/>
			</InfoBlockName>
			<div className={ styles.sobre }>
				<p>Oi!!</p>
				<p>Eu sou Selene, uma cientista da computação formada pela Universidade Federal da Paraíba apaixonada em programação.</p>
				<p>Gosto de usar diferentes linguagens, bibliotecas e frameworks dependendo do projeto sendo construído, como TypeScript, Java, Python, React, Vite, SpringBoot ou JPA.</p>
			</div>
		</InfoBlock>
	</div>;
}

function InfoBlock( { children }: Readonly<React.PropsWithChildren<{}>> ) {
	return <div className={ styles.info_block }>{ children }</div>;
}

function InfoBlockName( { children }: Readonly<React.PropsWithChildren<{}>> ) {
	return <div className={ styles.info_block_name }>{ children }</div>;
}

const tecnologias = [
	"TypeScript",
	"React",
	"Java",
	"SpringBoot",
	"Python",
];
