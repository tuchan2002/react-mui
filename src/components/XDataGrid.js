import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const handleOnClick = (id) => {
  console.log("OK DESU", id);
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "editBtn",
    headerName: "Edit",
    width: 60,
    renderCell: (params) => {
      return <EditIcon>Edit</EditIcon>;
    },
  },
  {
    field: "deleteBtn",
    headerName: "Delete",
    width: 150,
    renderCell: (params) => {
      return (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleOnClick.bind(this, params.value)}
        >
          Delete
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    deleteBtn: 1,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    deleteBtn: 6,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    deleteBtn: 3,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    deleteBtn: 3,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    deleteBtn: 9,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    deleteBtn: 3,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    deleteBtn: 23,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    deleteBtn: 3,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    deleteBtn: 3,
  },
];
const XDataGrid = () => {
  return (
    <Box p={5} sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default XDataGrid;
