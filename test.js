import { produce } from "immer";

const employee = {
    name : "Rajib", 
    address : {
        country : "Bangladesh",
        city: "Dhaka",
    }
}
const employee2 = produce(employee, (draft)=>{
    draft.name = "kamal hossain";
    draft.address.city = "khulna";
})



console.log(employee2 == employee); // true
console.log( employee);
console.log( employee2);