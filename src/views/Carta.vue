<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div>
        <div class="container">
			<div class="row">
                <div class="col s12 center card-panel">
                            <div class="col s12">
                                <h3 class="light">Carta del Restaurante</h3>    
                            </div>
                            <div class="filters" v-show="showFilters">
                                <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">TODOS

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'Si' }" v-on:click="setFilter('Si')">VEGETARIANO

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'No' }" v-on:click="setFilter('No')">NO VEGETARIANO

                                </span>
								<span class="filter" v-bind:class="{ active: currentFilter === 'Pasta' }" v-on:click="setFilter('Pasta')">PASTA

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'Carne' }" v-on:click="setFilter('Carne')">CARNE

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'Ensalada' }" v-on:click="setFilter('Ensalada')">ENSALADA

                                </span>
								<span class="filter" v-bind:class="{ active: currentFilter === 'Postre' }" v-on:click="setFilter('Postre')">POSTRE

                                </span>
                            </div>
							<loading v-bind:load="load"></loading>
							
                            

							<div class="row" >
									<transition-group class="platos" name="slide-fade" >
										<div
										class="card col l3 plato" 
										v-if="currentFilter === plato.vegetariano || currentFilter === plato.categoria_plato || currentFilter === 'ALL'"
										v-bind:key="plato.nombre" 
										v-for="plato in platos"
										v-show="show"
										>
											<div class="">
												<card-plato
													v-bind:plato="plato"
													v-on:update-current-plato="showTablePlato"
												></card-plato>
											</div>
										</div>
									</transition-group>
									<transition name="slide-fade-table">
										<div v-if="showTable">
											<table-plato v-bind:plato="selectedPlato"></table-plato>
										</div>
									</transition>
									
									<back-button v-on:show-cards="showCards()" v-show="showTable"></back-button>
							</div>
								
							
                </div>
			</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.plato-image-wrapper {
	position:relative;
}
.col-special{
    margin-left: auto !important;
}
.card{
    
  transition: all .35s ease-in-out;

	box-shadow:0px 2px 8px lightgrey;
    margin: 1rem !important;
	flex-direction:column;
	align-items:center;

}
.filter {
	
	padding: 6px 6px;
	cursor:pointer;
	border-radius: 6px;
	transition: all 0.35s;
}

.filter.active {
	box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
	background:lightgray;
} 
.platos {
	margin-bottom:25px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.slide-fade-enter-active {
    transition: all 0.4s ease;
    transition-delay: 0.4s;
}
.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.8, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(0px);
    opacity: 0;
}
.slide-fade-table-enter-active {
    transition: all 0.4s ease;
    transition-delay: 0.3s;
}
.slide-fade-table-enter {
    transform: translateX(200px);
    opacity: 0;
}

.plato {
	
	
	box-shadow:0px 2px 8px lightgrey;
	border-radius:3px;
	
	height:auto;
	display:table;
	flex-direction:column;
	align-items:center;
}
</style>

<script>
import axios from "axios";
import BackButton from "../components/BackButton.vue";
import TablePlato from "../components/TablePlato.vue";
import CardPlato from "../components/CardPlato.vue";
import Loading from "../components/Loading.vue";

export default {
	components: {
        TablePlato,
        CardPlato,
		BackButton,
		Loading,
	},
    data() {
        return{
		load:false,
		platos: [],
		currentFilter: 'ALL',
		show: true,
        showTable: false,
        selectedPlato: null,
		showFilters:true,
        }
	},
	methods: {
		getPlatos(){
			this.load = true;
			axios
                .get('https://romivire-servicioweb.herokuapp.com/platos')
                .then((response) => {
					this.load = false;
                    this.platos = response.data;
					
                })
                .catch((e) => console.log('Error'+e));
		},
		setFilter: function(filter) {
			this.currentFilter = filter;
		},
		showTablePlato(data) {
			
			this.show = false;
            
			this.showFilters= false;
			this.selectedPlato = data;
			
            this.showTable = true;
			window.scrollTo(0, 0);
				
        },
		
		showCards() {
            this.show = true;
            this.showTable = false;
			this.showFilters=true;
        },
	},
	
		mounted() {
			this.getPlatos();
		}
	
}
</script>