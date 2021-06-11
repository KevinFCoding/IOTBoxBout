import React from 'react';
import {Text,Pressable} from 'react-native'
import {styles} from './customisableButton.style'

export default function CustomisableButton({title,styleOverride, textStyleOverride, onPress}){
    return (
        <Pressable onPress={onPress} style={[styles.actionButton, styleOverride]}>
            <Text style={[styles.actionButtonText, textStyleOverride]}>{title}</Text>
        </Pressable>
    )
}