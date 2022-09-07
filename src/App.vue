<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
:root {
  --gutter: 1rem;
  --max-width: 1440px;
  --navbar-bg-color: #7b8fd1;
  --background-color: #415185;
  --text-hover-color: #415185;
  // --background-color: #C9DDBB;
  --icon-color: #F0ECFF;
}

* {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
}

svg {
  width: 1em;
  height: 1em;
  margin-right: 8px;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
