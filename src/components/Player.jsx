import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  function handleEditClick() {
    setIsEditting(!isEditting);
  }

  let playerName = <span className="player-name">{name}</span>;
  //   let btnCaption = "Edit";

  if (isEditting) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
