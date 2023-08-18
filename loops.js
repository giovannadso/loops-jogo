const lugaresQueVisitei = ['Paraná', 'Minas Gerais', 'São Paulo'];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    console.log(`Já visitei ${lugaresQueVisitei[i]}!`);
  }

const lugaresAmiguinho = ['Rio de janeiro', 'Santa Catarina', 'Paraná', 'Santa catarina'];
const lugaresEmComum = [];
console.log(lugaresEmComum);

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresAmiguinho.length; j++) {
      if (lugaresQueVisitei[i] === lugaresAmiguinho[j]) {
        lugaresEmComum.push(lugaresQueVisitei[i]);
      }
    }
  }
  
  console.log('Lugares em comum:', lugaresEmComum);

const amigosDoFace = ['Julia', 'Luisa', 'Carol', 'Gabriel'];
const amigosDoFaceDoKaian = ['Bob', 'Eve', 'Julia', 'Frank', 'Luisa'];
const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
  for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
    if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
      amigosEmComum.push(amigosDoFace[i]);
    }
  }
}

console.log('Amigos em comum:', amigosEmComum);

