<script>
	import * as THREE from 'three';
 	import * as SC from "svelte-cubed"

	let spinX = 0;
	let spinY = 0;

	SC.onFrame(() => {
		spinX += 0.01
		spinY += 0.005
	})

</script>

<svelte:head>
	<title>Jonas Schneider Website</title>
</svelte:head>

<SC.Canvas antialias >
	<SC.Mesh geometry={new THREE.BoxGeometry()} material={new THREE.MeshStandardMaterial({ color: 0x60ff33})} position={[0,0,3]}></SC.Mesh>
	<SC.Mesh geometry={new THREE.BoxGeometry()} material={new THREE.MeshStandardMaterial({ color: 0x60ff33})} position={[0,0, 1]}></SC.Mesh>
	<SC.Mesh geometry={new THREE.BoxGeometry()} material={new THREE.MeshStandardMaterial({ color: 0x60ff33})} position={[0,0,-1]}></SC.Mesh>
	<SC.Mesh geometry={new THREE.BoxGeometry()} material={new THREE.MeshStandardMaterial({ color: 0x60ff33})} position={[0,0,-3]}></SC.Mesh>
	<SC.PerspectiveCamera position={[10,3,0]}></SC.PerspectiveCamera>
	<SC.AmbientLight intensity={0.6}></SC.AmbientLight>
	<SC.DirectionalLight position={[-2, 3, 2]}></SC.DirectionalLight>
</SC.Canvas>
