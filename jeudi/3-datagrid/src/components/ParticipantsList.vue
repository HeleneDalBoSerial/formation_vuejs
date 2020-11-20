<template>
  <v-col class="mb-6">
    <v-data-table
      :headers="headers"
      :items="participants"
      item-key="name"
      class="ut-table ut-table--stripped"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Les participants</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:[`item.nom`]="{ item }">
        {{ item.nom }}
      </template>
      <template v-slot:[`item.prenom`]="{ item }">
        {{ item.prenom }}
      </template>
      <template v-slot:[`item.email`]="{ item }">
        {{ item.email }}
      </template>
      <template v-slot:[`item.platPref`]="{ item }">
        {{ item.platPref }}
      </template>
      <template v-slot:[`item.dateNaissance`]="{ item }">
        {{ item.dateNaissance }}
      </template>
    </v-data-table>
  </v-col>
</template>

<script lang="ts">
import { Participant } from '@/models/participant.model';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ParticipantsList extends Vue {
  @Prop() participants: Participant[];

  headers = [
    {
      text: 'Nom',
      align: 'start',
      sortable: true,
      value: 'nom',
    },
    {
      text: 'Prénom',
      align: 'start',
      sortable: true,
      value: 'prenom',
    },
    {
      text: 'Email',
      align: 'start',
      sortable: true,
      value: 'email',
    },
    {
      text: 'Plat préféré',
      align: 'start',
      sortable: true,
      value: 'platPref',
    },
    {
      text: 'Date de naissance',
      align: 'start',
      sortable: true,
      value: 'dateNaissance',
    },
  ];
}
</script>
