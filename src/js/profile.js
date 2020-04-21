import imagenes from "../assets/*.png";
class Profile {
    constructor(nombre, parametros) {
        this.nombre = nombre;
        this.parametros = parametros;
        this.img = imagenes[nombre];

    }

}
export default Profile;