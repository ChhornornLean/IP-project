<template>
	<div class="col-4 offset-4 mt-3">
		<div class="mb-3">
			<label  for="email"
					class="form-label">
				Email Address
			</label>
			<input  type="email"
					class="form-control" 
					id="email"
					placeholder="name@example.com"
					v-model="email"
					required>
		</div>
		<div class="mb-3">
			<label  for="password"
					class="form-label">
				Email Address
			</label>
			<input  type="password"
					class="form-control" 
					id="email"
					placeholder="XXXXXX"
					v-model="password"
					required>
		</div>
		<div class="mb-3">
			<button class="btn btn-primary" @click.prevent="onSubmit">Register</button>
		</div>
		<div class="text-center">
			Already had the account? <router-link to="/login"> Log in</router-link> 
		</div>
	</div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
	name:"Register",
	setup() {
		let email = ref('');
		let password = ref('');
		let store = useStore();
		let router = useRouter();

		function onSubmit(){
			store.dispatch('registerUser',{
				email : email.value,
				password : password.value
			}).then(res => {
				if(res.err){
					alert(res.err);
					return;
				}
				router.push('/feeds');
			});
		}
		return {
			email,
			password,
			onSubmit
		}
	},
}
</script>