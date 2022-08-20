
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css'; 


import { Navegador } from '../src/components/navbar';
import { ItemListContainer } from './components/ItemList';



const App = () => {
  return (
    <div>
  
      <Navegador />
      <ItemListContainer saludos="hola, soy guido" />
    </div>
  )
}

export default App;
