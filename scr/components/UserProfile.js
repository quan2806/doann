import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {ratioW} from '../utils';
import {images, colors} from '../assets';
import Header from './test/HeaderComponent';
import {useSelector} from 'react-redux';
import {Login, ProfileUser} from '../api/user/Info';

function UserProfile({navigation}) {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const idUser = useSelector(state => state?.userReducer?.idUser);
  //const user = {ID: 1, Name: 'Quan', Age: 22, Sex: 'Male', Phone: '0936361083'};
  useEffect(() => {
    ProfileUser(idUser, 'GET', null).then(res => {
      setData(res.data);
      //console.log(res.data);
    });
    // Login('Name=Thanh&Pass=123123', 'GET', null).then(res => {
    //   setData2(res.data);
    //   console.log(res.data);
    // });
  }, [idUser]);
  if (data == null) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.avatarContainer}>
        <View>
          <Image style={styles.avatarUser} source={images.img_shiba} />
        </View>
        <Text style={styles.nameOfUser}>{data[0].Name}</Text>
      </View>
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Thông tin cá nhân</Text>
        <View style={styles.editbutton}>
          <Button
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            color="black"
            title="Sửa thông tin"
          />
        </View>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Tên</Text>
            <Text style={styles.detail}>{data[0].Name}</Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Mật khẩu</Text>
            <Text style={styles.detail}>{data[0].Pass}</Text>
          </View>
        </View>
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Chiều cao</Text>*/}
        {/*    <Text style={styles.detail}>*/}
        {/*      cm*/}
        {/*      /!*{props.feet + ' cm '}*!/*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Giới tính</Text>
            <Text style={styles.detail}>{data[0].Sex}</Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Tuổi</Text>
            <Text style={styles.detail}>{data[0].Age}</Text>
          </View>
        </View>
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Cân nặng</Text>*/}
        {/*    <Text style={styles.detail} />*/}
        {/*  </View>*/}
        {/*</View>*/}
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{...styles.buttonInner, backgroundColor: 'rgb(0, 153, 204)'}}>
          <Button
            onPress={() => {
              navigation.navigate('Info');
            }}
            color="black"
            title="Tính toán calo cần thiết"
          />
        </View>
        <View style={styles.buttonInner}>
          <Button
            onPress={() => {
              //await props.logOut();
              navigation.replace('SignIn');
            }}
            color="black"
            title="Đăng xuất"
          />
        </View>
      </View>
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  headerbox: {
    marginLeft: '5%',
    top: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {fontSize: 16},
  editbutton: {
    backgroundColor: '#e59d9d',
    width: '40%',
    bottom: '2%',
  },
  avatarUser: {
    height: ratioW(120),
    width: ratioW(120),
    borderRadius: ratioW(80),
  },
  nameOfUser: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.colorTextThird,
    marginTop: ratioW(10),
  },
  avatarContainer: {
    marginTop: ratioW(20),
    alignItems: 'center',
    // marginBottom: ratioW(5),
  },
  detailsBox: {
    backgroundColor: 'rgb(250, 247, 247)',
    alignItems: 'center',
    top: '10%',
  },
  innerBox: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(240, 240, 240)',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  detailsText: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    top: '11%',
    alignItems: 'center',
  },
  buttonInner: {
    backgroundColor: 'red',
    width: '60%',
    height: '15%',
    marginBottom: '5%',
  },
});
