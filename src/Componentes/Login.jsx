import React from 'react';
import { Apiurl } from '../services/apirest'
import axios from 'axios';
import '../../src/assets/css/Login.css';
import Logo from '../../src/assets/Image/Semana.png'
class Login extends React.Component {

    state = {
        form: {
            "email": "",
        },
        error: false,
        errorMsg: ""
    }
    manejadorSubmit(e) {
        e.preventDefault();
    }
    manjadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    manejadorBoton = () => {

        let url = Apiurl + "Auth";
        axios.post(url, this.state.form)
            .then(response => {
              if(response.data.status==="OK"){

              }else{
                this.setState({
                    error: true,
                    errorMsg: response.data.result.error_msg
                })
              }
            }).chatch(error => {
                console.log(error);
                this.setState({
                    error: true,
                    errorMsg: "erro al conectar al api"
                })
            })


    }



    render() {
        return (

            <React.Fragment>

                <div className="wrapper fadeInDown">
                    <div id="formContent">



                        <div className="fadeIn first">
                            <img src={Logo} whidth="50px" alt="User Icon" />
                        </div>


                        <form onSubmit={this.manejadorSubmit}>
                            <input type="Usuario" className="fadeIn second" name="Usuario" placeholder="Usuario o Email" onChange={this.manejadorChange} />
                            <input type="submit" className="fadeIn fourth" value="Iniciar" onClick={this.manejadorBoton} />
                        </form>

                    
                    </div>
                    {this.state.error=== true &&
                           <div className="alert alert-danger" role="alert">
                           {this.state.errorMsg}
                       </div>  
                        }
                </div>

            </React.Fragment>
        )

    }



}
export default Login;