import React from "react";
import "./App.scss";
import { Main } from "./screens";
import { HelmetProvider } from "react-helmet-async";

if (process.env.NODE_ENV === "development")
  console.log("environment", process.env);

const rootHTML = document.documentElement;

const AppWrapper = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
};

function App() {
  return <Main />;
}

export default AppWrapper;
