type Dates = {
  startDate: string;
  endDate: string;
};

const extractDates = (customer: any): Dates | [] => {

  if (customer.ListOfPeriods == null || Object.hasOwn(customer, 'ListOfPeriods')) {
    return [];
  }

  const startDate = "11.11.2008";
  const endDate = "17.12.2008";

  return {
    startDate,
    endDate
  };
};

export default extractDates;
