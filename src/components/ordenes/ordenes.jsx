import React from "react";
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import { Container } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import { FiArrowDown } from "react-icons/fi";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { columns } from "./data";
import "./ordenes.css";
import { eventListeners } from "@popperjs/core";


function OrdenesComponent() {

  const accessToken = localStorage.getItem("accessToken");


  const submitHandler = (event) => {
    location.replace("/crearOrden");
  };
    const submitEditar = (event) => {
      location.replace("/editarOrden");
    };

    const submitEliminar = (event) => {
      location.replace("/eliminar");
    };

    const submitVer = (event) => {
      location.replace("/ver");
    };



    const [state, setState] = useState({
      users: []
    });

    const headers = {
      'authorization': accessToken
    }
    useEffect(() => {
      const getData = () => {
        axios.get("http://localhost:9000/api/ordenes", { headers }).then((response) => {
          setState({
            users: response.data,
          });
        }).catch((error) => {
          console.error(error);
        })
      }
      getData();
    }, [])
    function tabla() {
      return (
        state.users.map((user) => {
          return (
            <div key={user._id} style={{ border: "1px solid red", width: "1000px", display: "flex", flexDirection: "column", padding: "10px" }}>
              <h3>Cod.: {user._id}</h3>
              <span>Tip: {user.tipo_paquete}</span>
              <span>email: {user.email}</span>
              <span>rol: {user.role}</span>
              <span>Activate: {user.activate}</span>
            </div>
          )
        })
      )
    }
    const data = tabla();
    const tableData = {
      columns,
      data
    };
    return (
      <>
        <Container className="lobbie-principal">
          <NavBarComponent className="navbar" />
        </Container>
        <Container className='ordenes-container'>
          <div className="bg-warning bg-opacity-10 text-dark my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '1000px' }}>
            <div className="main" style={{ padding: '0', minHeight: '150px' }}>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" onClick={submitHandler} class="btn btn-outline-warning" cd > Crear orden </button>
              </div>
              <h1 className="titulo-ordenes">Resumen de Servicios</h1>
              <div>
                <div>Ordenes de envio de usuarios registrados</div>
                {
                  state.users.map((user) => {
                    user.filter
                    return (
                      <div key={user._id} style={{ border: "1px solid red", width: "1000px", display: "flex", flexDirection: "column", padding: "10px" }}>
                        <h3>Cod.: {user._id}</h3>
                        <span>Tipo paquete: {user.tipo_paquete}</span>
                        <span>Fecha entrega: {user.fecha_entrega}</span>
                        <span>Destinatario: {user.nombre_destinatario}</span>
                        <span>Estado: {user.estado_pedido}</span>
                        <div class="d-grid gap-2 d-md-block">
                          <button type="button" className="btn btn-primary mx-2 px-5" id= {user._id} onClick={submitEditar}> Editar </button>
                          <button type="button" className="btn btn-danger mx-2 px-5" id= {user._id} onClick={submitEliminar}> Eliminar </button>
                          <button type="button" className="btn btn-success mx-2 px-5" id= {user._id} onClick={submitVer}> Ver </button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Container>
        <Container >
          <Footer />
        </Container>
      </>
    );
  }
  export default OrdenesComponent;




