<template>
  <div class="home">
    <img alt="Vue logo" :src="imageUrl" /><br>
    <input type="number" v-model="nb" v-if="showInput">
    <p>{{ multiplication }}</p>
    <button @click="changeInputVisibility()">Change visibility</button>
    <ul>
      <li v-for="name in names" :key="name">{{ name }}</li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  nb = 0;
  showInput = true;
  names: string[] = [];
  imageUrl = "https://media1.giphy.com/media/WV9Xx9itqEIu8GQloO/giphy.gif?cid=ecf05e4775a7936d26aeb4ae8f7b783444bc39ca9d2adda5&rid=giphy.gif"

  created(): void {
    this.names = ["titi", "tata", "tutu"];
  }

  get multiplication(): number{
    return this.nb * 100;
  }

  changeInputVisibility(){
    this.showInput = !this.showInput;
  }
}
</script>
