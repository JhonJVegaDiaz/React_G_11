import React from "react";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

export const columns = [
  {
    name: "No orden",
    selector: "id",
    sortable: true
  },
  {
    name: "Estado",
    selector: "estado",
    sortable: true
  },
  {
    name: "Fecha Generado",
    selector: "fecha",
    sortable: true
  },
  {
    name: "Dirección entrega",
    selector: "direccion",
    sortable: true
  },
  {
    name: "Acción",
    sortable: false,
    selector: "null",
    cell: (d) => [
      <button
      key={d.title}
      type="button" class="btn btn-outline-primary"
      onClick={handleClick.bind(this, d.title)}
      style={{ marginRight: "5px" }} >
      Edit
    </button>,
    <button 
    type="button" class="btn btn-outline-danger"
    onClick={handleClick.bind(this, d.title)}>
      Delete
      </button>
    ]
  }
];

export const data = [
  {
    id: 1,
    estado: "Guardado",
    fecha: "20/09/2022",
    direccion: "Callle 1 # 1-1",
  },
  {
    id: 2,
    estado: "Cancelado",
    fecha: "21/09/2022",
    direccion: "Callle 1 # 1-1",
  },
  {
    id: 3,
    estado: "Cumplido",
    fecha: "21/09/2022",
    direccion: "Callle 1 # 1-1",
  }   
];
