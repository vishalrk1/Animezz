import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Settings Screen</Text>
    </SafeAreaView>
  )
}

export default SettingsScreen