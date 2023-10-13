import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.angularloginexample.com',
  appName: 'angular-login',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
