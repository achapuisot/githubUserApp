import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getSpecificUser} from '../../services/getGithubUsers';
import {styles} from './styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamsList} from '../../../App';

const PersonScreen = () => {
  const [user, setUser] = useState<any>(undefined);
  const route = useRoute<RouteProp<AppStackParamsList, 'Person'>>();
  const {userParam} = route.params;
  useEffect(() => {
    if (userParam) {
      getSpecificUser(userParam).then(res => {
        setUser(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {user ? (
        <View style={styles.container}>
          <Image source={{uri: user.avatar_url}} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.location}>{user.location}</Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default PersonScreen;
