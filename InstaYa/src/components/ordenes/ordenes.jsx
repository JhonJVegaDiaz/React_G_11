import React from "react";
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import { Container } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import { FiArrowDown } from "react-icons/fi";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";
import "./ordenes.css";

function OrdenesComponent() {
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
          <div className="main" style={{padding:'0', minHeight: '150px'}}>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button id = "crear-orden"type="button" class="btn btn-outline-warning" cd > Crear orden </button>
            </div>
            <h1 className="titulo-ordenes">Resumen de Servicios</h1>
            <DataTableExtensions {...tableData} className="filtro">
              <DataTable
                columns={columns}
                data={data}
                noHeader
                defaultSortField="id"
                sortIcon={<FiArrowDown />}
                defaultSortAsc={true}
                pagination
                highlightOnHover
                dense
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
