function run(statusProdutos,corpoProdutos) {
    
    if(statusProdutos == 200 || statusProdutos == "200"){
        corpoProdutos = JSON.parse(corpoProdutos)
        let listaProdutos = []
        corpoProdutos.data[0].product_groups.data[0].products.data.forEach(item => {

            listaProdutos.push({
                "nome":item.name,
                "valor": (item.price==undefined)?1000:item.price,
                "linkImagem": item.image_url,
                "linkSaberMais": item.url
            })
        })
        return listaProdutos
    }
    return [
    {
        "nome": "Produto XZ",
        "valor": 1000,
        "linkImagem": "https://www.isharearena.com/wp-content/uploads/2012/12/wallpaper-281049.jpg",
        "linkSaberMais": "https://blip.ai"
    }
    ]
}

test("aaaaaa",()=>{
    const resposta ={
        "data": [
          {
            "product_groups": {
              "data": [
                {
                  "retailer_id": "5lmb7lh532",
                  "id": "6714836645215527",
                  "variants": [
                  ],
                  "products": {
                    "data": [
                      {
                        "availability": "in stock",
                        "description": "Este produto oferece o melhor custo beneficio",
                        "id": "5241226675979855",
                        "image_url": "https://scontent.fssz1-1.fna.fbcdn.net/v/t45.5328-4/328874149_5498527106918114_2645529214004515836_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFo1XQ67Z-JHqiem0wIU0XSv7COTO-qY0q_sI5M76pjShwpQJsLlci-MRLGtwegpINPw4Z_G3ha43GYmsDWTkmQ&_nc_ohc=tBNDJoGVumQAX-EwdRR&_nc_ht=scontent.fssz1-1.fna&edm=AO-O_bEEAAAA&oh=00_AfDP1r1MSiAGiXNW6_7eaLevzWr8F9UYN8Zjm-Nk6diwJA&oe=6434DC0E",
                        "inventory": 100,
                        "name": "produto teste",
                        "url": "https://www.amazon.com.br/hz/mobile/mission?p=46UU1RMGBUspf0YKCTYSMsUnhNxpXwlx8m0rvsHnafquWhuJkhH5lfl6ar27jzFFShZ1mel2DfgaeJ0i8rWc97IwDvr3%2BlK9utcZ7qM9L%2FAY2sr1QtRG%2F9jfrNH2MKtWPkyeDALSZSzwD5gO3fZbESpXwoPo9YmkT05WC0z7pkedo6FhH6FYA5VAvOkwjKtDWiplh6U%2FhTpC4NtBI5Ao7vSisGH5hH7qok1lVnMr6CoBdzo7sJf6Z2uoamQeYWLGQSU95Kh%2Boer1zRxfYVLn87fmwP7R7YkcRviI9WtoF%2BUaGv1SRQwdA1NtJpYMN51mGdqjN6COFw1PoqsAKTGh0t4eqmhF%2B15bDlbsH8X%2BW%2FSpJ4fa%2FpUQpx8HxeCDk%2FUqylsfCMazCDs%3D&ref_=ci_mcx_mi&pf_rd_r=BN41060NWWPHZFX93QXS&pf_rd_p=75526862-dc07-47d1-a2d2-ca710bdf3cdc&pd_rd_r=8de72927-40de-43a9-900a-dc93907305a9&pd_rd_w=K1n93&pd_rd_wg=WoCRO"
                      }
                    ],
                    "paging": {
                      "cursors": {
                        "before": "QVFIUk5NODdmZAHJaRTVBaDJvNFZAGSHZAELUlUSnI4WVVCczJLWDU1T0d5TXpfVzRFSGM1ZAmp1RXk2M2x6b0lwQUZAHSWs0SERLY19Ha2FWeW5saXJFeHZATSG9R",
                        "after": "QVFIUk5NODdmZAHJaRTVBaDJvNFZAGSHZAELUlUSnI4WVVCczJLWDU1T0d5TXpfVzRFSGM1ZAmp1RXk2M2x6b0lwQUZAHSWs0SERLY19Ha2FWeW5saXJFeHZATSG9R"
                      },
                      "next": "https://graph.facebook.com/v16.0/6714836645215527/products?access_token=EABYSGMsDlEgBABLaui094ZCVPUqiudGBH0FgZCqtb43aj1opHZByLxFE6eRHtn9t2yHZBBahYMVT2DyorzITKqAU1RC791EVjZAofLQlhdGXdjHmVuJRRaZCcZCqDjmCypfZBxaD5DYBLrAZAbPvqBIbuYkYoiOOfL1h46RdLuPDIz2iiZAfIYTe5hx7M8Ovcns1BUQ58AaOnwu8Vt19oIJYHmmqEtyllVIhlbJBpWMpcv03hmsZCEDp2yg&pretty=0&fields=availability%2Cdescription%2Cid%2Cimage_url%2Cinventory%2Csale_price%2Cname%2Cstart_date%2Curl&limit=25&after=QVFIUk5NODdmZAHJaRTVBaDJvNFZAGSHZAELUlUSnI4WVVCczJLWDU1T0d5TXpfVzRFSGM1ZAmp1RXk2M2x6b0lwQUZAHSWs0SERLY19Ha2FWeW5saXJFeHZATSG9R",
                      "previous": "https://graph.facebook.com/v16.0/6714836645215527/products?access_token=EABYSGMsDlEgBABLaui094ZCVPUqiudGBH0FgZCqtb43aj1opHZByLxFE6eRHtn9t2yHZBBahYMVT2DyorzITKqAU1RC791EVjZAofLQlhdGXdjHmVuJRRaZCcZCqDjmCypfZBxaD5DYBLrAZAbPvqBIbuYkYoiOOfL1h46RdLuPDIz2iiZAfIYTe5hx7M8Ovcns1BUQ58AaOnwu8Vt19oIJYHmmqEtyllVIhlbJBpWMpcv03hmsZCEDp2yg&pretty=0&fields=availability%2Cdescription%2Cid%2Cimage_url%2Cinventory%2Csale_price%2Cname%2Cstart_date%2Curl&limit=25&before=QVFIUk5NODdmZAHJaRTVBaDJvNFZAGSHZAELUlUSnI4WVVCczJLWDU1T0d5TXpfVzRFSGM1ZAmp1RXk2M2x6b0lwQUZAHSWs0SERLY19Ha2FWeW5saXJFeHZATSG9R"
                    }
                  }
                }
              ],
              "paging": {
                "cursors": {
                  "before": "QVFIUkdBT1ZAKemxOR2ZAkWGg1WHdFbVhlQnh3RTAwMUZAybzJEYTVFb1AzTF9RSTVaejVfbTI2ZAVNwTk9vcFpGeVZAHbUh0d0lyRG52UUszNjlYbDIzZAkRRemxB",
                  "after": "QVFIUkdBT1ZAKemxOR2ZAkWGg1WHdFbVhlQnh3RTAwMUZAybzJEYTVFb1AzTF9RSTVaejVfbTI2ZAVNwTk9vcFpGeVZAHbUh0d0lyRG52UUszNjlYbDIzZAkRRemxB"
                }
              }
            },
            "id": "137071515760197"
          }
        ]
      }
      expect(run("200",JSON.stringify(resposta))).toStrictEqual([
        {
            "nome": "produto teste",
            "valor": 1000,
            "linkImagem": "https://scontent.fssz1-1.fna.fbcdn.net/v/t45.5328-4/328874149_5498527106918114_2645529214004515836_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFo1XQ67Z-JHqiem0wIU0XSv7COTO-qY0q_sI5M76pjShwpQJsLlci-MRLGtwegpINPw4Z_G3ha43GYmsDWTkmQ&_nc_ohc=tBNDJoGVumQAX-EwdRR&_nc_ht=scontent.fssz1-1.fna&edm=AO-O_bEEAAAA&oh=00_AfDP1r1MSiAGiXNW6_7eaLevzWr8F9UYN8Zjm-Nk6diwJA&oe=6434DC0E",
            "linkSaberMais": "https://www.amazon.com.br/hz/mobile/mission?p=46UU1RMGBUspf0YKCTYSMsUnhNxpXwlx8m0rvsHnafquWhuJkhH5lfl6ar27jzFFShZ1mel2DfgaeJ0i8rWc97IwDvr3%2BlK9utcZ7qM9L%2FAY2sr1QtRG%2F9jfrNH2MKtWPkyeDALSZSzwD5gO3fZbESpXwoPo9YmkT05WC0z7pkedo6FhH6FYA5VAvOkwjKtDWiplh6U%2FhTpC4NtBI5Ao7vSisGH5hH7qok1lVnMr6CoBdzo7sJf6Z2uoamQeYWLGQSU95Kh%2Boer1zRxfYVLn87fmwP7R7YkcRviI9WtoF%2BUaGv1SRQwdA1NtJpYMN51mGdqjN6COFw1PoqsAKTGh0t4eqmhF%2B15bDlbsH8X%2BW%2FSpJ4fa%2FpUQpx8HxeCDk%2FUqylsfCMazCDs%3D&ref_=ci_mcx_mi&pf_rd_r=BN41060NWWPHZFX93QXS&pf_rd_p=75526862-dc07-47d1-a2d2-ca710bdf3cdc&pd_rd_r=8de72927-40de-43a9-900a-dc93907305a9&pd_rd_w=K1n93&pd_rd_wg=WoCRO"
        }
        ])
      
})