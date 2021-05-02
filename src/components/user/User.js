import React, { useEffect, useState } from "react";

export default function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  });

  return (
    <>
      <div className="user">
        <h2>User</h2>
      </div>
    </>
  );
}
