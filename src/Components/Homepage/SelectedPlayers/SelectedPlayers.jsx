import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({
  selectedData,
  players,
  setSelectedData,
  setCurrentBalance,
  currentBalance,
  setSelectedType,
}) => {
  const handleDeletePlayer = (selected) => {
    const filtered = selectedData.filter(
      (player) => selected.player_id !== player.player_id,
    );
    setSelectedData(filtered);
    setCurrentBalance(currentBalance + selected.player_price);
  };
  return (
    <div>
      <div className="space-y-6">
        {selectedData.map((selected) => (
          <SelectedPlayer
            key={selected.player_id}
            selected={selected}
            players={players}
            handleDeletePlayer={handleDeletePlayer}
          ></SelectedPlayer>
        ))}
      </div>
      <div className="p-2 border sm:inline-block mt-12 rounded-2xl bg-white/5 flex items-center justify-center">
        <button
          className="px-5 py-3.5 bg-[#E7FE29] w-full rounded-xl font-bold cursor-pointer"
          onClick={() => setSelectedType("available")}
        >
          {selectedData.length > 0 ? "Add More Player" : "Add Player"}
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
