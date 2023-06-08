/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Comentario from './components/Comentario';

function App() {
  const [comentarios, setComentarios] = useState([]);
  

  useEffect(() => {
    obtenerComentarios();
  }, []);

   function obtenerComentarios() {
       axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res.data)
        setComentarios(res.data)
      })
      console.log(comentarios);
    }
  

  return (
    
    <div>
       {comentarios.map(coment =>(
     <Comentario key={coment.id} comentario={coment}/>
    ))}
    </div>
   
  )
}

export default App
