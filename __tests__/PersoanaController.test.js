import Data from "./Data.js";

// rez.status / rez.data pe pozitive
// rez.response.status / rez.response.data pe negative.

let nou;
beforeEach(()=>{
    nou = new Data();
})

afterEach(async()=>{
    await nou.deleteAllPersons();
})


describe('Persoana Controller',()=>{

    describe('Pozitiv',()=>{

        test('Create', async()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            
            let rez = await nou.createPerson(obj);
            expect(rez.status).toBe(204);

       });

        test('Get', async ()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            await nou.createPerson(obj);

            let rez = await nou.getAllPersons();
            expect(rez.status).toBe(200);
       });
       
       test('Get By ID', async ()=>{
           let obj = {name:'test',email:'test@',password:'123',phone:'075'};
           await nou.createPerson(obj);
           let allPersons = await nou.getAllPersons();
           let pers = allPersons.data[allPersons.data.length-1];

           let rez = await nou.getPersonById(pers.id);
           expect(rez.status).toBe(200);
        });
       
        test('Update', async ()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            await nou.createPerson(obj);
            let all = await nou.getAllPersons();
            let pers = all.data[all.data.length-1];
            let obj2 = {name:'test2',email:'test2@',password:'12345', phone:'07511'};

            let rez = await nou.updatePassword(obj2,pers.id);
            expect(rez.status).toBe(204);
       });

       test('Delete', async ()=>{
        let obj = {name:'test',email:'test@',password:'123', phone:'075'};
        await nou.createPerson(obj);
        let all = await nou.getAllPersons();
        let pers = all.data[all.data.length-1];

        let rez = await nou.deletePerson(pers.id);
        expect(rez.status).toBe(204);
   });

    })

    describe('Negative',()=>{

        test('Get nu exista persoane', async ()=>{
            let rez = await nou.getAllPersons();
            expect(rez.response.data.error.message).toMatch("Error: Nu exista persoane in baza de date!");
       });

       test('Get By ID nu exista ID', async ()=>{
            let rez = await nou.getPersonById(1);
            expect(rez.response.data.error.message).toMatch("Nu exista Persoana cu acest id!");

        });

        test('Create Propietati invalide', async ()=>{
            let obj = {email:'test@',password:'123',phone:'075'};
            let rez = await nou.createPerson(obj);
            expect(rez.response.data.error.message).toMatch("Propietati invalide!");
        });

        test('Create | Name gol',async()=>{
            let obj = {name:'',email:'test@',password:'123',phone:'075'};
            let rez = await nou.createPerson(obj);
            expect(rez.response.data.error.message).toMatch("Campul Nume este gol!");
        });

        test('Create | Email gol',async()=>{
            let obj = {name:'test',email:'',password:'123',phone:'075'};
            let rez = await nou.createPerson(obj);
            expect(rez.response.data.error.message).toMatch("Campul Email este gol!");
        });

        test('Create | Password gol',async()=>{
            let obj = {name:'test',email:'test@',password:'',phone:'075'};
            let rez = await nou.createPerson(obj);
            expect(rez.response.data.error.message).toMatch("Campul Password este gol!");
        });

        test('Create | Phone gol',async()=>{
            let obj = {name:'test',email:'test@',password:'123',phone:''};
            let rez = await nou.createPerson(obj);
            expect(rez.response.data.error.message).toMatch("Campul Phone este gol!");
        });


        test('Update | Propietati invalide',async()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            await nou.createPerson(obj);
            let all = await nou.getAllPersons();
            let pers = all.data[all.data.length-1];
            let obj2 = {};

            let rez = await nou.updatePassword(obj2,pers.id);
            expect(rez.response.data.error.message).toMatch("Propietati invalide pentru update!");
        });

        test('Update | Propietati Goale',async()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            await nou.createPerson(obj);
            let all = await nou.getAllPersons();
            let pers = all.data[all.data.length-1];
            let obj2 = {name:'',email:'',password:'', phone:''};

            let rez = await nou.updatePassword(obj2,pers.id);
            expect(rez.response.data.error.message).toMatch("Propietati goale pentru update!");
        });

        test('Delete',async()=>{
            let obj = {name:'test',email:'test@',password:'123', phone:'075'};
            await nou.createPerson(obj);
            let all = await nou.getAllPersons();
            let pers = all.data[all.data.length-1];
            let rez = await nou.deletePerson(pers.id+1);

            expect(rez.response.data.error.message).toMatch("Nu exista Persoana cu acest id!");
        });


    })


})


//preconditie actiune rezultata
