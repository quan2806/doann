import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
// import { signUp } from "../stores/user";
const {height, width} = Dimensions.get('window');
function SignUp({navigation}) {
  const [name, onChangeName] = useState(null);
  const [pass, onChangePass] = useState(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/loginScreen/background.png')}
          style={styles.bg}
        />
        <KeyboardAvoidingView behavior="position">
          <View style={styles.authBox}>
            <Text style={styles.title}>{'Cals\nTracker'}</Text>
            <View style={styles.inputs}>
              <View style={styles.name}>
                <View style={styles.nameInner}>
                  <TextInput
                    style={styles.input}
                    placeholder="Tên"
                    placeholderTextColor="rgb(0,0,0)"
                    onChangeText={onChangeName}
                    value={name}
                    // inputAccessoryViewID="done button"
                    // clearButtonMode="always"
                  />
                </View>
              </View>
              {/*<View>*/}
              {/*  <TextInput*/}
              {/*    style={styles.input}*/}
              {/*    placeholder="Tài khoản"*/}
              {/*    placeholderTextColor="rgb(0,0,0)"*/}
              {/*    onChangeText={onChangeAcc}*/}
              {/*    value={account}*/}
              {/*    // inputAccessoryViewID="done button"*/}
              {/*    // clearButtonMode="always"*/}
              {/*    //keyboardType="email-address"*/}
              {/*  />*/}
              {/*</View>*/}
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePass}
                  value={pass}
                  placeholder="Mật khẩu"
                  placeholderTextColor="rgb(0,0,0)"
                  secureTextEntry={true}
                  // inputAccessoryViewID="done button"
                  // clearButtonMode="always"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={async () => {
                //   await this.props.signUp(
                //     this.state.email,
                //     this.state.password,
                //     this.state.firstName,
                //     this.state.lastName,
                //   );
                //   if (this.props.isSignedUp) {
                navigation.navigate('Diet', {
                  user: {
                    NameUser: name,
                    Pass: pass,
                  },
                });
                //   }
              }}
              style={styles.button}>
              <View>
                <Text style={styles.whiteText}>ĐĂNG KÝ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text style={styles.newText}>Đã có tài khoản?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

// const mapStateToProps = state => ({
//   isSignedUp: !!state.user.email,
// });
// const mapDispatchToProps = dispatch => ({
//   signUp: (email, password, firstName, lastName) =>
//     dispatch(signUp(email, password, firstName, lastName)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    // resizeMode: 'cover',
    // position: 'absolute',
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  authBox: {
    backgroundColor: 'rgba(12,12,12,.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // width: '80%',
    height: '70%',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    letterSpacing: 5,
    fontWeight: 'bold',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInner: {
    width: '100%',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    height: '20%',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    height: '60%',
    fontSize: 16,
    borderRadius: 5,
  },
  // input: {
  //   height: '60%',
  //   width: '100%',
  //   borderRadius: 5,
  //   backgroundColor: 'rgba(255,255,255,0.3)',
  //   alignItems: 'center',
  //   //paddingHorizontal: ratioW(20),
  //   flexDirection: 'row',
  // },
  button: {
    width: '40%',
    height: '8%',
    backgroundColor: 'rgba(25,78,63,.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  whiteText: {
    color: 'white',
  },
  newText: {
    bottom: 60,
    color: '#FF7260',
    textAlign: 'center',
  },
});
