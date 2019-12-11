using Microsoft.AspNetCore.Mvc;
using ProyectoFabric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Interfaces
{
    public interface IRecintos
    {
        public Task<List<Recinto>> GetRecintos();
        public Task<Recinto> GetRecintoById(int? id);
        public Task CreateRecinto(Recinto recinto);
        public Task UpdateRecinto(Recinto recinto);
        public Task DeleteRecinto(Recinto recinto);
        public bool RecintoExists(int id);
       
    }
}
