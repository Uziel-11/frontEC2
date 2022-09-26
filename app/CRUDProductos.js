import React from 'react'
import Header from "/recursos/Header"

class CRUDProductos extends React.Component{
    render(){
        return(
            <>
                <Header/>

                <div>
                    <form className="d-flex">
                        <h5>CRUD Productos</h5>
                        <button type="button" className="btn btn-outline-success">Agregar</button>
                        <button type="button" className="btn btn-outline-danger">Eliminar</button>
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </>
        )
    }
}
export default CRUDProductos;