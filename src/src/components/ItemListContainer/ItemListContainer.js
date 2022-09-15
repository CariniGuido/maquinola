import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";


import '../../assets/styles/item.css'
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {

        pedirDatos()
            .then((res) => {
                if (!categoriaId) {
                    setProductos(res)
                }
                else {
                    setProductos(res.filter((prod) => prod.categoria === categoriaId))
                }
            })

            .catch((error) => {
                console.log(error)

            })
            .finally(() => {

            })



    }, [categoriaId])


    return (

        <div className="listas">
            <div className="items">
                <ItemList productos={productos} />
            </div>
        </div>


    )
}

export default ItemListContainer

