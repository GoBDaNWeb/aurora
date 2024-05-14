<script setup></script>

<template>
	<footer class="footer">
		<div class="footer-border">
			<img src="/images/footer-border.svg" alt="border" />
		</div>
		<div class="footer-inner container">
			<div class="top">
				<div class="logo">
					<img src="/images/logo-sm.png" alt="logo" />
				</div>
				<ul class="info">
					<li>ИП/ООО</li>
					<li>ИНН</li>
					<li>ОГРНИП</li>
				</ul>
				<div class="contacts">
					<p>Юридический адрес</p>
				</div>
			</div>
			<div class="bottom">
				<div class="policy">© ... Все права защищены</div>
				<a href="#">Политика конфиденциальности</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.footer {
	background: var(--green-color);
	.footer-border {
		overflow: hidden;
		padding-top: 12px;
	}
	.footer-inner {
		display: flex;
		flex-direction: column;
		gap: 13px;
		padding-top: 40px;
		padding-bottom: 45px;
		@media (max-width: $tab-sm) {
			gap: 64px;
		}
		.top {
			display: grid;
			grid-template-columns: 1fr 0.3fr 0.3fr;
			gap: 30px;
			color: var(--white-color);
			@media (max-width: $tab) {
				grid-template-columns: 1fr 0.6fr 0.6fr;
			}
			@media (max-width: $tab-sm) {
				grid-template-columns: 1fr;
				gap: 64px;
			}
			.logo {
				width: 80px;
				height: 80px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				gap: 15px;
			}
		}
		.bottom {
			display: grid;
			grid-template-columns: 0.3fr 1fr;
			color: var(--white-color);
			@media (max-width: $desktop-sm) {
				grid-template-columns: 0.5fr 1fr;
			}
			@media (max-width: $tab-sm) {
				grid-template-columns: 1fr;
			}
		}
	}
}
</style>
