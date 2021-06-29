<template>
    <div>
         <div class="container">
            
                <div class="row card-panel">
                    <div class="col s12 l6 center card-panel">
                            <div class="col s12">
                                <h3  class="light">Su reserva actual</h3>    
                            </div>
                            <FormulateForm #default="{isValid}" @submit="handleSubmit">
                                <!-- v-model="formValues"  -->
                                
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">ID reserva</label>
                                            <FormulateInput
                                                id="identificador"
                                                type="text"
                                                validation="required|number"
                                                placeholder="Ingrese el ID de la reserva"

                                            />
                                            <FormulateInput
                                            type="submit"
                                            label="Buscar reserva"
                                            :disabled="!isValid"
                                        />
                                        
                                    </div>
                                </div>     
                            </FormulateForm>
                             <div class="col s12">
                                 
                                <h3  class="light">Datos de su reserva</h3>    
                            </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Fecha</label>
                                            <FormulateInput
                                                id="fechaMostrar"
                                                type="text"
                                                name="Fecha"
                                                :disabled=true
                                            />
                                        
                                    </div>
                                </div>                              
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Hora</label>
                                            <FormulateInput
                                                id="horaMostrar"
                                                type="text"
                                                :disabled=true
                                            />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Cantidad de personas</label>
                                            <FormulateInput
                                                id="cantidadMostrar"
                                                :disabled=true
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Observacion</label>
                                        <FormulateInput
                                        type="textarea"
                                        id="observacionMostrar"
                                        :disabled=true
                                        />
                                        
                                    </div>
                                </div>
                    </div>
                    <div id="formModificar" style="visibility:hidden" class="col s12 l6 center">
                        <div class="col s12">
                                <h3  class="light">Modifique su reserva</h3>    
                            </div>
                            <FormulateForm #default="{isValid}" @submit="handleSubmitModificar">
                                <!-- v-model="formValues2" -->
                                <div class="row center">
                                    <div class="input-field col s12">
                                        <label class="label-special">Fecha</label>
                                            <FormulateInput
                                                name="Fecha"
                                                type="date"
                                                id="fechaModificada"
                                                validation="required|after"
                                            />
                                        
                                    </div>
                                </div>                              
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Hora</label>
                                        <!-- v-model="value" -->
                                            <FormulateInput
                                                name="Hora"
                                                :options="{'20:00': '20:00', '20:30': '20:30', '21:00': '21:00','21:30': '21:30'}"
                                                type="select"
                                                placeholder="Seleccione una hora"
                                                id="horaModificada"
                                                validation="required"
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Cantidad de personas</label>
                                            <FormulateInput
                                                id="cantidadModificada"
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
                                        id="observacionModificada"
                                        name="Observacion"
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
                                            type="submit"
                                            label="Confirmar reserva"
                                            :disabled="!isValid"
                                            
                                        />
                                    </div>
                                </div>
                                
                                
                            </FormulateForm>
                    </div>
                </div>
         </div>

    </div>
</template>

<style>
.label-special{
    position: static !important;
}
</style>

<script>
import axios from "axios";
import { format, parseISO, addDays } from 'date-fns'
const headers= {
    "Access-Control-Allow-Origin" : "*"
}

export default {
    data(){
        return{
            reserva:null,
            id:null,
        }
    },
    methods: {
        handleSubmit() {
            this.id=document.getElementById('identificador').value;
        axios
                .get('https://romivire-servicioweb.herokuapp.com/reserva/'+this.id)
                .then((response) => {
                    this.reserva = response.data;
                    this.updateResevaAmodificar();
                    
                })
                .catch((e) => {
                    window.alert(e.response.data);
                    this.clearInputsMostrados(); 
                    document.getElementById('formModificar').style.visibility='hidden';           
                });
        
        },
        updateResevaAmodificar(){
            this.reserva.forEach((item) => {
                
                const formattedDate = format(addDays(parseISO(item.fecha), 1), 'dd/MM/yyyy');
            
                document.getElementById('fechaMostrar').value=formattedDate;
                document.getElementById('horaMostrar').value=item.hora;
                document.getElementById('cantidadMostrar').value=item.cantidad_personas;
                document.getElementById('observacionMostrar').value=item.observacion; 
                document.getElementById('formModificar').style.visibility='visible';
            });
            
        },
        handleSubmitModificar(){
            let post = {
                fecha: document.getElementById('fechaModificada').value,
                hora: document.getElementById('horaModificada').value,
                cantidad: document.getElementById('cantidadModificada').value,
                observacion:document.getElementById('observacionModificada').value
            };
            
            
            axios.post('https://romivire-servicioweb.herokuapp.com/reserva/'+this.id, post, {headers: headers})
            .then((response) => {
                window.alert(response.data);
            
                this.clearInputsModificados();
                this.actualizarReservaModificada();
            });
    },
    actualizarReservaModificada(){
        axios
                .get('https://romivire-servicioweb.herokuapp.com/reserva/'+this.id)
                .then((response) => {
                    this.reserva = response.data;
                    this.updateResevaAmodificar();
                    
                })
                .catch((e) => {
                    window.alert(e.response.data);
                    this.clearInputsMostrados(); 
                    document.getElementById('formModificar').style.visibility='hidden';           
                });
    },
        clearInputsModificados(){
                document.getElementById('fechaModificada').value='',
                document.getElementById('horaModificada').value='',
                document.getElementById('cantidadModificada').value='',
                document.getElementById('observacionModificada').value=''
        },
        clearInputsMostrados(){
                document.getElementById('fechaMostrar').value='',
                document.getElementById('horaMostrar').value='',
                document.getElementById('cantidadMostrar').value='',
                document.getElementById('observacionMostrar').value=''
        }
    }   
}
</script>
