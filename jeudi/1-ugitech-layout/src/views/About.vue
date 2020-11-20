<template>
  <div class="about">
    <ut-connection-layout>
      <form class="px-10 col-12 col-md-6">
        <div class="text-left title mb-4">
          <span class="text-no-wrap">Bienvenue sur</span>
          <span class="text-no-wrap">Nom du site</span>
        </div>
        <div class="display-2 text-left mb-6">Connexion</div>
        <div class="mt-5">
          <v-text-field
            v-model="email"
            label="Email"
            filled
            type="email"
            name="email"
          />
          <v-text-field
            v-model="password"
            label="Mot de passe"
            name="password"
            hide-details
            filled
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          />
          <div class="text-left mt-1">
            <a href="#" class="caption">Mot de passe oublié ?</a>
          </div>
        </div>
        <div class="text-right mt-5">
          <v-btn :ripple="false" color="primary">Connexion</v-btn>
        </div>
      </form>
    </ut-connection-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    showPassword: false,
    password: '',
    email: '',
  }),
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
});
</script>
