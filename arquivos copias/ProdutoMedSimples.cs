using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IzyAPI.Models.MedSimples
{
    [Table("Carrinho_MedSimples")]
    public class ProdutoMedSimples
    {
        [Key]
        public int Id { get; set; }
        public string NomeProduto { get; set; }
        public decimal ValorProduto { get; set; }
        public string Descricao { get; set; }
        public int LeadID { get; set; }
        public int IdPagamento { get; set; }
        public int IdEstoque { get; set; }

    }
}
