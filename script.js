/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr3 = [
  { id: 4, name: "rachita", age: "30", profession: "developer" },
  { id: 5, name: "swati", age: "31", profession: "developer" },
  { id: 6, name: "shweta", age: "32", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(val => {
    if(val.profession==="developer")
    console.log(val);})
   
}

PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  arr.forEach(value => {
    if(value.profession==="developer")
    console.log(value);
  })
}

PrintDeveloperbyForEach();







function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

addData();

function removeAdmin() {
  arr=arr.filter(element => element.profession!=='admin');
  console.log(arr)
}

removeAdmin();

function concatenateArray() {
 let resultNew=arr.concat(arr3)
 console.log(resultNew);
}

concatenateArray();
