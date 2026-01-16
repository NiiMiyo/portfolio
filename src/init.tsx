import { createRoot } from "react-dom/client";
import { SelRouter } from "@/config";

import "@/styles/global.less";

createRoot( document.querySelector( "#app" )! )
	.render( <SelRouter /> );
