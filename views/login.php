<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link type="text/css" rel="stylesheet" href="./css/style.css">
		<title>Snotify</title>
	</head>
	<body>
		<header>
			<h1><a href="#">Snotify</a></h1>
		</header>
		<main class="container-form-login">
			<a class="link-facebook-login" href="#">Log in with facebook</a>
			<div class="divider divider-login">
				<strong class="divider-title">or</strong>
			</div>
			<form class="form-login" action="login.php" method="POST">
				<div class="container-input container-input-login">
					<input id="input-text-login" class="input-text" name="input-login-username" type="text" placeholder="Email address or username:" autofocus>
					<label class="message-empty-input" for="input-text-login" style="display: none">Please enter your Snotify username or email address.</label>
				</div>
				<div class="container-input container-input-login">
					<input id="input-password-login" class="input-password" name="input-login-password" type="password" placeholder="Password">
					<label for="input-password-login" class="message-empty-input" style="display: none">Please enter your password.</label>
				</div>
				<div class="container-btn container-btn-login">
					<button class="btn-form-submit" type="submit" name="btn-login">Log In</button>
				</div>
				<p class="sign-up">Don't have an account? <a href="#"><span>Sign Up</span></a></p>
			</form>
		</main>
		<script type="module" src="./js/login.js"></script>
	</body>
</html>