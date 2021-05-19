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
      {/*<SafeAreaView />*/}
      {/*<View style={styles.avatarContainer}>*/}
      {/*  <View>*/}
      {/*    <Image style={styles.avatarUser} source={images.img_shiba} />*/}
      {/*  </View>*/}
      {/*  <Text style={styles.nameOfUser}>ShibaInu</Text>*/}
      {/*</View>*/}
      <View style={styles.headerbox}>
        <Text style={styles.headerText}>Personal Details</Text>
        {/*<View style={styles.editbutton}>*/}
        {/*  <Button onPress={() => {}} color="black" title="Edit Info" />*/}
        {/*</View>*/}
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Name</Text>
            <Text style={styles.detail}></Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Height</Text>
            <Text style={styles.detail}>
              {props.feet + ' ft, ' + props.inches + ' in'}
            </Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Gender</Text>
            <Text style={styles.detail}>{props.gender}</Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Age</Text>
            <Text style={styles.detail}>{props.age}</Text>
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.detailsText}>
            <Text style={styles.detailName}>Weight</Text>
            <Text style={styles.detail}>{props.weight}</Text>
          </View>
        </View>
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Recommended Calories</Text>*/}
        {/*    <Text style={styles.detail}>{props.calories}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Recommended Protein</Text>*/}
        {/*    <Text style={styles.detail}>{props.protein}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Recommended Fats</Text>*/}
        {/*    <Text style={styles.detail}>{props.fats}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View style={styles.innerBox}>*/}
        {/*  <View style={styles.detailsText}>*/}
        {/*    <Text style={styles.detailName}>Recommended Carbohydrates</Text>*/}
        {/*    <Text style={styles.detail}>{props.carbs}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
      </View>
    </View>
  );
};

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
    height: ratioW(150),
    width: ratioW(150),
    borderRadius: ratioW(80),
  },
  nameOfUser: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.colorTextThird,
    marginTop: ratioW(15),
  },
  avatarContainer: {
    marginTop: ratioW(35),
    alignItems: 'center',
    marginBottom: ratioW(20),
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
    width: '50%',
    height: '15%',
    marginBottom: '5%',
  },
});

export default EditProfile;
