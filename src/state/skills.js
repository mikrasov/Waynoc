export default function(xp) {
    // quadratic formula for each level costing 1 xp more than previous
    return Math.floor((Math.sqrt(8 * xp + 1) - 1)/2)
}
