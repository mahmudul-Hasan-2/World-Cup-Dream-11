import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedData, players }) => {
  console.log(selectedData);
  return (
    <div>
      {selectedData.map((selected) => (
        <SelectedPlayer
          key={selected.player_id}
          selected={selected}
          players={players}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
