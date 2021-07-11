<template>
    <div>
        
        <h4>{{plato.nombre}}</h4>
        <br>
        
        <table id="table" class="striped centered responsive-table light">
        <thead v-if="this.plato != null">
            <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Es vegetariano?</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody v-if="this.plato != null">
            <tr >
                <td>{{plato.nombre}}</td>
                <td>{{plato.categoria_plato}}</td>
                <td>{{plato.vegetariano}}</td>
                <td>{{plato.precio}}</td>
                
            </tr>
        </tbody>
    </table>
    </div>
    
</template>

<style>
h4{
    font-weight: bolder !important;
    margin: 3em 0 0rem 0 !important;
}
</style>

<script>
export default {
    name: 'table-plato',
    props: ['plato']
}
</script>