"use strict";

import { IGeometricShape } from "./shapes";

/**
 * Returns the total area of multiple IGeometricShapes.
 * @export
 * @param {Array<IGeometricShape>} array - the array of IGeometricShapes
 * @returns {number} the area
 */
export function calculateTotalArea(array: Array<IGeometricShape>) {
    return array.reduce((previousValue: number, currentValue) => {
        return previousValue + currentValue.area();
    }, 0);
}