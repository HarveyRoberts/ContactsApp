import React from 'react';
import { Animated, PanResponder, StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width; 
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.5;

const xOffset = new Animated.Value(0);
export default class HRCarousel extends React.Component {
    /**PROPS:
     * data: the list of card information that we want to render
     * renderCard: method to render the card 
     */
    constructor(props) {
         super(props);
         const position = new Animated.ValueXY();
         const panResponder = PanResponder.create({
            //invoked when the user presses screen
            //if we return true it meens we want this panResponder to be responsable for the gesture
            onStartShouldSetPanResponder: () => true,
            //invoked when the user moves while pressing screen
            //if we return true it meens we want this panResponder to be responsable for the gesture
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: 0 });
            },
            //invoked when the user stops holding down on the screen
            //if we return true it meens we want this panResponder to be responsable for the gesture
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    this.swipeOffTheScreen('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    this.swipeOffTheScreen('left');
                } else {
                    this.pressReleased();
                }
            }
         });
         //assign our constants to our component object (class)
         this.panResponder = panResponder;
         this.position = position;
    }

    pressReleased() {
        Animated.spring(this.position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    swipeOffTheScreen(direction) {
        const x = direction === 'right' ? SCREEN_WIDTH * 2 : -SCREEN_WIDTH * 2;
        Animated.spring(this.position, {
            toValue: { x, y: 0 }
        }).start();
    }

    //our animated style property on the Animated.View component
    //we use a separate function to clean things up
    animatedStyle() {
        //We are going to scale our content depending on our horizontal position
        const scaleX = this.position.x.interpolate({
            //we use screen width to make the rotation the same on all screen sizes
            inputRange: [-SCREEN_WIDTH, -SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
            outputRange: [0.6, 0.9, 1, 0.9, 0.6]
        });
        const scaleY = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH, -SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
            outputRange: [0.6, 0.9, 1, 0.9, 0.6]
        });
        return {
            //animate the postion
            ...this.position.getLayout(),
            //animate the rotation
            transform: [{ scaleX }, { scaleY }]
        };
    }


    //function that returns a list of items to show
    renderCards() {
        //cycle through the data(list of card information) passed as a prop
        //and for every card we execute the method renderCard 
        //passed as a prop
        return this.props.data.map(card => {
            if (card.id === 1) {
                return (
                    <Animated.View key={card.id} style={this.animatedStyle()} {...this.panResponder.panHandlers}>
                    {this.props.renderCard(card)}
                    </Animated.View>
                );
            } 
                return (
                    <View key={card.id}>
                        {this.props.renderCard(card)}
                    </View>
                );
        });
    }

    render() {
        return (
            <ScrollView >

                {this.renderCards()}
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
      flexDirection: 'row',
      //paddingLeft: SCREEN_WIDTH * 0.15,
    },
    scrollPage: {
      width: SCREEN_WIDTH //* 0.7,
    }
  });
  