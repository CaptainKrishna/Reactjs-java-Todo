import logo from './logo.svg';
import './App.css';
import todo from './config';

import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

function App() {
  const [res, setRes] = useState()
  const [err, setErr] = useState(null)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const id = 123;
  const city = 'jbp';

  let handleSubmit = async (e) => {

    e.preventDefault();
    let data = {
      id: 45,
      name: name,
      city: "bhopal"
    }
    console.log(data);
    fetch("http://192.168.1.195:8007/registration/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control_Allow-Orign": "*"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })

    // try {
    //   const res = await axios.post("http://192.168.1.195:8007/registration/register", {
    //     method: "POST",
    //     body: {
    //       id: 45,
    //       name: name,
    //       city:"bhopal",
    //     },
    //   });

    //   let resJson = await res.json();
    //   if (res.status === 200) {
    //     setName("");

    //     setMessage("User created successfully");
    //   } else {
    //     setMessage("Some error occured");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }


  };



  useEffect(() => {
    async function fetchData() {
      await axios.get('http://192.168.1.195:8007/registration/register')
        .then(res => setRes(res.data))
        .catch(err => setErr(err.code))
    }
    fetchData();
  }, [])

  return (
    <>
      <h1 className='Heading'>TODO LIST</h1>
      <div className="Card">
        <div>
          <div className='inputdata'>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <button type='submit'>Submit</button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
          <div className='todocontainer'>
            {res?.map((e) => (
              <div style={{ marginTop: "20px", width: "100%" }}>
                <div className='todo' key={e.id} style={{ color: "black" }}>
                  Name is {e.name}{" "} City is {e.city}
                  <div className='btnstyle'>
                    <button>
                      Delete
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
