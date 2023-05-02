type Dates = {
    startDate: string;
    endDate: string;
};

function checkDate(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].startDate.length !== 10 || array[i].endDate.length !== 10) {
            return "string length is invalid";
        }
    }
    return array;
}

function dashdivide(dashstring): any {
    let delimiterdash = dashstring.trim().split("-");
    let startDate = delimiterdash[0].trim();
    let endDate = delimiterdash[1].trim();
    return { startDate, endDate };
}

function strichdivide(strichstring) {
    return strichstring
        .trim()
        .split("|")
        .map((date) => dashdivide(date));
}

const extractDates = (customer: any): any => {
    if (customer.ListOfPeriods == null || !("ListOfPeriods" in customer)) {
        return [];
    }

    let dash, strich;
    if (customer.ListOfPeriods.includes("|")) {
        strich = strichdivide(customer.ListOfPeriods);
        return checkDate(strich);
    } else if (customer.ListOfPeriods.includes("-")) {
        dash = [dashdivide(customer.ListOfPeriods)];
        return checkDate(dash);
    } else {
        return [];
    }
};

export default extractDates;
