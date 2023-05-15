import Dropdown from 'react-bootstrap/Dropdown';

function YearsDropdown({setYear}) {
  const handleOnSelect = (e) => {
    setYear(e)
  }
  return (
    <Dropdown onSelect={handleOnSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filtrar por año
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
        <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
        <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
        <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
        <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
        <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default YearsDropdown;