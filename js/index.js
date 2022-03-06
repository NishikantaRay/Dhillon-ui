// for getting the data from the json file
//credit -https://github.com/akaushik759

const getjsonData = async () => {
    const api = "./data/data.json";
    try {
        let realdata = await fetch(api);
        data = await realdata.json();
        console.log(data);
        // document.getElementById("lyrics").append( `${realData[0].lyrics}`);
        search_animal(data);
    } catch (error) {
        console.log(error);
    }
};
getjsonData();
  function search_animal(data) {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = "";
  console.log(data);
    for (let index = 0; index < data.length; index++) {
        if (data[index].title.toLowerCase().indexOf(input) != -1) {
            x.innerHTML += `<div class="list-item">
            <h3>${data[index].name}</h3>
            <p>${data[index].description}</p>
            <img src="${data[index].image}" alt="${data[index].name}">
            </div>`;
        }
        
    }
    // for (i = 0; i < data.length; i++) {
    //   let obj = data[i];
    //   if (obj.Name.toLowerCase().includes(input)) {
    //     const elem = document.createElement("li")
    //     elem.innerHTML = `${obj.Name} - ${obj.Color}`
    //     x.appendChild(elem)
    //   }
    // }
  }
