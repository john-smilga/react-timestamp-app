import React from "react";
import TimeStamp from "./TimeStamp";
import { StampContext } from "../context";

const Stamps = () => {
  const { stamps, clearAll } = React.useContext(StampContext);

  return (
    <section className="stamps">
      {stamps.map((item) => {
        return <TimeStamp key={item.id} {...item} />;
      })}
      {stamps.length > 0 && (
        <button onClick={clearAll} className="clear-btn">
          clear all
        </button>
      )}
    </section>
  );
};

export default Stamps;
