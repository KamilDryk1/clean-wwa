<template>
  <section class="header">
	<div class="header__container">
	  <div class="header__content">
		<div v-if="video" class="header__content-video">
		  <video class="vid" autoplay loop muted playsinline :src="video"></video>
		</div>
		<div v-else class="header__content-img">
		  <img class="img" :src="img" alt="pranie" />
		</div>
		<div class="header__content-text">
		  <!-- <h1 class="title">CLEAN-WWA</h1> -->
		  <h2 class="subtitle">
			{{ title }}
		  </h2>
		  <p>{{ subtitle }}</p>
		  <div class="header__content-text-buttons">
		  	<button v-if="tel" class="header__content-text-button"><a :href="tel">ZADZWOŃ</a></button>
		  	<button v-if="mail" @click="openForm" class="header__content-text-button mail">ZAMÓW</button>
			</div>
		</div>
	  </div>
	</div>
	<div class="overlay"></div>
  </section>
</template>

<script>
export default {
  props: ["video", "img", "title", "subtitle", "tel", "mail"],
  emits: ['openForm'],
  data() {
	return {};
  },
  methods: {
	openForm() {
		this.$emit('openForm')
	}
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 1;

  .overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 700px;
	background: linear-gradient(
	  to right,
	  black 0% 10%,
	  rgba(0, 0, 0, 0.3),
	  black 90% 100%
	);
	z-index: 3;
	animation: fadeIn 1.3s ease-in-out forwards;
  }

  @media (max-width: 1440px) {
	.overlay {
	  background: rgba(0, 0, 0, 0.4);
	}
  }

  &__container {
	max-width: 1920px;
	width: 100%;
	margin: 0 auto;
  }

  &__content {
	height: 700px;
	max-width: 1440px;
	margin: 0 auto;

	&-video {
	  position: relative;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 700px;

	  .vid {
		position: absolute;
		top: 0;
		left: 0;
		height: 700px;
		width: 100%;
		z-index: 1;
		object-fit: cover;
	  }
	}

	&-img {
	  position: relative;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 700px;

	  .img {
		position: absolute;
		top: 0;
		left: 0;
		height: 700px;
		width: 100%;
		z-index: 1;
		object-fit: cover;
	  }

	  @media (max-width: 1440px) {
		.overlay {
		  background: rgba(0, 0, 0, 0.6);
		}
	  }
	}

	&-text {
	  position: absolute;
	  top: 35%;
	  left: 50%;
	  transform: translateX(-50%);
	  z-index: 4;
	  // margin: 0 4%;
	  color: white;
	  display: flex;
	  flex-direction: column;

	  h1 {
		font-size: 64px;
	  }

	  h2 {
		font-weight: 700;
		font-size: 38px;
		margin-top: 30px;
		text-align: center;
	  }

	  p {
		font-weight: 200;
		margin-top: 30px;
		font-size: 26px;
		text-align: center;
	  }

	  .tel {
		  font-size: 18px;
		  margin-top: 5px;
	  }

	  &-buttons {
		display: flex;
		justify-content: center;
		gap: 30px;
	  }

	  &-button {
		display: block;
		margin-top: 40px;
		width: 200px;
		height: 50px;
		background-color: #03989e;
		color: white;
		border: 0;
		cursor: pointer;
		transition: 0.4s;
		border-radius: 30px;
		font-family: Saira Condensed, sans-serif;
		font-size: 20px;
		font-weight: bold;
		letter-spacing: 1px;

		a {
			text-decoration: none;
			color: white;
			width: 100%;
			height: 100%;
			display: block;
			margin: auto;
			line-height: 50px;
			font-family: Saira Condensed, sans-serif;
			font-size: 20px;
			font-weight: bold;
			letter-spacing: 1px;
		}
	  }

	  &-button:hover {
		background-color: #09ebf3;
	  }
	}

	@media (max-width: 700px) {
	  &-text {
		top: 20%;
	  }
	}

	@media (max-width: 500px) {
	  &-text {
		top: 15%;

		h2 {
			order: 1;
			font-size: 32px;
		}

		p {
			order: 2;
		}

		&-buttons {
			flex-direction: column;
			gap: 30px;
			margin: 10px auto 0 auto;
		}

		&-button {
			order: 0;
			margin-top: 0px;
		}

		&-button:hover {
		background-color: #03989e;
	  	}
	  }
	}
  }
}
@keyframes fadeIn {
  from {
	backdrop-filter: brightness(13%);
  }
  to {
	backdrop-filter: brightness(70%);
  }
}
</style>
