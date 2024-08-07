/* eslint-disable react/prop-types */
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin
} from '@vis.gl/react-google-maps';

const PinMaker = ({ pin }) => {
    return (
        <AdvancedMarker
            key={pin.key}
            position={pin.location}
            
        >
            <Pin background={'red'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
    )

}

const DisplayMap = () => {
    const location = { key: 'Ajmer', location: { lat: 26.4499, lng: 74.6399 } }

    return (
        <div className="p-1 border-4">
            <APIProvider
                apiKey={"AIzaSyDc1c-mNi4bhIjSgjoCd9yt53aKFkBqZh8"}
                onLoad={() => console.log('Maps API has loaded.')}>
                {/* <Map
                    // style={{ width: '100%', height: '' }}
                    className='h-[250px] w-full'
                    defaultCenter={{ lat: 26.4499, lng: 74.6399 }}
                    defaultZoom={7}
                    disableDefaultUI={true}
                /> */}
                <Map
                    defaultZoom={15}
                    disableDefaultUI={true}
                    gestureHandling={'greedy'}
                    mapId="33785e10761595c7"
                    className='h-[250px] w-full'
                    defaultCenter={{ lat: 26.4499, lng: 74.6399 }}
                    onCameraChanged={(ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                    }>
                    <PinMaker pin={location} />
                </Map>
            </APIProvider>
        </div>
    )
};

export default DisplayMap;
