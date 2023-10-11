function run(opcaoEscolhida) {
    opcaoEscolhida = opcaoEscolhida.toLowerCase()

    switch(opcaoEscolhida){
        case "estação total":
            return "ESTAÇÃO TOTAL\n\n\
Estação total com o melhor preço de mercado é só aqui na CPE!\n\
Garanta hoje mesmo sua estação total R10 da Sanding ou a estação total GD2i8 da Geodetic, por apenas R$11.900,00 à vista!\n\
Consulte também opções e preços para financiamento em até 24x falando com um de nossos consultores."

        case "rtk i50":
            return "i50 Versão de 15x ou 36x\n\n\
🥳Aniversário 14 anos de parceria CPE e CHCNAV!!\n\
✅O kit RTK CHC i50, o mais vendido do Brasil, está com um super desconto!\n\
💵De R$ 56.475,00 por R$ 52.485,00!\n\n\
Você pode pagar com uma entrada de R$ 15.000,00 + 15x R$ 2.499,00 SEM JUROS!\n\
Ou\n\
Financiar com entrada de R$ 1.870,00 + 35x de R$ 1870,00!\n\n\
Fale agora mesmo com um consultor e consulte todas as condições."

        case "rtk i73":
            return "RTK i73\n\n\
Para você que está à procura das melhores condições de pagamento para o sistema RTK, sua hora chegou!\n\n\
Garanta hoje mesmo o RTK i73 com parcelas que cabem no seu bolso.\n\n\
Com nosso pagamento facilitado, você pode escolher entre 24x de R$ 2.650,00 ou 36x de R$1.999,00.\n\n\
Fale agora mesmo com um consultor e consulte todas as condições."

        case "alphaair 450":
            return "AlphaAir 450\n\n\
Só na CPE você encontra o melhor preço do mercado para o *Laser Scanner AlphaAir 450 seminovo*, com parcelas que cabem no seu bolso!!\n\n\
Aumente hoje mesmo sua produtividade e melhore cada vez mais seus resultados utilizando a tecnologia do *Laser Scanner AlphaAir 450* por apenas R$ 95.900 à vista ou com uma entrada de R$ 3.999,00 + 23x de R$ 3.999,00.\n\n\
*Drone não incluso.\n\n\
Fale agora mesmo com um consultor e consulte todas as condições."

        case "manutenção preventiva":
            return "Manutenção Preventiva\n\n\
Se o seu equipamento ainda está na garantia da CPE, você ganha 50% de desconto na manutenção preventiva e 20% na calibração.\n\n\
Fale agora mesmo com um consultor e consulte todas as condições."

        case "locação drone":
            return "Locação Drone Por Hectare\n\n\
Conte com a tecnologia LIDAR nos seus trabalhos, com um precinho que cabe no seu bolso.\n\n\
Faça levantamentos de uma forma mais rápida e eficiente:\n\n\
Drone + LIDAR com diária a partir de 19,90 por hectare, você só encontra aqui na CPE!!\n\n\
Incluindo: Drone + Laser + Operador + Processamento.\n\n\
*Valido até 31/03/2023.\n\n\
Valor de R$19,90 Ha é valido para a contratação mínima de 300 hectares.\n\n\
Consulte condições falando agora mesmo com um consultor CPE."
        case "locação de baixo custo":
            return "Locação de Baixo Custo\n\n\
Essa promoção está em fase de aprovação, desta forma continuo aguardando o copy"
        default:
            return "invalido"
    }
}