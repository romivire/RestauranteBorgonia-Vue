<template>
    <div>						
		<div style="width:100%;height:300px">
            <img :src="`data:image/jpg;base64,${cardImagen}`" width="275" height="275" style="object-fit:contain"/>
            
            <a class="btn-floating halfway-fab waves-effect waves-light brown hoverable darken-2" @click="hideCards()">
                <i class="material-icons">expand_more</i>
			</a>
		</div>
        <div class="card-content">
            <span class="card-title light">{{plato.nombre}}</span>
		</div>
		
	</div>
</template>

<script>
import axios from "axios";
export default {

	name: "card-plato",
	props: ["plato"],
    data(){
        return{
            cardImagen:null
        }
    },
	methods: {
		hideCards() {
			this.$emit("update-current-plato", this.plato);
		},
        getImagen(){
            let id=this.plato.id;
            axios.get('https://romivire-servicioweb.herokuapp.com/platos/images/'+id)
            .then((response) => {
                    this.cardImagen = response.data;
                  
            })
            .catch((e) => console.log('Error'+e));
        }
	},
    mounted(){
        this.getImagen();
    }
};
</script>

<style lang="scss" scoped>
.btn-floating.halfway-fab{
    bottom: 7px !important;
}

.card-content{
    min-width: 100%;
    text-align: -webkit-center;
    padding: 7px 25px 55px 26px !important;
    
}

.card-title{
    max-width: fit-content;
}
.text-card{
   
    text-align: left;
}
</style>