
// Add three js

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,                                   // Field of view
    window.innerWidth/window.innerHeight, // Aspect ratio
    0.1,                                  // Near clipping pane
    1000                                  // Far clipping pane
);

// Reposition the camera
camera.position.set(0,30,50);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0,15,0));

var renderer = new THREE.WebGLRenderer({ antialias: true });

// Size should be the same as the window
renderer.setSize( window.innerWidth, window.innerHeight );

// Set a near white clear color (default is black)
renderer.setClearColor( 0xeeeeee );

// Append to the document
document.body.appendChild( renderer.domElement );




var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', function() { renderer.render(scene, camera); } );

// document.body.appendChild(scene);

// The second shape
var geometry = new THREE.OctahedronGeometry(10,1);
var material = new THREE.MeshStandardMaterial( {
    color: 0xff0051,
    flatShading: true, // default is THREE.SmoothShading
    metalness: 0,
    roughness: 1
} );

var shapeOne = new THREE.Mesh(geometry, material);
shapeOne.position.y += 10;
scene.add(shapeOne);

var ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
scene.add( ambientLight );

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

pointLight.shadow.camera.near = 1
pointLight.shadow.camera.far = 100
pointLight.shadow.camera.visible = true


shapeOne.castShadow = true;
shapeOne.receiveShadow = true;

var shadowMaterial = new THREE.ShadowMaterial( { color: 0xeeeeee } );
shadowMaterial.opacity = 0.5;

// this.rotationSpeed = Math.random() * 0.02 + 0.005;
// this.rotationPosition = Math.random();

// geometry.prototype.updatePosition = function() {
//     this.rotationPosition += this.rotationSpeed;
//     this.rotation.y = (Math.sin(this.rotationPosition));
// };

// A basic material that shows the ground
var plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({
        color: 0xffffff,
        // wireframe: true
    }) 
)
plane.position.y = -1
plane.rotation.x = -Math.PI/2
scene.add(plane)
plane.receiveShadow = true


// Render the scene/camera combination
function render() {
    // Update camera position based on the controls
    controls.update();
    shapeOne.rotateX(Math.random() * 0.02 );
    shapeOne.rotateY(Math.random() * 0.02 );
    shapeOne.rotateZ(Math.random() * 0.02 );

    requestAnimationFrame( render );
    renderer.render( scene, camera );

}
requestAnimationFrame(render);