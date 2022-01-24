import axios from "axios";

export default class Data{

    api(path, method ='GET', data= null){
        return axios({method, path, data});
    }
    
    async getAllCars(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/cars');

            if(rez.status == 200){
                return rez.json();
            }else{

                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }


    async getCustomerById(id){

        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons/${id}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async getRentailsByCustomerId(id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/rentals/by-person-id/${id}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }

    async getAllCustomers(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/persons');

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }

    async getAllAssociation(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/rentals/join/join');

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }

    async createCustomer(newCustomer){
        try{
            const response = await this.api(`http://localhost:5000/api/v1/persons`,'POST', newCustomer);
            
            if(response.status==204){
                return [];

            }else{

                return null;
            }

         }catch(e){

            console.log(e);

         }
    }

    async getCarsSort(sort){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/cars/sort/${sort}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }

    async createInchiriere(nou){
        try{
            const response = await this.api(`http://localhost:5000/api/v1/rentals`,'POST', nou);
        
            if(response.status == 204){
                return [];
            }else{
                return null;
            }

         }catch(e){
            console.log(e);
         }
        
    }

    async updatePassword(newPassword,id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/persons/${id}`,'PUT', newPassword);

            if(rez.status == 204){
                return [];
            }else{
                return null;
            }

        }catch(e){
            console.log(e);
        }
        
    }
}