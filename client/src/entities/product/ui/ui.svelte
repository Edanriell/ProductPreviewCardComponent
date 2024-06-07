<script lang="ts">
	import { onMount } from "svelte";
	import { css } from "@emotion/css";
	import Skeleton from "svelte-skeleton/Skeleton.svelte";

	import { Button } from "@shared/ui/button";
	import { Icon } from "@shared/ui/icon";

	import { getProductQuery } from "../api";
	import { type Product } from "../model";

	import productImage375 from "./assets/product-image-375.jpg";
	import productImage768 from "./assets/product-image-768.jpg";

	import {
		productPreviewCard,
		productPreviewCardImage,
		productPreviewCardContent,
		productPreviewCardCategory,
		productPreviewCardTitle,
		productPreviewCardDescription,
		productPreviewCardOriginalPrice,
		productPreviewCardDiscountedPrice
	} from "./styles";

	let productData: Product | null = null;

	onMount(async () => {
		const { product } = await getProductQuery();
		productData = product;
	})
</script>

<article class="{ productPreviewCard }">
	{#if productData}
		<div>
			<picture>
				<source type="image/jpeg" srcset="{productData.image.md}" media="(min-width: 768px)">
				<source type="image/jpeg" srcset="{productData.image.sm}" media="(min-width: 375px)">
				<img class="{ productPreviewCardImage }" src="{productData.image.sm}" alt={productData.name}>
			</picture>
		</div>
		{:else}
		<div class={css`
			border-radius: 0 0 3.2rem 3.2rem;
			box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
			z-index: 2;
			position: relative;
			width: 100%;
			height: 34.694rem;
			overflow: hidden;
			@media (width >= 768px) {
				width: 38.198rem;
				height: 53.495rem;
				border-radius: 3.2rem;
				box-shadow: unset;
			}
		`}>
			<Skeleton width="100%" height="100%" >
				<rect width="100%" height="100%"/>
			</Skeleton>
		</div>
	{/if}
	<div class="{ productPreviewCardContent }">
		{#if productData}
			<p class="{ productPreviewCardCategory }">{productData.category}</p>
			<h2 class="{ productPreviewCardTitle }">{productData.name}</h2>
			<p class="{ productPreviewCardDescription }">{productData.description}</p>
			<p class="{ productPreviewCardOriginalPrice }">${productData.price.new}<small class="{ productPreviewCardDiscountedPrice }">${productData.price.old}</small></p>
			<Button>
			<span slot="icon">
				<Icon iconType="cart" />
			</span>
				Add to Cart
			</Button>
			{:else}
			<div class={css`
			border-radius: 0 0 3.2rem 3.2rem;
			box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
			z-index: 2;
			position: relative;
			width: 100%;
			height: 34.694rem;
			overflow: hidden;
			@media (width >= 768px) {
				width: 38.198rem;
				height: 53.495rem;
				border-radius: 3.2rem;
				box-shadow: unset;
			}
		`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
		{/if}
	</div>
</article>