// TODO: define polyfill for `Object.is(..)`

const isActive = true; // set to `true` to activate the polyfill, or `false` to skip it

if (!Object.is || isActive) {
	Object.is = function ObjectIs(value1, value2) { 
        const isNegativeZero = (value) => typeof value === "number" && (1 / value) === -Infinity;
        if (isNegativeZero(value1) || isNegativeZero(value2)) {
            return isNegativeZero(value1) && isNegativeZero(value2);
        }
        return (value1 === value2) || (value1 !== value1 && value2 !== value2) ;
    };
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);