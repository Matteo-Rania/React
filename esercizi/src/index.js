import { createRoot } from "react-dom/client";
import './index.css'
import { Root } from "./Root";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root />);
