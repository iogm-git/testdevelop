import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colorMap, root, transColorMap, textCustom } from '@root/utils/Styles';

type BadgeProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success';
}>;

const BadgeComp = ({ text, type }: BadgeProps) => {

    return (
        <View style={{
            backgroundColor: transColorMap[type],
            paddingVertical: root.sizeXxs,
            paddingHorizontal: root.sizeM,
            borderRadius: root.radiusS
        }}>
            <Text style={{
                ...textCustom.textLight,
                color: colorMap[type]
            }}>{text}</Text>
        </View>
    )
}

export default BadgeComp