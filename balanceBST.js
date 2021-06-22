var balanceBST = function (root) {
    let arr = []
    bstToArr(root)
    return buildTree(0, arr.length - 1)
    function bstToArr(node) {
        if (node) {
            if (node.left) bstToArr(node.left)
            arr.push(node)
            if (node.right) bstToArr(node.right)
        }
    }

    function buildTree(l, r) {
        let node = null;
        if (l <= r) {
            let midPoint = l + Math.floor((r - l) / 2);
            node = arr[midPoint];
            node.left = buildTree(l, midPoint - 1);
            node.right = buildTree(midPoint + 1, r);
        }
        return node;
    }

};