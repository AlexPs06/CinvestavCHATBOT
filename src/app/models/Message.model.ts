export class Message {
    public dateCondition=false;
    public dateActivate=false;
    constructor(public content: String, public idUser: String, public name:String) {}

    /**
     * metodo para obtener el valor de la condicion del calendario
     */
    public getDateCondition() {
      return this.dateCondition;
    }
    /**
     * metodo para cambiar el valor de la condicion del calendario
     */
    public setDateCondition(data:boolean){
      this.dateCondition=data;
    }
  }
  