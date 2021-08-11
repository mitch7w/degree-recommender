<template>
  <div class="about">
    <h1>SA Degree Chooser</h1>
    <div class="card">
      <h2>
        A friendly tool that helps you to learn what possible university degrees
        await you at the various tertiary institutions in South Africa.
      </h2>

      <h2>
        Updated directly from the various university's websites. For all queries
        related to admissions, fees and academic details go have a look at the
        university's websites.
      </h2>

      <h2>
        Created by Mitch Williams, a fourth-year Computer Engineering student at
        Tuks. Go check my 
        <a href="https://www.youtube.com/mitch7w">varsity vlogs.</a>
      </h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Ultra", serif;
  font-size: 4rem;
}

.card {
  border-radius: 15px;
  padding: 0.5rem;
  margin: 5.5rem;
  background: #ffaa4c;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px;
}

.card:hover {
  transform: translateY(0.2rem);
}

a {
  color: white ;
}
</style>
