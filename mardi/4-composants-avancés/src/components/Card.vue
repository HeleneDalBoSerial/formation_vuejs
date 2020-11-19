<template>
  <div class="hello">
    <div class="card">
      <img :src="syncItem.imgUrl" width="235" height="300" />
      <h2>{{ syncItem.name }}</h2>
      <p>{{ syncItem.description }}</p>
      <div class="like" @click="syncItem.likes++">♥</div>
      <div>{{ syncItem.likes }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
import { CardItem } from '@/models/card-item';

@Component
export default class Card extends Vue {
  @PropSync('item') private syncItem!: CardItem;
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
  .like {
    font-size: 28pt;
    color: red;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
