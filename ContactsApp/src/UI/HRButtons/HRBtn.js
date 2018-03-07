import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class HRBtn extends React.Component {
    //If we don't give specify the prop visible or
    //give visible a value different to 'hidden' when
    //using this component then we set our property 
    //visible in our state to true
    state = { visible: (this.props.visible !== 'hidden') };

    isVisible() {
        //We show the button if visible is true in our state
        //(i.e we haven't passed 'hidden' as a value for the prop visible)
        if (this.state.visible) {
            return (
                <TouchableOpacity 
                onPress={this.props.onPress} 
                style={[
                    styles.ButtonContainer, 
                    this.props.style,
                    /* Set medium by default */
                    styles.ButtonMedium,
                    /* Optional props */
                    /* If we type add the xl prop to the component the styles.ButtonXL will be used */
                    this.props.xl && styles.ButtonXL, 
                    this.props.large && styles.ButtonBig, 
                    this.props.small && styles.ButtonSmall, 
                    this.props.medium && styles.ButtonMedium,
                    this.props.xs && styles.ButtonXS, 
                    /* Setting some styles up and passing them through props */ 
                    { 
                        alignSelf: this.props.alignSelf, 
                        borderRadius: this.props.roundness || 300, 
                        backgroundColor: this.props.bgColor || '#0caeff', 
                        height: this.props.height,
                        width: this.props.width
                    }
                ]} 
                >
                    <View>
                        <Text 
                            style={[
                                /* Set medium by default */
                                styles.TextMedium,
                                /* Optional props */
                                this.props.xl && styles.TextXL,
                                this.props.large && styles.TextBig, 
                                this.props.small && styles.TextSmall, 
                                this.props.medium && styles.TextMedium, 
                                this.props.xs && styles.TextXS,
                                /* Setting the value of the color style and passing it through props */ 
                                { color: this.props.textColor || 'white' }
                            ]}
                        >
                            {/* Pass the content of the text through props */}
                            {this.props.children}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
        //If not we return null since the return block in our render method needs 
        //at least something or null
        return null;
    }
    render() {
        return (
            //condition render of the button depending on the prop visible
            this.isVisible()
        );
    }
}

const styles = StyleSheet.create({
    /* Container styles */
    ButtonContainer: {
        margin: '3%',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* XL prop styles */
    ButtonXL: {
        height: 62
    },
    TextXL: {
        fontSize: 25,
        marginLeft: '14%',
        marginRight: '14%'
    },
    /* Large prop styles */
    ButtonBig: {
        height: 50
    },
    TextBig: {
        fontSize: 21,
        marginLeft: '11%',
        marginRight: '11%'
    },
    /* Medium prop styles (set by default) */
    ButtonMedium: {
        height: 44
    },
    TextMedium: {
        fontSize: 18,
        marginLeft: '8%',
        marginRight: '8%'
    },
    /* Small prop styles */
    ButtonSmall: {
        height: 35
    },
    TextSmall: {
        fontSize: 16,
        marginLeft: '5%',
        marginRight: '5%'
    },
    /* XS prop styles */
    ButtonXS: {
        height: 30
    },
    TextXS: {
        fontSize: 14,
        marginLeft: '3%',
        marginRight: '3%'
    }
});

