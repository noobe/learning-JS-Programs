const simpleInterest = (p, n, r) => p*n*r/100;

const lendingList = [
  {
    principle: 1000,
    years: 5,
    rate: 2,
  },
  {
    principle: 10000,
    years: 7,
    rate: 2,
  },
  {
    principle: 5000,
    years: 10,
    rate: 2,
  }
]

for (item of lendingList) {
  const interest = simpleInterest(item.principle, item.years, item.rate);
  console.log(interest);
}

/*
  Problem is solved sequencially one after the other like a list or a recipie.
*/