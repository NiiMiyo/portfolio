import { useEffect } from "react";
import { useNavigate } from "react-router";

import { isOnMobile } from "@/utils/web";
import { SelSidebar } from "@/web/components";
import { useSetPageTitle } from "@/web/hooks";

export function PageSobre() {
	const navigate = useNavigate();
	useSetPageTitle( "" );

	useEffect( () => {
		function handleResize() {
			if ( !isOnMobile() )
				navigate( "/" );
		}

		handleResize();
		globalThis.addEventListener( "resize", handleResize );
		return () => {
			globalThis.removeEventListener( "resize", handleResize );
		};
	}, [] );

	return <SelSidebar data-as-page />;
}
