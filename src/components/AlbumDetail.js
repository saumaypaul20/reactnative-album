import React from 'react';
import {Text, View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {ArtistSectionStyle, thumbnailStyle,ImageStyle,TitleStyle,bigImageStyle} = styles;
    return (
        <Card>
           <CardSection>
             <View style={ImageStyle}>
                 <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
             </View>
            <View style={ArtistSectionStyle}>
                <Text style={TitleStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
           </CardSection> 

           <CardSection>
               <Image style={bigImageStyle}source={{uri: image}} />
           </CardSection>

           <CardSection>
               <Button onPress={()=> Linking.openURL(url)}>
                    Buy
               </Button>
           </CardSection>
        </Card>
    );
};

const styles = {
    ArtistSectionStyle:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        fontSize: 18
    },
    thumbnailStyle:{
        height: 50,
        width:50,
        borderRadius: 100,
        marginTop:5,
        marginBottom:5
    },
    ImageStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    TitleStyle:{
        fontSize:23
    },
    bigImageStyle:{
        height:250,
        width:null,
        flex:1
    },
  
}

export default AlbumDetail;