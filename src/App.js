import React from "react";
import Articles from "./components/articles/Articles";
import User from "./components/user/User";

export default function App() {
  return (
    <>
      <div>
        <header>
          <div>
            <h1>React Loading Skeleton</h1>
          </div>
          <div>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "https://github.com/asyncfinkd";
              }}
            >
              asyncfinkd
            </h2>
          </div>
        </header>
        <div className="content">
          <Articles />
          <User />
        </div>
      </div>
    </>
  );
}
