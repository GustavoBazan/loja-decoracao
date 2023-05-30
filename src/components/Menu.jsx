import Dropdown from "react-bootstrap/Dropdown";

import { List } from "react-bootstrap-icons"

import './Menu.css';

function Menu() {
  return (
    <Dropdown className="Menu">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <List/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/sobre">Sobre</Dropdown.Item>
        <Dropdown.Item href="/contato">Contato</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Menu;
