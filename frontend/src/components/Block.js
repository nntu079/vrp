import Location from "./Location";

export default function Block({ block, currentLocation, setCurrentLocation }) {

    return <div className="outside_line_left">
        {
            block.map((value, index) => <Location location={value}
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation} />)
        }
    </div>;
}