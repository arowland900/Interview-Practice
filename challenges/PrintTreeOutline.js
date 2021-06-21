let leftMax = -1
function printLeftView(root, level = 0, result = []) {
    if (!root) return null
    if (leftMax < level) {
        result.unshift(root.data)
        leftMax = level
    }

    printLeftView(root.left, level + 1, result)
    printLeftView(root.right, level + 1, result)

    return result
}

let rightMax = -1
function printRightView(root, level = 0, result = []) {
    if (!root) return null
    if (rightMax < level && level > 0) {
        result.push(root.data)
        rightMax = level
    }

    printRightView(root.right, level + 1, result)
    printRightView(root.left, level + 1, result)

    return result
}

function printTreeOutline(root) {
    return printLeftView(root).concat(printRightView(root))
}