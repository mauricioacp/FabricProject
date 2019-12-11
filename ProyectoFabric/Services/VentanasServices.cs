using Microsoft.EntityFrameworkCore;
using ProyectoFabric.Data;
using ProyectoFabric.Interfaces;
using ProyectoFabric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Services
{
    public class VentanasServices:IVentanas
    {
        private readonly ApplicationDbContext _context;

        public VentanasServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateVentana(Ventana ventana)
        {
            await _context.AddAsync(ventana);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteVentana(Ventana ventana)
        {
            _context.Ventana.Remove(ventana);
            await _context.SaveChangesAsync();
        }

        public async Task<Ventana> GetVentanaById(int? id)
        {
            return await _context.Ventana.FindAsync(id);
        }

        public async Task<List<Ventana>> GetVentanas()
        {

            return await _context.Ventana.ToListAsync();
        }

        public async Task UpdateVentana(Ventana ventana)
        {
            _context.Update(ventana);
            await _context.SaveChangesAsync();
        }

        public bool VentanaExists(int id)
        {
            throw new NotImplementedException();
        }
    }
}
