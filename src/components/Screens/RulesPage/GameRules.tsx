import React from "react";
import { BookingPolicy } from "./listItem.js";
const GameRules = () => {
  return (
    <>
      <div>
        {/* booking */}
        <div>
          <h2>Booking & Time Policy</h2>
          <ul className="list-disc ml-10">
            {BookingPolicy.map((item, index) => (
              <li key={index} className="leading-10">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* please do create different array list in listItem.js file in RulesPage  */}
      </div>
    </>
  );
};

export default GameRules;
