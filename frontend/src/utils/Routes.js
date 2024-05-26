import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// === Guest === 
import HomeScreen from '@root/views/guest/HomeScreen'
// === Member ===
import SekolahInput from '@root/views/member/sekolah/Input'
import SekolahData from '@root/views/member/sekolah/Data'

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* User - Guest */}
                <Stack.Screen name="user-guest-HomeScreen" component={HomeScreen} />
                {/* User - Member */}
                <Stack.Screen name="user-member-sekolah-Input" component={SekolahInput} />
                <Stack.Screen name="user-member-sekolah-Data" component={SekolahData} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes