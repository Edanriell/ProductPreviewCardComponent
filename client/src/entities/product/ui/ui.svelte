<script lang="ts">
	import { onMount } from "svelte";
	import { css } from "@emotion/css";
	import Skeleton from "svelte-skeleton/Skeleton.svelte";

	import { Button } from "@shared/ui/button";
	import { Icon } from "@shared/ui/icon";

	import { getProductQuery } from "../api";
	import { type Product } from "../model";

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
			width: 100%;
			max-height: 240vw;
			@media (width >= 768px) {
				max-width: 30rem;
				max-height: unset;
				height: 45rem;
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
				height: 1.8rem;
				margin-bottom: 1.2rem;
				@media (width >= 768px) {
					margin-bottom: 2rem;
				}
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 3.2rem;
				margin-bottom: 0.4rem;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 3.2rem;
				margin-bottom: 0.4rem;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 3.2rem;
				margin-bottom: 1.6rem;
				@media (width >= 768px) {
					margin-bottom: 2.4rem;
				}
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 1.4rem;
				margin-bottom: 0.4rem;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 1.4rem;
				margin-bottom: 0.4rem;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 1.4rem;
				margin-bottom: 0.4rem;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 1.4rem;
				margin-bottom: 2.4rem;
				@media (width >= 768px) {
					margin-bottom: 2.9rem;
				}
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 3.2rem;
				margin-bottom: 2rem;
				@media (width >= 768px) {
					margin-bottom: 3rem;
				}
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
			<div class={css`
				height: 4.799rem;
				border-radius: 0.8rem;
				overflow: hidden;
			`}>
				<Skeleton width="100%" height="100%" >
					<rect width="100%" height="100%"/>
				</Skeleton>
			</div>
		{/if}
	</div>
</article>