import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import {
  AddProduct,
  RemoveProduct,
  LocationInfo,
  Location,
} from "./components";

function App() {
  return (
    <div>
      <div className="flex_box_menu">
        <AddProduct />

        <RemoveProduct />

        <LocationInfo />
      </div>

      <div className="flex_box">
        <div className="outside_line_left">
          <div>
            <Location />
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>
        </div>

        <div>
          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>
        </div>

        <div>
          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>
        </div>

        <div className="outside_line_right">
          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>

          <div>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
            <button className="location"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
