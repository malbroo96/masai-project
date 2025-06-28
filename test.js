function subOfSubarray(N, K, arr) {
    //write your code here
    for (let i = 0; i < N; i++) {
        let res = 0;
        for (let j = i; j < N; j++) {

            res += arr[j]
            if (res === K) {
                console.log("Yes")
                return
            }

        }

    }
    console.log("No")




}