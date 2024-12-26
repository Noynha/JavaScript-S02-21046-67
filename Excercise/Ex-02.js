function calcuEquation(value) {
    const result = eval(value);
    return console.log("equation(", value, ") =", result);
}

calcuEquation("100 + 1");