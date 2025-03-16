export const filterClient = (client, searchValue) => {
  if (
    client?.jobType.includes(searchValue) ||
    client?.fullName.includes(searchValue) ||
    client?.company.includes(searchValue) ||
    client?.cardNumber.includes(searchValue) ||
    client?.income.includes(searchValue) ||
    client?.email.includes(searchValue)
  ) {
    return client;
  } else return 0;
};
