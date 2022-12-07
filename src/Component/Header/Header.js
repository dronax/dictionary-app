import React from "react";
import "./Header.css"
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <div className="header">
      <span className="title">Word Finder</span>
      <div className="inputs">
        <TextField id="standard-basic" label="Standard"></TextField>
      </div>

    </div>
  );
};

export default Header;
