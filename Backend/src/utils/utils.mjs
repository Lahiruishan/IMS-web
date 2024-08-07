export function addLeadingZeros(number, length) {             // adding leading zeros to create student id
    return String(number).padStart(length, '0');
}

export function registrationNo(stream, batch, num){           // Create registration number function
    const reg_no = batch + stream + addLeadingZeros(num+1, 4);
    return reg_no;
}