class Empresa {
    constructor(nombre) {
        this._nombre = nombre
        this._empleados = []
    }
    calcularNominas(area) {
        let sum = 0
        if (area == "") {
            this.getEmpleados.map(emp => {
                sum += parseInt(emp.getSalario)
            })
        } else {
            this.getEmpleados.map(emp => {
                if (emp.getArea == area) {
                    sum += parseInt(emp.getSalario)
                }
            })
        }
        return sum
    }
    agregarEmpleado(empleado) {
        this._empleados.push(empleado)     
        this.agregarTR(empleado)   
    }

    agregarTR(empleado){
        let numEmpleados = this.getEmpleados.length
        let table = document.getElementById("tableEmpleados");
        
        let row = table.insertRow(numEmpleados);

        let empleadoTD = row.insertCell(0);
        let areaTD = row.insertCell(1);
        let salarioTD = row.insertCell(2);

        empleadoTD.innerHTML = empleado.getNombre
        areaTD.innerHTML = empleado.getArea
        salarioTD.innerHTML = empleado.getSalario
    }


    get getNombre() {
        return this._nombre
    }
    get getEmpleados() {
        return this._empleados
    }
}
module.exports = Empresa
