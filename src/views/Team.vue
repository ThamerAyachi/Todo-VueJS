<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    
    <v-container class="my-5">
      
      <!-- layout -->
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <!-- card -->
          <v-card flat class="ma-3">
            <!-- image -->
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="`avatar/${person.avatar}`">
              </v-avatar>
            </v-responsive>
            <!-- card text -->
            <v-card-text>
              <div class="subheading">
                {{person.name}}
              </div>
              <div class="grey--text">
                {{person.role}}
              </div>
            </v-card-text>
            <!-- card action -->
            <v-card-actions>
              <v-btn color="grey" text :href="`mailto:${person.mail}`">
                <v-icon small left>mdi-message-text</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  name:'Team',
  data() {
    return {
      team: [
        { name: 'Doc.t h a m e r', role: 'Web developer', avatar: 'avatar-1.jpeg', mail: 'thamerjak3@gmail.com' },
        { name: 'Ryu', role: 'Graphic designer', avatar: 'avatar-2.jpeg', mail: 'test@gmail.com' },
        { name: 'Chun Li', role: 'Web developer', avatar: 'avatar-3.jpeg', mail: 'test@gmail.com' },
        { name: 'Gouken', role: 'Social media maverick', avatar: 'avatar-4.jpeg', mail: 'test@gmail.com' },
        { name: 'Yoshi', role: 'Sales guru', avatar: 'avatar-5.jpeg', mail: 'test@gmail.com' },
      ]
    }
  },
}
</script>