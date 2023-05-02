type Dates = {
    startDate: string;
    endDate: string;
};

function checkDate(string) {
    const timestamp = Date.parse(string);
    return isNaN(timestamp);
}

function dashdivide(dashstring): Dates | String {
    let delimiterdash = dashstring.trim().split("-");
    let startDate = delimiterdash[0].trim();
    let endDate = delimiterdash[1].trim();
    return {startDate, endDate};
}

function strichdivide(strichstring) {
    return strichstring
        .trim()
        .split("|")
        .map((date) => dashdivide(date));
}
const extractDates = (customer: any): Dates[] | String | [] => {
    if (
        customer.ListOfPeriods == null ||
        !Object.hasOwn(customer, "ListOfPeriods")
    ) {
        return [];
    }

    if(customer.ListOfPeriods.includes("|")) {
        return strichdivide(customer.ListOfPeriods);
    } else if(customer.ListOfPeriods.includes("-")) {
       return [dashdivide(customer.ListOfPeriods)];
    } else {
       //return "string length is invalid";
    }
};

export default extractDates;
