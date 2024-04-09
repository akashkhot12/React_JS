import ClassCompo from "./component/ClassCompo";
import Button from "react-bootstrap/Button";

import Table from 'react-bootstrap/Table';
export default function App() {
  return (
    <>
      <h1>Hello akash</h1>
      <h2>hello chetana</h2>
      <ClassCompo />
      <Button variant="primary">Primary</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}
