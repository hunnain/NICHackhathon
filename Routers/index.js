import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { Router, Scene, Stack } from 'react-native-router-flux';
import SplashScreen from '../Component/SplashScreen/index';
import Login from '../Component/Login/login';

// Routers
class Routers extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Stack key="root">
                        <Scene key="home" hideNavBar={true} initial component={SplashScreen} />
                        <Scene key="login" hideNavBar={true} component={Login} />
                    </Stack>
                </Router>
            </Container>
        )
    }
}

export default Routers;
