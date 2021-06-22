// Solution #1
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

// Solution #2
var balanceBST = function (root) {
    let first = null;
    let last = null;
    let count = 0;
    function dfs(cur) {
        if (cur.left) dfs(cur.left);
        if (!last) {
            last = cur;
            first = cur;
        } else {
            last.right = cur;
            last = cur;
        }
        count++;
        if (cur.right) dfs(cur.right);
    }

    dfs(root);

    function treeBuilder(l, r) {
        if (l > r) return null;

        let mid = ~~((l + r) / 2);
        let lft = treeBuilder(l, mid - 1);
        let cur = first;
        cur.left = lft;
        first = first.right;

        let rit = treeBuilder(mid + 1, r);
        cur.right = rit;
        return cur;
    }
    return treeBuilder(0, count - 1)
};