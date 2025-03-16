const REQUIRED_FIELDS = [
  "fullName",
  "bio",
  "company",
  "jobType",
  "cardNumber",
  "timeZone",
  "email",
];

export const hasRequiredFields = (obj) => {
  return REQUIRED_FIELDS.every((field) => field in obj);
};
