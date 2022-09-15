import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  const produto = {
    nome: '',
    marca: ''
  }

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [newObject, setNewObject] = useState(produto);



  useEffect(() => {
    fetch("http://localhost:8080/product/")
      .then(res => res.json())
      .then(data =>
        setProdutos(data.data))

  }, []);

  const handler = (e) => {
    setNewObject({ ...newObject, [e.target.name]: e.target.value });
  }


  const cadastrar = () => {

    fetch("http://localhost:8080/product/", {
      method: "POST",
      body: JSON.stringify(newObject),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json));

  }


  return (
    <>
      {produtos.length &&
        <div>
          <Form botao={btnCadastrar} cadastrar={cadastrar} eventKeys={handler} obj={newObject} />
          <Table vetor={produtos} />
        </div>
      }
    </>

  );
}

export default App;
