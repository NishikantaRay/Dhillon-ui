// for getting the data from the json file
//credit -https://github.com/akaushik759

const getjsonData = async () => {
    const api = "./data/data.json";
    try {
        let realdata = await fetch(api);
        data = await realdata.json();
        console.log(data);
        // document.getElementById("lyrics").append( `${realData[0].lyrics}`);
        // search_animal(data);
    } catch (error) {
        console.log(error);
    }
    
    
};
getjsonData();

// search bar function
const search_animal=async()=> {
    let realdata = await fetch("./data/data.json");
    data = await realdata.json();
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        if (data[index].title.toLowerCase().includes(input)) {
            x.innerHTML += `<div class="list-item">
            <h3>${data[index].title}</h3>
            </div>`;
        }
    }
  }