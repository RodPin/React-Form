import React, { Component, Fragment } from "react";
import "./form.css";
import Select from "react-select";
import ARRAYCOMCAMPOS from "./constants/formFields";

class App extends Component {
  constructor() {
    super();

    this.state = {
      usuario: null,
      status: "STATUS_DOWN"
    };
  }

  sendToApi(event) {
    event.preventDefault();

    var dados = this.state;

    //Then you send 'dados' to the api
    console.log("SEND TO API:");
    console.log(dados);
  }

  // ESTADO INICIAL = ""
  inicialState() {
    var INITIAL_STATE = {};
    INITIAL_STATE["error"] = null;
    ARRAYCOMCAMPOS.map(x => {
      INITIAL_STATE[x.key] = "";
    });
    // console.log(INITIAL_STATE)
    return INITIAL_STATE;
  }

  onChangeText(key, change) {
    console.log(key);
    console.log(change.target.value);
    this.setState({ [key]: change.target.value });
  }

  handleChange(selectedOption, keyy) {
    // this.setState({ [keyy]: selectedOption.value });
    this.state[keyy] = selectedOption.value;
  }
  renderSelect(options, nome) {
    return (
      <Select
        name={nome}
        onChange={selectedOption => this.handleChange(selectedOption, nome)}
        options={this.arrayToJson(options)}
        className="selectAdd"
      />
    );
  }

  arrayToJson(array) {
    return array.map(x => {
      return { value: x, label: x };
    });
  }
  arrayPercentageToJson() {
    var array = [];
    for (var i = 0; i <= 100; i++) {
      array.push(i + "%");
    }
    return array;
  }

  renderDivSelect(valores, key, display, tipo) {
    // console.log(this.state[key]);
    // this.state[key] = "";
    switch (tipo) {
      case "SELECT":
        return (
          <div>
            <span className="spanNames">{display}</span>
            {this.renderSelect(valores, key)}
          </div>
        );
      case "PORCENTAGEM":
        return (
          <div>
            <span className="spanNames">{display}</span>
            {this.renderSelect(this.arrayPercentageToJson(), key)}
          </div>
        );
      case "INPUT":
        return (
          <div>
            <input
              value={this.state[key]}
              className="inputs"
              placeholder={display}
              onChange={change => this.onChangeText(key, change)}
            />
          </div>
        );
    }
  }

  render() {
    return (
      <div className="container">
        <form
          ref={formulario => (this.formulario = formulario)}
          className="addForm"
          onSubmit={event => this.sendToApi(event)}
        >
          <div className="areaGeral">
            <span className="titulo">FORMULARIO</span>

            <div className="areaInputs">
              {ARRAYCOMCAMPOS.map(x => {
                return (
                  <div>
                    {this.renderDivSelect(
                      x.valores,
                      x.key,
                      x.display,
                      x.tipoDeInput
                    )}
                  </div>
                );
              })}
            </div>
            <button
              type="submit"
              className="submitButton"
              onClick={() => {
                alert("Enviado, Checar Console");
              }}
            >
              REGISTRAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
