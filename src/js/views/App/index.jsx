import React, { useState, useEffect } from "react";
import load from "logic/load";

function App() {
    const [renderFlag, setRenderFlag] = useState(false);
    const [userError, setUserError] = useState(false);
    const [otherError, setOtherError] = useState(false);

    useEffect(() => {
        load({ callback: handleLogicCallback });
    }, []);

    function handleLogicCallback(params) {

    }


    return renderFlag ? render() : null;

    function render() {
        if (userError) {
            return <div>{ "Usuario Invalido" }</div>
        }
        
        if (otherError) {
            return <div>{ "Lamentamos los inconvenientes, estamos trabajado para reestablecer el sistema" }</div>
        }

        return null;
    }
}

export default App;