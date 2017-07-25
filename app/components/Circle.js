import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View, Image} from 'react-native';

export class Circle extends Component {
    state = {
        blink: new Animated.Value(0)
    }

    render() {
        let bgColor = this.state.blink.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'transparent']
        });
        let circleStyle = Object.assign({}, styles.circle)
        circleStyle.backgroundColor = bgColor;
        console.log(bgColor);
        return (
            <Animated.View style={{...circleStyle, backgroundColor:bgColor}}/>
        )
    }

    componentDidMount() {
        this.cycleAnimation();
    }

    cycleAnimation() {
        Animated.sequence([
            Animated.timing(this.state.blink, {
                toValue: 1,
                duration: 500,
                delay: 1000
            }),
            Animated.timing(this.state.blink, {
                toValue: 0,
                duration: 500
            })
        ]).start(() => {
            this.cycleAnimation();
        });
    }
}


let styles = {
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
    }
}