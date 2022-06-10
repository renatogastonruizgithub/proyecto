export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    nacimiento: string;
    ocupacion: string;
    stack: string;
    nacionalidad: string;
    provincia: string;
    domicilio: string;
    descripion: string;
    imgBanner: string;
    imgAbout: string;
    nro: string;
    tituloAbout:string;
    educacion:Educacion[];
    trabajos:Trabajo[]; 
}

 interface Educacion {
    id:        number;
    instituto: string;
    titulo:    string;
    info:      string;
    inicio:    Date;
    fin:       Date;
}

 interface Trabajo {
    id:          number;
    nombre:      string;
    descripcion: string;
    cargo:       string;
    inicio:      Date;
    fin:         Date;
} 

