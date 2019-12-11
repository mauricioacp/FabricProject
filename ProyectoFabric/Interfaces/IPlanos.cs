using ProyectoFabric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Interfaces
{
    public interface IPlanos
    {
        public Task<List<Plano>> GetPlanos();
        public Task<Plano> GetPlanoById(int? id);
        public Task CreatePlano(Plano plano);
        public Task UpdatePlano(Plano plano);
        public Task DeletePlano(Plano plano);
        public bool PlanoExists(int id);
        public Task<List<Plano>> GetPlanosByUserId(string id);
    }
}
