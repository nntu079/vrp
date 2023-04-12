import { classNames } from "../utils";

export default function Location({ location,currentLocation, setCurrentLocation }) {

  const classes = {
    'location': true,
    'classA': location?.type == 'A',
    'classB': location?.type == 'B',
    'classC': location?.type == 'C',
    'classCurrent':location?.id_location ==currentLocation?.id_location,
    'classFull':location?.quantity>=50,
    'classNull':location?.quantity==0
  };

  const myClassNames = classNames(classes);

  const onClickLocation = () => {
    setCurrentLocation(location)
  }

  return <button className={myClassNames} onClick={onClickLocation}>{location?.id_location}</button>;
}
