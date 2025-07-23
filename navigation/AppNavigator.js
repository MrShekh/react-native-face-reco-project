// navigation/AppNavigator.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Screens
import AddLeave from '../screens/AddLeave';
import Attendance from '../screens/Attendance';
import Dashboard from '../screens/Dashboard';
import DocumentDetail from '../screens/DocumentDetail';
import Employee from '../screens/Employee';
import EmployeeDetails from '../screens/EmployeeDetails';
import ForgotPassword from '../screens/ForgotPassword';
import HRDocuments from '../screens/HRDocuments';
import Leave from '../screens/Leave';
import Login from '../screens/Login';
import Payroll from '../screens/Payroll';
import Profile from '../screens/Profile';
import Register from '../screens/Register';

// Stack Navigator
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={require('../screens/Splash').default} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Leave" component={Leave} />
      <Stack.Screen name="AddLeave" component={AddLeave} options={{ title: 'New Leave', headerShown: false }} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={({ route }) => ({
          title: route?.params?.employee?.name || 'Employee Details',
        })}
      />
      <Stack.Screen name="Payroll" component={Payroll} />
      <Stack.Screen
        name="HRDocuments"
        component={HRDocuments}
        options={{ title: 'HR Documents' }}
      />
      <Stack.Screen
        name="DocumentDetail"
        component={DocumentDetail}
        options={{ title: 'Document Detail' }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
