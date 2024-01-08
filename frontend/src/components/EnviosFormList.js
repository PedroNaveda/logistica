import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
  
  class EnviosFormList extends Component {
    state = {
      data: [],
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: '',
        destinatario: '',
        remitente: '',
        contenido: '',
        fecha_envio: '',
        distancia: 0,
      },
    };
  
    fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/envios');
        this.setState({ data: response.data });
      } catch (error) {
        console.error('Error fetching envios:', error);
      }
    };

    componentDidMount() {
      this.fetchData();
    }

    mostrarModalActualizar = (dato) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };

    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
      this.setState({
        modalInsertar: true,
      });
    };

    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };

    editar = async (dato) => {
      try {
        await axios.put(`http://localhost:3000/envios/${dato.id}`, dato);
        this.fetchData();
        this.setState({ modalActualizar: false });
      } catch (error) {
        console.error('Error updating envio:', error);
      }
    };

    eliminar = async (dato) => {
      var opcion = window.confirm('Estás Seguro que deseas Eliminar el elemento ' + dato.id);
      if (opcion === true) {
        try {
          await axios.delete(`http://localhost:3000/envios/${dato.id}`);
          this.fetchData();
          this.setState({ modalActualizar: false });
        } catch (error) {
          console.error('Error deleting envio:', error);
        }
      }
    };  

    insertar = async () => {
      try {
        await axios.post('http://localhost:3000/envios', this.state.form);
        this.fetchData();
        this.setState({ modalInsertar: false, form: { destinatario: '', remitente: '' } });
      } catch (error) {
        console.error('Error creating envio:', error);
      }
    };

    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
    
    render() {
      return (
        <>
          <header className="envios-header">
            <h1>Registro de Envíos</h1>
          </header>
          <Container>
            <br />
            <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={this.mostrarModalInsertar}>
              Crear
            </Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Destinatario</th>
                  <th>Remitente</th>
                  <th>Contenido</th>
                  <th>Fecha de Envio</th>
                  <th>Distancia</th>
                  <th>Acción</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.destinatario}</td>
                    <td>{dato.remitente}</td>
                    <td>{dato.contenido}</td>
                    <td>{dato.fecha_envio}</td>
                    <td>{dato.distancia}</td>
                    <td>
                    <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={() => this.mostrarModalActualizar(dato)}>
                      Editar
                    </Button>
                    <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
          <footer className="envios-footer">
            <p>&copy; 2024 Registro de Envíos</p>
          </footer>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader className="mHeader">
              <div>
                <h3>Editar Registro</h3>
              </div>
            </ModalHeader>
  
            <ModalBody>
              <div className="modal-row">
                <FormGroup>
                <label>ID:</label>
  
                <input className="form-control" readOnly type="text" value={this.state.form.id} />
              </FormGroup>
  
              <FormGroup>
                <label>Destinatario:</label>
                <input
                  className="form-control"
                  name="destinatario"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.destinatario}
                />
              </FormGroup>
            </div>
            <div className="modal-row">
              <FormGroup>
                <label>Remitente:</label>
                <input
                  className="form-control"
                  name="remitente"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.remitente}
                />
              </FormGroup>
  
              <FormGroup>
                <label>Contenido:</label>
                <input
                  className="form-control"
                  name="contenido"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.contenido}
                />
              </FormGroup>
            </div>
            <div className="modal-row">
              <FormGroup>
                <label>Fecha de Envio:</label>
                <input
                  className="form-control"
                  name="fecha_envio"
                  type="date"
                  onChange={this.handleChange}
                  value={this.state.form.fecha_envio}
                />
              </FormGroup>
  
              <FormGroup>
                <label>Distancia:</label>
                <input
                  className="form-control"
                  name="distancia"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.form.distancia}
                />
              </FormGroup>
            </div>  
            </ModalBody>
  
            <ModalFooter>
              <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={() => this.editar(this.state.form)}>
                Editar
              </Button>
              <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={this.cerrarModalActualizar}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader className="mHeader">
              <div>
                <h3>Envío Nuevo</h3>
              </div>
            </ModalHeader>
  
            <ModalBody>
            <div className="modal-row">
              <FormGroup>
                <label>ID:</label>
  
                <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
              </FormGroup>
              
              <FormGroup>
                <label>Destinatario:</label>
                <input
                  className="form-control"
                  name="destinatario"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>
            <div className="modal-row">
              <FormGroup>
                <label>Remitente:</label>
                <input
                  className="form-control"
                  name="remitente"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
  
              <FormGroup>
                <label>Contenido:</label>
                <input
                  className="form-control"
                  name="contenido"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>
            <div className="modal-row">
              <FormGroup>
                <label>Fecha de Envio:</label>
                <input
                  className="form-control"
                  name="fecha_envio"
                  type="date"
                  onChange={this.handleChange}
                />
              </FormGroup>
  
              <FormGroup>
                <label>Distancia:</label>
                <input
                  className="form-control"
                  name="distancia"
                  type="number"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>
            </ModalBody>
  
            <ModalFooter>
            <Button style={{ color: '#000', backgroundColor: 'yellow' }}  onClick={this.insertar}>
              Insertar
            </Button>
              <Button style={{ color: '#000', backgroundColor: 'yellow' }} onClick={this.cerrarModalInsertar}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  
  }

  
export default EnviosFormList;