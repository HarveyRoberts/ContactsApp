import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class HRTopBarWithTabs extends Component {
    /**PROPS:
     * onPressLeftIcon: The press event for the left icon
     * leftIconName: The name of the left icon
     * leftIconSize: The size of the left icon
     * leftIconColor: The color of the left icon
     * onPressRightIcon: The press event for the right icon
     * rightIconName: The name of the right icon
     * rightIconSize: The size of the right icon
     * rightIconColor: The color of the right icon
     * title: the title of the header
     * //bgColor: Background color of the header
     */
  render() {
    const navigation = this.props.navigation;
    const { routes, index } = this.props.navigationState;

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
            <TouchableOpacity
            onPress={this.props.onPressLeftIcon}
            >
                <Icon
                name={this.props.leftIconName}
                size={this.props.leftIconSize}
                color={this.props.leftIconColor}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{this.props.title}</Text>
            <TouchableOpacity
            onPress={this.props.onPressRightIcon}
            >
                <Icon
                name={this.props.rightIconName}
                size={this.props.rightIconSize}
                color={this.props.rightIconColor}
                />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          {/*For every route in routes will will display a button*/}
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
