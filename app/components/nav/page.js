"use client"
import './nav.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Nav() {
    
    // const { isRunning, error: stateError } = useSystemState();
    
    const BASE_URL = 'http://192.168.43.252/';
    const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(BASE_URL + 'state');
      if(!response.ok){
        console.log(!response.ok)
        setIsRunning("System is not working");
      } else {
        console.log(response.ok)
        setIsRunning("The system is working");
      }
      
    };

    fetchData();
  }, [isRunning]);
      

  return <div>
    <div className='nav'>
        <div className='nav_l'>
          <p>SMART SPEED MONITORING SYSTEM</p>
        </div>
        <div className='nav_r'>
          <div className='status'>
            <p>{isRunning}</p>
          </div>
          <p className='desc'>System Status</p>
        </div>
      </div>
  </div>;
}
export default Nav;
