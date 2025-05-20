import React from "react";
import styles from "../styles/Table.module.css";

const EmployeeTable = ({ rows }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ id, name, email, role }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;
