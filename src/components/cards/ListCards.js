import Cards from "./Cards"
import React, {Children,useEffect, useState} from 'react'
//import celebridades from '../../helpers/usuarios'

const ListCards = () => {
    const [celebridades, setCelebridades] = useState([])
    const [error, setError] = useState(false)
    // console.log(celebridades [0].picture.large)
    useEffect(() => {
        const getUsuarios = async() => {
            try {
                const res = await fetch("https://randomuser.me/api/?results=50")
                const data = await res.json()
                //console.log(data.results)
                setCelebridades(data.results)
                setError(false)

            }catch (err){
                console.log(err)
                setError(true)
            }
        }
        getUsuarios()
    }, [])
    if (error){
        return <h1 class="alert alert-danger" role="alert">
                Error al cargar el api users <a href="#" class="alert-link">Verificar el link</a>
               </h1>
    }

    return (
        <div className="container">
            <div className="row">
            { celebridades.map(user => (
                 <div className="col-sm-6 col-md-4 col-lg-3" key={user.login.uuid} >
                      <Cards user= {user}/>
                      </div>
            ))}

            </div>
        </div> 
    )
}
export default ListCards