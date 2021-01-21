import {Navigation} from 'react-native-navigation';
import HomeScreen from './screens/HomeScreen';
import MediaDetail from './screens/MediaDetail';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Detail', () => MediaDetail);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
