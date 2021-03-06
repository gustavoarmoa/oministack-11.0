import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// NavigationContainer sempe emvolve as rotas

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// Importamos aqui as páginas criadas
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

// Exportando app
export default function Routes() {
    return (

        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>

    );

}