export function toLocaleTitleCase( str: string ): string {
	return str.replaceAll(
		/\b\w+/gi,
		sub => sub.charAt( 0 ).toLocaleUpperCase() + sub.substring( 1 ).toLocaleLowerCase()
	);
}
