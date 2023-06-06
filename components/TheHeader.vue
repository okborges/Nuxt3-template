<script setup></script>

<template>
  <header>
    <a
      href="/"
      class="logo"
    >CSS Nav</a>

    <ul>
      <li><a href="#work">Our Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    ul {
        display: flex;
        gap: 20px;
    }
}

@media (max-width: 500px) {
    header {
        flex-direction: column;
        align-items: center;

        ul {
            margin-top: 20px;
        }
    }
}
</style>
