import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const URL_Api_GET = "http://localhost:9000/api/ordenes"
const URL_Api_POST = "http://localhost:9000/api/crearOrden"
const URL_Api_PUT = "http://localhost:9000/api/ordenes"
const URL_Api_DELETE = "http://localhost:9000/api/ordenes/"

class CrudModal extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    state = {
        data: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {
            _id: '',
            tipo_paquete: '',
            ancho_paquete: '',
            alto_paquete: '',
            largo_paquete: '',
            peso_aprox: '',
            delicado: '',
            estado_pedido: '',
            fecha_recogida: '',
            horario_recogida: '',
            ciudad_recogida: '',
            barrio_recogida: '',
            direccion_recogida: '',
            nombre_remitente: '',
            documento_remitente: '',
            fecha_entrega: '',
            horario_entrega: '',
            ciudad_entrega: '',
            barrio_entrega: '',
            direccion_entrega: '',
            nombre_destinatario: '',
            documento_destinatario: ''
        }
    }

    peticionGet = () => {
        axios.get(URL_Api_GET).then(response => {
            this.setState({ data: response.data });
            console.log(response.data);
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        delete this.state.form._id;

        await axios.post(URL_Api_POST, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put(URL_Api_PUT + this.state.form._id, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = () => {

        axios.delete(URL_Api_DELETE + this.state.form._id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    seleccionarOrden = (orden) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                _id: orden._id,
                tipo_paquete: orden.tipo_paquete,
                ancho_paquete: orden.ancho_paquete,
                alto_paquete: orden.alto_paquete,
                largo_paquete: orden.largo_paquete,
                peso_aprox: orden.peso_aprox,
                delicado: orden.delicado,
                estado_pedido: orden.estado_pedido,
                fecha_recogida: orden.fecha_recogida,
                horario_recogida: orden.horario_recogida,
                ciudad_recogida: orden.ciudad_recogida,
                barrio_recogida: orden.barrio_recogida,
                direccion_recogida: orden.direccion_recogida,
                nombre_remitente: orden.nombre_remitente,
                documento_remitente: orden.documento_remitente,
                fecha_entrega: orden.fecha_entrega,
                horario_entrega: orden.horario_entrega,
                ciudad_entrega: orden.ciudad_entrega,
                barrio_entrega: orden.barrio_entrega,
                direccion_entrega: orden.direccion_entrega,
                nombre_destinatario: orden.nombre_destinatario,
                documento_destinatario: orden.documento_destinatario
            }
        })
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }


    render() {
        const { form } = this.state;
        return (
            <div className="App">
                <br /><br /><br />
                <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar orden</button>
                <br /><br />
                <table className="table " style={{ display: 'inblock' }}>
                    <thead>
                        <tr>
                            <th>Cod.</th>
                            <th>Paquete</th>
                            <th>Ancho (cm)</th>
                            <th>Alto (cm)</th>
                            <th>Largo (cm)</th>
                            <th>Peso (Kg)</th>
                            <th>Delicado</th>
                            <th>Estado Pedido</th>
                            <th>Fecha Recogida</th>
                            <th>Horario Recogida</th>
                            <th>Ciudad Recogida</th>
                            <th>Barrio Recogida</th>
                            <th>Direccion Recogida</th>
                            <th>Remitente</th>
                            <th>Documento remitente</th>
                            <th>Fecha Entrega</th>
                            <th>Horario Entrega</th>
                            <th>Ciudad Entrega</th>
                            <th>Barrio Entrega</th>
                            <th>Direccion Entrega</th>
                            <th>Destinatario</th>
                            <th>Documento Destinatario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(orden => {
                            return (
                                <tr key={orden._id}>
                                    <td>{orden._id}</td>
                                    <td>{orden.tipo_paquete}</td>
                                    <td>{orden.ancho_paquete}</td>
                                    <td>{orden.alto_paquete}</td>
                                    <td>{orden.largo_paquete}</td>
                                    <td>{orden.peso_aprox}</td>
                                    <td>{String(orden.delicado)}</td>
                                    <td>{orden.estado_pedido}</td>
                                    <td>{orden.fecha_recogida}</td>
                                    <td>{orden.horario_recogida}</td>
                                    <td>{orden.ciudad_recogida}</td>
                                    <td>{orden.barrio_recogida}</td>
                                    <td>{orden.direccion_recogida}</td>
                                    <td>{orden.nombre_remitente}</td>
                                    <td>{orden.documento_remitente}</td>
                                    <td>{orden.fecha_entrega}</td>
                                    <td>{orden.horario_entrega}</td>
                                    <td>{orden.ciudad_entrega}</td>
                                    <td>{orden.barrio_entrega}</td>
                                    <td>{orden.direccion_entrega}</td>
                                    <td>{orden.nombre_destinatario}</td>
                                    <td>{orden.documento_destinatario}</td>

                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarOrden(orden); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                        {"   "}
                                        <button className="btn btn-danger" onClick={() => { this.seleccionarOrden(orden); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{ display: 'block' }}>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="_id">Cod.</label>
                            <input className="form-control" type="text" name="_id" id="_id" readOnly onChange={this.handleChange} value={form ? form._id : this.state.data._id} />
                            <br />
                            <label htmlFor="tipo_paquete">Paquete</label>
                            <input className="form-control" type="text" name="tipo_paquete" id="tipo_paquete" onChange={this.handleChange} value={form ? form.tipo_paquete : ''} />
                            <br />
                            <label htmlFor="ancho_paquete">Ancho (cm)</label>
                            <input className="form-control" type="text" name="ancho_paquete" id="ancho_paquete" onChange={this.handleChange} value={form ? form.ancho_paquete : ''} />
                            <br />
                            <label htmlFor="alto_paquete">Alto (cm)</label>
                            <input className="form-control" type="text" name="alto_paquete" id="alto_paquete" onChange={this.handleChange} value={form ? form.alto_paquete : ''} />
                            <br />
                            <label htmlFor="largo_paquete">Largo (cm)</label>
                            <input className="form-control" type="text" name="largo_paquete" id="largo_paquete" onChange={this.handleChange} value={form ? form.largo_paquete : ''} />
                            <br />
                            <label htmlFor="peso_aprox">Peso (Kg)</label>
                            <input className="form-control" type="text" name="peso_aprox" id="peso_aprox" onChange={this.handleChange} value={form ? form.peso_aprox : ''} />
                            <br />
                            <label htmlFor="delicado">Delicado (true / false)</label>
                            <input className="form-control" type="text" name="delicado" id="delicado" onChange={this.handleChange} value={form ? form.delicado : ''} />
                            <br />
                            <label htmlFor="estado_pedido">Estado Pedido (Guardado, Cumplido, Cancelado)</label>
                            <input className="form-control" type="text" name="estado_pedido" id="estado_pedido" onChange={this.handleChange} value={form ? form.estado_pedido : ''} />
                            <br />
                            <label htmlFor="fecha_recogida">Fecha Recogida (AAAA-MM-DD)</label>
                            <input className="form-control" type="text" name="fecha_recogida" id="fecha_recogida" onChange={this.handleChange} value={form ? form.fecha_recogida : ''} />
                            <br />
                            <label htmlFor="horario_recogida">Horario Recogida (AM / PM)</label>
                            <input className="form-control" type="text" name="horario_recogida" id="horario_recogida" onChange={this.handleChange} value={form ? form.horario_recogida : ''} />
                            <br />
                            <label htmlFor="ciudad_recogida">Ciudad Recogida</label>
                            <input className="form-control" type="text" name="ciudad_recogida" id="ciudad_recogida" onChange={this.handleChange} value={form ? form.ciudad_recogida : ''} />
                            <br />
                            <label htmlFor="barrio_recogida">Barrio Recogida</label>
                            <input className="form-control" type="text" name="barrio_recogida" id="barrio_recogida" onChange={this.handleChange} value={form ? form.barrio_recogida : ''} />
                            <br />
                            <label htmlFor="direccion_recogida">Direccion Recogida</label>
                            <input className="form-control" type="text" name="direccion_recogida" id="direccion_recogida" onChange={this.handleChange} value={form ? form.direccion_recogida : ''} />
                            <br />
                            <label htmlFor="nombre_remitente">Remitente</label>
                            <input className="form-control" type="text" name="nombre_remitente" id="nombre_remitente" onChange={this.handleChange} value={form ? form.nombre_remitente : ''} />
                            <br />
                            <label htmlFor="documento_remitente">Documento Remitente</label>
                            <input className="form-control" type="text" name="documento_remitente" id="documento_remitente" onChange={this.handleChange} value={form ? form.documento_remitente : ''} />
                            <br />
                            <label htmlFor="fecha_entrega">Fecha Entrega (AAAA-MM-DD)</label>
                            <input className="form-control" type="text" name="fecha_entrega" id="fecha_entrega" onChange={this.handleChange} value={form ? form.fecha_entrega : ''} />
                            <br />
                            <label htmlFor="horario_entrega">Horario Entrega (AM / PM)</label>
                            <input className="form-control" type="text" name="horario_entrega" id="horario_entrega" onChange={this.handleChange} value={form ? form.horario_entrega : ''} />
                            <br />
                            <label htmlFor="ciudad_entrega">Ciudad Entrega</label>
                            <input className="form-control" type="text" name="ciudad_entrega" id="ciudad_entrega" onChange={this.handleChange} value={form ? form.ciudad_entrega : ''} />
                            <br />
                            <label htmlFor="barrio_entrega">Barrio Entrega</label>
                            <input className="form-control" type="text" name="barrio_entrega" id="barrio_entrega" onChange={this.handleChange} value={form ? form.barrio_entrega : ''} />
                            <br />
                            <label htmlFor="direccion_entrega">Direccion Entrega</label>
                            <input className="form-control" type="text" name="direccion_entrega" id="direccion_entrega" onChange={this.handleChange} value={form ? form.direccion_entrega : ''} />
                            <br />
                            <label htmlFor="nombre_destinatario">Destinatario</label>
                            <input className="form-control" type="text" name="nombre_destinatario" id="nombre_destinatario" onChange={this.handleChange} value={form ? form.nombre_destinatario : ''} />
                            <br />
                            <label htmlFor="documento_destinatario">Documento Destinatario</label>
                            <input className="form-control" type="text" name="documento_destinatario" id="documento_destinatario" onChange={this.handleChange} value={form ? form.documento_destinatario : ''} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal == 'insertar' ?
                            <button className="btn btn-success" onClick={() => this.peticionPost()}>
                                Insertar
                            </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                Actualizar
                            </button>
                        }
                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas cancelar la orden {form && form._id}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                        <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                    </ModalFooter>
                </Modal>
            </div>



        );
    }
}
export default CrudModal;
