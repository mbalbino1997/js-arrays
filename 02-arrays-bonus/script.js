const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers=[];
const reversedTeachersBonus2=[];
for (let i=0;i<teachers.length;i++) {
  reversedTeachers.push(teachers.at([-i-1]));
}
for (let i=teachers.length-1;i>=0; i--) {
  reversedTeachersBonus2.push(teachers[i]);
}
const reversedTeachersBonus = teachers.slice().reverse();
console.log(reversedTeachers,reversedTeachersBonus,reversedTeachersBonus2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames =[];
for(let i=0;i<teachers.length;i++) {
  if(teachers[i].length>=5) {
    longNames.push(teachers[i]);
  }  
}
const longNamesBonus = teachers.filter(teacher => teacher.length >= 5);
console.log(longNames,longNamesBonus);

// 3. Rimuovi 'Ed' dall'array teachers
const newTeachers =teachers.slice();
newTeachers.splice(1, 1);
const newTeachersBonus = teachers.filter(item => item  !== "Ed");
console.log(newTeachers,newTeachersBonus,teachers);