import React from "react";
import AppCard from "../components/AppCard";
import SafeArea from "../components/SafeArea";

const hours = ["Mo-Th: 10a-7p", "Saturday: 6a-5p", "Sunday: 8a-2p"];

function Visit(props) {
    const hourMap = hours.map((hour, index) => {
        return <li key={index}>{hour}</li>;
    });

    return (
        <SafeArea>
            <div className="md:flex justify-around">
                <div className="md:w-1/3">
                    <AppCard className="leading-loose text-4xl">
                        <p className="underline">Hours</p>
                        <ul>{hourMap}</ul>
                    </AppCard>
                </div>
                <AppCard className="leading-loose md:w-1/3">
                    <p>
                        &ensp; Welcome to our prime location, just minutes from
                        stunning Lake Elsinore. Discover endless possibilities
                        at our world-class roasting and brewing facility,
                        situated at the intersection of the 15 and hwy 74.
                    </p>
                    <p className="my-2">
                        &ensp; Embrace convenience at the corner of Central
                        Avenue and Dexter Place, and embark on a delightful
                        journey exploring our unique experiences.
                    </p>
                    <p>
                        &ensp; We eagerly await your visit, where flavor and
                        nature harmonize beautifully. Come, begin your coffee
                        adventure with us!
                    </p>
                </AppCard>
                <AppCard className="p-0">
                    <iframe
                        title="map"
                        width="100%"
                        height="400px"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=29280%20Central%20Ave%20Lake%20Elsinore,%20CA%2092532+(Costco)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        alt="Google Map showing location"
                    >
                        <a href="https://www.maps.ie/population/">
                            Calculate population in area
                        </a>
                    </iframe>
                </AppCard>
            </div>
        </SafeArea>
    );
}

export default Visit;
