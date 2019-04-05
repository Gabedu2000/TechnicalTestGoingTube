import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            from: '',
            to: '',
            carBrand: '',
            carModel: '',
            cardPlate: '',
            description: '',
            baggages: '',
            quota: '',
            cost: ''
        }
        this.addTrip = this.addTrip.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTrip(e){    
        console.log(this.state);
        /*
        fetch('/api/trip',{
            method: 'POST',
            body: JSON.stringify(this.state),
            Headers:{
                'Accept': 'aplication/json',
                'Content-Type': 'aplication/json'
            }
        }).then(res =>console.log(res))
        .catch(err => console.error(err));
        */
        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({ 
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">GoingTube</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                <div className="card-title">Crear viaje</div>
                                    <form onSubmit={this.addTrip}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="from" placeholder="Desde" onChange={this.handleChange} required></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="to" placeholder="Hasta" onChange={this.handleChange} required></input>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s4">
                                                <input type="text" name="carBrand" placeholder="Marca" onChange={this.handleChange}></input>
                                            </div>
                                            <div className="input-field col s4">
                                                <input type="text" name="carModel" placeholder="Modelo" onChange={this.handleChange}></input>
                                            </div>
                                            <div className="input-field col s4">
                                                <input type="text" name="carPlate" placeholder="Placa" onChange={this.handleChange}></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea placeholder="Descripcion" name="description" className="materialize-textarea" onChange={this.handleChange}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <select class="browser-default" name="baggages" onChange={this.handleChange} required>
                                                <option value="" disabled selected>Equipaje</option>
                                                <option value="small">Pequeño</option>
                                                <option value="medium">Mediano</option>
                                                <option value="big">Grande</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col s6">
                                                <input type="number" name="cost" min="0" step="50" placeholder="Aporte" onChange={this.handleChange} required>
                                                </input>
                                            </div>
                                            <div className="col s6">
                                                <input type="number" name="quota" min="1" step="1" max="4" placeholder="Cupos" onChange={this.handleChange} required>
                                                </input>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4">
                                            Crear viaje
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;