<template>
  <div id="navigation-mobile">
    <ul>
      <li style="font-size:2rem;">LA BORGONIA</li>
      <li>Home</li>
      <li>Carta</li>
      <li>Reservar</li>
      <li>Cambiar reserva</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
    li {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #111;
      }
    }
  }
  
  .social-media {
    position: absolute;
    left: 40px;
    bottom: 20px;
    i {
      margin: 0 20px 0 0;
      color: #fff;
      font-size: 2rem;
    }
  }
}
</style>