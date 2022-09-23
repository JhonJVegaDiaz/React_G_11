import React from "react";
import DataTable from "react-data-table-component";
import {FiArrowDown} from "react-icons/fi";
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
    <div className="bg-warning bg-opacity-10 text-dark my-5 mx-auto" style={{borderRadius: '1rem', maxWidth: '1000px'}}>
        <div className="main">
        <DataTableExtensions {...tableData}>
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
  );
}

export default OrdenesComponent;
