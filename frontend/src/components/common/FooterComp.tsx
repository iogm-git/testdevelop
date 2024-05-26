import { View, Text } from 'react-native'
import React from 'react'
import { root, flexCustom } from '@root/utils/Styles'

const FooterComp = () => {
    return (
        <View style={{
            ...flexCustom.flexRowStart,
            gap: root.sizeXxxx,
            paddingVertical: root.sizeXxx,
            borderTopWidth: 1,
            borderTopColor: root.borderColor,
            marginTop: root.sizeXxxx * 3
        }}>
            <Text>Ilham Rahmat Akbar</Text>
        </View>
    )
}

export default FooterComp