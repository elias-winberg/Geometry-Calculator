"use strict";
/**
 * Returns the total area of multiple IGeometricShapes.
 * @export
 * @param {Array<IGeometricShape>} array - the array of IGeometricShapes
 * @returns {number} the area
 */
function calculateTotalArea(array) {
    return array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.area();
    }, 0);
}
exports.calculateTotalArea = calculateTotalArea;
//# sourceMappingURL=util.js.map