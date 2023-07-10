<template>
  <div class="home">

  </div>
</template>

<script setup>

import {getReward} from "@/api/request";

getReward().then(res=>{
  console.log(res);
})
</script>
