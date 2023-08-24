import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { UserCookieProvide } from "./context/CookieContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserCookieProvide>
      <App />
    </UserCookieProvide>
  </React.StrictMode>,
);
