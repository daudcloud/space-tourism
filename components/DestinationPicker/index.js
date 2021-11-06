import { useState } from "react";

export default function DestinationPicker({ activeTab, setActiveTab }) {
  const changeMoon = (e) => {
    setActiveTab(e.target.checked ? "moon" : "");
  };
  const changeMars = (e) => {
    setActiveTab(e.target.checked ? "mars" : "");
  };
  const changeEuropa = (e) => {
    setActiveTab(e.target.checked ? "europa" : "");
  };
  const changeTitan = (e) => {
    setActiveTab(e.target.checked ? "titan" : "");
  };

  return (
    <>
      <div className="font-barlow flex list-none gap-4 text-xs tracking-wider justify-center">
        <label>
          <input
            type="radio"
            id="radio1"
            name="picker"
            defaultChecked
            onChange={changeMoon}
            class="peer sr-only"
          />
          <span className="py-2 border-b-2 border-white border-none peer-checked:border-solid">
            MOON
          </span>
        </label>
        <label>
          <input
            type="radio"
            id="radio2"
            name="picker"
            class="peer sr-only"
            onChange={changeMars}
          />
          <span className="py-2 border-b-2 border-white border-none peer-checked:border-solid">
            MARS
          </span>
        </label>
        <label>
          <input
            type="radio"
            id="radio3"
            name="picker"
            class="peer sr-only"
            onChange={changeEuropa}
          />
          <span className="py-2 border-b-2 border-white border-none peer-checked:border-solid">
            EUROPA
          </span>
        </label>
        <label>
          <input
            type="radio"
            id="radio4"
            name="picker"
            class="peer sr-only"
            onChange={changeTitan}
          />
          <span className="py-2 border-b-2 border-white border-none peer-checked:border-solid">
            TITAN
          </span>
        </label>
      </div>
    </>
  );
}
