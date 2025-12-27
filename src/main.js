import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { call } from "three/tsl";

// initialize the scene
const scene = new THREE.Scene();

//add texture loader
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader()
cubeTextureLoader.setPath('./textures/cube-map/')

//add textures
const sunTexture = textureLoader.load("./textures/2k_sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace
const mercuryTexture = textureLoader.load("./textures/planets/2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load("./textures/planets/2k_venus.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load("./textures/planets/2k_earth.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load("./textures/moons/earth/2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load("./textures/planets/2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const deimosTexture = textureLoader.load("./textures/moons/mars/Deimos.jpg");
deimosTexture.colorSpace = THREE.SRGBColorSpace
const phobosTexture = textureLoader.load("./textures/moons/mars/phobos.jpg");
phobosTexture.colorSpace = THREE.SRGBColorSpace
const jupiterTexture = textureLoader.load("./textures/planets/2k_jupiter.jpg");
jupiterTexture.colorSpace = THREE.SRGBColorSpace
const callistoTexture = textureLoader.load("./textures/moons/jupiter/Callisto.jpg");
callistoTexture.colorSpace = THREE.SRGBColorSpace
const europaTexture = textureLoader.load("./textures/moons/jupiter/Europa.jpg");
europaTexture.colorSpace = THREE.SRGBColorSpace
const ganymedeTexture = textureLoader.load("./textures/moons/jupiter/Ganymede.jpg");
ganymedeTexture.colorSpace = THREE.SRGBColorSpace
const ioTexture = textureLoader.load("./textures/moons/jupiter/Io.jpg");
ioTexture.colorSpace = THREE.SRGBColorSpace
const saturnTexture = textureLoader.load("./textures/planets/2k_saturn.jpg");
saturnTexture.colorSpace = THREE.SRGBColorSpace
const titanTexture = textureLoader.load("./textures/moons/saturn/Titan.jpg");
titanTexture.colorSpace = THREE.SRGBColorSpace
const rheaTexture = textureLoader.load("./textures/moons/saturn/Rhea.jpg");
rheaTexture.colorSpace = THREE.SRGBColorSpace
const iapetusTexture = textureLoader.load("./textures/moons/saturn/Iapetus.jpg");
iapetusTexture.colorSpace = THREE.SRGBColorSpace
const dioneTexture = textureLoader.load("./textures/moons/saturn/Dione.jpg");
dioneTexture.colorSpace = THREE.SRGBColorSpace
const tethysTexture = textureLoader.load("./textures/moons/saturn/Tethys.jpg");
tethysTexture.colorSpace = THREE.SRGBColorSpace 
const uranusTexture = textureLoader.load("./textures/planets/2k_uranus.jpg");
uranusTexture.colorSpace = THREE.SRGBColorSpace
const titaniaTexture = textureLoader.load("./textures/moons/uranus/Titania.jpg");
titaniaTexture.colorSpace = THREE.SRGBColorSpace
const oberonTexture = textureLoader.load("./textures/moons/uranus/Oberon.jpg");
oberonTexture.colorSpace = THREE.SRGBColorSpace
const umbrielTexture = textureLoader.load("./textures/moons/uranus/Umbriel.jpg");
umbrielTexture.colorSpace = THREE.SRGBColorSpace
const arielTexture = textureLoader.load("./textures/moons/uranus/Ariel.jpg");
arielTexture.colorSpace = THREE.SRGBColorSpace
const mirandaTexture = textureLoader.load("./textures/moons/uranus/Miranda.jpg");
mirandaTexture.colorSpace = THREE.SRGBColorSpace
const neptuneTexture = textureLoader.load("./textures/planets/2k_neptune.jpg");
neptuneTexture.colorSpace = THREE.SRGBColorSpace
const tritonTexture = textureLoader.load("./textures/moons/neptune/triton.jpg");
tritonTexture.colorSpace = THREE.SRGBColorSpace
const nereidTexture = textureLoader.load("./textures/moons/neptune/Nereid.jpg");
nereidTexture.colorSpace = THREE.SRGBColorSpace
const proteusTexture = textureLoader.load("./textures/moons/neptune/Proteus.jpg");
proteusTexture.colorSpace = THREE.SRGBColorSpace
const larissaTexture = textureLoader.load("./textures/moons/neptune/Larissa.jpg");
larissaTexture.colorSpace = THREE.SRGBColorSpace
const backgroundCubeMap = cubeTextureLoader.load([
  "px.png",
  "nx.png",
  "py.png",
  "ny.png",
  "pz.png",
  "nz.png",
]);
scene.background = backgroundCubeMap;


//add materials
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
});
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
});
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
});
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
});
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
});
const deimosMaterial = new THREE.MeshStandardMaterial({
  map: deimosTexture,
});
const phobosMaterial = new THREE.MeshStandardMaterial({
  map: phobosTexture,
});
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture,
});
const callistoMaterial = new THREE.MeshStandardMaterial({
  map: callistoTexture,
});
const europaMaterial = new THREE.MeshStandardMaterial({
  map: europaTexture,
});
const ganymedeMaterial = new THREE.MeshStandardMaterial({
  map: ganymedeTexture,
}); 
const ioMaterial = new THREE.MeshStandardMaterial({
  map: ioTexture,
});
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture,
});
const titanMaterial = new THREE.MeshStandardMaterial({
  map: titanTexture,
});
const rheaMaterial = new THREE.MeshStandardMaterial({
  map: rheaTexture,
});
const iapetusMaterial = new THREE.MeshStandardMaterial({
  map: iapetusTexture,
});
const dioneMaterial = new THREE.MeshStandardMaterial({
  map: dioneTexture,
});
const tethysMaterial = new THREE.MeshStandardMaterial({
  map: tethysTexture,
});
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: uranusTexture,
});
const titaniaMaterial = new THREE.MeshStandardMaterial({
  map: titaniaTexture,
});
const oberonMaterial = new THREE.MeshStandardMaterial({
  map: oberonTexture,
});
const umbrielMaterial = new THREE.MeshStandardMaterial({
  map: umbrielTexture,
});
const arielMaterial = new THREE.MeshStandardMaterial({
  map: arielTexture,
});
const mirandaMaterial = new THREE.MeshStandardMaterial({
  map: mirandaTexture,
});
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture,
});
const tritonMaterial = new THREE.MeshStandardMaterial({
  map: tritonTexture,
});
const nereidMaterial = new THREE.MeshStandardMaterial({
  map: nereidTexture,
});
const proteusMaterial = new THREE.MeshStandardMaterial({
  map: proteusTexture,
});
const larissaMaterial = new THREE.MeshStandardMaterial({
  map: larissaTexture,
});


