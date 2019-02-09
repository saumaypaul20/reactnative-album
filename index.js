//Import Libraries
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
//Create Component

const App= ()=>{
    return(
        <View style={{flex:1}}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};




//Render Component

AppRegistry.registerComponent('albums', ()=> App)