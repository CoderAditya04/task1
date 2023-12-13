import Container from './components/Container/Container';

function App() {
  return (
    <div style={{height: '390px', width: '844px', display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      marginTop: '100px',
      overflow: 'hidden',
      position: 'relative'
      }}>
      <Container />
    </div>
  );
}

export default App;
