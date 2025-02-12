import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import jsonData from '../Emp.json';  //y shud it be in public
import Pagination from "./Pagination";

const EmployeeList = () => {
  const [emplist, setemplist] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get_employees");
        //const result=response.map(r=>r.data) //here they are array of elements but does it throw an error
        setemplist(response.data);
      } catch (error) {
        console.error(
          "Error occured while displaying list of all employees",
          error
        );
      }
    };

    list();
  }, []);

  const handleRow = (id) => {
    navigate(`/EmployeeDetails/${id}`);
  };

  const Filter = (e) => {
    setSearch(e.target.value);
    setemplist(
      emplist.filter((emp) => emp.id.toString().includes(e.target.value))
    ).map((emp) => ({
      ...emp, // Copy all properties from the emp object
      id: +emp.id, // Convert the id property back to a number
    }));

    //console.log(typeof e.target.value)

    // const re= /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)$/;
    //  if(re.test(e.target.value)) //The test method is used to check if the input value matches the regular expression
    //  {
    //  }
    //  else{
    //   setFilteredEmplist([]);
    //  }
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = emplist.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div className="emp-container">
      <Header />
      <h2>{emplist.length > 0 ? " " : "No Employees Available"} </h2>
      <input
        type="number"
        placeholder="Search employee data"
        value={search}
        onChange={Filter}
      ></input>
      <br></br> <br></br>
      {Array.isArray(emplist) && emplist.length > 0 ? ( // y is it required fot edge cases if so what are min cases
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POSITION</th>
                <th>DEPARTMENT</th>
                <th>SALARY</th>
                <th>HIRE_DATE</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((user, index) => {
                return (
                  <tr key={index}>
                    <td onClick={() => handleRow(user.id)}>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.department}</td>
                    <td>{user.salary}</td>
                    <td>{user.hire_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {
            <Pagination
              totalemployees={emplist.length}
              employeesPerPage={employeesPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        </div>
      ) : (
        <div>
          <h2>Employee data not available</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default EmployeeList;
