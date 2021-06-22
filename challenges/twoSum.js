var twoSum = function (nums, target) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let c = target - nums[i]

        if (map.has(c)) return [map.get(c), i]
        map.set(nums[i], i)
    }

};