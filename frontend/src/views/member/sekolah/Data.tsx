import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Layouts from '../../Layouts'
import { useSelector } from 'react-redux'
import { borderDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import BadgeComp from '@root/components/common/BadgeComp'

const Data = () => {
    const { data: sekolah, loading } = useSelector(state => state.dataSekolah)

    useEffect(() => {

    }, [loading])

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Data</Text>

            {loading && <ActivityIndicator size={'large'} color={root.blueColor} />}
            {sekolah && sekolah.result && sekolah.result.length > 0 ?
                sekolah.result.map((value, index) => (
                    <View key={index} style={[borderDefault.borderS, { padding: root.sizeS, rowGap: root.sizeS }]}>
                        <View style={flexCustom.flexRowBetween}>
                            <View style={[borderDefault.borderS, {
                                width: 25, height: 25,
                                alignItems: 'center', justifyContent: 'center'
                            }]}>
                                <Text style={textCustom.textLight}>
                                    {index + 1}
                                </Text>
                            </View>
                            <Text style={textCustom.textLight}>{value.created_at}</Text>
                        </View>
                        {value.foto !== null && <Image style={[borderDefault.borderS, { width: 253, height: 253 }]} source={{ uri: 'data:image/png;base64,' + value.foto }} />}
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Tipe</Text>
                            <Text style={[styles.value, { textTransform: 'capitalize' }]}>: {value.tipe}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Nama</Text>
                            <Text style={styles.value}>: {value.nama}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Alamat</Text>
                            <Text style={styles.value}>: {value.alamat}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Kode Pos</Text>
                            <Text style={styles.value}>: {value.kode_pos}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Provinsi</Text>
                            <Text style={styles.value}>: {value.provinsi}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Kabupaten</Text>
                            <Text style={styles.value}>: {value.kabupaten}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Telepon</Text>
                            <Text style={styles.value}>: {value.telepon}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Email</Text>
                            <Text style={styles.value}>: {value.email}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Facebook</Text>
                            <Text style={styles.value}>: {value.facebook}</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Jumlah Siswa</Text>
                            <Text style={styles.value}>: {value.jumlah_siswa}</Text>
                        </View>
                    </View>
                ))
                : <BadgeComp text='No Data' type='warning' />}
        </Layouts>
    )
}

const styles = StyleSheet.create({
    smallValue: {
        ...borderDefault.borderS,
        ...fontCustom.fontLight,
        borderColor: 'transparent',
        fontSize: root.sizeS,
        backgroundColor: root.thirdBgColor,
        textTransform: 'capitalize',
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: root.sizeXs,
        maxWidth: 70
    },
    key: {
        ...fontCustom.fontBold,
        fontSize: root.sizeM,
        minWidth: 100
    },
    value: {
        ...textCustom.textRegular
    }
})

export default Data