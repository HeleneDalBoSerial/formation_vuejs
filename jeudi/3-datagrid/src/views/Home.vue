<template>
  <v-container>
    <v-row class="text-center">
      <ParticipantForm :participants.sync="participants" />
      <ParticipantsList :participants="participants" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParticipantForm from '@/components/ParticipantForm.vue';
import ParticipantsList from '@/components/ParticipantsList.vue';
import { Participant } from '@/models/participant.model';

@Component({
  components: {
    ParticipantForm,
    ParticipantsList,
  },
})
export default class Home extends Vue {
  participants: Participant[] = [];
}
</script>
