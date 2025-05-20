import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable";
import Pagination from "./components/Pagination";
import styles from "./styles/App.module.css";

const PAGE_SIZE = 10;
const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        alert("failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const currentData = data.slice(startIdx, startIdx + PAGE_SIZE);

  const goNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const goPrevious = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.container}>
      <h1>Employee Data Table</h1>
      <EmployeeTable rows={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </div>
  );
};

export default App;
