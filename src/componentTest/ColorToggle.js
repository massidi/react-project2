import {useState} from "react";


function ColorToggle() {
    // État initial de la couleur
    const [color, setColor] = useState('black');

    function handleChangeColor() {

        setColor(color==='black'?'red':'black')
    }

    return (

        <div>

            <h1 style={{color: color}}>change color</h1>

            <button
            onClick={handleChangeColor}>

                Change
            </button>

    </div>)


}
export default ColorToggle
    // Fonction pour changer la couleur