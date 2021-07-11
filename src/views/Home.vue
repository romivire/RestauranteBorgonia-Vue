<template>
  <div>
    <div class="parallax-container parallax1 valign-wrapper">
    <div class="section no-pad-bot backgroundShadow">
      <div class="container">
        <div class="row center">
          <h3 class="header col s12 light">La Borgonia</h3>  
          <h5 class="header col s12">Lo invitamos a disfrutar de una experiencia gastronómica</h5>
        </div>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="section-special">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Experencia en la atención</h5>

            <p class="light landing-text">Contamos con más de 40 años de experiencia en el rubro, lo cual nos permite lograr la mejor y más rápida atención para cada uno de nuestros clientes</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Enfocados en el cliente</h5>

            <p class="light landing-text">Nuestro mayor objetivo es lograr que todos nuestros clientes puedan tener una experiencia gastronómica inolvidable desde el momento que ingresan al lugar. Trabajamos todos los días para superarnos y lograr un lugar único</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Trabajo en equipo</h5>

            <p class="light landing-text">Estamos convencidos de que los mejores resultados se logran en equipo. Es por esto que contamos con un completo y experimentado equipo que se supera día a día para llevar los mejores platos a la mesa de cada cliente.</p>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container parallax2 valign-wrapper">
    <div class="section no-pad-bot backgroundShadow">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12">Un lugar para que disfrutes de la naturaleza y la gastronomía</h5>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="section-special">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send"></i></h3>
          <h4>Nuestra Historia</h4>
          <p class="left-align light landing-text">En el año 1980 en la ciudad de Mendoza, Carlos Borgnia decidió emprender el sueño que más anhelaba: dar a conocer sus creaciones gastronómicas. Con el paso del tiempo se armó una gran familia que mantiene vivo el sueño de Carlos y ofrece a cada uno de sus clientes una gran variedad gastronómica así como también un agradable espacio rodeado de naturaleza. Vení a conocernos.</p>
        </div>
      </div>

    </div>
  </div>


  <div class="parallax-container parallax3 valign-wrapper">
    <div class="section no-pad-bot backgroundShadow">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12">Variedad gastronómica y calidad asegurada en cada uno de nuestros platos</h5>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-special{
    padding-top: 6rem;
    padding-bottom: 6rem;
}
.backgroundShadow{
    background: linear-gradient(rgba(255, 255, 255, 0.633), rgba(255, 255, 255, 0.721));
    color:black;
    font-weight: bolder;
    
}
.landing-text{
    font-size: 1.3rem;
}
.parallax1{
     background: url('../assets/background4.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.parallax2{
    background: url('../assets/background5.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.parallax3{
    background: url('../assets/background6.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.parallax-container{
    
    min-height: 500px;
    background-size: cover;
}

.infobox {
  float: left;
  width: 80px;
  height: 80px;
  padding: 10px;
  margin: 0 20px 20px 0;
  border-radius: 20px;
  border: 1px solid #ccc;
  .title {
    font-weight: bold;
  }
  .value {
    padding: 10px 0 0 0;
    font-size: 2rem;
  }
}
</style>