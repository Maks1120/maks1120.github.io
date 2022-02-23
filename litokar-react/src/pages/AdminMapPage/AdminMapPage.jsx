import React from "react";

const AdminMapPage = () => {
    return (
        <div id="map" style={{width: 100, height: 100}}>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDs2ogeuT5wi1ZjPIUOtEADLwNKlRtQFDc&callback=initMap&v=weekly" async>
            </script>
        </div>
        
    )
}

export default AdminMapPage;