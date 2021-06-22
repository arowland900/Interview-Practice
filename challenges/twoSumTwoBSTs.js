// Solution #1
var twoSumBSTs = function (root1, root2, target) {
    let map1 = new Map()
    let map2 = new Map()

    function bstToArr(node, map) {
        map.set(node.val)
        if (node.left) bstToArr(node.left, map)
        if (node.right) bstToArr(node.right, map)
    }

    bstToArr(root1, map1)
    bstToArr(root2, map2)
    console.log(map1, map2)
    for (let [k, v] of map1) {
        let comb = target - k
        if (map2.has(comb)) return true
    }
    return false
};

// Solution #2
var twoSumBSTs = function (root1, root2, target) {
    let map1 = new Map()
    let answer = false
    function bstToArr(node, map) {
        map.set(target - node.val)
        if (node.left) bstToArr(node.left, map)
        if (node.right) bstToArr(node.right, map)
    }
    function traverseCheck(node) {
        if (node) {
            if (map1.has(node.val)) return answer = true
            if (node.left) traverseCheck(node.left)
            if (node.right) traverseCheck(node.right)
        }
    }

    bstToArr(root1, map1)
    traverseCheck(root2)
    return answer
};