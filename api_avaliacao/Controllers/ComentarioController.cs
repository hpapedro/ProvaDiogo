using api_avaliacao.Data;
using api_avaliacao.Data.Interfaces;
using api_avaliacao.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api_avaliacao.Controllers;

[ApiController]
[Authorize]
[Route("api/comentario")]
public class ComentarioController : ControllerBase
{
    private readonly IComentarioRepository _comentarioRepository;
    private readonly IItemRepository _itemRepository;

    public ComentarioController(IComentarioRepository comentarioRepository, IItemRepository itemRepository)
    {
        _comentarioRepository = comentarioRepository;
        _itemRepository = itemRepository;
    }

    [HttpPost("cadastrar")]
    public IActionResult Cadastrar([FromBody] Comentario comentario)
    {
        comentario.Item = _itemRepository.Listar().FirstOrDefault(i => i.Id== comentario.ItemId);
        if (comentario.Item == null)
            return BadRequest("Item não encontrado.");

        _comentarioRepository.Cadastrar(comentario);
        return Created("", comentario);
    }

    [HttpGet("listar")]
    public IActionResult Listar()
    {
        return Ok(_comentarioRepository.Listar());
    }

    [HttpDelete("deletar/{id}")]
    public IActionResult Deletar(int id)
    {
        var comentario = _comentarioRepository.BuscarPorId(id);
        if (comentario == null)
            return NotFound("Comentário não encontrado.");

        _comentarioRepository.Deletar(comentario);
        return Ok("Comentário deletado com sucesso.");
    }
}
