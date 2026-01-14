import { WebUtils } from "@/utils";
import styles from "./TechStack.module.less";

export function TechStack( { tecnologias, wrapper }: Readonly<TechStackProps> ) {
	return <div { ...wrapper } className={ WebUtils.className( styles.tecnologias, wrapper?.className ) }>
		{ tecnologias.map( t => <span key={ t } className={ styles.tecnologia }>{ t }</span> ) }
	</div>;
}
