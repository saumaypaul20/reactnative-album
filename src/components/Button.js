import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) =>{
    const {textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>

        <Text style={textStyle}>
            {children}
        </Text>
        </TouchableOpacity>
    );
};

const styles={
    textStyle:{
        alignSelf:'center',
        fontSize:18,
        fontWeight: '900',
        color:'#e23457',
        paddingTop:15,
        paddingBottom:15
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e23457',
        marginTop:5
    }
}
export default Button;