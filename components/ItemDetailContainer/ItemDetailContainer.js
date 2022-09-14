import { useEffect } from "react"
import {useState}  from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import '../../assets/styles/item.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import {HashLoader} from 'react-spinners'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const [loading, setLoading] = useState (true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })

            .catch(err => console.log (err))
               

            
            .finally(() => {
                setLoading(false)

            })


    }, [itemId , setLoading  ])

    return (

        <div>

            {loading ? <HashLoader className="spinner"/>
                :
                <ItemDetail Item={item} />}

        </div>
    )
}