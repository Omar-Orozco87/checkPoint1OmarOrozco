class Empleado {
    constructor(nombre, salario, area) {
        this._nombre = nombre
        this._salario = salario
        this._area = area
    }
    get getSalario() {
        return this._salario
    }
    get getArea() {
        return this._area
    }
    get getNombre() {
        return this._nombre
    }
}
module.exports= Empleado