async function LoadJsonFile(){
    const response = await fetch("../data/data.json");
    const json = await response.json();
    return json;
}
async function TransformJsonDataToArray(){
    const jsonData = await LoadJsonFile();
    let array = [];
    array.length = jsonData.numOfElements;
    for(let i=0; i<jsonData.numOfElements; i++){
        array[i] = TransformDataToObject(i,jsonData);
    }
    return array;
}
function TransformDataToObject(index, jsonData){
    const obj = {
        name: jsonData.name[index],
        surname: jsonData.surname[index],
        role: jsonData.role[index],
        image: jsonData.image[index]
    };
    return obj;
}
function PrintArrayIntoConsole(arr){
    for(let i=0; i<arr.length; i++){
        console.log("---------- Member "+(i+1)+" ----------");
        console.log("Name and surname: "+arr[i].name+" "+arr[i].surname);
        console.log("Role: "+arr[i].role);
        console.log("Image: "+arr[i].image);
    }
}
function PrintArrayIntoDOM(arr){
    for(let i=0; i<arr.length; i++){
        let str = `<div class="card">
                        <img src="../assets/img/${arr[i].image}" class="card-img-top" alt="Foto profilo di ${arr[i].surname} ${arr[i].name}">
                        <div class="card-body">
                        <h5 class="card-title">${arr[i].surname} ${arr[i].name}</h5>
                        <p class="card-text">${arr[i].role}</p>
                        </div>
                    </div>`;
      document.getElementById("cardContainer").innerHTML += str;
    }
}

async function MainProgram(){
    const arrayData = await TransformJsonDataToArray();
    
    PrintArrayIntoConsole(arrayData);
    PrintArrayIntoDOM(arrayData);
}