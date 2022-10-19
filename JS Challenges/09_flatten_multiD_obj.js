let test = {a:1, b:2, c:{d:3, e: {f:4, g:5, h: {i: 6}}}}

function objFlattener (obj) {
    let res = {};
    const prefixer = (prefixString, obj) => {
        return Object.keys(obj).reduce((acc, key) => {
            acc[`${prefixString}.${key}`] = obj[key];
            return acc;
        }, {});
    };
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] !== 'object') {
            res[key] = obj[key];
        }
        else {
            res = { 
                ...res,
                ...prefixer(key, objFlattener(obj[key]))
            }
        }
    })
    return res;
}

console.log(objFlattener(test));
