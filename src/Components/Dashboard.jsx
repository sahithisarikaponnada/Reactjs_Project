import React, { useEffect, useState } from 'react';
import axios from "axios";


  const Dashboard = () => {

    const[post,setpost]=useState(
        {
            api1:null,
            api2:null,
            api3:null,
            api4:null,
            api5:null,
            api6:null,
            api7:null,
            api8:null,
            api8:null,
            api9:null,
        });

        const apis=[
            "https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/posts/1/comments",
            "https://jsonplaceholder.typicode.com/albums",
            "https://jsonplaceholder.typicode.com/photos",
            "https://jsonplaceholder.typicode.com/todos",
            "https://jsonplaceholder.typicode.com/users",
            "https://fakestoreapi.com/products",
            "https://fakestoreapi.com/carts",
            "https://fakestoreapi.com/users",
        ]


    useEffect(() => {

        const fetchdata = async () =>{
            try
            {
            const response=await Promise.all(apis.map(url=>axios.get(url)));
            setpost({
                api1:response[0].post,
                api2:response[1].post,
                api3:response[2].post,
                api4:response[3].post,
                api5:response[4].post,
                api6:response[5].post,
                api7:response[6].post,
                api8:response[7].post,
                api9:response[8].post, 
                });
            }
            catch(error)
            {
                console.error("Error occured while fetching the Data from API",error)

            }
        };
        fetchdata();

    },[]);

  return (
    <div>
        <h1>Dashboard</h1>
        <div className='container'>
            <h2>Data fetched from API</h2>
            <table>
                <thead>
                <tr>

                </tr>
                </thead>
                <tbody>
                    {
                        post.map()
                    }
                </tbody>
            </table>
            post.map()
        </div>
      
    </div>
  )
};


export default Dashboard;

