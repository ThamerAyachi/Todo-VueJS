<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <!-- button -->
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on" elevation="0" tile
        >
          Add new project
        </v-btn>
      </template>
      <!-- card -->
      <v-card>
        <v-card-title>
          <!-- card title -->
          <span class="headline">Add a New Project</span>
        </v-card-title>
        <!-- card text -->
        <v-card-text>
          <!-- Form -->
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
            <!-- Date -->
            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
              transition="scale-transition" offset-y min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field readonly v-on="on" v-bind="attrs" 
                    v-model="due" label="Due date" prepend-icon="mdi-calendar-range"
                    :rules="inputRules"
                  ></v-text-field>
              </template>
              <v-date-picker  @input="menu2 = false" v-model="due"></v-date-picker>
            </v-menu>
            <!-- /date -->

            <!-- Save Button -->
            <v-btn class="success mx-0 mt-3" @click="submit()" :loading="loading">Add project</v-btn>
            <!-- Close Button -->
            <v-btn text color="grey" @click="dialog = false" class="mt-3">Close</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import db from '@/fb'

  export default {
    data() {
      return {
        dialog: false,
        title:'',
        content: '',
        due : new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        inputRules: [
          v => !!v || 'That is required',
          v => v.length >= 3 || 'Minimum length is 3 characters',
        ],
        loading: false,
      }
    },
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          this.loading = true;
          const project = {
            title: this.title,
            content: this.content,
            due: this.due,
            person: 'Doc.t h a m e r',
            status: 'ongoing'
          }
          
          db.collection('projects').add(project).then(() => {
            // Clear
            this.title = "   ";
            this.content = "   ";
            this.loading = false;
            // Close
            this.dialog = false;
            // Sneckbar
            this.$emit('projectAdded')
          })

        }
      }
    },
  }
</script>
