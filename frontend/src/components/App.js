import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AdminLog from './AdminLog';
import StudentLogin from './StudentLogin';
import AdminDashboard from './AdminDashboard';
import AddScore from './AddScore';
import AdminStReg from './AdminStReg';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path='/studentlogin' component={StudentLogin} />
                    <Route exact path='/admin' component={AdminLog} />
                    <Route exact path='/admin/dashboard' component={AdminDashboard}/>
                    <Route exact path='/admin/:StudentID/addscore' component={AddScore}/>
                    <Route exact path='/admin/student/register' component={AdminStReg} />
                    
                    <Route render={function(){
                        return <p> Not Found</p>
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
