import React, { useState } from "react";

const Modal = ({ children, handleClearLocalStorage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * Handles the modal open event.
     * Sets the `isModalOpen` state to `true` to display the modal.
     */
    const handleOpen = () => setIsModalOpen(true);

    /**
     * Handles the modal close event.
     * Sets the `isModalOpen` state to `false` to hide the modal.
     * Calls `handleClearLocalStorage` to clear the local storage.
     */
    const handleClose = () => {
        setIsModalOpen(false);
        handleClearLocalStorage();
    };

    return (
        <div className="relative">
            <button
                className="float-right bg-stone-700/75 hover:bg-stone-700 active:bg-stone-800 m-4 px-4 py-2"
                onClick={handleOpen}
            >
                Place Order
            </button>
            {isModalOpen && (
                <div className="bg-stone-400 border rounded-md overflow-hidden fixed h-48 right-10 left-10 text-xl flex justify-center items-center">
                    <button
                        className="bg-red-700 h-12 px-4 py-2 absolute top-0 right-0"
                        onClick={handleClose}
                    >
                        X
                    </button>
                    <div className="flex justify-center mx-4">{children}</div>
                </div>
            )}
        </div>
    );
};

export default Modal;
