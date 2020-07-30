import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function functionHandler(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http//localhost:8080/categorias'
      : 'https://victorix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
      }}
      >
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
            type="textarea"
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

        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
