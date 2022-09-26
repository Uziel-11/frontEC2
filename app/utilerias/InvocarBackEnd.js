const configuracion = require('../../configServidor')
const depurar = configuracion.debugmode

class InvocarBackEnd{

    getEncabezado(){
        return({
            'Content-Type' : 'application/json',
            //authorization: window.localStorage.getItem('token')
        })
    }

    getInvocacion(url, okCallback, failCallback){
        let parametros = {
            method: 'GET',
            headers: this.getEncabezado()
        }
        this.Invocacion(url, okCallback, failCallback, parametros)
    }

    Invocacion(url, okCallback, failCallback, parametros){
        if (depurar){
            console.log('Invocacion => '+parametros.method+': '+url)
            console.log(parametros.body)
        }

        fetch(`${configuracion.api.host}${url}`, parametros)
            .then(respuesta =>{
                console.log('Respuesta: '+JSON.stringify(respuesta))
                if (depurar){
                    console.log('Respuesta de Invocacion => ')
                    console.log(respuesta)
                }
                return respuesta.json()
            })
            .then(dato => {
                console.log('dato: '+JSON.stringify(dato))
                if (dato.status)
                    okCallback(dato)
                else
                    failCallback(dato)
            })
            .catch(error => {
                console.log('Error: '+error)
            })
    }

    postInvocacion(url, body, okCallback, failCallback){
        console.log('body ==> '+body)
        let parametros = {
            method: 'POST',
            headers:this.getEncabezado(),
            body: JSON.stringify(body)
        }
        this.Invocacion(url, okCallback, failCallback, parametros)
    }
}

export default new InvocarBackEnd();