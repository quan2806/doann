import React, {useEffect, useState} from 'react';
import HomeSectionComponent from '../../components/test/HomeSectionComponent';
import {StyleSheet, View, StatusBar, FlatList, Text} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import Header from '../../components/test/HeaderComponent';
import HomeProgressBar from '../../components/HomeProgressBar';
import {Chart} from '../../api/user/Info';
import {useSelector} from 'react-redux';
const ReportItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10, height: 30}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{item.Time.slice(5, 10)}:</Text>
      </View>
      <View style={[styles.total, {width: item.Weight}]} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{item.Weight} kg</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const idUser = useSelector(state => state?.userReducer?.idUser);
  //console.log(idUser);
  const [chart, setChart] = useState();
  useEffect(() => {
    Chart(idUser, 'GET', null).then(res => {
      setChart(res.data);
      //console.log(res.data);
    });
  }, [idUser]);
  if (chart == null) {
    return null;
  }
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title={'Thống kê'} />
      <View style={styles.bodyContainer}>
        {/*/!*<HomeSectionComponent />*!/*/}
        <HomeProgressBar />
        <View>
          <Text style={styles.sectionTitle}>Lịch sử cân nặng</Text>
        </View>
        <FlatList
          data={chart}
          style={styles.list}
          keyExtractor={item => item.Time}
          renderItem={({item}) => {
            return <ReportItem item={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  bodyContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  calorieRemain: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 26,
    paddingHorizontal: 22,
  },
  textContainer: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  total: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 10,
    marginLeft: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
    paddingTop: 8,
    marginLeft: 10,
  },
});

export default HomeScreen;
