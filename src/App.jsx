// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { NAVBAR_REM_HEIGHT } from './utils/globals';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
     <div className='w-screen flex flex-col items-center'>
     <Navbar />
      <div className='max-w-[1800px]' style={{
        minHeight:`calc(100vh - ${NAVBAR_REM_HEIGHT}rem`
      }}> <div className='flex flex-col items-center bg- min-h-screen'><Outlet /></div></div>
      </div>
    </>
  );
}

export default App;

