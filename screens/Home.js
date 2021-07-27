import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{
  const data = [
    {id:1,name:"Adhish",years:20},
    {id:2,name:"Bhupender",years:30},
    {id:3,name:"Gaurav",years:10},
  ]

  const renderList = ((item)=>{
    return(
        <Card style={styles.mycard}>
          <View>
          <Text style={{fontSize:22}}>Hello from Home</Text>
          <Image
          style={{width: 50,height: 50}}
          source={{uri:"https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"}}
          />
          <Text style={{fontSize:22}}>{item.name}</Text>
          <Text style={{fontSize:22}}>{item.years}</Text>
          </View>
        </Card>
    )
  })

  return (
    <View>
        <FlatList
        data={data}
        renderItem={({item})=>{
          return renderList(item)
        }}

        keyExtractor={item=>`${item.id}`}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mycard:{
    margin:5,
    padding:5
  }
})

export default Home
