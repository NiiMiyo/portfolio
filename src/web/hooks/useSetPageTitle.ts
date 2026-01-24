import { useEffect } from "react";

export function useSetPageTitle( title: string, deps?: React.DependencyList ): void {
	useEffect( () => {
		document.title = title
			? "Selene Haruno | " + title
			: "Selene Haruno";
	}, deps ?? [] );
}
