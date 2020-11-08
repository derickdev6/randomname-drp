const names = [
    "Derick",
    "Daniel",
    "David",
    "Maria",
    "Isabella",
    "Eduardo",
    "Carolina"
]
const randomName = ()=>{
    const msg = names[Math.floor(Math.random() * names.length)];
    console.log(msg);
};
module.exports = {randomName};