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
                                        
                                            <FormulateInput
                                                type="text"
                                                label="ID Reserva"
                                                name="identificador"
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
                                        
                                            <FormulateInput
                                                type="text"
                                                label="Fecha"
                                                name="Fecha"
                                                :disabled=true
                                            />
                                        
                                    </div>
                                </div>                              
                                <div class="row">
                                    <div class="input-field col s12">
                                            <FormulateInput
                                                type="text"
                                                label="Hora"
                                                name="Hora"
                                                validation="required"
                                                :disabled=true
                                            />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                            <FormulateInput
                                                type="text"
                                                name="Cantidad de personas"
                                                label="Cantidad de personas"
                                                :disabled=true
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <FormulateInput
                                        type="textarea"
                                        name="Observacion"
                                        label="Observacion"
                                        :disabled=true
                                        />
                                        
                                    </div>
                                </div>
                    </div>
                    <div id="formModificar" style="visibility:hidden" class="col s12 l6 center">
                        <div class="col s12">
                                <h3  class="light">Modifique su reserva</h3>    
                            </div>
                            <FormulateForm>
                                <!-- v-model="formValues2" -->
                                <div class="row center">
                                    <div class="input-field col s12">
                                        
                                            <FormulateInput
                                                type="date"
                                                label="Fecha"
                                                name="Fecha"
                                                validation="required|after"
                                            />
                                        
                                    </div>
                                </div>                              
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Hora</label>
                                        <!-- v-model="value" -->
                                            <FormulateInput
                                            
                                                :options="{'20:00': '20:00', '20:30': '20:30', '21:00': '21:00','21:30': '21:30'}"
                                                type="select"
                                                placeholder="Seleccione una hora"
                                                name="Hora"
                                                validation="required"
                                            />
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <label class="label-special">Cantidad de personas</label>
                                            <FormulateInput
                                                id="cantidad"
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
                                            
                                        />
                                    </div>
                                </div>
                                
                                
                            </FormulateForm>
                    </div>
                </div>
         </div>

    </div>
</template>

<script>
export default {
    methods: {
        handleSubmit() {
        document.getElementById('formModificar').style.visibility='visible'
    }
}
}
</script>
