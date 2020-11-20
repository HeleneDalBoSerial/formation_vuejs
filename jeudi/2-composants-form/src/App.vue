<template>
  <v-app :class="{ 'ut-app--navigation-bar': navigationBar }">
    <ut-navigation-bar v-if="navigationBar" />
    <ut-app-bar
      :dark="true"
      :items="menuItems"
      @navigate="menuItemClicked"
      website="UT Formation"
      page="Démo template"
      username="Moi"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  navigationBar = true;
  menuItems = [
    {
      title: 'Applications',
      color: '#99CD50',
      icon: 'mdi-wrench',
      type: 'app',
    },
    {
      title: 'Products',
      items: [
        {
          title: 'Menu 1',
        },
        {
          title: 'Menu 2',
        },
      ],
    },
  ];

  menuItemClicked(event: any): void {
    alert(event);
  }
}
</script>
