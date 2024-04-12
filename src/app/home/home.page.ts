import { Component } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Declaracion de variables para que guarde el valor del tru o false
  valores_db:any
  valores2_db:any
  valores3_db:any
  valores4_db:any
  valores5_db:any
  valores6_db:any
  //Variables para el envio del color
  color: string = 'blank';
  color2: string = 'blank';
  color3: string = 'blank';
  color4: string = 'blank';
  color5: string = 'blank';
  color6: string = 'blank';
  constructor(private database:Database) {}
  ngOnInit() {
    //Rutas para cada tipo de habitacion
    const route = ref(this.database, "/Casa/Banio");
    const route2 = ref(this.database, "/Casa/Cocina");
    const route3 = ref(this.database, "/Casa/Dormitorio");
    const route4 = ref(this.database, "/Casa/Sala");
    const route5 = ref(this.database, "/Casa/Garaje");
    const route6 = ref(this.database, "/Casa/Cuarto");
    //Inicio de las condiciones y recibimiento de valores
    object(route).subscribe(attributes => {
      //Se obtiene el valor
      this.valores_db= attributes.snapshot.val();
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores_db === true) {
       
        this.color = '#5BF0D3'; 
      }else{
        this.color = '#F03813';
      }
      
      
    });
    object(route2).subscribe(attributes => {
      //Se obtiene el valor
      this.valores2_db= attributes.snapshot.val(); 
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores2_db === true) {
    
        this.color2 = '#379DF0'; 
      }else{
        this.color2 = '#C74328';
      }
      
      
    });
    object(route3).subscribe(attributes => {
      //Se obtiene el valor
      this.valores3_db= attributes.snapshot.val();
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores3_db === true) {
        
        this.color3 = '#37F08D'; 
      }else{
        this.color3 = '#9E5141';
      }
      
      
    });
    object(route4).subscribe(attributes => {
      //Se obtiene el valor
      this.valores4_db= attributes.snapshot.val();
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores4_db === true) {
        
        this.color4 = '#37F03C'; 
      }else{
        this.color4 = '#F05637';
      }
      
      
    });
    object(route5).subscribe(attributes => {
      //Se obtiene el valor
      this.valores5_db= attributes.snapshot.val();
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores5_db === true) {
        
        this.color5 = '#37F0B9'; 
      }else{
        this.color5 = '#F07637';
      }
      
      
    }); object(route6).subscribe(attributes => {
      //Se obtiene el valor
      this.valores6_db= attributes.snapshot.val();
      //Si el valor es verdadero si da un color  ala variable del color dependiendo el caso y si es falso el mismo proceso
      if (this.valores6_db === true) {
        
        this.color6 = '#C7EDE2'; 
      }else{
        this.color6  = '#F0665C';
      }
      
      
    });



  }



}
