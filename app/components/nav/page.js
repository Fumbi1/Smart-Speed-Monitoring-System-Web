import './nav.css'
import { useSystemState } from "../../hooks/useApi";

function Nav() {

    const { isRunning, error: stateError } = useSystemState();

    if (stateError) {
        return <p>Error: {stateError.message}</p>; // Display error message
    }
      

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
