<template>
  <div class="container">
    <header>
      <h1>Some Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="home">
      <h2>Greetings</h2>
      <p>Saya Rayhan Muhammad Mafaz Shidqy.</p>
    </section>

    <section id="about">
      <h2>About Me</h2>
      <p>Mahasiswa Itenas.</p>
    </section>

    <section id="portfolio">
      <h2>Projects</h2>
      <ul>
        <li>Project 1 - Description</li>
        <li>Project 2 - Description</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email: example@example.com</p>
    </section>

    <footer>
      <p>© 2025 152019134 - Rayhan Muhammad Mafaz Shidqy</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

nav a {
  margin-left: 1rem;
  text-decoration: none;
  color: #42b983;
}

section {
  margin-bottom: 2rem;
}

footer {
  text-align: center;
  margin-top: 3rem;
  color: #888;
}
</style>