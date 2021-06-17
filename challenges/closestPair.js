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


// Best Solution
// Time Complexity: O(n + m)
function closestPair(target, leftNums, rightNums) {
    leftNums = Array.from(new Set(leftNums)).sort((a, b) => b - a)
    rightNums = Array.from(new Set(rightNums)).sort((a, b) => a - b)

    let bestPair = [leftNums[0], rightNums[0]];
    let bestPairValue = bestPair[0] + bestPair[1];
    let i = 0, j = 0

    while (i < leftNums.length && j < rightNums.length) {
        let newPair = [leftNums[i], rightNums[j]]
        let value = newPair[0] + newPair[1]

        if (value == target) return newPair
        else if (value < target) j++
        else i++

        if (Math.abs(value - target) < Math.abs(bestPairValue - target)) {
            bestPair = newPair
            bestPairValue = value
        }
        console.log(newPair, bestPair)
    }
    return bestPair
}