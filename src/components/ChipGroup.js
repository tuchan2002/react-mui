import { Chip } from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ChipGroup = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Rails" },
    { id: 5, name: "Laravel" },
  ]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDelete = (id) => {
    setLanguages((languages) =>
      languages.filter((language) => language.id !== id)
    );
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {languages.map((language) => (
        <Chip
          key={language.id}
          label={language.name}
          onDelete={handleDelete.bind(this, language.id)}
        />
      ))}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ChipGroup;
