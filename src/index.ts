type Dates = {
  startDate: string;
  endDate: string;
};

function dashdivide(dashstring): Dates {
  let delimiterdash = dashstring.trim().split("-");
  let startDate = delimiterdash[0].trim();
  let endDate = delimiterdash[1].trim();
  return {startDate,endDate};
}

function strichdivide(strichstring): Dates[] {
  return strichstring
      .trim()
      .split("|")
      .map((date) => dashdivide(date));
}

const extractDates = (customer: any): Dates[] | [] => {
  if (
      customer.ListOfPeriods == null ||
      Object.hasOwn(customer, "ListOfPeriods")
  ) {
    return [];
  }

  return dashdivide(customer.ListOfPeriods);
};

export default extractDates;
