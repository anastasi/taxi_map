import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: React.FunctionComponent<any> = ({text}) => <div>{text}</div>;

const SimpleMap: React.FunctionComponent<any> = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      const apiId = "AIzaSyDKE24SaYeYPDx6LDmngAFuCOzl333mwDg"

      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiId }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
}

export default SimpleMap;