import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
import SafeArea from "../components/SafeArea";

const hours = ["Monday - Thursday: 10a-7p", "Saturday: 6a-5p", "Sunday: 8a-2p"];

function Visit(props) {
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
    // });
    // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    return (
        <SafeArea>
            {/* {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                >
                    <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                </GoogleMap>
            )} */}
            <div className="flex justify-between">
                <div>
                    <p>Come visit our space</p>
                    <p>Hours:</p>
                    <ul>
                        <li>{hours[0]}</li>
                        <li>{hours[1]}</li>
                        <li>{hours[2]}</li>
                        <li>{hours[3]}</li>
                    </ul>
                </div>
                <div
                    style={{
                        width: "60%",
                        overflow: "hidden",
                    }}
                    className="w-125 flex justify-center border-8 border-stone-600 rounded-xl"
                >
                    <iframe
                        title="map"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=29280%20Central%20Ave%20Lake%20Elsinore,%20CA%2092532+(Costco)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">
                            Calculate population in area
                        </a>
                    </iframe>
                </div>
            </div>
        </SafeArea>
    );
}

export default Visit;
