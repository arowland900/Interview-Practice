// Brute Force:
// Time Complexity: O(n^2)
function closestPair(target, leftNums, rightNums) {
    let closest = null

    for (let i = 0; i < leftNums.length; i++) {
        for (let j = 0; j < rightNums.length; j++) {
            let current = [leftNums[i], rightNums[j]]
            if (!closest || Math.abs(current[0] + current[1] - target) < Math.abs(closest[0] - closest[1] - target)) {
                closest = current
            }
        }
    }
    return closest
}

// Slight Improvement
// Time Complexity: O(n * x)

function closestPair(target, leftNums, rightNums) {
    let x = new Set(leftNums)
    let j = 1
    while (true) {
        for (let i = 0; i < rightNums.length; i++) {
            let best = target - rightNums[i]
            if (x.has(best)) return [best, rightNums[i]]
        }
        j % 2 ? target += j : target -= j
    }
}