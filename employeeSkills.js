const employees = [
	{
		name: "John Smith",
		age: 32,
		skills: ["JavaScript", "HTML", "CSS"],
	},
	{
		name: "Emily Johnson",
		age: 28,
		skills: ["Python", "Data Analysis", "Machine Learning"],
	},
	{
		name: "Satoshi Tanaka",
		age: 35,
		skills: ["Java", "Spring Framework", "Database Management"],
	},
	{
		name: "Maria González",
		age: 29,
		skills: ["C#", ".NET", "SQL Server"],
	},
	{
		name: "Mohammed Ahmed",
		age: 31,
		skills: ["Ruby", "Ruby on Rails", "Test-Driven Development"],
	},
	{
		name: "Fatima Ali",
		age: 27,
		skills: ["PHP", "MySQL", "Laravel"],
	},
	{
		name: "Emma Thomas",
		age: 26,
		skills: ["Java", "Spring Boot", "Microservices"],
	},
	{
		name: "William Robinson",
		age: 29,
		skills: ["C++", "OpenGL", "Computer Graphics"],
	},
	{
		name: "Ava Lewis",
		age: 31,
		skills: ["JavaScript", "React Native", "Mobile App Development"],
	},
	{
		name: "Lily Zhang",
		age: 30,
		skills: ["Python", "Pandas", "Data Analysis"],
	},
	{
		name: "Ravi Patel",
		age: 33,
		skills: ["JavaScript", "Express.js", "MongoDB"],
	},
];

const skillToFind = "Java";

for (let employee in employees) {
	let skills = employees[employee].skills;

	if (skills.includes(skillToFind)) {
		console.log(employees[employee].name);
	}
}
