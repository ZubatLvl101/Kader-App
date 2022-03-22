import { FaCheck } from 'react-icons/fa'

export const formatData = (data, type) => {
    if(!type) return data;
    switch(type) {
        case "date":
            return data ? formatDate(data) : '-';
        case "timestamp":
            return data ? formatTimestamp(data) : '-';
        case "email":
        case "dropdown":
        case "password":
        case "string":
            return data ? data : '-';
        case "boolean":
            return data === 1 ? <FaCheck /> : "";
        case "number":
            return data ? data : '0';
        default:
            return data ? data : '-';
    }
}

export const formatDate = (date) => {
    if(!date) return "";
    // const dateObj = new Date(date);
    // const day = String(dateObj.getDay()).padStart(2, '0');
    // const month = String(dateObj.getDay()).padStart(2, '0');
    // const year = dateObj.getFullYear();
    date = date.substring(0, 10);
    const dateParts = date.split('-');
    return dateParts[2] + "." + dateParts[1] + "." + dateParts[0];

    // return day + "." + month + "." + year;
}

export const formatTimestamp = (timestamp) => {
    if(!timestamp) return "";
    const year = timestamp.substring(0,4);
    const month = timestamp.substring(5,7);
    const day = timestamp.substring(8,10); 
    const hours = timestamp.substring(11,13);
    const minutes = timestamp.substring(14,16);
    const seconds = timestamp.substring(17,19);
    // const dateObj = new Date(timestamp);
    // const day = String(dateObj.getDay()).padStart(2, '0');
    // const month = String(dateObj.getDay()).padStart(2, '0');
    // const year = dateObj.getFullYear();
    // const hours = String(dateObj.getHours()).padStart(2, '0');dateObj.getHours()
    // const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    // const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}