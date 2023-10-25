import React from "react";
import Button from "@mui/material/Button";

interface Props {}

const App: React.FC<Props> = ({}) => {
  return (
    <>
      <Button variant="contained" color="secondary">
        Hello world!!
      </Button>
      <h1>Hello World</h1>
    </>
  );
};

export default App;
