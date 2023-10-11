using IzyAPI.Controllers.Konstroi;
using IzyAPI.Models;
using IzyAPI.Models.MedSimples;
using IzyAPI.Models.Talkizy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;

namespace IzyAPI.Controllers.MedSimples
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : Controller
    {
        public readonly IzyAPIContext _context;
        private readonly ILogger _logger;

        public ProdutosController(IConfiguration config, ILogger<ProdutosController> logger, IzyAPIContext context)
        {
            _context = context;
            _logger = logger;
            
        }

        [HttpGet("Produto")]
        public async Task<IActionResult> GetProduto(string nome)
        {
            var Produto = await _context.ProdutosMedSimples.FirstOrDefaultAsync(p => p.NomeProduto == nome);

            if (Produto == null)
                return NotFound(Produto);

            return Ok(Produto);
        }

        [HttpPut("Carrinho")]
        public async Task<IActionResult> PutCarrinho(List<ProdutoMedSimples> produtos)
        {
            List<ProdutoMedSimples> NovosProdutos = new List<ProdutoMedSimples>();
            try
            {

                for (int i = 0; i < produtos.Count; i++)
                {
                    var produto = await _context.ProdutosMedSimples.FindAsync(produtos[i].Id);

                    if (produto != null)
                    {
                        if (produtos[i].ValorProduto != 0) {
                            produto.ValorProduto = produtos[i].ValorProduto;
                        }

                        if (produtos[i].NomeProduto != null) {
                            produto.NomeProduto = produtos[i].NomeProduto;
                        }

                        if (produtos[i].Descricao != null) {
                            produto.Descricao = produtos[i].Descricao;
                        }
                        if (produtos[i].LeadID != 0) {
                            produto.LeadID = produtos[i].LeadID;
                        }
                        if (produtos[i].IdPagamento != 0) {
                            produto.IdPagamento = produtos[i].IdPagamento;
                        }
                        if (produtos[i].IdEstoque != 0) {
                            produto.IdEstoque = produtos[i].IdEstoque;
                        }

                        NovosProdutos.Add(produto);
                        await _context.SaveChangesAsync();
                    }
                }

                return Ok(NovosProdutos);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex);
            }
        }

        [HttpPost("Carrinho")]
        public async Task<IActionResult> PostCarrinho(List<ProdutoMedSimples> produtos)
        {
            try 
            { 

                for (int i = 0; i < produtos.Count; i++)
                    {
                    var check = await _context.EstoqueMedSimples.FirstOrDefaultAsync(p => p.NomeProduto == produtos[i].NomeProduto);
                    int idEstoque = 0;
                    if (check == null)
                    {
                        var actionResult = await PostEstoque(produtos[i]);

                        var okResult = actionResult as OkObjectResult;
                        idEstoque = Convert.ToInt32(okResult.Value.ToString());
                    }
                    else
                    {
                        idEstoque = check.Id;
                    }
                    produtos[i].IdEstoque = idEstoque;
                }

                await _context.ProdutosMedSimples.AddRangeAsync(produtos);
                await _context.SaveChangesAsync();
                return Ok(produtos);
            }

            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex);
            }

        }

        [HttpPost("Estoque")]
        public async Task<IActionResult> PostEstoque(ProdutoMedSimples estoque)
        {
            try
            {
                EstoqueMedSimples EstoqueConvert = new EstoqueMedSimples()
                {
                    NomeProduto = estoque.NomeProduto,
                    ValorProduto = estoque.ValorProduto,
                    Descricao = estoque.Descricao

                };
                var add = await _context.EstoqueMedSimples.AddAsync(EstoqueConvert);
                await _context.SaveChangesAsync();
                return Ok(add.Entity.Id);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex);
            }

        }
    }
}
