function adjScore(mark) {

    let countpassed = 0;
    for (let arr = 0; arr < mark.length; arr++) {

        if (mark[arr] < 40) {
            mark[arr] += 20;
        }

        if (mark[arr] > 90) {
            mark[arr] = 90;
        }

        if (mark[arr] >= 50) {
            countpassed++;
        }
    }
    console.log("adjusted mark:", mark)
    console.log("number of students passed:", countpassed)

}
const arr = [35, 50, 63, 91, 95, 45, 63, 49, 55, 68]
adjScore(arr)


