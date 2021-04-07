<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <!-- panels -->
      <v-expansion-panels>
        <!-- panel -->
        <v-expansion-panel v-for="(project,i) in myProjects" :key="i">
          <!-- v-if="project.person == ''" -->
          <!-- panel head -->
          <v-expansion-panel-header>
            {{i+1+" - "+project.title}}
          </v-expansion-panel-header>
          <!-- panel content -->
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">due by {{project.due}}</div>
            {{project.content}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
  import db from '@/fb'

  export default {
    name:'Projects',
    data() {
      return {
        projects: []
      }
    },
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Doc.t h a m e r'
        })
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