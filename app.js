const app = Vue.createApp({
    data(){
        return{
            firstName: 'Frank',
            lastName: 'BigFrank',
            email: 'frank@frank.com',
            gender: 'male',
            img: 'https://randomuser.me/api/portraits/men/69.jpg'
        }
    },
    methods: {
       async getUser(){

            const results = await this.queryUserApi();
  
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.img = results[0].picture.large;
        },

        async queryUserApi(){
            const response = await fetch('https://randomuser.me/api/');
            const { results } = await response.json();

            return results;
        }
    }
});

app.mount('#app');