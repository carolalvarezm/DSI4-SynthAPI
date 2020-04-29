import imagenes from "../assets/*.png";
class Profile {
    constructor(nombre, parametros) {
        this.nombre = nombre;
        this.lenguaje = parametros["lang"];
        this.pitch = parametros["pitch"];
        this.rate = parametros["rate"];
        this.color = parametros["color"];
        this.img = imagenes[nombre];
    }

}
export default Profile;