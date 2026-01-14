export function className( ...names: ( string | undefined | boolean | null )[] ) {
	return [ ...new Set( names ) ]
		.filter( n => !!n && typeof n !== "boolean" )
		.join( " " );
}
