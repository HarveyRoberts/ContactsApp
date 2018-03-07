import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


/**THIS COMPONENT IS NOT CUSTOMIZABLE*/
export default class HRTopBarWithTabsNonReusable extends Component {
  render() {
    const navigation = this.props.navigation;
    const { routes, index } = this.props.navigationState;

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          {/*Invisible icon to make placement with flex easier*/}
          <TouchableOpacity>
            <Icon
              name={'menu'}
              size={31}
              color={'white'}
              //style={styles.doWorkoutTabIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>HOME</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Icon
              name={'tune'}
              size={30}
              color={'white'}
              //style={styles.doWorkoutTabIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          {/*For every route in routes will will display a button and*/}
          {routes.map((route, currentIndex) => {
            const color = index === currentIndex ? '#7FE5EA' : '#4FD6DB';
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(route.routeName);
                }}
                style={[styles.tab, { borderBottomColor: color }]}
                key={route.routeName}
              >
                <Text style={styles.tabText}>{route.routeName}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 21,
    color: '#B9FCFE',
    marginTop: 5
  },
  tabContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 60
  },
  tab: {
    borderBottomWidth: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    marginTop: 14,
    fontSize: 12,
    color: '#baf9fc'
  }
});
