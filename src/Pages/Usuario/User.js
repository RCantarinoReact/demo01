import React, { Component } from 'react'


class User extends Component {
    render() {
        let lista = [
            {
               nome: 'renato',
               email : 'renato.cantarino@gmail.com'     
            },
            {
                nome: 'cantarino',
                email : 'cantarino@gmail.com'    
            }
        ];
        return(
            <div>
                <table border="1">
                   {lista.map((item) => {
                       return <tr>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                            </tr>
                   })}


                </table>



            </div>
        )       
    }
}

export default  User;