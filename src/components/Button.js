import React, { useContext } from "react";
import { CalContext } from "../context/CalContext";

const btnStyle = (btn) => {
  const className = {
    "÷": "operator",
    "+": "operator",
    "-": "operator",
    "x": "operator",
    "=": "operator",
    "AC": "res",
    "+/-": "res",
    "%": "res",
    0: "zero",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { cal, setCal } = useContext(CalContext);

  const resetClick = () => {
    setCal({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const decimalClick = () => {
    setCal({
      ...cal,
      num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
    });
  };
  const handleClickButton = () => {
    const numberToString = value.toString();
    let numVal;
    if (numberToString === "0" && cal.num === 0) {
      numVal = "0";
    } else {
      numVal = Number(cal.num + numberToString);
    }
    setCal({
      ...cal,
      num: numVal,
    });
  };
  const operatorClick = () => {
    setCal({
      sign: value,
      res: !cal.res && cal.num ? cal.num : cal.res,
      num: 0,
    });
  };
  const percentClick = () => {
    setCal({
        num: (cal.num /100),
        res: (cal.num /100),
      sign: ''
    });
  };
  const equalsClick = () => {
    if (cal.res && cal.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "x": (a, b) => a * b,
          "÷": (a, b) => a / b,
        };
        return result[sign](a, b);
      };

      setCal({
        res: math(cal.res, cal.num, cal.sign),
        sign: "",
        num: 0,
      });
    }
  };
  const inversionClick = ( )  => {
setCal ( {
    num: cal.num? cal.num * -1 : 0,
    res: cal.res? cal.res * -1 : 0,
    sign: ''
})
  }
  const handleBtnClick = () => {
    const results = {
      "AC": resetClick,
      ".": decimalClick,
      "+": operatorClick,
      "-": operatorClick,
      "x": operatorClick,
      "÷": operatorClick,
      "=": equalsClick,
      "%": percentClick,
      "+/-": inversionClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };
 
  return (
    <button onClick={handleBtnClick} className={`${btnStyle(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
