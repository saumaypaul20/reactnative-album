import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
  
    return(
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        padding:5,      
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset:{width: 0, height:5},
        shadowOpacity:0.2,
        evelation: 15,
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop:10
    }
}

export default Card;