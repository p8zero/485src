import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';

const NaraBasicsScreen = ({navigation}) => {
    return (
        <SafeAreaView
        style={styles.safeAreaView}>
        <View style={{
            flex: 1,
            width: '90%',
            marginLeft: '2.5%',
            top: '8.5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
          }}>
        <BackButton
          label={'back button'}
          onPress={() => {navigation.navigate('TutorialsScreen');}}
          icon={<Ionicons name="chevron-back-outline" size={24} color="#18163A" />}
        />

      </View>

      <ScrollView style={{top: '15%',}}>
        
      <View style={{backgroundColor: '#18163A',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
          height: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          marginBottom: '5%'
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#FFF5EF',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '5%',
        }}>What's Behind nara?
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '5%',
            marginTop: '5%'
        }}>
            nara is able to create narrations through a purpose-built AI.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '5%',
        }}>
            The AI is based on a number of social & personality psychology frameworks and was designed to see the connections between a person's personality, the situation they are in and their resulting behavior.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '5%',
        }}>
            The AI takes in a persona's personality along with circumstances of their situation and outputs the most likely behaviors (i.e. foreshadowing).
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '10%',
        }}>
            Or it takes in a persona's personality along with their behaviors and outputs the most likely circumstances that led to those behaviors (i.e. exposition).
        </Text>

        
        <View style={{backgroundColor: '#18163A',
          flexdirection: 'row',
          justifyContent: 'center',
          width: '80%',
          height: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          marginBottom: '5%'
            }}>
    <Text style = {{
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            color: '#FFF5EF',
            letterSpacing: 0,
            fontSize: 20,
            marginLeft: '5%'
        }}>What nara Doesn't Show
        </Text>
        </View>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 20,
            marginRight: '17%',
            marginLeft: '3%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            Timing
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '5%',
            marginTop: '3%'
        }}>
            nara does not provide a sense of timing to the narration. There is no defined sequence of events or an indication of when each story element might take place.
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 20,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '0%',
            marginTop: '5%'
        }}>
            Degree
        </Text>
        <Text style = {{
            color: '#18163A',
            fontFamily: 'WorkSans-Light',
            fontWeight: '300',
            letterSpacing: 0.5,
            fontSize: 16,
            marginRight: '10%',
            marginLeft: '3%',
            marginBottom: '40%',
            marginTop: '5%'
        }}>
nara does not define how trivial or severe a story element is. For example, if part of a narration is that the main character will be mean to the other character, nara will not state HOW mean they are.
        </Text>
        
        </ScrollView>
        </SafeAreaView>

    )
}
export default NaraBasicsScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF5EF'
    }, 
    topView: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 40,
        left: 10,
        padding: 20
    },
    title: {
        fontFamily: 'WorkSans-Light', 
        fontSize: 35, 
        marginLeft: 80
    },
    mainView: {
        position: 'absolute', 
        top: 100, 
        left: 1, 
        padding: 20
    }
});