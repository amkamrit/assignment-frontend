<template>
        <div>
            <input type="text" v-model="quary" placeholder="Enter a keyword"/>
            <button @click.prevent="onDownload(quary)">Download Image</button>
        </div>
            <div>
                 <table id="customers">
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                    </tr>
                    <tr v-for="data in image" :key="data.id">
                        <td>{{ data.id}}</td>
                        <td>
                            <img @click="showImage(imageUl+data.url)"  :width="150" :height="150" :src="imageUl+data.url"
                            /> 
                        </td>
                    </tr>
                 </table>
             </div>
</template>
<script>
export default {
    date() {
        return{
            quary:'',
        };
    },
    computed:{
        image(){
            return this.$store.state.image
        },
        imageUl(){
            return this.$store.state.imageUrl
        },
        // quary(){
        //     return this.quary
        // }
    },
    methods:{
        onDownload(quary){
            this.$store.dispatch('onDownload', quary);
        },
        getImage(){
            this.$store.dispatch('getImage');
        },
        showImage(url){
            window.open(url, '_blank');
        },
    },
    beforeMount(){
        this.getImage();
    }
}
</script>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
