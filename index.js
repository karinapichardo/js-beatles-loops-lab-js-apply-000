function theBeatlesPlay(musicians, instruments) {
  const emptyArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
 emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return emptyArray;
}

function johnLennonFacts(facts) {
  const factsArray = [];
  
  let i = 0;
  
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`);
    i++;
}
  return factsArray;
}

<<<<<<< HEAD
function iLoveTheBeatles(number) {
=======
function iLoveTheBeatles(number){
>>>>>>> b71a023dd932bd897355a5412f14f54b3561bf2a
  const emptyArray = [];
 
  do {
    emptyArray.push('I love the Beatles!');
    number++;
  } while (number < 15);
<<<<<<< HEAD
  
 return emptyArray;
}
=======
 return emptyArray;
}
>>>>>>> b71a023dd932bd897355a5412f14f54b3561bf2a
