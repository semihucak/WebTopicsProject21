import * as THREE from 'https://unpkg.com/three@0.123.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.123.0/examples/jsm/loaders/GLTFLoader.js';
import { VRButton } from '../three/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

const geometry = new THREE.BoxGeometry(500, 500, 500);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: false});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 1000;

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

renderer.setAnimationLoop( function () {

	renderer.render( scene, camera );

} );

render();