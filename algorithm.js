function rand(min, max){
    return Math.random()*(max-min+1)+min
}

function liner(start, end, x){
    return (1 - x) * start + x * end
}

function easing(start, end, x){
    let dis = end - start
    return (6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3) * dis + start
}