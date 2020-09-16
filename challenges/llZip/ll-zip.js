const LL = require('../data-structure/linked-list/linkedlist');
function zipLists(list1, list2) {
    let zippedLL = new LL();
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;

    while (currentNode1 || currentNode2) {

        if (currentNode1) {
            zippedLL.append(currentNode1.val);
            currentNode1 = currentNode1.next;
        }
        if (currentNode2) {
            zippedLL.append(currentNode2.val);
            currentNode2 = currentNode2.next;
        }
    }

    return zippedLL;
}

module.exports = zipLists;