import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import axios from 'axios'

import './assets/main.css'
const store=createStore({
state(){
    return {
       image:[
        { age: 32, first_name: 'Cyndi' },
        { age: 27, first_name: 'Havij' },
        { age: 42, first_name: 'Robert' },
      ],
      imageUrl:"http://127.0.0.1:8000",
      quary:null
    }
},
mutations: {
    onDownload(state, payload){
        state.image=payload;
    }
},
actions:{
    async onDownload(context, payload){
        try {
           const download = await axios.post('http://127.0.0.1:8000/api/fetch-images', payload)
            if(download['status']==200){
                const data = await axios.get('http://127.0.0.1:8000/api/get-images')
                context.commit('onDownload', data.data.data)
            }
            }
            catch (error) {
                console.log(error)
            }
        
    },
     getImage(context){
        axios.get('http://127.0.0.1:8000/api/get-images')
        .then(response => {
            context.commit('onDownload', response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
}
})
const app=createApp(App);
app.use(store)
app.mount('#app')
