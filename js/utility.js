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

async function MainProgram(){
    const arrayData = await TransformJsonDataToArray();
    console.log(arrayData);
    console.log(arrayData[0]);
}