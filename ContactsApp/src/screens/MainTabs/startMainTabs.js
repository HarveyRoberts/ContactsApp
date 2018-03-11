import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
    //we need to create a promise because get image source is
    //asynchronus and we need an image source not an Icon component 
    Promise.all([
        Icon.getImageSource("contact-mail",30),
        Icon.getImageSource("message-settings-variant",30),
        Icon.getImageSource("menu",30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'ContactsApp.ContactsScreen',
                    label: 'Mes Contacts',
                    title: 'Mes Contacts',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'toggleSideDrawer'
                            }
                        ]
                    }

                },
                {
                    screen: 'ContactsApp.OptionsScreen',
                    label: 'Options',
                    title: 'Options',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'toggleSideDrawer'
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: { 
                  screen: 'ContactsApp.DrawerScreen'
                }
            }
        });
    });
};

export default startTabs;

