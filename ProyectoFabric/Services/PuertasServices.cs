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
    public class PuertasServices:IPuertas
    {
        private readonly ApplicationDbContext _context;
        public PuertasServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreatePuerta(Puerta puerta)
        {
            await _context.AddAsync(puerta);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePuerta(Puerta puerta)
        {
            _context.Puerta.Remove(puerta);
            await _context.SaveChangesAsync();
        }

        public async Task<Puerta> GetPuertaById(int? id)
        {
            return await _context.Puerta.FindAsync(id);
        }

        public async Task<List<Puerta>> GetPuertas()
        {
            return await _context.Puerta.ToListAsync();
        }

        public bool PuertaExists(int id)
        {
            return _context.Puerta.Any(e => e.Id == id);
        }

        public async Task UpdatePuerta(Puerta puerta)
        {
            _context.Update(puerta);
            await _context.SaveChangesAsync();
        }
    }
}
