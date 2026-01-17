import { SelPage, SelNav, SelSidebar, SelMobileHeader } from "@/web/components";

export default App;
export function App() {
	return <>
		<SelSidebar />
		<div style={ { overflowY: "scroll", overflowX: "clip" } }>
			<SelNav />
			<SelMobileHeader />
			<SelPage />
		</div>
	</>;
}
