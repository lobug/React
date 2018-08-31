import React from "react";

const Lista = ({ itensInseridos }) => (
  <ul>
    {
      itensInseridos.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

export default Lista;
