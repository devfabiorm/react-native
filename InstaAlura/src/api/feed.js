import { Platform } from "react-native";

const lerFotos = async (callback) => {
    urlBase = "10.0.2.2";

    if(Platform.OS == "ios")
        urlBase = "localhost";

    const fotosApi = await fetch(`http://${urlBase}:3030/feed`);
    const fotosJson = await fotosApi.json();

    callback(fotosJson);
}

export default lerFotos;