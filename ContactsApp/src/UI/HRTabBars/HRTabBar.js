import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TabBar extends Component {

  state={ icons: ['home', '', /*'trophy-award',*/ 'account'] };

showText(route, color, currentIndex, index) {
    if (route.routeName !== 'Workout') {
        return (
          <View>
            <Icon 
            name={this.state.icons[currentIndex]} 
            size={35} 
            color={index === currentIndex ? '#19D3BD' : 'gray'} 
            style={styles.doWorkoutTabIcon} 
            />
            <Text style={[styles.tabText, { color }]}>
                {route.routeName}
            </Text>
          </View>
        );
    }
    return (
      <View style={styles.doWorkoutTab}> 
          <Icon name="dumbbell" size={35} color="white" style={styles.doWorkoutTabIcon} />
      </View>
    );
}

  render() {
    const navigation = this.props.navigation;
    const { routes, index } = this.props.navigationState;

    return (
      <View style={styles.tabContainer}>
      {/*For every route in routes will will display a button and*/}
        {routes.map((route, currentIndex) => {
          const color = index === currentIndex ? '#19D3BD' : 'gray';
          return (
            <TouchableOpacity
              onPress={() => {
                if (route.routeName !== routes[index].routeName) {
                  navigation.navigate(route.routeName);
                }
              }}
              style={styles.tab}
              key={route.routeName}
            >
            {this.showText(route, color, currentIndex, index)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60
  },
  tab: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
      fontSize: 11,
      textAlign: 'center'
  },
  doWorkoutTab: {
      borderRadius: 500,
      backgroundColor: '#19D3BD',
      height: 50,
      width: 50,
      justifyContent: 'center'
  },
  doWorkoutTabIcon: {
      alignSelf: 'center',
      textAlign: 'center'
  }
});
