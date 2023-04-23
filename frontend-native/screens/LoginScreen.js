import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../Components/LoginScreen/LoginForm'

const StudioUs_LOGO = require('../assets/StudioUsLogo.png')

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image source={{ uri: StudioUs_LOGO, height: 100, width:600 }}/>
          </View>
          <LoginForm navigation={navigation} />
    </View>
)


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})
