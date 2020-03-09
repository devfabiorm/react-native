const lerFotos = async (callback) => {
    const fotosApi = await fetch('http://10.0.2.2:3030/feed');
    const fotosJson = await fotosApi.json();

    callback(fotosJson);
}

export default lerFotos;