import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { InputLabel } from "./components/InputLabel";

import Arrow from "./assets/icon-arrow.svg";

const App = () => {
  const [value, setValue] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [finnalValue, setFinnalValue] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinnalValue(value);
  };

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formmatedYear = finnalValue.year - year;
  const formmatedMonth = finnalValue.month - month;
  const formmatedDay = finnalValue.day - day;

  return (
    <div className="bg-nOffWhite text-nOffBlack font-poppins flex flex-col justify-center items-center h-screen">
      <main className="bg-nWhite rounded-xl rounded-br-[80px] shadow-lg w-[600px] p-8 flex flex-col gap-8">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-4 relative"
        >
          <InputLabel
            name="day"
            maxLength={2}
            placeholder="DD"
            label="DAY"
            onChange={handleChange}
            value={value.day}
          />
          <InputLabel
            name="month"
            maxLength={2}
            placeholder="MM"
            label="MONTH"
            onChange={handleChange}
            value={value.month}
          />
          <InputLabel
            name="year"
            maxLength={4}
            placeholder="YYYY"
            label="YEAR"
            onChange={handleChange}
            value={value.year}
          />
          <button className="w-16 h-16 rounded-full bg-purple flex justify-center items-center hover:bg-purple/80 active:bg-purple/60 transition absolute top-full right-0">
            <img src={Arrow} alt="button image" height={32} width={32} />
          </button>
        </form>
        <div className="w-full h-[2px] bg-nOffWhite" />
        <div className="flex flex-col gap-2 text-6xl font-bold italic">
          <span>
            <span className="text-purple">
              {finnalValue.year === "" ? "--" : Math.abs(formmatedYear)}
            </span>{" "}
            years
          </span>
          <span>
            <span className="text-purple">
              {finnalValue.month === "" ? "--" : Math.abs(formmatedMonth)}
            </span>{" "}
            {formmatedMonth > 1 ? "months" : "month"}
          </span>
          <span>
            <span className="text-purple">
              {finnalValue.day === "" ? "--" : Math.abs(formmatedDay)}
            </span>{" "}
            {formmatedDay > 1 ? "days" : "day"}
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
