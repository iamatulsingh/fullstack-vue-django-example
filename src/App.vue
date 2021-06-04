<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
  :root {
    --black: #1f1f1f;
    --white: #f8f8f8;
  }

  .dark {
    --black: #f8f8f8;
    --white: #1f1f1f;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--white) !important;
    color: var(--black);
  }
</style>
