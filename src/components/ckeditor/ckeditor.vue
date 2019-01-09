<template>
  <div>
    <textarea name="editor1"
              id="editor1"
              rows="10"
              cols="80">
                This is my textarea to be replaced with CKEditor.
    </textarea>
    <!-- <button type="button"
            @click="showContents">show contents</button> -->
  </div>
</template>

<script lang="ts">
import script from '@/components/ckeditor/ckeditor.ts';
export default script;
</script>

<style scoped>
</style>