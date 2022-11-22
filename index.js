// ENKAPSULACIJA --> propertys + methods (grupisanje varijabli i funkcija)

    // PROCEDURALNI NACIN PROGRAMIRANJA:
        //imamo varijable na jednoj strani, a funkcije na drugoj
        let baseSalary = 30000;
        let overtime = 10;
        let rate = 20;

        function getWage(baseSalary, overtime, rate) {
            return baseSalary + (overtime * rate);
        }
    // OOP NAČIN PROGRAMIRANJA ZA RJEŠAVANJE OVOG PROBLEMA:
        let employee = {
            baseSalary: 30000,
            overtime: 10,
            rate: 20,
            getWage: function() {
                return this.baseSalary + (this.overtime * this.rate);
            }
            //getWage() funkcija u ovom slučaju nema parametara
            //varijabla i funkcija su grupisani u jedan objekat employee
        }
        console.log(employee.getWage());
    
//ABSTRAKCIJA
    //daje jednostavniji interfejs, skriva određene propertys i methods
    //a koji imaju ulogu za funkcionisanje objekta
    //reducira se uticaj promjene, ako te sakrivene metode recimo mijenjamo neće uticati na vanjštinu objekta ili na kod izvan tog objekta

//NASLJEĐIVANJE
    //reduciramo ponavljanje koda

//POLIMORFIZAM (više-formi)
