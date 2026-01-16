import { SelPage, SelNav, SelSidebar } from "@/web/components";

export default App;
export function App() {
	return <>
		<SelSidebar />
		<div style={ { overflowY: "scroll", overflowX: "clip" } }>
			<SelNav />
			<SelPage />
		</div>
	</>;
}
