import { useEffect } from "react";
import { useNavigate } from "react-router";

import { isOnMobile } from "@/utils/web";
import { SelSidebar } from "@/web/components";

export function PageSobre() {
	const navigate = useNavigate();

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
