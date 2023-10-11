//let tempos = [24,29,30,14,25,11,11,28]
//let leads = [71,72,17,21,74,32,9,41]

let tempos =[0,7, 38,354,18, 36,14,132,402,592,25,278,211]
let leads = [1,3,132,221,35,124,68,129,411,390,85,406, 66]

function calculo(){
    let totalTempo = 0
    let totalLeads = 0
    for(let indice=0;indice<tempos.length;indice++){
        totalTempo += tempos[indice] * leads[indice]
        totalLeads += leads[indice]
    }
    console.log(totalLeads)
    return totalTempo / totalLeads
}

console.log(calculo())
