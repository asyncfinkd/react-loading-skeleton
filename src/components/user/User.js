import React, { useState } from "react";

export default function User() {
  const [profile, setProfile] = useState(null);
  return (
    <>
      <div className="user">
        <h2>User</h2>
      </div>
    </>
  );
}
