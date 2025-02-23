import {useState} from "react";

function ModeToggler() {

    const [darkModeOn, setDarkModeOn] = useState()

    // let darkModeOn = true
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>

    function handleClick() {
        const newMode = !darkModeOn; // Toggle the current state
        setDarkModeOn(newMode); // Update the state
        console.log(newMode ? "darkmode is on" : "darkmode is off");
    }


    return (
        <>
            <div>
                {darkModeOn ? darkMode : lightMode}

                <button onClick={handleClick}>
                    clik me

                </button>
            </div>
        </>
    )
}

export default ModeToggler