//Import Libs
import React from 'react';
import {Text, View} from 'react-native';

//Make Comps
const Header = (props)=>{
    const {textStyle, viewStyle} = styles;

    return( 
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
      
        
    );
}

const styles = {
    viewStyle:{
        backgroundColor: '#f8f8f8',
        display:'flex',
        alignItems: 'center',
        padding: 15,
        shadowColor: '#000',
        shadowOffset:{width: 0, height:2},
        shadowOpacity:0.2,
        elevation:12,
        position: 'relative'
    },
    textStyle:{
        fontSize:25,
         
        fontWeight: 'bold',
        color:'#333'
    }
}

//Render Comps avaailable to other parts of app
export default Header;  