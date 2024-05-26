import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { root } from '../utils/Styles';
import HeaderComp from '../components/common/HeaderComp';
import FooterComp from '../components/common/FooterComp';

interface LayoutsProps {
    children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
    return (
        <View style={{
            backgroundColor: root.bgColor,
            flex: 1
        }}>
            <HeaderComp />
            <ScrollView style={{ paddingHorizontal: root.sizeM }}>
                <View style={{
                    flex: 1,
                    paddingVertical: root.sizeL,
                    rowGap: root.sizeXx,
                    minHeight: 550
                }}>
                    {children}
                </View>
                <FooterComp />
            </ScrollView>
        </View>
    )
}

export default Layouts