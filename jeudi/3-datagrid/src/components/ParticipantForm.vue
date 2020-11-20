<template>
  <v-col class="mb-6">
    <form class="px-10 col-12 col-md-12">
      <div class="text-left title mb-4">
        <span class="text-no-wrap">Exemple de formulaire</span>
      </div>
      <div class="mt-5">
        <v-text-field
          v-model="monForm.nom"
          label="Nom"
          filled
          type="text"
          name="nom"
        />
        <v-text-field
          v-model="monForm.prenom"
          label="Prénom"
          filled
          type="text"
          name="prenom"
        />
        <v-text-field
          v-model="monForm.email"
          label="Email"
          filled
          type="email"
          name="email"
        />
        <v-select
          :items="plats"
          label="Plat préféré"
          filled
          v-model="monForm.platPref"
        ></v-select>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="monForm.dateNaissance"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="obj">
            <v-text-field
              filled
              v-model="monForm.dateNaissance"
              label="Choix de date"
              append-icon="mdi-calendar"
              readonly
              v-on="obj.on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="monForm.dateNaissance"
            no-title
            scrollable
            show-current="false"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(monForm.dateNaissance)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </div>
      <div class="text-right mt-5">
        <v-btn :ripple="false" color="primary" @click="submit">Envoyer</v-btn>
      </div>
    </form>
  </v-col>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import { Participant } from '@/models/participant.model';

@Component({
  components: {},
})
export default class ParticipantForm extends Vue {
  @PropSync('participants') participantsSync: Participant[];

  monForm: Participant = null;

  plats = ['Couscous', 'Choucroute', 'Cassoulet'];
  menu = false;

  created(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.monForm = {
      nom: '',
      prenom: '',
      email: '',
      platPref: '',
      dateNaissance: new Date().toISOString().substr(0, 10),
    };
  }

  submit(): void {
    this.participantsSync.push(this.monForm);
    this.resetForm();
  }
}
</script>
