import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

// Select the root element from the DOM where the React app will be rendered
const rootElement = document.querySelector("#root");

// If the root element is not found, throw an error to prevent further execution
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for React to render into, using the selected DOM element
const root = createRoot(rootElement);

// Render the MainContent component into the root element
root.render(<MainContent />);
