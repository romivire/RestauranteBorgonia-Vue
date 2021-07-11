<template>
    <div>
         <div class="container">
            
                <div class="row">
                    <div class="col s12 center card-panel">
                        
                             <div class="col s12">
                                <h3  class="light">Reserva</h3>    
                            </div>
                            <FormulateForm #default="{isValid}" @submit="handleSubmit">
                                <div class="row center">
                                    <div class="input-field col s12">
                                        <label class="label-special">Fecha</label>
                                            <FormulateInput
                                                type="date"
                                                name="Fecha"
                                                id="fechaIngresada"
                                                validation="required|after"
                                            />
                                        
                                    </div>
                                </div>                              
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Hora</label>
                                            <FormulateInput
                                                :options="{'20:00': '20:00', '20:30': '20:30', '21:00': '21:00','21:30': '21:30'}"
                                                type="select"
                                                name="Hora"
                                                placeholder="Seleccione una hora"
                                                id="horaIngresada"
                                                validation="required"
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Cantidad de personas</label>
                                            <FormulateInput
                                                id="cantidadIngresada"
                                                name="Cantidad de personas"
                                                placeholder="Cantidad de personas"
                                                validation="required|number|max:50"
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Observacion</label>
                                        <FormulateInput
                                        type="textarea"
                                        name="Observacion"
                                        id="observacionIngresada"
                                        placeholder="Indica tu observacion para la reserva"
                                        help="Longitud maxima 100 caracteres"
                                        validation="max:100,length"
                                        error-behavior="live"
                                        />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <FormulateInput
                                            id="button"
                                            type="submit"
                                            label="Confirmar reserva"
                                            :disabled="!isValid"
                                        />
                                    </div>
                                </div>
                                
                                
                            </FormulateForm>
                        <h3>
                        </h3>
                        </div>
                    
                
            </div>
         </div>
    </div>
</template>

<style lang="scss">
@import '../css/snow/snow.scss';
.align-left{
    text-align: left;

}
#titulo{
    margin-top: 0px !important;
}
.label-special{
    position: static !important;
}

</style>

<script>
import axios from "axios";
const headers= {
    "Access-Control-Allow-Origin" : "*"
}

  export default {
    components: { },
    data() {
      return {
        
      };
    },
    methods:{
        handleSubmit() {
         let post = {
                fecha: document.getElementById('fechaIngresada').value,
                hora: document.getElementById('horaIngresada').value,
                cantidad: document.getElementById('cantidadIngresada').value,
                observacion:document.getElementById('observacionIngresada').value
            };
            
            axios.post('https://romivire-servicioweb.herokuapp.com/reserva/create', post, {headers: headers})
            .then((response) => {
                window.alert(response.data.message+'. Su reserva es la numero: '+response.data.body.idReserva);
                this.clearInputsIngresados();
            });
        },
        clearInputsIngresados(){
                document.getElementById('fechaIngresada').value='',
                document.getElementById('horaIngresada').value='',
                document.getElementById('cantidadIngresada').value='',
                document.getElementById('observacionIngresada').value=''
        },
    }
};
</script>