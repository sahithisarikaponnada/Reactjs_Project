import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const [filteredData, setFilteredData] = useState([]);
  // const[empid,setEmpid]=useState()
  //const [error, setError] = useState()

  useEffect(() => {
    const det = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/employees/${id}`
        );

        // ,{
        // params: {
        //     id:empid,
        //     }
        // })

        setData(response.data);
        // setFilteredData(response.data)
      } catch (error) {
        console.error(
          "Error occured while displaying details of selected employees",
          error
        );
      }
    };
    det();
  }, [id]);

  //   const handleIdChange = (e) => {

  //       setData(data.filter(emp=>emp.id === +e.target.value))
  //       console.log(emp)
  //       //console.log(e.target.value)
  //      }

  if (!data) {
    return <div>Employee data not available</div>;
  }

  return (
    <div>
      <Header />
      <center>
        <h1>
          <b>Fetching data for selected employee</b>
        </h1>
        {/* {Array.isArray(data) ? ( // y is it required fot edge cases if so what are min cases */}
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Hire_date</th>
            </tr>
          </thead>
          <tbody>
            {/* { 
                                  data.map((user,index) => 
                                      { */}
            {/* console.log(data)
                                        return <tr key={index}> */}
            {/* <td onChange={() => handleIdChange(user.id)}>{user.id}</td> */}
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.position}</td>
              <td>{data.department}</td>
              <td>{data.salary}</td>
              <td>{data.hire_date}</td>
            </tr>
            {/* </tr>
                                        })    
                                  }                */}
          </tbody>
        </table>
      </center>
      {/* ) : (<div>Employee data not available</div>)} */}
      <Footer />
    </div>
  );
};

export default EmployeeDetails;
