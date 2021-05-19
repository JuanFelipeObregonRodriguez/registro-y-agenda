
import React,{useState, useEffect} from 'react'

const App = () => {
   const[error, setError] = useState('')
   const [nombre, setNombre]=useState('')
   const [numero, setNumero] = useState('')
   const [usuario, setUsuario]=useState([])

   const setUsuarios =(e)=>{
       e.preventDefault()
       if(!nombre.trim()){
           setError('el campo esta vacio')
       }
       if(!numero.trim()){
           setError('el campo esta vacio')
       }
      
    
   }
   
   
    return (
       <div className="container">
           <div className="row">
               <div className="col">
                   <h2>Formulario de usuarios</h2>
                   <form onSubmit={setUsuarios} className="form-group" >
                       <input
                       onChange={(e)=>{setNombre(e.target.value)}}
                       className="form-control" 
                       placeholder="introduce el nombre"
                       type="text" />
                       <input 
                       onChange={(e)=>{setNumero(e.targer.value)}}
                       className="form-control mt-5"
                       placeholder="introduce el numero"
                       type="text" />
                       <input type="submit" 
                       value="registrar" 
                       className="btn btn-dark btn-block mt-3"/>
                   </form>
                   {
                       error ?
                       (
                           <div>
                               <p>{error}</p>
                           </div>
                       )
                       :
                       (
                           <span></span>
                       )
                   }
               </div>
               <div className="col">
                   <h2>Lista de tu agenda</h2>
               </div>
           </div>
       </div>
    )
}

export default App
