import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import AdminLog from './AdminLog';
import StudentLogin from './StudentLogin';
import AdminDashboard from './AdminDashboard';
import AdminStReg from './AdminStReg';
import AddScore from './AddScore';
//import AdminViewProfile from './AdminViewProfile';
import StudentClassList from './StudentClassList';
import AdminAddStudentClass from './AdminAddStudentClass';
import AdminEditStudentClass from './AdminEditStudentClass';
import AdminViewClassStudentList from './AdminViewClassStudentList';
import EditStudentDetails from './EditStudentDetails'
import StudentDashboard from './StudentDashboard';
import StudentProfile from './StudentProfile';
import BadgesPage from './BadgesPage';
import AdminChangeReqList from './AdminChangeReqList'
import Footer from './Footer';
import Header from './Header'
import ChangeRequest from './ChangeRequest';
import RestartLinks from './RestartLinks';
import ReactTabs from './ReactTabs';



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path='/studentlogin' component={StudentLogin} />
                    <Route exact path='/admin' component={AdminLog} />
                    <Route exact path='/admin/dashboard' component={AdminDashboard} />
                    <Route exact path='/admin/:StudentID/addscore' component={AddScore} />
                    <Route exact path='/admin/student/register' component={AdminStReg} />
                    <Route path='/admin/:StudentID/editdetails' component={EditStudentDetails} />
                    <Route path='/admin/student/changerequests' component={AdminChangeReqList} />
                    <Route exact path= '/admin/student/class' component={StudentClassList} />
                    <Route exact path='/admin/student/class/add' component={AdminAddStudentClass} />
                    <Route exact path='/admin/student/class/:id/edit' component={AdminEditStudentClass} />
                    <Route exact path='/admin/student/class/:id/students' component={AdminViewClassStudentList}/>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/student/login' component={StudentLogin} />
                    <Route path='/admin' component={AdminLog} />
                    <Route path='/student/dashboard' component={StudentDashboard} />
                    <Route path='/student/profile' component={StudentProfile} />

                    <Route path='/student/badges' component={BadgesPage} />

                    <Route path='/student/changerequest' component={ChangeRequest} />
                    <Route path='/restartlinks' component={RestartLinks} />
                    <Route path='/tabs' component={ReactTabs} />


                    <Route path='/footer' component={Footer} />
                    <Route path='/header' component={Header} />

                    <Route render={function(){
                        return <p> Not Found</p>
                    }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
