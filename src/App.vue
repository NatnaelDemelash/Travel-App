<script></script>

<template>
  <div id="nav">
    <router-link class="tab" to="/">Home</router-link>
    <router-link class="tab" to="/brazil">Brazil</router-link>
    <router-link class="tab" to="/panama">Panama</router-link>
    <router-link class="tab" to="/Hawaii">Hawaii</router-link>
    <router-link class="tab" to="/jamaica">Jamaica</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>
