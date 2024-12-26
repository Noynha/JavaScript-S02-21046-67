let furniture = ['Table', 'Chairs', 'Couch']

let iterator = furniture[Symbol.iterator]();

for (let fur of furniture) {
    console.log(fur);
    for (let letter of fur) {
        console.log(letter);
        
    }
}