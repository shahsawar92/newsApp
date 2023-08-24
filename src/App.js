import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <BrowserRouter>
      <Container className="container-box">
        <Header />
        <Container style={{ paddingLeft: "40px", paddingRight: "40px" }}>
          <AppRoutes />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
