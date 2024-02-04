import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { API_BASE_URL } from "../config";

function Home() {
  const [users, setUsers] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [taskOptions, setTaskOptions] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTimingData, setShowTimingData] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");

  const handleChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleHouseChange = (e) => {
    setSelectedHouse(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/Students/GetStudents`, {
        params: {
          age: selectedAge,
          gender: selectedGender,
          house: selectedHouse,
        },
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          // Filter the data based on the selected age group
          let filteredData = res.data.Result;
          if (selectedAge === "20") {
            filteredData = filteredData.filter((item) => item.age > 16);
          } else if (selectedAge === "16") {
            filteredData = filteredData.filter(
              (item) => item.age >= 14 && item.age <= 16
            );
          } else if (selectedAge === "14") {
            filteredData = filteredData.filter(
              (item) => item.age >= 12 && item.age <= 14
            );
          } else if (selectedAge === "12") {
            filteredData = filteredData.filter(
              (item) => item.age >= 10 && item.age <= 12
            );
          } else if (selectedAge === "10") {
            filteredData = filteredData.filter(
              (item) => item.age >= 8 && item.age <= 10
            );
          } else if (selectedAge === "08") {
            filteredData = filteredData.filter((item) => item.age <= 8);
          }

          setUsers(filteredData);
        } else {
          // Handle error
        }
      })
      .catch((err) => console.log(err));
  }, [selectedAge, selectedGender, selectedHouse]);

  const [modifiedTimings, setModifiedTimings] = useState({});

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/Tasks/GetTasks`)
      .then((res) => {
        setTaskOptions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const saveAllData = () => {
    const updatedUsersData = users.map((user) => ({
      //student_id: user.id,
      eventname: selectedEvent,
      date: selectedDate,
      name: user.name,
      age: user.age,
      gender: user.gender,
      house: user.house,
      birthday: user.birthday,
      timing: user.timing,
      classes: user.address,
     user_id: user.id,
    }));

    // const new_data ={
    //   student_id: updatedUsersData[0]['student_id'],
    //   eventname: updatedUsersData[0]['eventname'],
    //   date: updatedUsersData[0]['date'],
    //   name: updatedUsersData[0]['name'],
    //   age: updatedUsersData[0]['age'],
    //   gender: updatedUsersData[0]['gender'],
    //   house: updatedUsersData[0]['house'],
    //   birthday: updatedUsersData[0]['birthday'],
    //   timing: updatedUsersData[0]['timing'],
    //   classes:updatedUsersData[0]['classes'],
    //  user_id: updatedUsersData[0]['user_id'],
    // }
    // console.log(new_data);
    

    axios
      .post(`http://localhost:57909/api/SaveAllToData/SaveAllToData`, updatedUsersData)
      .then((res) => {
        console.log(res.data);
        localStorage.getItem("score_id", 1);
        alert("Data saved to MySQL table.");
      })
      .catch((error) => console.log(error));
  };

  const handleTimingChange = (index, newValue) => {
    const updatedUsers = [...users];
    updatedUsers[index].timing = newValue;
    setUsers(updatedUsers);
  };

  const showAllData = () => {
    axios
      .get(`${API_BASE_URL}/getSavedData`)
      .then((res) => {
        if (res.data.Status === "Success") {
          const filteredData = res.data.Result.filter(
            (item) =>
              new Date(item.date).toLocaleDateString() ===
              selectedDate.toLocaleDateString()
          );
          setUsers(filteredData);
          setShowTimingData(true);
        } else {
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home" style={{ backgroundColor: "#36454F", minHeight: "500vh", minWidth: "90vh", color: "#ffffff" }}>
      <div className="container py-3">
        <div className="row g-3">
          <div className="col-md-3">
            <div className="d-flex flex-column align-items-center pt-1">
              <div className="px-0 py-0">
                <select
                  className="custom-dropdown form-select"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                >
                  <option value="" disabled>
                    Choose Event
                  </option>
                  {taskOptions.map((tasks, index) => (
                    <option key={index} value={tasks.eventname}>
                      {tasks.eventname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="d-flex flex-column align-items-center pt-1">
              <div className="px-0 py-0">
                <select
                  className="custom-dropdown form-select"
                  value={selectedAge}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Choose Age Group
                  </option>
                  <option value="20">Over 16</option>
                  <option value="16">Under 16</option>
                  <option value="14">Under 14</option>
                  <option value="12">Under 12</option>
                  <option value="10">Under 10</option>
                  <option value="08">Under 08</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="d-flex flex-column align-items-center pt-1">
              <div className="px-0 py-0">
                <select
                  className="custom-dropdown form-select"
                  value={selectedGender}
                  onChange={handleGenderChange}
                >
                  <option value="" disabled>
                    Choose Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="d-flex flex-column align-items-center pt-1">
              <div className="px-0 py-0">
                <select
                  className="custom-dropdown form-select"
                  value={selectedHouse}
                  onChange={handleHouseChange}
                >
                  <option value="" disabled>
                    Choose House
                  </option>
                  <option value="House 01">House 01</option>
                  <option value="House 02">House 02</option>
                  <option value="House 03">House 03</option>
                  <option value="House 04">House 04</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="d-flex flex-column align-items-center ">
              <div className="px-0 py-0">
                <div className="mt-2 table-responsive" style={{ overflowX: "auto" }}>
                  <table className="table" onSubmit={handleSubmit}>
                    <thead>
                      <tr>
                        <th className="wide-column no-wrap">Event Name</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>House</th>
                        <th className="wide-column no-wrap">Birth Year</th>
                        <th>Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((student, index) => (
                        <tr key={index}>
                          <td style={{ display: "none" }}>
                            {new Date(student.date).toLocaleDateString("en-GB")}
                          </td>
                          <td style={{ display: "none" }}>{student.id}</td>
                          <td className="wide-column no-wrap">{selectedEvent}</td>
                          <td className="wide-column no-wrap">{student.name}</td>
                          <td className="wide-column no-wrap">{student.age}</td>
                          <td className="wide-column no-wrap">{student.gender}</td>
                          <td className="wide-column no-wrap">{student.house}</td>
                          <td className="wide-column no-wrap">
                            {new Date(student.birthday).getFullYear()}
                          </td>
                          <td className="wide-column no-wrap">
                            <input
                              type="number"
                              value={student.timing}
                              onChange={(e) =>
                                handleTimingChange(index, e.target.value)
                              }
                              placeholder=""
                              className="form-control rounded-0"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-grid gap-3 col-12 mx-auto">
                  <div className="btn-group">
                    <Link
                      to="/dash/saveAllToData"
                      onClick={saveAllData}
                      className="btn btn-primary me-4 rounded btn-lg"
                      type="submit"
                    >
                      Save
                    </Link>

                    <Link
                      to="/dash/getSavedData"
                      className="btn btn-primary me-4 rounded btn-lg"
                      type="button"
                    >
                      Show
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
