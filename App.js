import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import * as Navegar from './src/components/navigation/navigator';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


class Guardioes extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("61c9e02a-d703-4e1c-aff1-3bce49948818", {kOSSettingsKeyAutoPrompt : true});// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
              
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }


  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#348EAC'}}>        
        <Navegar.Authentication />
        </SafeAreaView>
    );
  }
}


export default Guardioes;
