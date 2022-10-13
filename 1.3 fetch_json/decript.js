function decodeString(numberOfRows, encodedString) {
    var numberOfColumns = encodedString.length / numberOfRows;
    var result = "";
    var z = 0;

    for (var x = 0; x < encodedString.length; x++) {
        z = x;
        while (z < encodedString.length) {
            console.log(result = result.concat(encodedString[z]));
            z = z + (numberOfColumns + 1);
        }
    }
    return result;
}

decodeString(3, "mnes__ya_____mi");
