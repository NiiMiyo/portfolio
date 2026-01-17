declare type SelNavButtonProps = {
	page: SelPagina;
	icon: string;
} & Omit<import("react-router").LinkProps, "to">;
