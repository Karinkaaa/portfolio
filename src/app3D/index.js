import * as THREE from "three";
import disc from "../assets/disc.png";
import { MAIN_ID } from "../utils/ids";

const App3D = () => {
  let camera, scene, renderer, material;
  let mouseX = 0,
    mouseY = 0;

  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      2,
      2000
    );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const sprite = new THREE.TextureLoader().load(disc);

    for (let i = 0; i < 1000; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;

      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    material = new THREE.PointsMaterial({
      size: 50,
      sizeAttenuation: false,
      map: sprite,
      alphaTest: 0.5,
      transparent: true,
    });
    material.color.setHSL(1.0, 0.3, 0.7);

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById(MAIN_ID).appendChild(renderer.domElement);
    document.body.style.touchAction = "none";
    document.body.addEventListener("pointermove", onPointerMove);

    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onPointerMove(event) {
    if (event.isPrimary === false) return;

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    const time = Date.now() * 0.00005;

    camera.position.x += (mouseX - camera.position.x) * 0.007;
    camera.position.y += (-mouseY - camera.position.y) * 0.007;
    camera.lookAt(scene.position);

    const h = ((360 * (1.0 + time)) % 360) / 360;

    material.color.setHSL(h, 0.5, 0.5);
    renderer.render(scene, camera);
  }
};

export default App3D;
