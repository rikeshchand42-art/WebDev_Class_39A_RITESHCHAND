const calculateBonus = (salary) =>
  salary >= 40000 ? salary * 0.10 : salary * 0.05;
 
const calculateTax = (salary) => salary * 0.05;
 
const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return salary + bonus - tax;
};
 
const generatePayslip = (name, salary, callback) => {
  const bonus = calculateBonus(salary);
  const tax = calculateTax(salary);
  const netSalary = callback(salary, calculateBonus, calculateTax);
  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};
 
generatePayslip("Ram", 50000, calculateNetSalary);
