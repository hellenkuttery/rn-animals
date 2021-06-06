
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import AnimalGroup from "./components/AnimalGroup"

const animal_type=[
  {
    id:0,
    title:"Mammals",
    description:"Mammals are vertebrates within the class Mammalia which have a neocortex (i.e., higher brain functions), hair, three middle ear bones, and mammary glands. Explore different types of mammals in the animal kingdom and their characteristics.",
    backColor:"#6FC8FE",
   },
  {
    id:1,
    title:"Birds",
    description:"Birds are a collection of warm-blooded vertebrates within the class Aves, identified by feathers, toothless, beaked jaws, the laying of hard-shelled eggs, a four-chambered heart, and a well-built yet lightweight skeleton system. Explore different types of birds in the animal kingdom and their properties here.",
    backColor:"#BF360C",
  },
  {
    id:2,
    title:"Reptiles",
    description:"Reptiles are four-limbed (aka tetrapod) animals within the class Reptilia. Discover different types of reptiles in the animal kingdom and their characteristics here.",
    backColor:"#39A300",
  },
  {
    id:3,
    title:"Amphibians",
    description:"Amphibians are cold-blooded, four-limbed vertebrates within the class Amphibia. Explore different types of amphibians, their habitats/ecosystems, diets, evolution, and characteristics here.",
    backColor:"#6972D2",
  }
]


const App = () => {
  return(
      <View>
         <Image style={{height:300,width:"100%"}} source={require("./components/animals.jpg")}/>
        {
          animal_type.map((animal)=>{
            return(            
              <AnimalGroup
              title={animal.title}
              description={animal.description}
              backColor={animal.backColor}/>
            )
          })
  
  
        }
      </View>
  )};

export default App;
