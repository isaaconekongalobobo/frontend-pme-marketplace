import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
interface BurgerButtonType {
    sideBar: boolean,
    setSideBar: (newState: boolean) => void
}
const BurgerButton: React.FC<BurgerButtonType> = ({sideBar, setSideBar}) => {
    const showOrHideSideBar = () => {
        setSideBar (!sideBar)
    }
    return (
        <div>
            <RxHamburgerMenu 
                className="text-main-yellow text-3xl" 
                onClick={showOrHideSideBar}
            />
        </div>
    );
}

export default BurgerButton;
