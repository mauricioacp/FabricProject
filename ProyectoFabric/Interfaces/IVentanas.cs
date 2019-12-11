using ProyectoFabric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Interfaces
{
    public interface IVentanas
    {
        public Task<List<Ventana>> GetVentanas();
        public Task<Ventana> GetVentanaById(int? id);
        public Task CreateVentana(Ventana ventana);
        public Task UpdateVentana(Ventana ventana);
        public Task DeleteVentana(Ventana ventana);
        public bool VentanaExists(int id);
    }
}
