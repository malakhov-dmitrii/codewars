/**
 *
 * @param {number[]} a first circle
 * @param {number[]} b second circle
 * @param {number} r radius
 */

circleIntersection = ([a, b], [c, d], r) =>
  (((m = Math), -m.sin((x = 2 * m.acos(m.hypot(a - c, b - d) / 2 / r))) + x) *
    r *
    r) |
  0;

module.exports = circleIntersection;
