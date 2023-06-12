import React from 'react';
import LogInHeader from './LogInHeader';
import {Outlet,useLocation} from 'react-router-dom'
import LogInFooter from './LogInFooter';
function LogInLayout(props) {
    
    let loc=useLocation();
    return (
        <div>
            <div>
            <LogInHeader />
            </div>
            <div>
              <Outlet/>
            </div>
            <LogInFooter/>
        </div>
    );
}

export default LogInLayout;