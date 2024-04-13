import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function Blog() {
  const [userList, setUserList] = useState(null);

  async function fetchData() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    setUserList(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userList);

  return (
    <div>
      {userList !== null && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/blog/${item.name}`}>{item.name}</Link>
                </td>
                <td>{item.email}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
