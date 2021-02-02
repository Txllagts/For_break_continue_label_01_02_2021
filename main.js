let animales_aereos = ["Agila", "Paloma", "Loro", "Colibri"];
let animales_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animales_acuaticos = ["Pez", "Trucha", "Salmon", "Delfin"];

ciclo_aereos:
for (let aereos of animales_aereos) {
    ciclo_terrestres:
    for(let terrestres of animales_terrestres){
        ciclo_acuaticos:
        for(let acuaticos of animales_acuaticos){
            console.count()
            //break ciclo_acuatico
            console.log(`Animales acuaticos: ${acuaticos}`); 
        }
        break ciclo_terrestres;
        console.log(`Animales terrestres: ${terrestres}`);
        
    }
    break ciclo_aereos;
    console.log(`Animales aereos: ${aereos}`);
}