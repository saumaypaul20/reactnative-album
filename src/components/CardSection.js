import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles={
    containerStyle:{
         fontSize:25,
         borderWidth:1,
         borderBottomWidth:1,
         backgroundColor:'#fff',
         justifyContent:'flex-start',
         flexDirection:'row',
         borderColor:'#ddd',
         position:'relative'
        
    }
}

export default CardSection;