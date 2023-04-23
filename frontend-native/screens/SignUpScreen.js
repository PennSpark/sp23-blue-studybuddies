import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpForm from '../Components/SignUp/SignUpForm'

const StudioUs_LOGO = require('../assets/StudioUsLogo.png')

const SignUpScreen = ({navigation}) => (
    <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image source={{ uri: StudioUs_LOGO, height: 100, width:600 }}/>
          </View>
        <SignUpForm navigation={ navigation } />
    </View>
)


export default SignUpScreen

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
