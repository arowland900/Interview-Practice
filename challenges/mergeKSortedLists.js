var mergeKLists = function (lists) {

    if (lists.length == 0) return null

    let a = new ListNode()
    let map = new Map()
    let count = 0

    for (let i = 0; i < lists.length; i++) {
        let n = lists[i]
        if (n) {
            while (n.next) { addToMap(map, n); n = n.next; }
            addToMap(map, n)
        }
    }

    map = new Map([...map.entries()].sort((a, b) => parseInt(a) - parseInt(b)));
    mapToList(map, a)
    return (a.val || a.next) ? a : null

    function addToMap(m, n) {
        count++
        if (m.has(n.val)) m.set(n.val, m.get(n.val) + 1)
        else m.set(n.val, 1)
    }

    function mapToList(m, a) {
        for (let [k, v] of m) {
            count--
            a.val = k

            if (count) a.next = new ListNode()
            else a.next = null

            if (v > 1) m.set(k, v - 1)
            if (v == 1) m.delete(k)

            mapToList(m, a.next)
        }
    }


};