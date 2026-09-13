let url = "http://universities.hipolabs.com/search?country=india";
let form = document.querySelector("#search");

form.addEventListener("submit",async (event) =>{
    event.preventDefault();
    let universities = await getcollage();

    let state = document.querySelector("input").value;
    console.log(state);
    displayunviersity(state,universities);
})

function displayunviersity(state,universities){
    let parlist = document.querySelector("#clist");
    parlist.innerText ="" ;
    for (university of universities){
        // console.log(university);
        if (university["state-province"] != null){
            if (university['state-province'].toLowerCase().replaceAll(" ","") == state.toLowerCase().replaceAll(" ","")){
                let list = document.createElement("li");
                list.innerText = university.name;
                console.log(university.name);
                parlist.append(list);
            }

        }
    }
}

async function getcollage(){
    try {
        res = await fetch(url);
        data = await res.json();
        // console.log(data);
        return data;
    }
    catch(e){
        console.log("error",e);
    }
   
}