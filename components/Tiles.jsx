import React from "react";
import TileComponent from "./TileComponent";

export default function Tiles() {
  return (
    <div className="my-5 flex justify-between">
      <TileComponent />
      <TileComponent />
      <TileComponent />
      <TileComponent />
    </div>
  );
}
