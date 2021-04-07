<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <!-- sort by project name -->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" small color="grey" text @click="sortBy('title')" slot="activator">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <!-- sort by person name -->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
        <v-btn small v-bind="attrs" v-on="on" color="grey" text @click="sortBy('person')">
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
          </template>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>
      <!-- container card  -->
      <v-card class="pa-2" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6  >
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 >
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 ms2 >
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex class="col-xs-2 col-sm-4 col-md-2">
            <div right>
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
  import db from '@/fb'
  
  export default {
    data() {
      return {
        projects: []
      }
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }  
        })
      })
    }
  }
</script>




