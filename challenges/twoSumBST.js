// Solution #1
var findTarget = function (root, k, map = new Map()) {
    if (!root) return false

    let complement = k - root.val;
    if (map.has(complement)) { return true; }
    map.set(root.val)

    return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};

// Solution #2
var findTarget = function (root, k) {
    if (!root) return false;
    const set = new Set();
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return false;
};