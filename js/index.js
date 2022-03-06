// for getting the data from the json file
//credit -https://github.com/akaushik759

const getjsonData = async () => {
    const api = "./data/data.json";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
    } catch (error) {
        console.log(error);
    }
};
getjsonData();