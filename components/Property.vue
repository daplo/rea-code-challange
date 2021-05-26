<template>
	<b-card no-body class="overflow-hidden mb-2 p-0" :class="isSaved ? 'remove' : 'save'">
		<b-row no-gutters>
			<b-col md="12">
				<div class="agency-logo-wrapper" :style="branding">
					<img :src="item.agency.logo" class="agency-logo" />
				</div>
				<b-card-img
					:src="item.mainImage"
					alt="Image"
					class="rounded-0"
				></b-card-img>
			</b-col>
			<b-col md="12">
				<b-card-body>
					<b-card-text>
						<h3>{{ item.price }}</h3>
					
					</b-card-text>
				</b-card-body>

        <div class="buttonOverlay">
          	<b-button
              class="addOrRemoveButton"
              @click="removeOrSave"
              size="lg"
              :variant="isSaved ? 'warning' : 'primary'">
                {{ isSaved ? "Remove" : "Add" }}
            </b-button>
        </div>
			</b-col>
		</b-row>
	</b-card>
</template>

<script>
export default {
	name: "Property",
	props: ["item", "isSaved"],

	methods: {
		removeOrSave() {
			if (this.isSaved) {
				//if property is saved - move it to results
				this.$store.dispatch("moveToPropertyToResults", this.item);
			} else {
				//if property is in results - move it to saved
				this.$store.dispatch("moveToPropertyToSaved", this.item);
			}
		},
	},
	computed: {
		branding() {
			return {
				"background-color": this.item.agency.brandingColors.primary,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
  .agency-logo {
    height: 40px;
    margin: auto;
  }

  .agency-logo-wrapper {
    padding: 2px;
    height: 44px;
    text-align: center;
  }

 .buttonOverlay {
    padding:1rem;
    position: absolute;
    z-index: 2;
    height: 10rem;
    left: 0;
    right:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:100%;
    bottom:-100%;
    z-index: 0;
    transition: .3s ease all;
    background: rgba(0,0,0,.6);

    .btn {
      min-width:180px
    }
  }


  .remove,
  .save {
    overflow: hidden;

    &:hover,
    &:focus {
      .buttonOverlay {
            top: unset;
            bottom:0;
      }
    }

  }
</style>
