async function main() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/9999");
    const data = await response.json();
    console.log(`Name: ${data.name}, Weight: ${data.weight}, Height: ${data.height}`);
    console.log(response.status);
}

main();