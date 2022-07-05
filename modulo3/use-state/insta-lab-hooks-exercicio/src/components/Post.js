import { useState } from "react";


function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtido, setNumeroCurtido] = useState(0);
  const [comentado, setComentado] = useState(false);
  const [numeroComentario, setNumeroComentario] = useState(0);
  const [arrayComentario, setArrayComentario] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtido(numeroCurtido - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtido(numeroCurtido + 1)
    }

  };

  // Passo7
  const onClickComentario = () => {
    setComentado(!comentado)
  };

  // Passo7
  const onChangeComentario = (event) => {
    setInputValue(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
  //  console.log("Entrei na função comentario", comentario)
    const listaComentarios = [...arrayComentario, comentario]
        setArrayComentario(listaComentarios)
        setComentado(false)
        setNumeroComentario(numeroComentario + 1)
        setInputValue("")
  };

  {/* Passo6 */}
  const caixaDeComentario = comentado === true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => { enviarComentario(inputValue) }}>Enviar</button>
    </>
  ) : (
    // Passo8
   // <>Lógica de exibir lista de comentarios</>
    arrayComentario.map((comentario, index) => {
      return (
          <div key={index}>
              <p>{comentario}</p>
          </div>
      )
  })
);

  return (

    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtido}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
            {/* Passo6 */}
            {numeroCurtido === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentario}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comentado === true ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>

  );
};

export default Post;