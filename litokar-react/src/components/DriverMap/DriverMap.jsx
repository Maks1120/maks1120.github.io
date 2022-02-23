import React from "react";
import {GoogleMap} from '@react-google-maps/api';
import s from './DriverMap.module.css';


const containerStyle = {
    width: '100vw',
    height: '100vh'
  };

const DriverMap = ({center}) => {

    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
      }, [])    

    return (
        <div className={s.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        </div>
    )
}

export {DriverMap};