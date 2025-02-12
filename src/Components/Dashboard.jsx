import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [post, setpost] = useState({
    api1: null,
    api2: null,
    api3: null,
    api4: null,
    api5: null,
    api6: null,
    api7: null,
    api8: null,
    api9: null,
  });

  const apis = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/posts/1/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/photos",
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/users",
    "https://fakestoreapi.com/products",
    "https://fakestoreapi.com/carts",
    "https://fakestoreapi.com/users",
  ];

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await Promise.allSettled(
          apis.map((url) => axios.get(url))
        );
        console.log(response.data);
        setpost({
          api1:
            response[0].status === "fulfilled" ? response[0].value.data : null,
          api2:
            response[1].status === "fulfilled" ? response[1].value.data : null,
          api3:
            response[2].status === "fulfilled" ? response[2].value.data : null,
          api4:
            response[3].status === "fulfilled" ? response[3].value.data : null, //10 api calls how to call 5th response
          api5:
            response[4].status === "fulfilled" ? response[4].value.data : null,
          api6:
            response[5].status === "fulfilled" ? response[5].value.data : null,
          api7:
            response[6].status === "fulfilled" ? response[6].value.data : null,
          api8:
            response[7].status === "fulfilled" ? response[7].value.data : null,
          api9:
            response[8].status === "fulfilled" ? response[8].value.data : null,
        });
        console.log(response.data);
        // const result = response.map(res=>res.data)
        // setpost(result)
      } catch (error) {
        console.error("Error occured while fetching the Data from API", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="container">
        <h2>Data fetched from API</h2>
        {post.api1 ||
        post.api2 ||
        post.api3 ||
        post.api4 ||
        post.api5 ||
        post.api6 ||
        post.api7 ||
        post.api8 ||
        post.api9 ? (
          // Array.isArray(post) ? (
          <table className="table">
            <thead>
              <tr>
                <th>API 1 Data</th>
                <th>API 2 Data</th>
                <th>API 3 Data</th>
                <th>API 4 Data</th>
                <th>API 5 Data</th>
                <th>API 6 Data</th>
                <th>API 7 Data</th>
                <th>API 8 Data</th>
                <th>API 9 Data</th>
              </tr>
            </thead>
            <tbody>
              {/* {
                        post.map((user,index) => {
                            return <tr key={index}> */}
              <tr>
                <td>{JSON.stringify(post.api1)}</td>
                <td>{JSON.stringify(post.api2)}</td>
                <td>{JSON.stringify(post.api3)}</td>
                <td>{JSON.stringify(post.api4)}</td>
                <td>{JSON.stringify(post.api5)}</td>
                <td>{JSON.stringify(post.api6)}</td>
                <td>{JSON.stringify(post.api7)}</td>
                <td>{JSON.stringify(post.api8)}</td>
                <td>{JSON.stringify(post.api9)}</td>
              </tr>
              {/* // </tr>
                       // })
                     } */}
            </tbody>
          </table>
        ) : (
          <div>Data not available</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

// const Dashboard = () => {
//     const [data, setData] = useState([]); // Array to hold all API responses
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const apis = [
//  "https://jsonplaceholder.typicode.com/posts",
//             "https://jsonplaceholder.typicode.com/posts/1/comments",
//             "https://jsonplaceholder.typicode.com/albums",
//             "https://jsonplaceholder.typicode.com/photos",
//             "https://jsonplaceholder.typicode.com/todos",
//             "https://jsonplaceholder.typicode.com/users",
//             "https://fakestoreapi.com/products",
//             "https://fakestoreapi.com/carts",
//             "https://fakestoreapi.com/users",
//     ];

//     useEffect(() => {
//       const fetchData = async () => {
//         setLoading(true); // Set loading to true before fetching

//         try {
//           const responses = await Promise.all(apis.map(url => axios.get(url)));

//           // Process responses and extract data
//           const allData = responses.map((response, index) =>
//              {
//               if (response.status === 200 && response.data)
//               {
//                   // Add an 'apiSource' property to identify the source of the data
//                   if (Array.isArray(response.data))
//                   {
//                       return response.data.map(item => ({ ...item, apiSource: `api${index + 1}` }));
//                   }
//                   else if (typeof response.data === 'object' && response.data !== null)
//                   {
//                       return { ...response.data, apiSource: `api${index + 1}` };
//                   }
//                   else
//                   {
//                       return { data: response.data, apiSource: `api${index + 1}` }; // Handle other data types
//                   }
//               }
//               else
//               {
//                   console.error(`Error fetching data from ${apis[index]}:`, response ? response.status : "Unknown Error");
//                   return { error: `Error from ${apis[index]}`, apiSource: `api${index + 1}` }; // Store error information
//               }
//           });

//           setData(allData.flat()); // Flatten the array if some APIs return arrays of data
//           setError(null); // Clear any previous errors

//         } catch (err) {
//           console.error("Overall error in fetchData:", err);
//           setError(err.message);
//         } finally {
//           setLoading(false); // Set loading to false after fetch attempt (success or fail)
//         }
//       };

//       fetchData();
//     }, []);

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     if (data.length === 0) {
//       return <div>No data available.</div>;
//     }

//     // Get all unique column names (handles different API structures)
//     const columns = [...new Set(data.flatMap(item => Object.keys(item)))];

//     return (
//       <table>
//         <thead>
//           <tr>
//             {columns.map(column => <th key={column}>{column}</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               {columns.map(column => (
//                 <td key={column}>
//                   {item[column] !== undefined ? item[column].toString() : '-'}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   export default Dashboard;
