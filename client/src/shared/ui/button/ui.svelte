<script lang="ts">
	import gsap from "gsap";

	import { button, buttonText } from "./styles";

	let buttonElement: HTMLButtonElement;

	const handleMouseUp = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	}

	const handleMouseDown = () => {
		gsap.to(buttonElement, {
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	}

	const handleMouseEnter  = () => {
		gsap.set(buttonElement, {
			background: "#3d8168"
		})

		gsap.to(buttonElement, {
			background: "#1a4032",
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	}

	const handleMouseLeave  = () => {
		gsap.to(buttonElement, {
			background: "#3d8168",
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	}

	const handleTouchStart = () => {
		gsap.set(buttonElement, {
			background: "#3d8168"
		})

		gsap.to(buttonElement, {
			background: "#1a4032",
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	};

	const handleTouchEnd = () => {
		gsap.to(buttonElement, {
			background: "#3d8168",
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	};
</script>

<button
	class="{ button }"
	type="button"
	bind:this={buttonElement}
	on:mouseup={handleMouseUp}
	on:mousedown={handleMouseDown}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}>
	<slot name="icon"></slot>
	<span class="{ buttonText }">
		<slot />
	</span>
</button>