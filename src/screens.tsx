import { Navigation } from 'react-native-navigation';

export function registerScreens() {

	Navigation.registerComponent('demo.PostsList', () => require('./posts/screens/PostsList').default);
	Navigation.registerComponent('demo.AddPost', () => require('./posts/screens/AddPost').default);
	Navigation.registerComponent('demo.ViewPost', () => require('./posts/screens/ViewPost').default);
}

export function popScreen(componentId: string) {
	Navigation.pop(componentId)
	setTimeout(() => {
		alert("Dlete Post")
	}, 1000)
}

export function pushViewPostScreen(componentId: string) {
	Navigation.push(componentId, {
		component: {
			name: 'demo.ViewPost',
			passProps: {
				somePropToPass: 'Some props that we are passing'
			},
			options: {
				topBar: {
					title: {
						text: 'Post1'
					}
				}
			}
		}
	});
}

export function showAddPostModal() {
	Navigation.showModal({
		stack: {
			children: [{
				component: {
					name: 'demo.AddPost',
				}
			}]
		}
	})
}

