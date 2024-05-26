import { View, Text, TextInput } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { root, textCustom, borderDefault } from '@root/utils/Styles';
import BadgeComp from '@root/components/common/BadgeComp';

type InputTextProps = PropsWithChildren<{
    name: string;
    defaultValue?: string;
    type?: 'email-address' | 'numeric' | 'default';
    handleInputOnChange?: (value: string) => void;
    onError?: string;
}>

const InputTextComp = ({ name, defaultValue, type = 'default', handleInputOnChange, onError }: InputTextProps) => {
    return (
        <View style={[borderDefault.borderS, { rowGap: root.sizeXs / 2, padding: root.sizeXs }]}>
            <Text style={[textCustom.textMedium, { fontSize: root.sizeS, textTransform: 'capitalize' }]}>{name}</Text>

            {onError && <BadgeComp text={onError} type='danger' />}

            <TextInput
                autoComplete='off'
                value={defaultValue}
                keyboardType={type ? type : 'default'}
                onChangeText={handleInputOnChange}
                style={{
                    ...textCustom.textRegular,
                    ...borderDefault.borderS,
                    paddingHorizontal: root.sizeS,
                }} />
        </View>
    )
}

export default InputTextComp