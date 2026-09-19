async function main() {
    const readline = require("node:readline/promises");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const pokemonID = await rl.question("Enter Pokemon ID: ");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    console.log(response.status);
    if(!response.ok){
        console.log("Request failed");
        rl.close();
        return 1;
    }
    const data = await response.json();
    console.log(`Name: ${data.name}, Weight: ${data.weight}, Height: ${data.height}`);
    //console.log(data);

    rl.close();
}

main();