import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App"; // Adjust the path according to your file structure

describe("Home component", () => {
    test("renders welcome message", () => {
        render(<App />);
        const welcomeMessage = screen.getByText(
            /Welcome to Broken City Coffee/i
        );
        expect(welcomeMessage).toBeInTheDocument();
    });

    test("renders coffee blends description", () => {
        render(<App />);
        const blendsDescription = screen.getByText(
            /carefully crafted coffee blends/i
        );
        expect(blendsDescription).toBeInTheDocument();
    });

    test("renders about us description", () => {
        render(<App />);
        const aboutUsDescription = screen.getByText(
            /Curated a space that knows no bounds/i
        );
        expect(aboutUsDescription).toBeInTheDocument();
    });

    test("renders visit us description", () => {
        render(<App />);
        const visitUsDescription = screen.getByText(
            /Embrace the artistry of coffee as it intertwines/i
        );
        expect(visitUsDescription).toBeInTheDocument();
    });

    test("renders menu button", () => {
        render(<App />);
        const menuButton = screen.getByText(/Menu/i);
        expect(menuButton).toBeInTheDocument();
    });

    test("renders about us button", () => {
        render(<App />);
        const aboutUsButton = screen.getByText(/About Us/i);
        expect(aboutUsButton).toBeInTheDocument();
    });

    test("renders visit us button", () => {
        render(<App />);
        const visitUsButton = screen.getByText(/Visit Us/i);
        expect(visitUsButton).toBeInTheDocument();
    });
});
