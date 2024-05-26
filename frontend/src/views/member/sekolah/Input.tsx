import React, { useEffect, useState } from 'react'
import Layouts from '../../Layouts'
import InputTextComp from '@root/components/member/form/InputTextComp'
import InputSelectComp from '@root/components/member/form/InputSelectComp'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { buttonCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import { provinsi } from '@root/utils/Data'
import SubmitComp from '@root/components/common/button/SubmitComp'
import InputImageComp from '@root/components/member/form/InputImageComp'
import { useForm } from '@root/utils/Form'
import { useDispatch, useSelector } from 'react-redux'
import { dataSekolahActions, tambahSekolahActions } from '@root/redux/actions'
import { useNavigation } from '@react-navigation/native'
import ModalComp from '@root/components/member/ModalComp'
import BadgeComp from '@root/components/common/BadgeComp'

const Input = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { data: success, error, loading } = useSelector(state => state.tambahSekolah)
    const [province, setProvince] = useState<string>('')

    useEffect(() => {

    }, [success, error])

    // state awal buat form yang bakal diisi
    const [initialState, setInitialState] = useState({
        foto: '',
        tipe: '',
        nama: '',
        alamat: '',
        kode_pos: '',
        provinsi: '',
        kabupaten: '',
        telepon: '',
        email: '',
        facebook: '',
        jumlah_siswa: ''
    })

    useEffect(() => {

    }, [initialState.foto,
    initialState.tipe,
    initialState.nama,
    initialState.alamat,
    initialState.kode_pos,
    initialState.provinsi,
    initialState.kabupaten,
    initialState.telepon,
    initialState.email,
    initialState.facebook,
    initialState.jumlah_siswa])

    function handleWhenSuccessInput() {
        setInitialState({
            foto: '',
            tipe: '',
            nama: '',
            alamat: '',
            kode_pos: '',
            provinsi: '',
            kabupaten: '',
            telepon: '',
            email: '',
            facebook: '',
            jumlah_siswa: ''
        })


        dispatch(dataSekolahActions.init())

        navigation.navigate('user-member-sekolah-Data')

        dispatch(tambahSekolahActions.success(false))
    }

    const { handleCustomChange, formData } = useForm(initialState)

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Input Sekolah</Text>

            <InputImageComp name='foto sekolah' onError={error && error.foto ? error.foto[0] : ''} handleInputOnChange={value => handleCustomChange(value, 'foto')} />

            <InputSelectComp name='tipe sekolah *' option={['swasta', 'negeri']} defaultValue={initialState.tipe}
                onError={error && error.tipe ? error.tipe[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'tipe')
                    setInitialState(prev => ({ ...prev, tipe: value }))
                }} />

            <InputTextComp name='nama sekolah *' defaultValue={initialState.nama}
                onError={error && error.nama ? error.nama[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'nama')
                    setInitialState(prev => ({ ...prev, nama: value }))
                }} />

            <InputTextComp name='alamat *' defaultValue={initialState.alamat}
                onError={error && error.alamat ? error.alamat[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'alamat')
                    setInitialState(prev => ({ ...prev, alamat: value }))
                }} />

            <InputTextComp name='kode pos *' type='numeric' defaultValue={initialState.kode_pos}
                onError={error && error.kode_pos ? error.kode_pos[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'kode_pos')
                    setInitialState(prev => ({ ...prev, kode_pos: value }))
                }} />

            <InputSelectComp name='provinsi *' option={Object.keys(provinsi)} defaultValue={initialState.provinsi}
                onError={error && error.provinsi ? error.provinsi[0] : ''}
                handleInputOnChange={value => { setProvince(value as string); handleCustomChange(value, 'provinsi') }} />

            <InputSelectComp name='kota/kabupaten *' option={province && provinsi[province]} defaultValue={initialState.kabupaten}
                onError={error && error.kabupaten ? error.kabupaten[0] : ''}
                handleInputOnChange={value => handleCustomChange(value, 'kabupaten')} />

            <InputTextComp name='no telepon sekolah *' type='numeric' defaultValue={initialState.telepon}
                onError={error && error.telepon ? error.telepon[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'telepon')
                    setInitialState(prev => ({ ...prev, telepon: value }))
                }} />

            <InputTextComp name='email sekolah *' type='email-address' defaultValue={initialState.email}
                onError={error && error.email ? error.email[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'email')
                    setInitialState(prev => ({ ...prev, email: value }))
                }} />

            <InputTextComp name='facebook' defaultValue={initialState.facebook}
                onError={error && error.facebook ? error.facebook[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'facebook')
                    setInitialState(prev => ({ ...prev, facebook: value }))
                }} />

            <InputTextComp name='jumlah siswa *' type='numeric' defaultValue={initialState.jumlah_siswa}
                onError={error && error.jumlah_siswa ? error.jumlah_siswa[0] : ''}
                handleInputOnChange={value => {
                    handleCustomChange(value, 'jumlah_siswa')
                    setInitialState(prev => ({ ...prev, jumlah_siswa: value }))
                }} />

            {error && <BadgeComp text='Scroll ke atas ada error' type='danger' />}

            {loading ? <ActivityIndicator color={root.blueColor} size={'large'} /> :
                <SubmitComp text='Tambah' type='primary' handleSubmitOnPress={() => {
                    dispatch(tambahSekolahActions.init(formData))
                }} />}

            {success &&
                <ModalComp title='Input Alert' onClose={handleWhenSuccessInput}>
                    <View style={{ rowGap: root.sizeXs }}>
                        <BadgeComp text='Input Success' type='success' />
                        <TouchableOpacity onPress={handleWhenSuccessInput} style={[buttonCustom.buttonCom, { borderColor: root.blueColor, borderWidth: 1 }]}>
                            <Text style={[fontCustom.fontMedium, { fontSize: root.sizeM, color: root.blueColor }]}>See Data</Text>
                        </TouchableOpacity>
                    </View>
                </ModalComp>
            }
        </Layouts>
    )
}

export default Input

