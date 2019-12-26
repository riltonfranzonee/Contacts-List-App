import React from 'react'
import{Button, TextInput, View, StyleSheet, KeyboardAvoidingView} from 'react-native'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
    input:{
        width: 300,
        height: 50,
        padding: 5,
        borderWidth: .5,
        borderColor: 'black',
        marginBottom: 15,
        borderRadius: 5
    },
    container:{
        marginTop: 100,
        alignItems: 'center'
    }
})

export default class AddContactForm extends React.Component{
    static propTypes = {
        addContact: PropTypes.func,
    }

state = {
    name: '',
    phone: '',
    isFormValid: false

}

    handleNameChange = name => {
        this.setState({name}, this.validateForm)
    }
    handlePhoneChange = phone => {
        if(+phone >= 0 && phone.length <= 10){
        this.setState({phone}, this.validateForm)
    }
    }
    
    validateForm = () =>{
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3){
            return this.setState({isFormValid: true})
        }else{
            return this.setState({isFormValid: false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    render(){
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TextInput style={styles.input} value = {this.state.name} onChangeText={this.handleNameChange} placeholder="Name"/>
            <TextInput style={styles.input} value = {this.state.phone} onChangeText={this.handlePhoneChange} keyboardType="numeric"  placeholder="Phone"/>
            <Button title="Add a new contact" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
        </KeyboardAvoidingView>
    )
}
}