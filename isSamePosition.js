module.exports = function isSamePosition(point1, point2) {
    var dx = Math.abs(point1.x - point2.x);
    var dy = Math.abs(point1.y - point2.y);
    var dz = Math.abs(point1.z - point2.z);
    var dt = Math.abs(point1.t - point2.t);

    return (dx < 1e-8 && dy < 1e-8 && dz < 1e-8 && dt < 1e-8);
};
