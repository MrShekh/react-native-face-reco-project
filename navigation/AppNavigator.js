// navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Dashboard from '../screens/Dashboard';
import Attendance from '../screens/Attendance';
import Leave from '../screens/Leave';
import Employee from '../screens/Employee';
import EmployeeDetails from '../screens/EmployeeDetails';
import Payroll from '../screens/Payroll';
import HRDocuments from '../screens/HRDocuments';
import DocumentDetail from '../screens/DocumentDetail';

// Stack Navigator
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Leave" component={Leave} />
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
