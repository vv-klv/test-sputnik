import React from "react";
import cl from "./AppContainer.module.scss";
import Button from "../Button/Button";

function AppContainer() {
    const handleClick = () => {

    };

    return (
        <div className={cl.container}>
            <Button handleClick={handleClick}>
                Войти
            </Button>
        </div>
    );
}

export default AppContainer;
