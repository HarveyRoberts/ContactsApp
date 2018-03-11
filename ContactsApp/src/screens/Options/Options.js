import React from 'react';
import { View, Text } from 'react-native';

class OptionsScreen extends React.Component {
  constructor (props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }
  onNavigatorEvent = (event) => {
      if (event.type === "NavBarButtonPress" && event.id === "toggleSideDrawer") {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
  }
  render() {
    return (
        <View >

          <Text>Options!</Text>
          
        </View> 
    );
  }
}


export default OptionsScreen;