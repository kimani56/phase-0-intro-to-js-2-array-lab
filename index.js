// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(){
    cats.push("Ralph")
    return destructivelyAppendCat;
 }
 function destructivelyPrependCat(){
    cats.unshift("Bob");
    return destructivelyPrependCat;
 }
 function destructivelyRemoveLastCat(){
    cats.pop();
    return destructivelyRemoveLastCat;
 }
 function destructivelyRemoveFirstCat(){
    cats.shift();
    return destructivelyRemoveFirstCat;
 }
 function appendCat(){
const copyOfCats = [...cats, "Broom"];
return copyOfCats;
 }
 function prependCat(){
    const newOfCats = ["Arnold", ...cats];
    return newOfCats;
 }
 function removeLastCat(){
   const slicedOfCats =  cats.slice(0 , 2);
    return slicedOfCats;
 }
 function removeFirstCat(){
    const slicedFirstCats = cats.slice(1);
    return slicedFirstCats;
 }