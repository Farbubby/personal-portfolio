import { useState } from "react";

interface Props {
  show: boolean;
  close: () => void;
}

function Mobilebar({ show, close }: Props) {
  return (
    <>
      {show && (
        <div className="flex flex-col px-4 drop-shadow-glow items-center z-20 h-20 fixed">
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
        </div>
      )}
    </>
  );
}

export default Mobilebar;
