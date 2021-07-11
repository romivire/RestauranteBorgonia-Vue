<template>
  <div id="navigation">
   <nav id=navContainer>
    <div class="nav-wrapper nav-style">
      <a href="#!" class="brand-logo">La Borgonia</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link class="link-navbar router-link-active" to="/">Home</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="carta">Carta</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="reservaCreate">Reservar</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="reservaEdit">Cambiar reserva</router-link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link to="/">Home</router-link></li>
      <li><router-link to="carta">Carta</router-link></li>
      <li><router-link to="reservaCreate">Reservar</router-link></li>
      <li><router-link to="reservaEdit">Cambiar reserva</router-link></li>
  </ul>

  </div>

</template>



<script>
import $ from 'jquery'
export default {
  mounted(){
    $(document).ready(function(){
    $('.sidenav');
  });
  }
  
};
</script>

<style lang="scss" scoped>
.nav-style{
  background: linear-gradient(rgba(165, 68, 68, 0.354), rgba(142, 63, 63, 0.721));
}
.router-link-exact-active{
  background: linear-gradient(rgba(189, 129, 129, 0.721), rgba(189, 129, 129, 0.721));
  }
.link-navbar {
      width: max-content;
      font-size: 1.5rem;
      padding: 23px 10px;
      cursor: pointer;
      color:white;
}
.brand-logo{
  vertical-align: text-top;
  color:white;
  font-size: 1.7rem;
  margin-top: 1%;
  margin-left: 1%;
}
#navigation {
  width: 100%;
}
#navContainer{
  height: 100%;

  background-color: #7a1313;;
}
</style>