import React from 'react';
import {View, ScrollView} from 'react-native';
import CallAPIVanilla from './pages/CallAPIVanilla';

const App = () => {
  return (
    <View>
      <ScrollView>
        <CallAPIVanilla />
      </ScrollView>
    </View>
  );
};

export default App;
