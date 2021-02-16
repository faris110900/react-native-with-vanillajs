import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Axios from 'axios';

const CallAPIVanilla = () => {
  const [dataUsers, setDataUsers] = useState({
    avatar: '',
    fist_name: '',
    last_name: '',
    email: '',
  });

  const [dataJobs, setDataJobs] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    //Call API with GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //Call API with POST
    //https://reqres.in/api/users
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log('post respon: ', json));
  }, []);

  //With VanilaJS
//   const getData = () => {
//     fetch('https://reqres.in/api/users/2')
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setDataUsers(json.data);
//       });
//   };

  //With Axios
  const getData = () => {
    Axios.get('https://reqres.in/api/users/2')
    .then(result => {
        setDataUsers(result.data.data);
    })
    .catch(err => console.log('err: ', err));
  };

  //With VanillaJS
//   const postData = () => {
//     const dataForAPI = {
//       name: 'morpheus',
//       job: 'leader',
//     };

//     fetch('https://reqres.in/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(dataForAPI),
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log('post respon: ', json);
//         setDataJobs(json);
//       })

//       Axios.post('https://reqres.in/api/users', dataForAPI)
//       .then(result => console.log('res: ', result))
//       .catch(err => console.log('err: ', err))
//   };

  //With Axios
  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

      Axios.post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
          setDataJobs(result.data)
      })
      .catch(err => console.log('err: ', err))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo World ...</Text>
      <Button title="GET DATA" onPress={getData} />

      <Text>Respon GET DATA</Text>

      {dataUsers.avatar.length > 0 && (
        <Image source={{uri: dataUsers.avatar}} style={styles.avatar} />
      )}

      <Text>{`${dataUsers.fist_name} ${dataUsers.last_name}`}</Text>
      <Text>{dataUsers.email}</Text>
      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData} />
      <View style={styles.get}>
        <Text>Respon POST DATA</Text>
        <Text>{dataJobs.name}</Text>
        <Text>{dataJobs.job}</Text>
      </View>
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
    paddingBottom: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
