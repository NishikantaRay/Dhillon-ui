// for getting the data from the json file
//credit -https://github.com/akaushik759

const getjsonData = async () => {
    const api = "./data/data.json";
    try {
        let realdata = await fetch(api);
        data = await realdata.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
    
};
getjsonData();

// search bar function
const search_song=async()=> {
    let realdata = await fetch("./data/data.json");
    data = await realdata.json();
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        if (data[index].title.toLowerCase().includes(input) && input != "") {
            x.innerHTML += `
            <div class="container pt-5">
    <div class="row">
        <div class="col-md-6 col-12">
        <h3>${data[index].title}</h3>
        <a href="http://www.youtube.com/watch?v=${data[index].video_link}">
        <img src="https://i3.ytimg.com/vi/${data[index].video_link}/0.jpg" alt="Image"></a>
        <h4>${data[index].singer}</h4>
        </div>
        <div class="col-md-6 col-12 box pt-5">
        <p>${data[index].lyrics}</p>
        </div>
    </div>
</div>
            `;
        }
    }
  }