/// add stuff here
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

const sun = new THREE.Mesh(sphereGeometry, sunMaterial);
sun.scale.setScalar(5);
scene.add(sun);

const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
        material: moonMaterial,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
        material: phobosMaterial,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
        material: deimosMaterial,
      },
    ],
  },
  {
  name: "Jupiter",
  radius: 3.5,
  distance: 35,
  speed: 0.0015,
  material: jupiterMaterial,
  moons: [
    {
      name: "Io",
      radius: 0.25,
      distance: 2.5,
      speed: 0.03,
      material: ioMaterial,
    },
    {
      name: "Europa",
      radius: 0.22,
      distance: 3.5,
      speed: 0.025,
      material: europaMaterial,
    },
    {
      name: "Ganymede",
      radius: 0.4,     // largest moon in solar system
      distance: 5,
      speed: 0.02,
      material: ganymedeMaterial,
    },
    {
      name: "Callisto",
      radius: 0.35,
      distance: 6.5,
      speed: 0.015,
      material: callistoMaterial,
    }
  ],
},
{
  name: "Saturn",
  radius: 3,
  distance: 45,
  speed: 0.001,
  material: saturnMaterial,
  moons: [
    {
      name: "Titan",
      radius: 0.4,
      distance: 5,
      speed: 0.02,
      material: titanMaterial,
    },
    {
      name: "Rhea",
      radius: 0.18,
      distance: 6.5,
      speed: 0.015,
      material: rheaMaterial,
    },
    {
      name: "Iapetus",
      radius: 0.2,
      distance: 8,
      speed: 0.01,
      material: iapetusMaterial,
    },
    {
      name: "Dione",
      radius: 0.15,
      distance: 7,
      speed: 0.017,
      material: dioneMaterial,
    },
    {
      name: "Tethys",
      radius: 0.14,
      distance: 6,
      speed: 0.018,
      material: tethysMaterial,
    },
  ],
},
{
  name: "Uranus",
  radius: 2.5,
  distance: 60,
  speed: 0.0007,
  material: uranusMaterial,
  moons: [
    {
      name: "Titania",
      radius: 0.22,
      distance: 4,
      speed: 0.02,
      material: titaniaMaterial,
    },
    {
      name: "Oberon",
      radius: 0.21,
      distance: 4.8,
      speed: 0.018,
      material: oberonMaterial,
    },
    {
      name: "Umbriel",
      radius: 0.17,
      distance: 3.2,
      speed: 0.025,
      material: umbrielMaterial,
    },
    {
      name: "Ariel",
      radius: 0.18,
      distance: 2.7,
      speed: 0.028,
      material: arielMaterial,
    },
    {
      name: "Miranda",
      radius: 0.12,
      distance: 2,
      speed: 0.035,
      material: mirandaMaterial,
    },
  ],
},
{
  name: "Neptune",
  radius: 2.4,
  distance: 75,
  speed: 0.0005,
  material: neptuneMaterial,
  moons: [
    {
      name: "Triton",
      radius: 0.27,
      distance: 4,
      speed: -0.02, // retrograde orbit (realistic)
      material: tritonMaterial,
    },
    {
      name: "Nereid",
      radius: 0.15,
      distance: 7,
      speed: 0.006,
      material: nereidMaterial,
    },
    {
      name: "Proteus",
      radius: 0.18,
      distance: 3,
      speed: 0.025,
      material: proteusMaterial,
    },
    {
      name: "Larissa",
      radius: 0.1,
      distance: 2.5,
      speed: 0.03,
      material: larissaMaterial,
    },
  ],
}
];

