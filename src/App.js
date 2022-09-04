
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 




import { Navegador } from '../src/components/navbar'; 
import  {ItemDetailContainer}  from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes , Route} from 'react-router-dom';



const App = () => {
  return (
    
       <BrowserRouter> 
       <Navegador></Navegador>
       <Routes>
       
      <Route path='/' element= {<ItemListContainer/>}/>
   <Route path='/productos/:categoriaId'  element= {<ItemListContainer/>}/>
       
   <Route path='/item/:itemId'  element= {<ItemDetailContainer/>}/>
       
       </Routes>
        
      
       
      
      </BrowserRouter>
    





  )
}

export default App;
