import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title, value, placeholder, 
    handleChangeText, otherStyles, keyboardType, ...props }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className={`text-gray-100 font-pmedium`}>
            {title}
        </Text>

        <View className={`border border-black-200 w-full h-16
            bg-black-100 rounded-lg focus:border-secondary items-center`}>
            <TextInput 
            className={`flex-1 text-white font-psemibold  w-full px-4 `}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
            />
        </View>
    </View>
  )
}

export default FormField