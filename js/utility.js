async function LoadJsonFile(){
    const response = await fetch("../data/data.json");
    const json = await response.json();
    console.log(json);
    return json;
}
function TransformJsonDataToArray(jsonData){
    let array = [];
    for(let i=0; i<jsonData.numOfElements){
        array[i] = TransformDataToObject(i,jsonData);
    }
    return array;
}
