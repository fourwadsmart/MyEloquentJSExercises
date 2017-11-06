/* Execise from chapter 2 Functions */

function minVal(numb1) {
    return function(numb2) {
        return Math.min(numb1, numb2);
    }
}