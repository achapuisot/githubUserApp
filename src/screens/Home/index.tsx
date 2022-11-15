import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getGithubUsers} from '../../services/getGithubUsers';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {AppStackParamsList} from '../../../App';

const HomeScreen = () => {
  const [usersList, setUsersList] = useState([]);

  const navigation =
    useNavigation<NavigationProp<AppStackParamsList, 'Home'>>();

  useEffect(() => {
    getGithubUsers().then((users: any) => {
      setUsersList(users.slice(0, 5));
    });
  }, []);

  const onPressUser = (user: string) => {
    navigation.navigate('Person', {userParam: user});
  };

  return (
    <View>
      {usersList.map(u => (
        <TouchableOpacity
          onPress={() => onPressUser(u)}
          style={styles.optionContainer}>
          <Text style={styles.text}>{u}</Text>
          <Text style={styles.text}>{'>'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;
