import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
//import { getMeals } from "../stores/meals";
import DateTimePicker from '@react-native-community/datetimepicker';
import {setDate} from '../stores/date';
import HomeProgressBar from './HomeProgressBar';
import Meal from './test/MealComponent';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
    };
    this.datepicker = this.datepicker.bind(this);
    this.setDate = this.setDate.bind(this);
    //this.getPastMeals = this.getPastMeals.bind(this);
  }
  // componentDidMount() {
  //   this.props.getMeals(this.props.numberdate);
  // }
  // getPastMeals() {
  //   this.props.getMeals(this.props.numberdate);
  // }
  setDate = (event, date) => {
    date = date || new Date();
    this.props.setnewDate(date);
  };

  datepicker = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return this.state.show ? (
      <View style={{justifyContent: 'center', top: '40%'}}>
        <DateTimePicker
          value={this.props.fulldate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={this.setDate}
        />
        <Button
          title="Done"
          onPress={() => {
            //this.getPastMeals();
            this.setState({show: false});
          }}
        />
      </View>
    ) : (
      <View style={styles.container}>
        <HomeProgressBar />
        <View style={styles.arrowsContainer}>
          <View style={styles.arrows}>
            <TouchableOpacity onPress={this.datepicker} style={styles.larrow}>
              <Text style={{fontSize: 24}}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>{this.props.stringdate}</Text>
            <TouchableOpacity onPress={this.datepicker} style={styles.rarrow}>
              <Text style={{fontSize: 24}}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.diaryContainer}>
            <Meal meal="Bữa sáng" />
            <Meal meal="Bữa trưa" />
            <Meal meal="Bữa tối" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // allBreakfast: state.meals.breakfast,
  // allLunch: state.meals.lunch,
  // allDinner: state.meals.dinner,
  // allSnack: state.meals.snack,
  numberdate: state.date.numberdate,
  stringdate: state.date.stringdate,
  fulldate: state.date.fulldate,
});

const mapDispatchToProps = dispatch => ({
  //getMeals: date => dispatch(getMeals(date)),
  setnewDate: date => dispatch(setDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  diaryContainer: {
    backgroundColor: 'white',
    height: '60%',
  },
  arrows: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '6%',
    backgroundColor: 'rgb(230, 230, 230)',
  },
  larrow: {
    width: 50,
    height: 40,
  },
  rarrow: {
    width: 50,
    height: 40,
    alignItems: 'flex-end',
  },
});
