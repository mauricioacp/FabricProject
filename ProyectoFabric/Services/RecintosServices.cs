using Microsoft.AspNetCore.Mvc;
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
    public class RecintosServices:IRecintos
    {
        private readonly ApplicationDbContext _context;

        public RecintosServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateRecinto(Recinto recinto)
        {
            await _context.AddAsync(recinto);
            await _context.SaveChangesAsync();
        }

      

        public async Task DeleteRecinto(Recinto recinto)
        {

            _context.Recinto.Remove(recinto);
            await _context.SaveChangesAsync();
        }

        public async Task<Recinto> GetRecintoById(int? id)
        {

            return await _context.Recinto.FindAsync(id);

        }

       
        public async Task<List<Recinto>> GetRecintos()
        {
            return await _context.Recinto.ToListAsync();
        }

        public bool RecintoExists(int id)
        {
            return _context.Recinto.Any(e => e.Id == id);
        }

        public async Task UpdateRecinto(Recinto recinto)
        {
            _context.Update(recinto);
            await _context.SaveChangesAsync();
        }
    }
}
