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
import StudentProfile from './StudentProfile';
import AdminChangeReqList from './AdminChangeReqList';
import ChangeRequest from './ChangeRequest';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path='/studentlogin' component={StudentLogin} />
                    <Route exact path='/admin' component={AdminLog} />
                    <Route path='/admin/dashboard' component={AdminDashboard}/>
                    <Route path='/admin/addscore' component={AddScore}/>
                    <Route path='/admin/student/register' component={AdminStReg} />
                    <Route path='/admin/student/changerequests' component={AdminChangeReqList} />
                    <Route path='/admin/editdetails' component={EditStudentDetails} />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/student/login' component={StudentLogin} />
                    <Route path='/admin' component={AdminLog} />
                    <Route path='/student/dashboard' component={StudentDashboard} />
                    <Route path='/student/profile' component={StudentProfile} />
                    <Route path='/student/changerequest' component={ChangeRequest} />

                    <Route render={function(){
                        return <p> Not Found</p>
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
