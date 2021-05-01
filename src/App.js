import React from "react";
import Articles from "./components/articles/Articles";
import User from "./components/user/User";

export default function App() {
  return (
    <>
      <div>
        <header>
          <h1>React Loading Skeleton</h1>
        </header>
        <div className="content">
          <Articles />
          <User />
        </div>
      </div>
    </>
  );
}
