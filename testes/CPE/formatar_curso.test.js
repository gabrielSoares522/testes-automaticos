function run(curso) {
    curso = curso.toLowerCase()

    switch (curso) {
        case "estação total":
            return "Estação total"
        case "gnss rtk":
            return "GNSS RTK"
        case "drone":
            return "Drone"
        case "drone + lidar":
            return "Drone + Lidar"
        case "ecobatimetro":
            return "Ecobatimetro"
        case "voltar":
            return "Voltar"
        default:
            return "invalido"
    }
}



test("bbbbbbbbbbbbb",()=>{
    expect(run("Estação total")).toBe("Estação total")
    expect(run("estação total")).toBe("Estação total")
    expect(run("GNSS RTK")).toBe("GNSS RTK")
    expect(run("gnss rtk")).toBe("GNSS RTK")
    expect(run("Drone")).toBe("Drone")
    expect(run("drone")).toBe("Drone")
    expect(run("Drone + Lidar")).toBe("Drone + Lidar")
    expect(run("drone + lidar")).toBe("Drone + Lidar")
    expect(run("Ecobatimetro")).toBe("Ecobatimetro")
    expect(run("ecobatimetro")).toBe("Ecobatimetro")
    expect(run("Voltar")).toBe("Voltar")
    expect(run("voltar")).toBe("Voltar")
})