let i = 0;
while (i < 3){
   let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }
    i++;  
} 

let j=3;
do {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
    j--; 
}while (j>0);