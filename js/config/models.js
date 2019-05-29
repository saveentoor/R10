import AsyncStorage from "@react-native-community/async-storage";

export const createFav = async id => {
  try {
    await AsyncStorage.setItem(
      `${id}`,
      JSON.stringify({ id, favedOn: new Date() })
    );
  } catch (e) {
    return false;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return await multiGet(keys);
  } catch (e) {
    return false;
  }
};

export const removeFaves = async id => {
  try {
    const keys = await AsyncStorage.removeItem(id);
  } catch (e) {
    return false;
  }
};
