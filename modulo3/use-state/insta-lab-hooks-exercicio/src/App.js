import Post from './components/Post';
import styled from 'styled-components';

const PaiDeTodos = styled.body`
 display: flex;
  flex-direction: column;
  align-items: center;
  font-family:  Georgia, Serif;
  font-size: 20px;
  height: 80vh;
`

function App() {
  return (
    <PaiDeTodos>
      <h1>Post</h1>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </PaiDeTodos>
  );
};

export default App;
