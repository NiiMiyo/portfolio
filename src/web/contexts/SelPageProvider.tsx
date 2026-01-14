import { useMemo, useState } from "react";

import SelPageContext from "./SelPageContext";

export function SelPageProvider( { children }: Readonly<React.PropsWithChildren<{}>> ) {
	const [ page, setPage ] = useState<SelPagina>( "projetos" );
	const context = useMemo<SelPageContextValue>(
		() => ({ page, setPage }),
		[ page ]
	);

	return <SelPageContext.Provider value={ context }>
		{ children }
	</SelPageContext.Provider>;
}
