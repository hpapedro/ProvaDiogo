using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_avaliacao.Models;

namespace api_avaliacao.Data;


    public interface IComentarioRepository
    {
        void Cadastrar(Comentario comentario);
        List<Comentario> Listar();
        Comentario? BuscarPorId(int id);
        void Deletar(Comentario comentario);
    }

