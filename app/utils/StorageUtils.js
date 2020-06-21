import {AsyncStorage} from 'react-native'

//used to store data locally on the phone storage via a unique key
export async function store(storageKey, data) {
    try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(data));
        return true;
    } catch (error) {
        console.log('Error while storing the data: ' + error);
        return false;
    }
}

//loads data from the local storage
export async function load(storageKey) {
    try {
        value = await AsyncStorage.getItem(storageKey);
        if (value != null)
            return JSON.parse(value);
    } catch (error) {
        console.log('Error while retrieving the data: ' + error);
        return null;
    }
}