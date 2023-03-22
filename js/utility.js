async function LoadJsonFile(){
    const response = await fetch("../data/data.json");
    const json = await response.json();
    console.log(json);
}