import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import AdminLog from './AdminLog';
import StudentLogin from './StudentLogin';
import AdminDashboard from './AdminDashboard';
import AdminStReg from './AdminStReg';
import AddScore from './AddScore';
import EditStudentDetails from './EditStudentDetails'
import StudentDashboard from './StudentDashboard';


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
                    <Route path='/admin/editdetails' component={EditStudentDetails} />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/student/login' component={StudentLogin} />
                    <Route path='/admin' component={AdminLog} />
                    <Route path='/student/dashboard' component={StudentDashboard} />

                    <Route render={function(){
                        return <p> Not Found</p>
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
