## aframe-stereocam-component

This component should be attached to an <a-camera> entity. It hunts for a THREE.PerspectiveCamera and modifies the layers it can see.

### properties

| Property |               Description                |  Default Value   |
| :------: | :--------------------------------------: | :--------------: |
|   eye    | Whether to enable layer 1 and/or layer 2 | 'left' (layer 1) |

- If 'eye' is 'left': the first layer is enabled i.e. camera.layers.enable(1)
- If 'eye' is 'right': the second layer is enabled i.e. camera.layers.enable(2)
- If 'eye' is 'both': both layers are enabled

Why is this useful? In VR, sometimes you want to show things to one eye but
not the other (stereo panoramas for instance). This can be done by restricting
an Object3D to either layer 1 [(visible to the left eye) or layer 2 (visible
to the right eye)](https://github.com/mrdoob/three.js/blob/0950e5b6e8bceb520c154f45b5c240af45f0ed11/src/renderers/webxr/WebXRManager.js#L41). Nothing wrong with this except that outside of VR the
camera can only see layer 0. By enabling layer 1 and/or 2, this component
helps make sure objects are visible outside of VR.

## usage

### browser

Install and use by directly including the [browser files](dist):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My A-Frame Scene</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <!-- TODO: Add jsdelivr link -->
  </head>
  <body>
    <a-scene renderer="antialias: true">
      <!--
        stereocam="eye:left" allows the camera to see meshes visible in layer 1
        only.
      -->
      <a-entity id="camera" camera stereocam="eye:left;"> </a-entity>

      <!-- A-Frame hello world -->
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC65D"
      ></a-cylinder>
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
      ></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
    <script>
      const box = document.querySelector("a-box");
      const cylinder = document.querySelector("a-cylinder");

      // Make the box visible by the left eye only.
      setLayer(box, 1);

      // Make the cylinder visible by the right eye only.
      setLayer(cylinder, 2);

      function setLayer(el, layer) {
        const mesh = el.getObject3D("mesh");
        mesh.layers.set(layer);
      }
    </script>
  </body>
</html>
```

### npm

Alternatively, install via npm:

```bash
npm install aframe-stereocam-component
```

Then register and use.

```js
require("aframe");
require("aframe-stereocam-component");
```

## local development

### prerequisites

- `node.js` and `npm`
- OpenSSL (if HTTPS is needed for local dev)

### install

1. Clone this repo
2. `npm install`

### run

```bash
npm run dev

# if https is needed
npm run dev-ssl
```

This will start a local dev server.

### new releases

Once new features/bug fixes are merged into master.

1. Increment package version in `package.json` ([semver](https://semver.org/) is recommended).
2. `npm run dist`
3. Commit the newly generated `./dist` files.
4. `npm publish`
5. Update jsdelivr CDN links in this README to point to new version.
6. Draft a new release on GitHub, add a changelog describing what has changed since the last release.

## references

This component is based on Óscar Marín Miró's [aframe-stereo-component](https://github.com/oscarmarinmiro/aframe-stereo-component).
