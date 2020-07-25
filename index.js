/* global AFRAME */

if (typeof AFRAME === "undefined") {
  throw new Error(
    "Component attempted to register before AFRAME was available."
  );
}

/**
 * This component modifies the layers [0] visible to a THREE.Object3D (particularly
 * meshes and cameras).
 * ---
 *  [0] - https://threejs.org/docs/index.html#api/en/core/Layers
 */
AFRAME.registerComponent("layers", {
  // A-Frame's built-in array type wasn't working, so an array-like string will
  // be parsed manually. e.g. "1, 2, 3" => [1, 2, 3].
  schema: {
    default: "0",
  },

  update: function (oldData) {
    const el = this.el;
    const data = this.data;
    const layerNumbers = data.split(",").map(Number);

    // To manipulate layers of both camera AND meshes, iterate through all
    // Object3Ds associated with the entity this component is attached to.
    const objectMap = el.object3DMap;
    for (let obj of Object.values(objectMap)) {
      if (!obj.layers) {
        return;
      }

      // Reset
      obj.layers.disableAll();

      // Apply
      for (let num of layerNumbers) {
        obj.layers.enable(num);
      }
    }
  },
});
