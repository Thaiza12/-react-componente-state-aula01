import React, { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p> Contador  {num}</p>
      <button onClick={() => setNum(num + 5)}>SOMAR</button>
      <br /> <br />
      <button onClick={() => setNum(num - 3)}>SUBTRAIR</button>
      <br /> <br />
      <button onClick={() => setNum(0)}>Zerar</button>
      <br /> <br />
  
    </div>
  );
}
