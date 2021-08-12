<template>
  <div class="about">
    <h1>SA Degree Chooser</h1>
    <div class="card">
      <h2>
        A friendly tool that helps you to learn what possible university degrees
        await you at the various tertiary institutions in South Africa.
      </h2>
<h2>As of right now, only Tuks courses are loaded here and if there's any popularity I will include the other varsities.</h2>
      <h2>
        Updated directly from the university's website. For all queries
        related to admissions, fees and academic details go have a look at the
        university website.
      </h2>

      <h2>
        Created by Mitch Williams, a fourth-year Computer Engineering student at
        Tuks. Go check my 
        <a href="https://www.youtube.com/mitch7w" target="_blank">varsity vlogs.</a>
      </h2>
      <h2>This tool is completely my own work and not affiliated to any of the varsities. However, if you're from a varsity and want to use/acquire this tool you know where to <a href="https://www.instagram.com/mitch7w" target="_blank">contact me.</a></h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Delius Unicase', cursive;
  font-size: 4rem;
  margin: 1rem ;
}

.card {
  border-radius: 15px;
  padding: 0.5rem;
  margin: 5.5rem;
  background: #2C394B;
  transition: 0.4s ease-out;
  box-shadow: 0px 3px 5px;
}

.card:hover {
  transform: translateY(0.2rem);
}

a {
  color: #FF4C29 ;
}

@media (max-width: 680px) {
.card {
  padding: 0.5rem;
  margin: 2rem ;
  }
}

</style>
