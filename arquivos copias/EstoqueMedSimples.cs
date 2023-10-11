using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IzyAPI.Models.MedSimples
{
    [Table("Estoque_MedSimples")]
    public class EstoqueMedSimples
    {
        [Key]
        public int Id { get; set; }
        public string NomeProduto { get; set; }
        public decimal ValorProduto { get; set; }
        public string Descricao { get; set; }


    }
}
