// Brute Force:

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