import React from "react";
import ReactDOMClient from "react-dom/client";
import { Carreers } from "./screens/Carreers";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Carreers />);
