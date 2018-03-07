import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import HRBtn from '../../HRButtons/HRBtn';

export default class HRListItem extends React.Component {
    /*
    -> PROPS:
        onPress = Press event of the listItem
        title = Text of the title
        rightBtnText = Text of the right button
        onRightBtnPress = Press event of the right button
        imgSrc = Source of the image
    */

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.listItem}>
                    <Image source={this.props.imgSrc} style={{height:50,width:50}} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {this.props.title || 'HR List Item Title'}
                        </Text>
                    </View>
                    <HRBtn 
                            xs 
                            textColor={this.props.rightBtnTextColor || 'white'} 
                            bgColor={this.props.rightBtnBgColor || '#3F6570'} 
                            width={'21%'} 
                            roundness={this.props.rightBtnRoundness || 50} 
                            height={35}
                            onPress={this.props.onRightBtnPress}
                            //If we don't specify the prop rightBtn
                            //then we pass 'hidden' as a prop to HRBtn
                            //which will not render it
                            visible={this.props.rightBtn || 'hidden'}
                            style={[
                            { 
                                    marginBottom: 'auto', 
                                    marginTop: 'auto' 
                            }, 
                            this.props.rightBtnstyle
                            ]}
                    >
                            {this.props.rightBtnText || 'Button'}
                    </HRBtn>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}


const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 2,
        borderBottomColor: '#F3F3F3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 40,
        paddingBottom: 20,
        paddingTop: 20,
        width: '100%'
    },
    titleContainer: {
        width: '35%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        alignSelf: 'flex-start',
        textAlign: 'center'
    },
    hint: {
        fontSize: 15,
        alignSelf: 'center',
        letterSpacing: 0,
        textAlign: 'center',
        color: '#efefef'
    },
    secondTitle: {
        fontSize: 18,
        alignSelf: 'center',
    }
});

