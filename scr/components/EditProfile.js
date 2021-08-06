import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import {ratioW} from '../utils';
import {images, colors} from '../assets';

const EditProfile = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{fontSize: 30}}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          // onChangeText={value => {
          //   this.setState({firstName: value});
          // }}
          fontSize={24}
          placeholder="Tên"
        />
      </View>
      <View style={styles.inputs}>
        <TextInput
          // onChangeText={value => {
          //   this.setState({lastName: value});
          // }}
          fontSize={24}
          placeholder="Mật khẩu"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Button
            onPress={async () => {
              //   await this.props.changeUser({
              //     email: this.state.email,
              //     firstName: this.state.firstName,
              //     lastName: this.state.lastName,
              //   });
              props.navigation.navigate('UserProfile');
            }}
            title="Done"
          />
        </View>
        <View>
          <Button
            onPress={() => {
              props.navigation.navigate('UserProfile');
            }}
            title="Cancel"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    height: 200,
  },
  inputs: {
    height: 70,
  },
});

export default EditProfile;
