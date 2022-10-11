class Departamento {
    nombreDepa: string;
    constructor(nombreDepa: string) {
        this.nombreDepa = nombreDepa;
    }
    getName() {
        return this.nombreDepa;
    }
};

class Piso {
    nombrePiso: string;
    departamentos: Departamento[];
    constructor(nombreDePiso: string) {
        this.nombrePiso = nombreDePiso;
        this.departamentos = [];
    };
    pushDepartamento(nombreDeparta: Departamento) {
        return this.departamentos.push(nombreDeparta);
    };
    getDepartamentos(): Departamento[] {
        return this.departamentos;
    };
};

class Edificio {
    pisos: Piso[];
    constructor(pisos: Piso[]) {
        this.pisos = pisos;
    };
    addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
        const pisoEncontrado = this.pisos.find((piso) => piso.nombrePiso === nombreDePiso);
        return pisoEncontrado.pushDepartamento(departamento);
    };
    getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
        const pisoEncontrado = this.pisos.find((piso) => piso.nombrePiso === nombreDePiso);
        return pisoEncontrado.getDepartamentos();
    };
};

// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

    if (
        Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres"
    ) {
        console.log("testClaseBandaApartment passed");
    } else {
        throw "testClaseBandaApartment not passed";
    }
}

function main() {
    testClaseEdificio();
}
main();