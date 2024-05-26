import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../Layouts'

import WelcomeImage from '@svg/welcome'

import HomeIcon from '@svg/icon-svg/home'
import DataIcon from '@svg/icon-svg/data'
import InputIcon from '@svg/icon-svg/input'


import { borderDefault, flexCustom, root, textCustom } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Selamat Datang di Aplikasi</Text>
            <WelcomeImage />
            <TouchableOpacity style={[styles.box, { backgroundColor: root.transgreenColor, borderColor: root.greenColor }]}>
                <HomeIcon width={root.sizeXx} height={root.sizeXx} fill={root.greenColor} />
                <Text style={[textCustom.textRegular, { flex: 1 }]}>HomeScreen adalah tampilan utama atau halaman depan aplikasi. Ini adalah halaman pertama yang pengguna lihat saat mereka membuka aplikasi, dan biasanya dirancang untuk memberikan akses cepat ke fitur-fitur utama dan konten yang paling relevan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user-member-sekolah-Input')} style={[styles.box, { backgroundColor: root.transblueColor, borderColor: root.blueColor }]}>
                <InputIcon width={root.sizeXx} height={root.sizeXx} fill={root.blueColor} />
                <Text style={[textCustom.textRegular, { flex: 1 }]}>Halaman input adalah tampilan di mana pengguna diminta untuk memasukkan informasi tertentu yang diperlukan untuk melanjutkan penggunaan aplikasi atau menyelesaikan suatu tugas. Halaman input ini biasanya berisi berbagai elemen interaktif yang memudahkan pengguna dalam memasukkan data.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user-member-sekolah-Data')} style={[styles.box, { backgroundColor: root.transorangeColor, borderColor: root.orangeColor }]}>
                <DataIcon width={root.sizeXx} height={root.sizeXx} fill={root.orangeColor} />
                <Text style={[textCustom.textRegular, { flex: 1 }]}>Halaman data adalah tampilan yang menyajikan data yang telah dikumpulkan atau dihasilkan oleh aplikasi. Halaman ini biasanya digunakan untuk menampilkan informasi yang relevan dan bermanfaat bagi pengguna, seringkali dalam bentuk yang terstruktur dan mudah dibaca.</Text>
            </TouchableOpacity>
        </Layouts>
    )
}
const styles = StyleSheet.create({
    box: {
        ...flexCustom.flexRowStart,
        ...borderDefault.borderS,
        padding: root.sizeS,
    }
})

export default HomeScreen