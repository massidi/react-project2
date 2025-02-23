import {useState} from "react";

function BoxeColor() {

    const [color, setColor] = useState();

    function handleClickl(e) {

        e.preventDefault()

        const colors = e.target[0].value

        console.log(colors)

        setColor(colors)
    }

    return (
        <>

            <div className="container">

                <div className="rectangle-box" style={{backgroundColor: `${color}`}}></div>

                <form className="form-section" onSubmit={(e) => handleClickl(e)}>
                    <input type="text" placeholder="Entrez un texte" className="input-box"/>
                </form>
            </div>

        </>

    )
}

export default BoxeColor