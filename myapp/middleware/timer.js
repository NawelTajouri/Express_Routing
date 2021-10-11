const timer = (req, res, next) => {
    let dat = new Date()
    let day = dat.getDay();
    console.log(day)

    let hours = dat.getHours();
    console.log(hours)
    if (day == 6 || hours < 8 || hours > 19) {
        res.send("do not have permissions. outside timing!")
    } else {
        next();
    }
}
module.exports = timer