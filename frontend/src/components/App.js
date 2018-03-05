import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import AdminLog from './AdminLog';
import StudentLogin from './StudentLogin';
import AdminDashboard from './AdminDashboard';
import AdminStReg from './AdminStReg';
import AddScore from './AddScore';
import AdminViewProfile from './AdminViewProfile';
import EditStudentDetails from './EditStudentDetails'
import StudentDashboard from './StudentDashboard';




import StudentProfile from './StudentProfile';
import BadgesPage from './BadgesPage';
import AdminChangeReqList from './AdminChangeReqList'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path='/studentlogin' component={StudentLogin} />
                    <Route exact path='/admin' component={AdminLog} />

                    <Route path='/admin/student/changerequests' component={AdminChangeReqList} />

                    <Route exact path='/' component={HomePage} />
                    <Route path='/student/login' component={StudentLogin} />
                    <Route path='/admin' component={AdminLog} />

                    <Route path='/student/dashboard' component={StudentDashboard} />
                    <Route path='/student/profile' component={StudentProfile} />
                    <Route path='/student/badges' component={BadgesPage} />

                    <Route render={function(){
                        return <p> Not Found</p>
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
