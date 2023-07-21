import React from "react";
import SafeArea from "../components/SafeArea";

function About(props) {
    return (
        <SafeArea>
            <div className="px-4 text-xl">
                <p className="my-2">
                    Discover a unique creative haven at Broken City Coffee,
                    where innovation and inspiration come together. Led by
                    visionary Adam Watts, we offer a holistic approach to the
                    arts, guiding artists towards their true identity.
                </p>
                <p className="my-4">
                    Here, creativity, expression, and authenticity are our
                    guiding principles, nurturing young artists in music and
                    movement alike. Our compositions, much like our coffee
                    blends, are carefully crafted to resonate with soul-stirring
                    emotions, captivating all who step inside. Collaborating
                    with renowned artists and coffee enthusiasts, we curate a
                    space that knows no bounds, celebrating the fusion of taste
                    and sound.
                </p>
                <p>
                    Join us at Broken City Coffee, where art and coffee
                    converge. Experience a blend of taste and sound that sparks
                    the imagination, propelling you on a journey of boundless
                    creativity. Unleash your artistic passion in the heart of
                    Broken City – a place where the possibilities are as endless
                    as your dreams.
                </p>
            </div>
        </SafeArea>
    );
}

export default About;
