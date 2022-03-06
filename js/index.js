
const getData = async () => {
    const api = "./data.json";
    try {
        let data = await fetch(api);
        realData = await data.json();
        console.log(realData);
    } catch (error) {
        console.log(error);
    }
};


getData();