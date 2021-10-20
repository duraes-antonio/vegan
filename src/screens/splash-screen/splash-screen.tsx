import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {colors} from '../../shared/colors';
import LogoSVG from '../../../assets/logo.svg';

const style = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const delayFadeMs = 2000;
const minScale = 4 / 5;

function SplashScreen(): JSX.Element {
    const fadeAnim = useRef(new Animated.Value(minScale)).current;
    const anim = useRef(
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: delayFadeMs,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: minScale,
                    duration: delayFadeMs * 1.1,
                    useNativeDriver: true,
                }),
            ]),
        ),
    ).current;

    useEffect(() => {
        anim.start();
        return () => anim.stop();
    }, [anim]);

    return (
        <View style={style.background}>
            <Animated.View style={{transform: [{scale: fadeAnim}]}}>
                <LogoSVG />
            </Animated.View>
        </View>
    );
}

export default SplashScreen;
