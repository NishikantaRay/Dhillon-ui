// for getting the data from the json file
//credit -https://github.com/akaushik759

const getjsonData = async () => {
    const api = "./data/data.json";
    try {
        let realdata = await fetch(api);
        data = await realdata.json();
        // console.log(data);
        // document.getElementById("lyrics").append( `${realData[0].lyrics}`);
        
let d = JSON.parse(data)
        search_animal(realdata);
    } catch (error) {
        console.log(error);
    }
};
getjsonData();
  function search_animal(data) {
      console.log(data);
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = input;
  
    // for (i = 0; i < data.length; i++) {
    //   let obj = data[i];
    //   if (obj.Name.toLowerCase().includes(input)) {
    //     const elem = document.createElement("li")
    //     elem.innerHTML = `${obj.Name} - ${obj.Color}`
    //     x.appendChild(elem)
    //   }
    // }
  }
