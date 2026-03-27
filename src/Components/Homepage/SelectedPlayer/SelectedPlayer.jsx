import { Trash2Icon } from "lucide-react";
import React from "react";

const SelectedPlayer = ({ selected }) => {
  const handleDeletePlayer = () => {
    
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={selected.player_image}
            alt=""
            className="w-30 h-30 rounded-2xl object-cover"
          />
        </div>
        <div>
          <h2>{selected.player_name}</h2>
          {selected.player_role === "Bowler"
            ? selected.player_bowling_style
            : selected.player_batting_style}
        </div>
      </div>
      <button className="cursor-pointer">
        <Trash2Icon color="red" onClick={handleDeletePlayer}></Trash2Icon>
      </button>
    </div>
  );
};

export default SelectedPlayer;
