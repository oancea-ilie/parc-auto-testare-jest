import axios from "axios";

export default class Data{

    api(url, method ='GET', data= null){
        return axios({method, url, data});
    }

    // persons
    async getAllPersons(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/persons');
        
            return rez;

        }catch(e){
          
            return e;
        }
        
    }
    
    async getPersonById(id){

        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons/${id}`);

            return rez;

        }catch(e){
            return e;
        }
        
    }

    async createPerson(newCustomer){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons`,'POST', newCustomer);
            
            return rez;

         }catch(e){
            return e;
         }
    }

    async updatePassword(newPassword,id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons/${id}`,'put', newPassword);

            return rez;

        }catch(e){
            return e;
        }
        
    }

    async deletePerson(id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons/${id}`, 'delete');

            return rez;

        }catch(e){
          
            return e;
        }
        
    }

    async deleteAllPersons(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/persons/delete/all', 'delete');

            return rez;

        }catch(e){
          
            return e;
        }
        
    }

    //cars
    async getAllCars(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/cars');
            
            return rez.data;

        }catch(e){
          
            return e;
        }
        
    }

    async getCarById(id){

        try{
            const rez = await this.api(`http://localhost:5000/api/v1/cars/${id}`);

            return rez.data;

        }catch(e){
            return e;
        }
        
    }

    async getCarsSort(sort){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/cars/sort/${sort}`);

            return rez.data;

        }catch(e){
            return e;
        }
        
    }


    async deleteAllCars(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/cars/deleteAll', 'delete');

            return rez.data;

        }catch(e){
          
            return e;
        }
    }



    //rentails
    async getRentailsByCustomerId(id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/rentals/by-person-id/${id}`);

            return rez.data;

        }catch(e){
            return e;
        }
        
    }

    async getAllAssociation(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/rentals/join/join');

            return rez.data;

        }catch(e){
            return e;
        }
        
    }

    async createInchiriere(nou){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/rentals`,'POST', nou);
        
            return rez.data;

         }catch(e){
            return e;
         }
        
    }

}