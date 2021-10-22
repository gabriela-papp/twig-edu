const devideArr = (array, n) => {
    array = array.slice();
    let result = [];
    //check if array can be devided by n
    if (array.length < n) {
        return array;
    }
    while (array.length) {   
        result.push(array.splice(0, Math.ceil(array.length / n--)));
    }
    return result;
}

const output = devideArr([1, 2, 3, 4, 5], 3)
console.log(output)