let obj = {}
function printTopView(root, level, distance) {
    if (!root) return
    if (!obj[distance]) {
        obj[distance] = [root.data, level]
    } else {
        if (obj[distance][1] > level) {
            obj[distance] = [root.data, level]
        }
    }
    printTopView(root.left, level + 1, distance - 1)
    printTopView(root.right, level + 1, distance + 1)

    return sortObjHelper(obj)
}

function sortObjHelper(obj) {
    let sortedKeys = Object.keys(obj).sort((a, b) => parseInt(a) - parseInt(b))
    let sortedValues = []
    sortedKeys.forEach(k => sortedValues.push(obj[k][0]))
    return sortedValues
}

// Slightly Cleaner:
let obj = {}
function printTopView(root, level, distance) {
    if (!root) return
    if (!obj[distance]) obj[distance] = [root.data, level]
    else if (obj[distance][1] > level) obj[distance] = [root.data, level]

    printTopView(root.left, level + 1, distance - 1)
    printTopView(root.right, level + 1, distance + 1)

    return sortObjHelper(obj)
}

function sortObjHelper(obj) {
    let sortedKeys = Object.keys(obj).sort((a, b) => parseInt(a) - parseInt(b))
    let sortedValues = []
    sortedKeys.forEach(k => sortedValues.push(obj[k][0]))
    return sortedValues
}