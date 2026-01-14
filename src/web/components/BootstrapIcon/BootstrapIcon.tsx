import { WebUtils } from "@/utils";
import bootstrap_icons from "bootstrap-icons/bootstrap-icons.svg?url";

export default BootstrapIcon;
export function BootstrapIcon( props: Readonly<BootstrapIconProps> ) {
	const {
		icon,
		size = "1em",
		fill = "currentColor",
		...svg
	} = props;

	return <svg { ...svg } className={ WebUtils.className( "bi", svg?.className ) } width={ size } height={ size } fill={ fill }>
		<use xlinkHref={ `${ bootstrap_icons }#${ icon }` } />
	</svg>
}
