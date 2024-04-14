<template>
	<div class="contactForm">
		<div class="contactForm__container">
			<div class="contactForm__content">
				<form class="contactForm__content-form" @submit.prevent="submitForm">
					<h2 class="contactForm__content-form-title">Formularz kontaktowy</h2>

    				<input class="contactForm__content-form-input" type="text" placeholder="Imię" name="name" v-model="name"/>

					<input class="contactForm__content-form-input" type="tel" placeholder="Telefon" name="phone" v-model="phone"/>

					<input class="contactForm__content-form-input" type="text" placeholder="Preferowany termin usługi (data i godzina)" name="date" v-model="date"/>

    				<textarea class="contactForm__content-form-textarea" name="message" placeholder="Informacje o zamawianej usłudze, rodzaj i ilość mebli itd." v-model="message"></textarea>

    				<button class="contactForm__content-form-button" type="submit">Wyślij</button>
				</form>

				<div class="contactForm__content-overlay"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			access_key: "YOUR_ACCESS_KEY_HERE",
  			subject: "New Submission from Web3Forms",
 			name: "",
  			email: "",
  			message: "",
		}
	}
}
</script>

<style lang="scss" scoped>
.contactForm {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 998;
	height: 100vh;
	width: 100vw;

	&__container {
		width: 100%;
		height: 100%;
	}

	&__content {
		width: 100%;
		height: 100%;
		position: relative;

		&-overlay {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background-color: rgba(30, 30, 30, 0.5);
			z-index: 999;
		}

		&-form {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			gap: 10px;
			min-height: 60%;
			width: 60%;
			z-index: 1000;
			background-color: #fff;
			border-radius: 10px;
			padding: 10px 0;

			&-input {
				width: 80%;
				height: 50px;
				background-color: #f2f2f2;
				border: 0;
				border-radius: 10px;
				padding-left: 10px;
				padding-right: 10px;
				font-size: 16px;
				font-family: Saira Condensed, sans-serif;
			}

			&-textarea {
				width: 80%;
				min-height: 160px;
				background-color: #f2f2f2;
				border: 0;
				border-radius: 10px;
				padding: 10px;
				font-size: 16px;
				resize: vertical;
				font-family: Saira Condensed, sans-serif;
			}

			&-button {
				display: block;
				background-color: #03989e;
				width: 200px;
				height: 50px;
				color: white;
				border: 0;
				cursor: pointer;
				transition: 0.4s;
				border-radius: 30px;
				font-size: 20px;
				font-weight: bold;
				transition: 0.4s;
				font-family: Saira Condensed, sans-serif;
			}

			&-button:hover {
				background-color: #09ebf3;
	  		}
		}
	}
}
</style>
