import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {
  return (
    <SafeAreaView className={`bg-primary h-full`}>
      <ScrollView>
          <View className={`w-full justify-center h-full px-4 my-6`}>
            <Image 
              source={images.logo}
              className={`w-[115px] h-[35px]`}
              resizeMode="contain"
            />
            <Text className={`text-white font-psemibold text-[22px] mt-10`}>Sign in</Text>

            <FormField 
            title={`Email`}
            // value={form.email}
            // handleChangeText={(e) => setForm({ ...form, email:e })}
            otherStyles={`mt-7`}
            // keyboardType="email-address"
            />

             <FormField 
            title={`Password`}
            // value={form.password}
            // handleChangeText={(e) => setForm({ ...form, password:e })}
            otherStyles={`mt-7`}
            />

          </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default SignIn