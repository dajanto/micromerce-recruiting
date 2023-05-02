type Dates = {
    startDate: string;
    endDate: string;
};

function checkDate(string) {
    const timestamp = Date.parse(string);
    return isNaN(timestamp);
}

function validateObject(obj) {
    const startDate = obj.start;
    const endDate = obj.end;
    if (!startDate || !endDate) {
        return "string length is invalid";
    }
    const dates = [startDate, endDate].filter(value => !isNaN(Date.parse(value)));
    if (dates.length !== 2) {
        return "string length is invalid";
    } else {
        return obj;
    }
}

function dashdivide(dashstring): any {
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

const extractDates = (customer: any): any => {
    if (
        customer.ListOfPeriods == null ||
        !Object.hasOwn(customer, "ListOfPeriods")
    ) {
        return [];
    }


    if (customer.ListOfPeriods.includes("|")) {
        let strich = strichdivide(customer.ListOfPeriods);
        return strich;
        }
    else
        if (customer.ListOfPeriods.includes("-")) {
            let dash = [dashdivide(customer.ListOfPeriods)];
            return dash;
    }
    }

    export default extractDates;
