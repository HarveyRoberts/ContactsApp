import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const xOffset = new Animated.Value(0);

const Card = props => (
    <View style={styles.scrollPage}>
    {/*We pass the index as a prop to track the current card*/}
      <Animated.View style={scrollAnimation(props.index)}>
        {props.children}
      </Animated.View>
    </View>
  );

export default class HRCarousel2 extends Component {
  //function that returns a list of items to show
  renderCards() {
    //cycle through the data(list of card information) passed as a prop
    //and for every card we execute the method renderCard 
    //passed as a prop
    return this.props.data.map(card => (
          <Card index={card.id} key={card.id}>
          {/*passing a self prop so that we can access the this variable
          of the parent component if needed*/}
          {this.props.renderCard(card, this.props.self)}
          </Card>
      ));
  }

  render() {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        //scroll animation (used useNativeDriver to reducer lagging)
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        //makes the scroll horizontal
        horizontal
        //enables the snaping of the cards when swiping
        //it moves scrollView to nearest multiple of it’s own width
        pagingEnabled
        style={styles.scrollView}
      >
        {this.renderCards()}
      </Animated.ScrollView>
    );
  }
}

const scrollAnimation = index => ({
    transform: [
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH /** 0.7*/,
            index * SCREEN_WIDTH /** 0.7*/,
            (index + 1) * SCREEN_WIDTH /** 0.7*/
          ],
          outputRange: [0.75, 1, 0.75]
        })
      }
    ]
  });

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    //paddingLeft: SCREEN_WIDTH * 0.15,
  },
  scrollPage: {
    width: SCREEN_WIDTH //* 0.7,
  }
});
