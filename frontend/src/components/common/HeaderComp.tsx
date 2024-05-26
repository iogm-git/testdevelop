import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { root, flexCustom } from '@root/utils/Styles';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { textCustom } from '../../utils/Styles';

const HeaderComp = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            ...flexCustom.flexRowBetween,
            backgroundColor: root.bgColor,
            padding: root.sizeM,
            height: 63,
            borderBottomWidth: 1,
            borderBottomColor: root.borderColor,
        }}>
            <SvgUri uri={'https:/iogm.biz.id' + '/logo.svg'} style={{
                maxHeight: 25,
                maxWidth: 25,
            }} />
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity onPress={() => navigation.navigate('user-guest-HomeScreen')}>
                    <Text style={textCustom.textLight}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('user-member-sekolah-Input')}>
                    <Text style={textCustom.textLight}>Input</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('user-member-sekolah-Data')}>
                    <Text style={textCustom.textLight}>Data</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default HeaderComp;
