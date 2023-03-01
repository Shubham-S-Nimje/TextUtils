import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  return (
    <Navbar expand="lg"
    style={{backgroundColor:props.mode==='dark'?'#263238':'gray'}}>
      <Container fluid>
        <Navbar.Brand href="#"
        className='text-light'>
          TextUtils</Navbar.Brand>
        <div className='form-check form-switch text-light'>
          <input className="form-check-input"
          onClick={props.togglemode} type="checkbox"
          role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"
          htmlFor="flexSwitchCheckChecked">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;