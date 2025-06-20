function maximumOccuringElement(A, N) {
    console.log("Current array is:", A);
    console.log("Number of elements is:", N);

    let freq = {};                  // To store counts


    let maxElementKey = A[0];         // Store the element with max frequency
    let maxCountValue = 1;              // Store the max frequency

    console.log("----- One Loop: Counting & Tracking Max -----");
    for (let i = 0; i < N; i++) {
        let current = A[i];
        console.log("Current element is:", current);
        console.log(`freq of ${current}:`, freq[current]);
        
        // Update frequency count
        if (freq[current] !== undefined) {
            freq[current]++;
            console.log("Current element found in freq object, incresing its count by 1", current,  freq[current]);
        } else if (freq[current] === undefined){
            console.log("Current element not found in freq object, setting its count to 1", current, 1);
            freq[current] = 1;
            
        }
        
        console.log(`Element: ${current}, Updated Count: ${freq[current]}`);
        
        console.log("freq is:", freq);
        // Check if this is the new max or equal to max (and appears earlier)
        if (
            freq[current] > maxCountValue
        ) {
            maxCountValue = freq[current];
            maxElementKey = current;
            console.log(`New max found! Element: ${maxElementKey}, Count: ${maxCountValue}`);
        }
    }

    // console.log("Final Answer:", maxElement);
    return maxElementKey;
}

// Test Case
let arr = [0, 2, 1, 6, 1];
let N = arr.length;
maximumOccuringElement(arr, N);
