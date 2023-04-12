import { useState, useEffect } from "react";
import { fetchData, classNames } from "../utils";

import {
  AddProduct,
  OrderInfo,
  LocationInfo,
  Block,
  Location
} from "../components";
import { useNavigate } from "react-router-dom";


export default function Outbound() {

  const navigate = useNavigate();


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
    'classCurrent': false,
    'classFull': false
  };

  const classesInstructionB = {
    'location': true,
    'classA': false,
    'classB': true,
    'classC': false,
    'classCurrent': false,
    'classFull': false
  };

  const classesInstructionC = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': true,
    'classCurrent': false,
    'classFull': false
  };

  const classesInstructionCurrent = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent': true,
    'classFull': false
  };

  const classesInstructionFull = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent': false,
    'classFull': true
  };

  const classesInstructionNull = {
    'location': true,
    'classA': false,
    'classB': false,
    'classC': false,
    'classCurrent': false,
    'classFull': false,
    'classNull': true
  };

  const toInbound = () => {
    navigate("/inbound");
  };

  const toOutbound = () => {
    navigate("/outbound");
  };


  return (
    <div>

      <OrderInfo setCurrentLocation={() => { }} />

      <div className="flex_box" style={{ marginTop: 10 }}>
        <Block block={blockA} />
        <Block block={blockB} setCurrentLocation={() => { }} />
        <Block block={blockC} setCurrentLocation={() => { }} />
        <Block block={blockD} setCurrentLocation={() => { }} />
      </div>

      <div className="main_door1">
        <div className="main_door2">
          CỬA CHÍNH
        </div>

      </div>

      <div className="flex_box" style={{ marginTop: 10 }}>
        <div style={{ textAlign: 'center', fontSize: 40, fontWeight: 1200 }}>
          Đường đi gợi ý:
        </div>
      </div>


      
        <p class="bet_time">
          <button onClick={toInbound}>Inbound</button>
          <button onClick={toOutbound}>Ountbound</button>
        </p>


    </div>
  );
}