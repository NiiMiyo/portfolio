import { createRoot } from "react-dom/client";
import App from "@/App";

import "@/styles/global.less";

createRoot( document.querySelector( "body#app" )! )
	.render( <App /> );
