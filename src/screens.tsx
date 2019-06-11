import { Navigation } from 'react-native-navigation';

  export function registerScreens() {

    Navigation.registerComponent('demo.PostsList', () => require('./posts/screens/PostsList').default);
    Navigation.registerComponent('demo.AddPost', () => require('./posts/screens/AddPost').default);
    Navigation.registerComponent('demo.ViewPost', () => require('./posts/screens/ViewPost').default);
  }