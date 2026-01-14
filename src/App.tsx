import { SelPage, SelNav, SelSidebar } from "@/web/components";
import { SelPageProvider } from "@/web/contexts";

export default App;
export function App() {
	return <>
		<SelSidebar />
		<SelPageProvider>
			<div style={ { overflowY: "scroll", overflowX: "clip" } }>
				<SelNav />
				<SelPage />
			</div>
		</SelPageProvider>
	</>;
}
