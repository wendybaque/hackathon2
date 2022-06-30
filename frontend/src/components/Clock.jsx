import Clock from "react-live-clock";

import React from "react";

export default function Clocky() {
  return (
    <div>
      <Clock format="HH:mm:ss" ticking timezone="US/Pacific" />
    </div>
  );
}
