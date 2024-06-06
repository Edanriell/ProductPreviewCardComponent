<script lang="ts">
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

	import { Button } from "@shared/ui/button";
	import { Icon } from "@shared/ui/icon";
</script>

<article class="{ productPreviewCard }">
	<div>
		<picture>
			<source type="image/jpeg" srcset="{productImage768}" media="(min-width: 768px)">
			<source type="image/jpeg" srcset="{productImage375}" media="(min-width: 375px)">
			<img class="{ productPreviewCardImage }" src="{productImage375}" alt="Image of Gabrielle Essence Eau De Parfum">
		</picture>
	</div>
	<div class="{ productPreviewCardContent }">
		<p class="{ productPreviewCardCategory }">Perfume</p>
		<h2 class="{ productPreviewCardTitle }">Gabrielle Essence Eau De Parfum</h2>
		<p class="{ productPreviewCardDescription }">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
		<p class="{ productPreviewCardOriginalPrice }">$149.99<small class="{ productPreviewCardDiscountedPrice }">$169.99</small></p>
		<Button>
			<span slot="icon">
				<Icon iconType="cart" />
			</span>
			Add to Cart
		</Button>
	</div>
</article>