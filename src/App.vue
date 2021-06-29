<template>
  <div id="app">
    
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <Navigation />
      </div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>


<script>
import Navigation from "./components/Navigation.vue";
import M from 'materialize-css'
import Footer from "./components/Footer.vue";

export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    Navigation,
    Footer
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  mounted () {
    M.AutoInit()
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
* {
  font-size: 1rem;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #7a1313;
}
#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
}
.top-bar {
  display: flex;
  width: 100%;
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  i {
    font-size: 2rem;
  }
}
.content {
  position: absolute;
  top: 10px;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.open {
  transform: translateX(300px);
}
</style>