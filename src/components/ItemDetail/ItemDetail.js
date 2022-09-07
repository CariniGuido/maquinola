

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contador } from '../contador';
import ListGroup from 'react-bootstrap/ListGroup';



import { stock } from '../../data/data';
import { useState } from 'react';

const ItemDetail = ({ Item }) => {

  const [cantidad, setCantidad] = useState (0)
  const handleAgregar = () => {
    const agregarAlCarro = {
      id: Item.id,
      nombre: Item.nombre,
      precio: Item.precio

    }




    console.log(agregarAlCarro)


  }
  return (
    <container className="col-4" >
      <div className='container d-flex h-100'>



        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src={Item.imagen} />
          <Card.Body>
            <Card.Title>{Item.nombre}</Card.Title>
            <Card.Text>

              <small className='StockTarjeta'>Stock disp: {Item.stock}</small>
              <p> {Item.precio}</p>
            </Card.Text>
            <Contador
              stock={Item.stock}
              counter={cantidad}
              setCounter={setCantidad}
              handleAgregar={handleAgregar} />
            <small> {Item.descripcion} </small>


          </Card.Body>
        </Card>
        <hr></hr>
        <ListGroup variant="flush">
          <ListGroup.Item>Estado:{Item.estado}</ListGroup.Item>
          <ListGroup.Item>Año:{Item.año}</ListGroup.Item>
        </ListGroup>
      </div>

    </container>



  )
}


export default ItemDetail