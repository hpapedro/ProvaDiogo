using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_avaliacao.Models;

namespace api_avaliacao.Data;



    public class ComentarioRepository : IComentarioRepository
    {
        private readonly AppDataContext _context;

        public ComentarioRepository(AppDataContext context)
        {
            _context = context;
        }

        public void Cadastrar(Comentario comentario)
        {
            comentario.Data = DateTime.Now;
            _context.Comentarios.Add(comentario);
            _context.SaveChanges();
        }

        public List<Comentario> Listar()
        {
            return _context.Comentarios.ToList();
        }

        public Comentario? BuscarPorId(int id)
        {
            return _context.Comentarios.FirstOrDefault(c => c.ComentarioId == id);
        }

        public void Deletar(Comentario comentario)
        {
            _context.Comentarios.Remove(comentario);
            _context.SaveChanges();
        }
    }

