import { useState } from "react";
import AppButton from "../components/AppButton";
import SafeArea from "../components/SafeArea";
function Home(props) {
    const [cart, setCart] = useState([]);
    return (
        <SafeArea>
            <p>
                Welcome to Broken City Coffee, where art and coffee converge in
                perfect harmony.
            </p>
            <p>
                Led by visionary Adam Watts, our carefully crafted coffee blends
                resonate with soul-stirring emotions, captivating all who step
                inside.
            </p>
            <p>
                Collaborating with renowned artists and coffee enthusiasts, we
                have curated a space that knows no bounds, celebrating the
                fusion of taste and sound.{" "}
            </p>
            <p>
                Embrace the artistry of coffee as it intertwines with the
                vibrant atmosphere of Broken City—a place that invites you to
                unleash your passion and creativity, one cup at a time.
            </p>
            <div className="flex justify-between pt-10">
                <AppButton to="/menu">Menu</AppButton>
                <AppButton to="/about">About Us</AppButton>
                <AppButton to="/visit">Visit Us</AppButton>
            </div>
        </SafeArea>
    );
}

export default Home;
