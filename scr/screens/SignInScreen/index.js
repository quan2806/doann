import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {colors, icons, images} from '../../assets';
import {ratioW} from '../../utils';
import {BlurView} from '@react-native-community/blur';
import {Login} from '../../api/user/Info';
import {useDispatch, useSelector} from 'react-redux';
const SignInScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const idUser = useSelector(state => state?.userReducer?.idUser);
  const dispatch = useDispatch();
  function id(idUser) {
    dispatch({
      type: 'ACCOUNT',
      idUser: idUser,
    });
  }
  function check(name, pass) {
    if (name == undefined && pass == undefined) {
      alert('Nhập thông tin tài khoản và mật khẩu!');
    } else {
      Login(`Name=${name}&Pass=${pass}`, 'GET', null).then(res => {
        if (name == res.data[0].Name && pass == res.data[0].Pass) {
          id(res.data[0].ID);
          navigation.replace('TabNavigation');
        } else {
          alert('Sai');
        }
      });
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.signInContainer}>
        <Image
          source={images.img_background_sign_in_screen}
          style={styles.backgroundImage}
          blurRadius={Platform.OS === 'android' ? 10 : 0}
          // blurType="light"
        />
        {Platform.OS === 'ios' ? (
          <BlurView
            style={styles.blurViewStyle}
            blurType="dark"
            blurAmount={0}
          />
        ) : null}
        <KeyboardAvoidingView behavior="position">
          <View style={styles.bodyContainer}>
            <View style={styles.logoContainer}>
              {/*<Image source={images.logo_jc_house} style={styles.logo} />*/}
            </View>
            <View style={styles.contentContainer}>
              <View style={[styles.input]}>
                <Image source={icons.ic_user} style={styles.imgEmail} />
                <TextInput
                  autoCapitalize="none"
                  style={styles.textInputStyle}
                  onChangeText={setName}
                  //value={name}
                />
              </View>
              <View style={[styles.input, {marginTop: ratioW(10)}]}>
                <Image
                  source={images.img_password}
                  style={styles.imgPassword}
                />
                <TextInput
                  // ref={passwordRef}
                  style={styles.textInputStyle}
                  secureTextEntry={true}
                  onChangeText={setPass}
                  //value={pass}
                  // onSubmitEditing={handleLogin}
                />
              </View>
              <TouchableOpacity
                onPress={() => check(name, pass)}
                // onPress={() => {
                //   navigation.replace('TabNavigation');
                // }}
                style={styles.btnStyle}>
                <Text style={styles.textButton}>Đăng nhập</Text>
              </TouchableOpacity>
              <Text style={styles.orText}>hoặc</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
                style={styles.btnStyle}>
                <Text style={styles.textButton}>Tạo tài khoản</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  input: {
    height: ratioW(52),
    width: ratioW(300),
    borderRadius: ratioW(5),
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    paddingHorizontal: ratioW(20),
    flexDirection: 'row',
  },
  imgEmail: {
    height: ratioW(16),
    width: ratioW(16),
  },
  imgPassword: {
    height: ratioW(16),
    width: ratioW(14),
  },
  textInputStyle: {
    width: '100%',
    marginLeft: ratioW(10),
    color: colors.colorTextFirst,
  },
  btnStyle: {
    height: ratioW(52),
    width: ratioW(300),
    borderWidth: ratioW(1),
    borderColor: colors.backgroundTwelve,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ratioW(5),
    marginVertical: ratioW(27),
  },
  textButton: {
    fontSize: 16,
    color: colors.colorTextFirst,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 390,
    justifyContent: 'center',
  },
  contentContainer: {flex: 420, alignItems: 'center'},
  orText: {
    color: colors.colorTextFirst,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
