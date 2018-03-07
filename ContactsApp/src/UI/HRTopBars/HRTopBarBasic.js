import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class HRTopBarBasic extends Component {
    /**PROPS:
     * onPressLeftIcon: The press event for the left icon
     * leftIconName: The name of the left icon
     * leftIconSize: The size of the left icon
     * leftIconColor: The color of the left icon
     * leftIconStyle: The style of the left icon
     * onPressRightIcon: The press event for the right icon
     * rightIconName: The name of the right icon
     * rightIconSize: The size of the right icon
     * rightIconColor: The color of the right icon
     * rightIconStyle: The style of the right icon
     * title: The title of the header
     * bgColor: Background color of the header
     * borderBottomColor: The border width of the header
     */

  render() {
    return (
      <View 
      style={[
          styles.container,
          {
            backgroundColor: this.props.bgColor,
            borderBottomColor: this.props.borderBottomColor || '#7FE5EA',
          },
          this.props.raised && styles.raised
      ]}
      >
          <TouchableOpacity
          onPress={this.props.onPressLeftIcon}
          style={this.props.leftIconStyle || styles.icon}
          >
            <Icon
              name={this.props.leftIconName}
              size={this.props.leftIconSize}
              color={this.props.leftIconColor}
            />
          </TouchableOpacity>
          <Text 
            style={[
              styles.title, 
              {
              color: this.props.titleColor || '#B9FCFE',
              }
            ]}
          >
            {this.props.title}
          </Text>
          <TouchableOpacity
            onPress={this.props.onPressRightIcon}
            style={this.props.rightIconStyle || styles.icon}
          >
            <Icon
              name={this.props.rightIconName}
              size={this.props.rightIconSize}
              color={this.props.rightIconColor}
            />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    borderBottomWidth: 2
  },
  title: {
    fontSize: 21,
    marginTop: 5
  },
  raised: {
    elevation: 5,
    shadowOffset: { height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.4
  },
  icon: {
    paddingTop: 5
  }
});
