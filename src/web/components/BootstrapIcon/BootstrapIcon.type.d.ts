declare type BootstrapIconProps = {
	icon: string;
	size?: React.SVGAttributes<SVGSVGElement>[ "width" ];
} & Omit<
	React.SVGAttributes<SVGSVGElement>,
	"width" | "height"
>;
