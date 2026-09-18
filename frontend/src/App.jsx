import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [produtos, setProdutos] = useState()
    async function buscarProdutos(){
      const {data} = await axios.get("http://localhost:3000/produtos")
      setProdutos(data)     
    }
    useEffect(()=>{
      buscarProdutos()
    },[])

  return (
    <>
      <h1>Produtos</h1>
      {produtos && produtos.map((element)=>{
        return(
          <div>
            <h2>{element.nome}</h2>
            <p>{element.marca}</p>
            <p>R$ {element.preco}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
