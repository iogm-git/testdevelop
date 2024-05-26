import BadgeComp from '@root/components/common/BadgeComp';
import { root, textCustom, flexCustom, borderDefault } from '@root/utils/Styles';
import React, { PropsWithChildren, useState } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

type InputImageProps = PropsWithChildren<{
    name: string;
    handleInputOnChange?: (value: string) => void;
    onError?: string;
}>

const InputImageComp = ({ name = 'Image', handleInputOnChange, onError }: InputImageProps) => {
    const [image, setImage] = useState<string | null>(null);

    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            setImage(image.path)

            handleInputOnChange(image.data)
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <View style={[borderDefault.borderS, { rowGap: root.sizeXs / 2, padding: root.sizeXs }]}>
            <Text style={[textCustom.textMedium, { fontSize: root.sizeS, textTransform: 'capitalize' }]}>{name}</Text>

            {onError && <BadgeComp text={onError} type='danger' />}

            <TouchableOpacity onPress={openImagePicker} style={{
                ...borderDefault.borderS,
                ...flexCustom.flexRowBetween,
                padding: root.sizeX / 2
            }}>
                <Text style={{
                    ...textCustom.textRegular,
                    color: root.linkColor
                }}>- Choose Image -</Text>
                <Text style={{
                    ...textCustom.textLight,
                    color: root.linkColor
                }}>See</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={[borderDefault.borderS, { width: 253, height: 253, alignSelf: 'center' }]} />}
        </View>
    );
};

export default InputImageComp;
