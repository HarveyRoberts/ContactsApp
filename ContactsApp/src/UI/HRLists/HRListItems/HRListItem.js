import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import HRBtn from '../../HRButtons/HRBtn';

export default class HRListItem extends React.Component {
    /*
    -> PROPS:
        onPress = Press event of the listItem
        title = Text of the title
        hint = Text of the centered hint
        rightBtnText = Text of the right button
        onRightBtnPress = Press event of the right button
    */

    state={ hintOrSecondTitle: this.props.secondTitle ? 'secondTitle' : 'hint' };

    isHintOrSecondTitle() {
        if (this.state.hintOrSecondTitle === 'hint') {
            return (
                <Text 
                    style={[
                    styles.hint, 
                    this.props.hintStyle,
                    {
                        width: this.props.hintWidth || '35%'
                    }
                    ]}
                >
                    {this.props.hint}
                </Text>
            );
        } else if (this.state.hintOrSecondTitle === 'secondTitle') {
            return (
                <Text
                    style={[
                    styles.secondTitle, 
                    this.props.secondTitleStyle,
                    {
                        width: this.props.secondTitleWidth || '35%'
                    }
                    ]}
                >
                    {this.props.secondTitle}
                </Text>
            );
        }
        return null;
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.listItem}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {this.props.title || 'HR List Item Title'}
                        </Text>
                    </View>
                    {this.isHintOrSecondTitle()}
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
        paddingLeft: 15,
        paddingBottom: 20,
        paddingTop: 20,
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

