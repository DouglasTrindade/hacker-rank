let salary = 3500;
let spending = {
  aluguel: 800,
  luz: 80,
  agua: 30,
  internet: 90,
  credit_card: 1000,
};

const totalSpending = Object.values(spending).reduce((a, b) => a + b);
console.log(`Salário: R$ ${salary} \n
Total de gastos: R$ ${totalSpending} \n
Restante: ${salary - totalSpending}`);
