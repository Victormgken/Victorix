import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresInicias ={
    nome:'Categoria',
    descricao: 'Descrição',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  };

  function functionHandler(info){
    setValue(
      info.target.getAttribute('name'), 
      info.target.value
      );
  };
  
  return(
    <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        
        <form onSubmit = {function handleSubmit(info){
          info.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
        }}>
        <div>
          <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={functionHandler}
          />

          <FormField 
            label="Descrição da Categoria"
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={functionHandler}
          />

          <FormField 
            label="Cor da Categoria"
            type="color"
            name="cor"
            value={values.cor}
            onChange={functionHandler}
          />
        </div>

        <button>
          Cadastrar
        </button>
      </form>
        <ul>
          {categorias.map((categoria, indice) => {
          return (
            <li key ={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
          })}
        </ul>

        <Link to ="/">
            Ir para home
        </Link>
    </PageDefault>    
    )
  }
  
  export default CadastroCategoria;