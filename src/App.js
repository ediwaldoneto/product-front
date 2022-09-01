import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/")
      .then(res => res.json())
      .then(data => 
        //console.log(data).
        setProdutos(data.data))
        
  }, []);

  return (
    <>
    {produtos.length && 
      <div>
        <Form botao={btnCadastrar} />
        <Table vetor={produtos} />
      </div>
    }
    </>
    
  );
}

export default App;
