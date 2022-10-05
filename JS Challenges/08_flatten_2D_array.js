let testArr = [1,2,3, [4,5, [6, [7, 8, 9, [10]]]]]

function arrayFlattener(arr) {
    let res = [];
    arr.forEach(el => {
        if(typeof el === 'number') {
            res.push(el);
        } else {
            let temp = arrayFlattener(el);
            res = [...res, ...temp];
        }
    });
    return res;
}
arrayFlattener(testArr);