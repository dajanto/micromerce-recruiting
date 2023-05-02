type Dates = {
  startDate: string;
  endDate: string;
};

function dashdivide(dashstring): Dates {
  let delimiterdash = dashstring.trim().split("-");
  let startDate = delimiterdash[0];
  let endDate = delimiterdash[1];
  return { startDate, endDate };
}

const extractDates = (customer: any): Dates | [] => {
  if (
      customer.ListOfPeriods == null ||
      Object.hasOwn(customer, "ListOfPeriods")
  ) {
    return [];
  }

  let trimmed = customer.ListOfPeriods.trim();
  let delimiterstrich = trimmed.split("|");
  if (delimiterstrich != "") {
    let startDate = delimiter[0];
    let endDate = delimiter[1];
  } else {
  }

  let delimiterdash = trimmed.split("-");

  let startDate = delimiter[0];
  let endDate = delimiter[1];

  return [{ startDate, endDate }];
};

export default extractDates;
