import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  function handleEditClick() {
    setIsEditting(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditting) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
