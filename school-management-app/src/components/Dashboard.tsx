import React, {Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { FaBeer} from 'react-icons/fa';
import {IoSchoolOutline, IoMan, IoSettings, IoWomanOutline} from 'react-icons/io5';



 
interface MyState {
    
}
 
export class Dashboard extends Component<{}, MyState> {
   
    render() { 
        return (
        <div>
<Navbar color='dark' light mb-2>
    <NavbarBrand className='text-white'>
   <IoSchoolOutline/>
  <span> School Management Application</span>
    


    </NavbarBrand>
     </Navbar>
        </div>  );
    }
}
 
