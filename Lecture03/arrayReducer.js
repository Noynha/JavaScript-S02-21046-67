const array = [15,16,17,18,19];

function reduce(accumlator,currentValue,index) {
    const returns = accumlator + currentValue;
    console.log(
        `accumulator: ${accumlator},currntValue: ${currentValue},index: ${index},returns: ${returns}`
    );
    return returns;
}

array.reduce(reduce);