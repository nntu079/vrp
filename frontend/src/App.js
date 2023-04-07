import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./utils";
import { classNames } from "./utils";


import {
  AddProduct,
  RemoveProduct,
  LocationInfo,
  Block,
  Location
} from "./components";

function App() {

  const [blockA, setBlockA] = useState([])
  const [blockB, setBlockB] = useState([])
  const [blockC, setBlockC] = useState([])
  const [blockD, setBlockD] = useState([])
  const [currentLocation, setCurrentLocation] = useState({})

  useEffect(() => {
    async function getData() {
      const { data } = await fetchData.get("/get-locations");

      setBlockA(data?.data.slice(0, 50))
      setBlockB(data?.data.slice(50, 100))
      setBlockC(data?.data.slice(100, 150))
      setBlockD(data?.data.slice(150, 200))
    }

    getData()
  }, [currentLocation]);

  const classesInstructionA = {
    'location': true,
    'classA': true,
    'classB': false,
    'classC': false,
    'classCurrent':false,
    'classFull':false
  };

  const classesInstructionB = {
    'location': true,
    'classA': false,
    'classB': true,
    'classC': false,
    'classCurrent':false,
    'classFull':false
  };

  const classesInstructionC = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': true,
    'classCurrent':false,
    'classFull':false
  };

  const classesInstructionCurrent = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent':true,
    'classFull':false
  };

  const classesInstructionFull = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent':false,
    'classFull':true
  };

  const classesInstructionNull = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent':false,
    'classFull':false,
    'classNull':true
  };

  return (
    <div>
      <div className="flex_box_menu">
        <AddProduct currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        <RemoveProduct currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        <LocationInfo currentLocation={currentLocation} />
      </div>

      <div className="flex_box">
        <Block block={blockA} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        <Block block={blockB} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        <Block block={blockC} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        <Block block={blockD} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
      </div>

      <div className="main_door1">
        <div className="main_door2">
          CỬA CHÍNH
        </div>

      </div>

      <div >
        <button style={{padding:10}} className={classNames(classesInstructionA)} /> Bán được nhiều <br/>
        <button style={{padding:10}} className={classNames(classesInstructionB)} /> Bán được vừa <br/>
        <button style={{padding:10}} className={classNames(classesInstructionC)} /> Bán được ít <br/>
        <button style={{padding:10}} className={classNames(classesInstructionFull)} /> Location full <br/>
        <button style={{padding:10}} className={classNames(classesInstructionNull)} /> Location trống <br/>
        <button style={{padding:10}} className={classNames(classesInstructionCurrent)} /> Location hiện tại <br/>
      </div>
    </div>
  );
}

export default App;
