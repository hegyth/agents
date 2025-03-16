import { faker } from "@faker-js/faker";

export const getMockDataTable = () => {
  const dataTable = [];
  for (let i = 0; i < 100; i++) {
    dataTable.push({
      key: i,
      id: i,
      fullName: faker.person.fullName(),
      jobType: faker.person.jobType(),
      company: faker.company.name(),
      cardNumber: faker.finance.creditCardNumber(),
      income: faker.finance.amount(),
      bio: faker.person.bio(),
      timeZone: faker.date.timeZone(),
      email: faker.internet.email()
    });
  }

  return dataTable;
};
