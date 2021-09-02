<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center">
      <v-card class="elevation-4 text-left">
        <v-card-title class="fancy-title align-center justify-center"
          >Jello</v-card-title
        ><v-card-text>
          <v-form>
            <v-text-field
              v-model="auth.email"
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="auth.password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-on:keyup.enter="login"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn class="login-button" depressed large @click="login"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="snackbar" :timeout="4000" absolute bottom center>
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'signin',
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        $nuxt.$router.push('/')
      })
    },
  },
}
</script>

<style>
</style>