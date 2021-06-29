import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./views/Home.vue";
import Carta from "./views/Carta.vue";
import ReservaCreacion from "./views/ReservaCreacion.vue";
import ReservaEdicion from "./views/ReservaEdicion.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/carta",
    component: Carta
  },
  {
    path: "/reservaCreate",
    component: ReservaCreacion
  },
  {
    path: "/reservaEdit",
    component: ReservaEdicion
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;