let schoolTeachers = {
  math: 'Mauro Cifuentes',
  science: 'Carmine Tambascia',
  history: 'Meir Overferst',
  geography: 'Marcelo Ramirez'
};

let daniel = ['Daniel Cipolla', 'JavaScript', 'PHP', 'Ruby', 'C++'];
let sue = ['Susanne Schutt', 'JavaScript', 'Ruby', 'Python'];

let compareCandidateSkills = function(first, second) {
  let hiredPerson;

  first.length > second.length ? hiredPerson = first[0] : hiredPerson = second[0];

  schoolTeachers.programming = hiredPerson;
}

compareCandidateSkills(daniel, sue);


let namesOfStudentsDci = ['Mauro', 'Ali', 'Eugen', 'Jens', 'Marcelo', 'Mohammed'];

let bundesligaTeams = ['Bayern', 'Dortmund', 'Leipzig', 'Freiburg'];

console.log(bundesligaTeams.length > namesOfStudentsDci.length);

console.log(bundesligaTeams[bundesligaTeams.length - 1]);
