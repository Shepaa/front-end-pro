console.log(pow(10, 2));

function pow(num, degree) {
    return (degree === 1) ? num : (num * pow(num, degree - 1));
}


