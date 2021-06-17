class Node {
    constructor(data) {
        this.data = data
    }
}


// console.log(x)
let obj = {}
let maxLevel = -1
function printLeftView(root, level) {
    if (!root) return
    if (level > maxLevel) {
        obj[level] = root.data
        maxLevel = level
    }
    printLeftView(root.left, level + 1)
    printLeftView(root.right, level + 1)

    return obj
}