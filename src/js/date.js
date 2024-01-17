function getTodayDate() {
    let today = new Date();
    return today;
}

function incrementDate(daysToIncrement) {
    let today = getTodayDate();
    today.setDate(today.getDate() + daysToIncrement)
    return convertDate(today);
}

function convertDate(date) {
    return date.toISOString().split('T')[0];
}

export { getTodayDate ,convertDate,incrementDate};