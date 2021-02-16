import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CallAPIVanilla = () => {
  useEffect(() => {
      //Call API with GET
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => console.log(json));

      //Call API with POST
     //https://reqres.in/api/users
     const dataForAPI = {
        name: "morpheus",
        job: "leader"
    }
     fetch('https://reqres.in/api/users', {
         method: 'POST',
         headers: {
             'Content-type': 'application/json'
         },
         body: JSON.stringify(dataForAPI)
     })
     .then((response) => response.json())
     .then((json) => console.log('post respon: ', json));
      
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo World ...</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
