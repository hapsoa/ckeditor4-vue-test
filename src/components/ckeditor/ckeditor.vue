<template>
  <div>
    <textarea name="editor1"
              id="editor1"
              rows="10"
              cols="80"
              ref="ckeditor1"
              v-model="content">
    </textarea>
    <button type="button"
            @click="showContents">show contents</button>
  </div>
</template>

<script lang="ts">
import script from '@/components/ckeditor/ckeditor.ts';
export default script;
</script>

<style scoped>
</style>