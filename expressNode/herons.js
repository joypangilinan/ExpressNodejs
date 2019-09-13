module.exports = (x,y,z,callback) => {
    if (x<=0 || y<=0 || z<=0) {
        setTimeout(() => {
            callback(new Error("error"), null), 2000
        })
    } else {
        s = (x+y+z)/2
            callback(null, {
                area: () => Math.sqrt(s*(s-x)*(s-y)*(s-z))
               })
    }
}