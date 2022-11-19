import { Chip } from "@mui/material";
import React, { useState } from "react";

const ChipGroup = () => {
  const [languages, setLanguages] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Rails" },
    { id: 5, name: "Laravel" },
  ]);

  const handleDelete = (id) => {
    setLanguages((languages) =>
      languages.filter((language) => language.id !== id)
    );
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
    </div>
  );
};

export default ChipGroup;
