import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("contact-mail",30),
        Icon.getImageSource("message-settings-variant",30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'ContactsApp.ContactsScreen',
                    label: 'Mes Contacts',
                    title: 'Mes Contacts',
                    icon: sources[0]
                },
                {
                    screen: 'ContactsApp.OptionsScreen',
                    label: 'Options',
                    title: 'Options',
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;

