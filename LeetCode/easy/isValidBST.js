var isValidBST = function (root) {
  if (!root) return true;
  if (root.val < root.left?.val || root.val > root.right?.val) return false;
  if (!root.left && !root.right) return true;
  // console.log({ left: isValidBST(root.left), right: isValidBST(root.left) });
  return isValidBST(root.left) && isValidBST(root.left);
};

function helper(root, min, max) {
  if (!root) {
    return true; // We hit the end of the path
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false; // current node's val doesn't satisfy the BST rules
  }

  // Continue to scan left and right
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

module.exports = isValidBST;
