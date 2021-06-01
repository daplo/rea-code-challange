<template>
	<div class="page">
		<Header />

		<section class="main">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 results">
						<div class="row">
							<div class="col-12">
								<h3>Results</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<Property
									v-for="item in properties"
									:item="item"
									:isSaved="false"
									:key="item.id"
								></Property>
							</div>
						</div>
					</div>
					<div class="col-lg-6 saved">
						<div class="row">
							<div class="col-12">
								<h3>Saved Properties</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<Property
									v-for="item in savedProperties"
									:item="item"
									:isSaved="true"
									:key="item.id"
								></Property>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Header from '@/components/Header';
import Property from '@/components/Property';
export default {
	components: {
		Property, Header
	},
	data() {
		return {};
	},

	computed: {
		properties() {
			return this.$store.getters.getResults;
		},
		savedProperties() {
			return this.$store.getters.getSaved;
		},
	},
};
</script>

<style>
.container {
	margin: 2rem auto;
	padding-bottom: 2rem;
	border-bottom: 1px solid #ccc;
	justify-content: center;
	display: flex;
	align-items: center;
	flex-direction: column;
}

@media screen and (min-width: 1200px) {
	.results,
	.saved {
		min-width: 500px;
	}
}
</style>
