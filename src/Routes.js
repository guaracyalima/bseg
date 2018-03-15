import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login';
import App from './App';
import MyInsurances from './components/insurances/MyInsurances';
import ShowInsurances from './components/insurances/ShowInsurance';
import Insurer from './components/insurer/Insurer';
import Attendance from './components/attendance/attendance';
import Notifications from './components/notifications/notifications';
import ComponentDoSlider from './components/slider/ComponentDoSlider';
import Intro from './components/Intro';
import InsuranceCard from './InsuranceCard';
import Broker from './components/broker/Broker';
// import TestComponent from "./components/TestComponent";

export default props => (
  <Router>
    {/*<Scene key="intro" component={Intro} hideNavBar />*/}
    {/*<Scene key="login" component={Login} hideNavBar />*/}
    <Scene key="main" component={App} hideNavBar initil />
    <Scene key="myinsurances" component={MyInsurances} title="Meus seguros" hideNavBar={false} />
    <Scene key="attendance" component={Attendance} title="Atendimento" hideNavBar={false} />
    {/* <Scene key='notifications' component={ Notifications } title="Atendimento" hideNavBar={ false }/> */}
    {/* <Scene key='showinsurance' component={ ComponentDoSlider } hideNavBar={ true } /> *!/ */}
    {/* <Scene key='showinsurance' component={ ShowInsurances } hideNavBar={ true } /> */}
    {/*<Scene key="broker" component={Broker} hideNavBar={false}/>*/}
    <Scene key="broker" component={InsuranceCard} hideNavBar={false} />
  </Router>
);
