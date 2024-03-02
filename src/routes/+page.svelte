<script lang="ts">
    import { browser } from "$app/environment";
    import * as THREE from "three";

    if (browser) {
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let object: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            const geometry = new THREE.SphereGeometry(1, 6, 6);

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color1: {
                        value: new THREE.Color("red")
                    },
                    color2: {
                        value: new THREE.Color("purple")
                    }
                },
                vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
                fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;

    varying vec2 vUv;

    void main() {

      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
                wireframe: true
            });
            object = new THREE.Mesh(geometry, material);
            scene.add(object);

            camera.position.z = 5;
        };

        const render = () => {
            renderer.clear();
            renderer.render(scene, camera);
        };

        const animate = () => {
            requestAnimationFrame(animate);

            object.rotation.x += 0.005;
            object.rotation.y += 0.005;

            render();
        };

        init();
        animate();
    }
</script>

<div class="absolute top-64 w-full flex justify-center">
    <h1 class="text-6xl">
        tutorconnect
    </h1>
</div>


<style>
    * {
        background-color: black;
        color: white;
    }
</style>