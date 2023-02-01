import React from "react";
import { useState } from "react";

function Button(props: any) {
  const { buttonID } = props;
  const [status, setStatus] = useState(false);
  const [id, setID] = useState("");
  const onChange = (favoriteId: any) => {
    const statusValue = !status;
    setStatus(statusValue);
    setID(favoriteId);
    favorite(statusValue, favoriteId);
  };
  const favorite = async (statusValue: any, id: any) => {
    const response = await fetch("/api/favorites", {
      method: "POST",
      body: JSON.stringify({ statusValue, id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div>
      <p
        onClick={() => {
          onChange(buttonID);
        }}
      >
        Like
      </p>
    </div>
  );
}

export default Button;
