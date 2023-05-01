type Dates = {
  startDate: string;
  endDate: string;
};

const extractDates = (customer: any): Dates | [] => {
  //const periodString = customer.ListOfPeriods.trim();
  let periodString = null;
  if (periodString == null) {
    return [];
  }

  const startDate = '11.11.2008';
  const endDate = '17.12.2008';

  return {
    startDate,
    endDate,
  };
};

export default extractDates;