<script setup lang="ts">
import Hello from "./Hello.vue"
</script>

<template>
  <Story>
    <Variant title="prova hello1"
      ><Hello title="Titolo con Histoire" subtitle="Prima variante"></Hello
    ></Variant>
    <Variant title="prova hello2"
      ><Hello
        title="Titolo con Histoire "
        subtitle="Seconda variante"
      ></Hello></Variant
  ></Story>
</template>

<docs lang="mdx">
# Hello Components

Questa è la documentaxione di Hello.vue

<div className="note">> Some notable things in a block quote!</div>

<blockquote>
  <p>
    A blockquote with <em>some</em> emphasis.
  </p>
</blockquote>
</docs>
