<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <div>
        <div class="container">
        
                <div class="row">
                    <div class="col s12 center card-panel">
                        
                            <div class="col s12">
                                <h3 class="light">Carta del Restaurante</h3>    
                            </div>
                            <div class="filters">
                                <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'VEGETARIANO' }" v-on:click="setFilter('VEGETARIANO')">VEGETARIANO

                                </span>
                                <span class="filter" v-bind:class="{ active: currentFilter === 'NOVEGETARIANO' }" v-on:click="setFilter('NOVEGETARIANO')">NO VEGETARIANO

                                </span>
                            </div>
                            <transition-group class="projects" name="projects" >
		
        <div class="card col l3 col-special" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
			<div class="project-image-wrapper">
                
                <div class="card-image">
                                    <img class="project-image" v-bind:src="project.image">
                </div>
                <div class="card-content">
                                    <span class="card-title light">{{project.title}}</span>
                                    <p class="text-card">Categoria: Carne </p>
                                    <p class="text-card">Vegetariano: Si </p>
                                    </div>
                                    <div class="card-action text-card">
                                     <span class="text-card">$ </span>
                                    </div>
				<div class="gradient-overlay"></div>

			</div>
		</div>
	</transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-special{
    margin-left: 0px !important;
}
.card{
    
    transition: all .35s ease-in-out;

	box-shadow:0px 2px 8px lightgrey;
    margin: 1rem;
	flex-direction:column;
	align-items:center;

}

.text-card{
    font-size: 1.3rem !important;
    text-align: left;
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
.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}


.project {
	transition: all .35s ease-in-out;
	margin:10px;
	box-shadow:0px 2px 8px lightgrey;
	border-radius:3px;
	width:180px;
	height:200px;
	display:flex;
	flex-direction:column;
	align-items:center;
}

.project-image-wrapper {
	position:relative;
}

.gradient-overlay {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:150px;
	opacity:0.09;
	background: 
		linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
		linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
	border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}



</style>

<script>
export default {
    data() {
        return{
		currentFilter: 'ALL',
		projects: [
			{title: "Ensalada de papa y huevo", image: "https://picsum.photos/g/200?image=116", category: 'VEGETARIANO'},
            {title: "Charcoal DSDSDS", image: "https://picsum.photos/g/200?image=116", category: 'NOVEGETARIANO'},
			{title: "Charcoal", image: "https://picsum.photos/g/200?image=116", category: 'NOVEGETARIANO'},
			{title: "Sketching", image: "https://picsum.photos/g/200?image=121", category: 'VEGETARIANO'},
			{title: "Acrillic", image: "https://picsum.photos/g/200?image=133", category: 'NOVEGETARIANO'},
			{title: "Pencil", image: "https://picsum.photos/g/200?image=134", category: 'VEGETARIANO'},
			{title: "Pen", image: "https://picsum.photos/g/200?image=115", category: 'VEGETARIANO'},
			{title: "Inking", image: "https://picsum.photos/g/200", category: 'VEGETARIANO'},
		]
        }
	},
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	}
}
</script>