function arrToBST(arr) {
    console.log(arr)
    if (!arr.length) return null

    let midPoint = Math.floor((arr.length - 1) / 2)
    let node = new Node(arr[midPoint])
    let left = arr.slice(0, midPoint)
    let right = arr.slice(midPoint + 1, arr.length)

    node.left = arrToBST(left)
    node.right = arrToBST(right)

    return node
}

// Cleaner Solution:

function arrToBST(arr) {
    if (!arr.length) return null

    let midPoint = Math.floor((arr.length - 1) / 2)
    let node = new Node(arr[midPoint])
    node.left = arrToBST(arr.slice(0, midPoint))
    node.right = arrToBST(arr.slice(midPoint + 1, arr.length))

    return node
}