import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title, value, placeholder, 
    handleChangeText, otherStyles, keyboardType, ...props }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className={`text-gray-100 font-pmedium`}>
            {title}
        </Text>

        <View className={`border border-black-200 w-full h-16 px-4 
            bg-black-100 rounded-lg focus:border-secondary items-center`}>
            <TextInput 
            className={`flex-1 text-white font-psemibold`}
            />
        </View>
    </View>
  )
}

export default FormField