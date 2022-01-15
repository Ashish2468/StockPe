import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgetPassword, Home, AddProduct, Products } from "../screens";
import BottomNavigators from "../screens/BottomNavigators";

const Stack = createStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Home" 
            component= {Home}
        />          
        <Stack.Screen 
            name="BottomNavigators" 
            component= {BottomNavigators}
        />          
        <Stack.Screen 
            name="AddProduct" 
            component= {AddProduct}
        />          
        <Stack.Screen 
            name="Products" 
            component= {Products}
        />          
    </Stack.Navigator> 
)