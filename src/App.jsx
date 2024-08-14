
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from '../public/components/Sidebar/Sidebar';
import Navbar from '../public/components/Navbar/Navbar';

function App() {
 

  return (
   <>
   {/* <p>sidebar</p> */}
   <Sidebar/>
  
   <section className='main-content'>
   <Navbar/>
   <Outlet/>
   </section>
 
    </>
  )
}

export default App;
