using ProyectoFabric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Interfaces
{
    public interface IPuertas
    {
        public Task<List<Puerta>> GetPuertas();
        public Task<Puerta> GetPuertaById(int? id);
        public Task CreatePuerta(Puerta puerta);
        public Task UpdatePuerta(Puerta puerta);
        public Task DeletePuerta(Puerta puerta);
        public bool PuertaExists(int id);
    }
}