const createPlanetMesh = (planet) => {
  const planetMesh = new THREE.Mesh(
    sphereGeometry,
    planet.material
  );
  planetMesh.scale.setScalar(planet.radius);
  planetMesh.position.x = planet.distance;
  
  return planetMesh;
}

const createMoonMesh = (moon) => {
  const moonMesh = new THREE.Mesh(
    sphereGeometry,
    moon.material
  );
  moonMesh.scale.setScalar(moon.radius);
  moonMesh.position.x = moon.distance;
  return moonMesh;
}

const planetMeshes = planets.map((planet, planetIndex) => {
  const planetMesh = createPlanetMesh(planet);
  scene.add(planetMesh);

  // Store speed on the planet itself
  planetMesh.userData.speed = planet.speed;
  planetMesh.userData.distance = planet.distance;

  // Handle Saturn Rings
  if (planet.name === "Saturn") {
    const ringGeometry = new THREE.RingGeometry(
    1.2,  // Inner radius (slightly larger than the planet's edge)
    1.8,  // Outer radius (how far the ring extends)
    64    // Segments
  );
    const ringMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("./textures/planets/2k_saturn_ring_alpha.png"),
      side: THREE.DoubleSide,
      transparent: true,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.userData.type = "ring"; // Label it so we don't animate it like a moon
    planetMesh.add(ring);
  }

  // Handle Moons
  planet.moons.forEach((moon) => {
    const moonMesh = createMoonMesh(moon);
    moonMesh.userData.speed = moon.speed;     // Store speed on the moon mesh
    moonMesh.userData.distance = moon.distance; // Store distance on the moon mesh
    moonMesh.userData.type = "moon";          // Label it
    planetMesh.add(moonMesh);
  });

  return planetMesh;
});

//add light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 20);
scene.add(pointLight);
//initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 100;
camera.position.y = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20

// add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



// render loop
const renderloop = () => {
  planetMeshes.forEach((planet) => {
    // Rotate and position the planet
    planet.rotation.y += planet.userData.speed;
    planet.position.x = Math.sin(planet.rotation.y) * planet.userData.distance;
    planet.position.z = Math.cos(planet.rotation.y) * planet.userData.distance;

    // Animate children (only if they are moons)
    planet.children.forEach((child) => {
      if (child.userData.type === "moon") {
        child.rotation.y += child.userData.speed;
        child.position.x = Math.sin(child.rotation.y) * child.userData.distance;
        child.position.z = Math.cos(child.rotation.y) * child.userData.distance;
      }
    });
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();