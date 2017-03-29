<template>
  <div class="page">
    <!-- <h1>page2.vue</h1> -->
    <div class="x-center-ban">
		<p class="ban-p">
			<!-- <img class="ban-img" v-bind:src="BanImg"> -->
			<img class="ban-img" src="">
			<span class="ban-account j_banAccount"></span>
			<a class="ban-bind j_banBind" href="javascript:;">绑定</a>
		</p>
	</div>

	<div class="x-center-cont">
		<div class="cont-item1 j_contItem1">
			<a href="#" class="j_changePass">
				<span class="x-icon c-icon-mima"></span>
				<p class="item1-p">修改密码</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-item1 j_contItem1">
			<a href="./c_userSecurity.html">
				<span class="x-icon c-icon-anquan"></span>
				<p class="item1-p">账号安全</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-item1 j_contItem1">
			<a href="../pay/c_pay.html" class="j_recharge">
				<span class="x-icon c-icon-chzhi"></span>
				<p class="item1-p">充值</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-btn j_logoutSdkAccount"><a href="javascript:;">退出登录</a></div>
	</div>
  </div>
</template>

<script>
	// import BanImg from './assets/game-icon.png'
</script>

