<template>
  <nav>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" color="success" top :timeout="4000">
      <span>Awesome! You added a new project.</span>
      <v-btn text color="white" @click="snackbar=false" class="ml-4"><v-icon>mdi-window-close</v-icon></v-btn>
    </v-snackbar>

    <!-- toolbar  -->
    <v-toolbar flat > 
      <!-- icon menu  -->
      <v-icon @click='drawer=!drawer' left class="grey--text">mdi-menu</v-icon>
      <!-- title bar -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Doc</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- button bar -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- /toolbar  -->

    <!-- sude menu bar -->
    <v-navigation-drawer app v-model="drawer" color="blue">
      <!-- profile card -->
      <v-layout column align-center>
        <v-flex class="mt-15">
          <v-avatar size="100">
            <img src="avatar/avatar-1.jpeg">
          </v-avatar>
          <p class="white--text subheading mt-5">
            Doc.t h a m e r
          </p>
        </v-flex>
        <v-flex class="mt-8 mb-6">
          <Popup @projectAdded="snackbar = true"/>
        </v-flex>
      </v-layout>
      <!-- list -->
      <v-list>
        <v-list-item-group >
          <!-- for in list item -->
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <!-- icon list -->
            <v-list-item-icon>
              <v-icon left class="white--text">{{link.icon}}</v-icon>
            </v-list-item-icon>
            <!-- text list -->
            <span class="white--text">{{link.text}}</span>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- /sude menu bar -->
  </nav>
</template>

<script>
import Popup from '@/components/Popup'

export default {
  name:'Navbar',
  components: {
    Popup
  },
  data() {
    return {
      drawer: true,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'My Project', route: '/project'},
        {icon: 'mdi-account-group', text: 'Team', route: '/team'}
      ],
      snackbar: false,
    }
  },
}
</script>