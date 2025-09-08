

function majorityElement(nums) {
    let n =nums.length;

    for (let i = 0; i < n; i++) {
        console.log(nums[i]);
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
        if (count > n / 2) {
            return nums[i];
        }
    }
    return -1;
}

let arr = [2, 2, 1, 5,5,5,5,5,5,5,5];
console.log(majorityElement(arr));