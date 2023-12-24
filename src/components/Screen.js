import { useContext } from "react";
import { CalContext } from "../context/CalContext";
import { Textfit } from "react-textfit";

const Screen = () => {
  const { cal } = useContext(CalContext);
  return (
    <Textfit className="screen" max={70} mod="single">
      {cal.num ? cal.num : cal.res}{" "}
    </Textfit>
  );
};

export default Screen;
