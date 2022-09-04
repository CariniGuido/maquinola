import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';




export const Contador = ({ stock }) => {

    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)


        }


    }




    const handleSubstract = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }

    }

    return (

        <div >
            

            <hr />

            <Button onClick={handleSubstract} className="btn btn-outline-dark"> - </Button>
            <Badge as="secondary"> {counter} </Badge>
            <Button onClick={handleAdd} className="btn btn-dark"> + </Button>
            <button style={{}} disabled= {stock<0 } > Añadir al carrito</button>








        </div>



    )


}







