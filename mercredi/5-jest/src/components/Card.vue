<template>
  <div class="hello">
    <div class="card">
      <img :src="item.imgUrl" width="235" height="300"/>
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CardItem } from "@/models/card-item"

@Component
export default class Card extends Vue {
  @Prop() private item!: CardItem;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
  h2 {
    margin: 0;
    text-align: center;
  }
  img {
    margin: 10px;
    align-self: center;
  }
}
</style>
