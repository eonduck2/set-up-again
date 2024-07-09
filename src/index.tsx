import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>gdgdgdgdggedgdgdgdgd</h2>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
