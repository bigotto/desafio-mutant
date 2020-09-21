const timestamp = () => {
    const date_obj = new Date();

    const date = ("0" + date_obj.getDate()).slice(-2);

    // current month
    const month = ("0" + (date_obj.getMonth() + 1)).slice(-2);

    // current year
    const year = date_obj.getFullYear();

    // current hours
    const hours = ("0" + date_obj.getHours()).slice(-2);

    // current minutes
    const minutes = ("0" + date_obj.getMinutes()).slice(-2);

    // current seconds
    const seconds = ("0" + date_obj.getSeconds()).slice(-2);

    const timestamp = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    return timestamp;
}

export default timestamp;
