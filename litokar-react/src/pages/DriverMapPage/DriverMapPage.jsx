import React from 'react';
import {DriverMap} from '../../components/DriverMap/DriverMap';

import { useJsApiLoader } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};

const libraries = ['places'];

const DriverMapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
      });
    return (
        <div>
            Driver Map
            {isLoaded ? <DriverMap center={defaultCenter}/> : <h2>Loader</h2>}
        </div>
    ) 
};  

export {DriverMapPage};