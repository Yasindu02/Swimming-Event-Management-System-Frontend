import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { API_BASE_URL } from "../config";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/SavedData/GetSavedData`)
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          // Handle error
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SavedData");
    XLSX.writeFile(workbook, "saved_data.xlsx");
  };

  const sortedData = data.slice().sort((a, b) => a.timing - b.timing);

  return (
    <div className="data" style={{ backgroundColor: "#36454F", minHeight: "100vh", color: "#ffffff" }}>
      <div className="container py-3">
        <div className="d-flex flex-column align-items-center pt-2">
          <h3>Saved Data</h3>
          <button onClick={downloadExcel} className="btn btn-primary mb-2">
            Download Excel
          </button>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>House</th>
                  <th>Timing</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((score, index) => (
                  <tr key={index}>
                    <td className="wide-column no-wrap">{score.eventname}</td>
                    <td className="wide-column no-wrap">{score.name}</td>
                    <td className="wide-column no-wrap">{score.date}</td>
                    <td className="wide-column no-wrap">{score.age}</td>
                    <td className="wide-column no-wrap">{score.gender}</td>
                    <td className="wide-column no-wrap">{score.house}</td>
                    <td className="wide-column no-wrap">{score.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
