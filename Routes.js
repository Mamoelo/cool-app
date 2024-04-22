import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Button } from "react-native-web";
import New from "./pages/new";

const stack = createNativeStackNavigator();

export default function  Routes(){
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = "Login" component={Login}/>
                <stack.Screen name = "Dashboard" component={Dashboard}/>
                <stack.Screen name = "New" component={New}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}