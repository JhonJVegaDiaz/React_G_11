import React, { useState, useEffect } from "react";
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import { Container } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import { FiArrowDown } from "react-icons/fi";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columnas } from "./data";
import "./ordenes.css";

function OrdenesComponent() {
  // Configurar Hook
  const [ordenes, setOrdenes] = useState([]);

  // Función para mostrar fetch  
  const URL = 'http://localhost:9000/api/ordenes';
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setOrdenes(data);
  }

  useEffect(() =>{
    showData();
  },[])

  // Configurar columnas y filas para mostrar en Datatables

const columns = columnas;
const data = ordenes;

  const tableData = {
    columns,
    data
  };

  const submitHandler = (event) => {
    location.replace("/crearOrden");
  };

  return (
    <>
      <Container className="lobbie-principal">
        <NavBarComponent className="navbar" />
      </Container>

      <Container className='ordenes-container'>
        <div className="bg-warning bg-opacity-10 text-dark my-5 mx-auto" style={{ borderRadius: '1rem', minWidth: '1000px' }}>
          <div className="main" style={{ padding: '0', minHeight: '150px' }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" onClick={submitHandler} className="btn btn-outline-warning" cd > Crear orden </button>
            </div>
            <h1 className="titulo-ordenes">Resumen de Servicios</h1>
            {/* Renderizar para mostrar data en datatables */}
            <DataTableExtensions {...tableData} className="filtro">
              <DataTable
                columns={columns}
                data={ordenes}
                noHeader
                defaultSortField="id"
                sortIcon={<FiArrowDown />}
                defaultSortAsc={true}
                pagination
                highlightOnHover
                dense
                key={"_id"}
              />
            </DataTableExtensions>
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
