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