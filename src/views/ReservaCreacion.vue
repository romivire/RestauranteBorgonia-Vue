<template>
    <div>
         <div class="container">
            
                <div class="row">
                    <div class="col s12 center card-panel">
                        
                             <div class="col s12">
                                <h3  class="light">Reserva</h3>    
                            </div>
                            <FormulateForm v-model="formValues">
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
                                            <FormulateInput
                                                v-model="value"
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
                        <h3>
                        </h3>
                        </div>
                    
                
            </div>
         </div>
    </div>
</template>

<style lang="scss">
@import '@braid/vue-formulate/themes/snow/snow.scss';
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

  export default {
    components: { },
    data() {
      return {
        horario:'Seleccione un horario',
        formValues: {},
        value:{}
      };
    },
  };
</script>