<template>
	<div class="agreement" v-if="showAgreement">
		<div class="agreement__container">
			<div class="agreement__content">
				<p class="agreement__content-text">Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</p>
				<button @click="closeAgreement" class="agreement__content-button">Zgoda</button>
				<a target="_blank" href="https://drive.proton.me/urls/K5J2WAJC84#tkmTmLmTWivf"><button class="agreement__content-button">Polityka prywatności</button></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showAgreement: window.localStorage.getItem("agreement") ? false : true,
		}
	},
	methods: {
		closeAgreement() {
			this.showAgreement = false;
			window.localStorage.setItem("agreement", true);
		}
	}
}
</script>

<style lang="scss" scoped>
.agreement {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #212121;
	min-height: 60px;
	padding: 5px 10px;
	z-index: 100;

	&__container {
		height: 100%;
		min-height: 60px;
	}

	&__content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		min-height: 60px;
		gap: 10px;

		&-text {
			color: #fff;
		}

		&-button {
			min-width: 120px;
			padding: 5px 10px;
			background-color: #03989e;
			color: white;
			border: none;
			border-radius: 5px;
			font-family: "Saira Condensed", sans-serif;
			cursor: pointer;
			transition: 0.4s;
		}

		&-button:hover {
			background-color: #18d0d6;
		}
	}
	@media(max-width: 540px) {
		&__content {
			flex-direction: column;
			text-align: center;
		}
	}
}
</style>