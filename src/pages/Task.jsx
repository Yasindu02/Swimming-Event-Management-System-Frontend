import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

function Task() {
  const [values, setValues] = useState({
    eventname: "",
    user_id: localStorage.getItem("user_id"),
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_BASE_URL}/api/Tasks/CreateTask`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/dash/score");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="event" style={{ backgroundColor: "#36454F", minHeight: "100vh" }}>
      <div className="d-flex flex-column align-items-center pt-2">
        <h2 style={{ color: "#ffffff" }}>Add Event</h2>
        <div className="text-danger" style={{ color: "#ff0000" }}>
          {error && error}
        </div>
        <form className="row g-3 w-50 pt-2" onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="eventname" style={{ color: "#ffffff" }}>
              <strong>Event Name</strong>
            </label>
            <input
              type="eventname"
              name="eventname"
              autoComplete="off"
              onChange={(e) =>
                setValues({ ...values, eventname: e.target.value })
              }
              placeholder="Enter Event Name"
              className="form-control rounded-0"
              style={{ backgroundColor: "#ffffff", color: "#282463" }}
              required
            />
          </div>
          <div className="mb-1">
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
            style={{ backgroundColor: "#4caf50", color: "#ffffff" }}
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Task;
