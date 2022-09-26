import React from "react";
import bd from "./utilerias/InvocarBackEnd";

class CardProductos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div className="row ">
                    <div className="col" >
                        <div className="card"  >
                            <img src={this.props.img}  className="card-img"  />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className={'card-title'}> {this.props.descripcion} </p>
                                <p className={'card-title'}>Talla: {this.props.talla} </p>
                                <p className={'card-title'}>Color: {this.props.color} </p>
                                <p className="card-text">${this.props.precio} </p>
                                <div>
                                    <button type="button" className="btn btn-dark" onClick={this.eliminarProducto.bind(this)}>
                                        <p className="text-light">Eliminar </p>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    eliminarProducto(e){
        let idProducto= this.props.idProducto;
        bd.postInvocacion(`/product/deleteProduct/${idProducto}`, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
    }
}

export default CardProductos;