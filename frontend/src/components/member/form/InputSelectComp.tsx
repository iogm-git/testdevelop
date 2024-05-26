import React, { PropsWithChildren, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { root, textCustom, borderDefault, flexCustom } from '@root/utils/Styles';
import BadgeComp from '@root/components/common/BadgeComp';

type InputSelectProps = PropsWithChildren<{
    name: string;
    defaultValue?: string;
    option: string[];
    handleInputOnChange: (value: string) => void;
    onError?: string;
}>;

const InputSelectComp = ({ name = '', defaultValue = '', option, handleInputOnChange, onError }: InputSelectProps) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(defaultValue)

    return (
        <View style={[borderDefault.borderS, { rowGap: root.sizeXs / 2, padding: root.sizeXs }]}>
            <Text style={[textCustom.textMedium, { fontSize: root.sizeS, textTransform: 'capitalize' }]}>{name}</Text>

            {onError && <BadgeComp text={onError} type='danger' />}

            <TouchableOpacity onPress={() => setShow(prev => !prev)} style={{
                ...borderDefault.borderS,
                ...flexCustom.flexRowBetween,
                padding: root.sizeX / 2
            }}>
                <Text style={{
                    ...textCustom.textRegular,
                    color: show ? root.blueColor : root.linkColor,
                    textTransform: 'capitalize'
                }}>{value === '' ? '- Choise Option -' : value}</Text>
                <Text style={{
                    ...textCustom.textLight,
                    color: show ? root.blueColor : root.linkColor
                }}>{show ? 'Hide' : 'See'}</Text>
            </TouchableOpacity>
            {show && option &&
                option.map((item, index) => (
                    <Text onPress={() => {
                        setShow(false)

                        handleInputOnChange(item)

                        setValue(item)
                    }} key={index} style={{
                        ...borderDefault.borderS,
                        ...textCustom.textRegular,
                        textTransform: 'capitalize',
                        backgroundColor: root.thirdBgColor,
                        padding: root.sizeX / 2
                    }}>{item}</Text>
                ))
            }
        </View>
    );
};

export default InputSelectComp;
