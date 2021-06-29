<template>
  <div id="navigation">
    <a id="logo-container" href="#" class="brand-logo">La Borgonia</a>
    <ul class="nav navbar-nav">
      <li><router-link class="link-navbar router-link-active" to="/">Home</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="carta">Carta</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="reservaCreate">Reservar</router-link></li>
      <li><router-link class="link-navbar" active-class="active" to="reservaEdit">Cambiar reserva</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  background: linear-gradient(rgba(165, 68, 68, 0.354), rgba(142, 63, 63, 0.721));
  }
.link-navbar {
      width: max-content;
      font-size: 1.5rem;
      padding: 23px 10px;
      cursor: pointer;
      color:black;
}
#logo-container{
     width: 100%;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color:black;
}
#navigation {
  display: flex;
  width: 100%;
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      width: max-content;
      font-size: 1.5rem;
      padding: 2px 10px;
      cursor: pointer;
      &:hover {
        color: #7ca971;
      }
    }
  }
  
}
</style>