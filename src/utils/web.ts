export function className( ...names: ( string | undefined | boolean | null )[] ) {
	return [ ...new Set( names ) ]
		.filter( n => !!n && typeof n !== "boolean" )
		.join( " " );
}

export function isOnMobile() {
	return globalThis.innerWidth <= 800;
}
