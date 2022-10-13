import React from "react";
import { Container, Modal, Button } from 'react-bootstrap';

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

const submitHandler = (event) => {
  location.replace("/editarOrden");
};

export const columnas = [
  {
    name: "Cod.",
    selector: row => row._id,
    sortable: true
  },
  {
    name: "Paquete",
    selector: row => row.tipo_paquete,
    sortable: true
  },
  {
    name: "Estado",
    selector: row => row.estado_pedido,
    sortable: true
  },
  {
    name: "Destinatario",
    selector: row => row.nombre_destinatario,
    sortable: true
  },
  {
    name: "Fecha entrega",
    selector: row => row.fecha_entrega,
    sortable: true
  },
  {
    name: "Horario de entrega",
    selector: row => row.horario_entrega,
    sortable: true
  },
  {
    name: "Dirección entrega",
    selector: row => row.direccion_entrega,
    sortable: true
  },
  {
    name: "Acciones",
    sortable: false,
    selector: row => row.null,
    cell: (d) => [
      <button
        key={d.title}
        type="button" className="btn btn-outline-primary"
        onClick={handleClick.bind(this, d.title)}
        style={{ color: "white", fontWeight: "bold", marginRight: "5px", width: "60px", height: "30px", fontSize: "12px", minWidth: "45%", background: "green" }} >
        View
      </button>,
      <button
        key={d.title}
        type="button" className="btn btn-outline-primary"
        onClick={submitHandler}
        style={{ color: "blue", fontWeight: "bold", marginRight: "5px", width: "65px", height: "30px", fontSize: "12px", minWidth: "40%", background: "lightblue" }} >
        Edit
      </button>,
      <button
        key={d.title}
        type="button" className="btn btn-outline-danger"
        onClick={handleClick.bind(this, d.title)}
        style={{ color: "white", fontWeight: "bold", marginRight: "5px", width: "65px", height: "30px", fontSize: "12px", minWidth: "50%", background: "tomato" }} >
        Cancel
      </button>,
    ]
  }
];


