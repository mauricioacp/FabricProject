using ProyectoFabric.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoFabric.Data;
using ProyectoFabric.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace ProyectoFabric.Services
{
    public class PlanosServices:IPlanos
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        public PlanosServices(ApplicationDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task CreatePlano(Plano plano)
        {
            await _context.AddAsync(plano);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePlano(Plano plano)
        {
            _context.Plano.Remove(plano);
            await _context.SaveChangesAsync();
        }

        public async Task<Plano> GetPlanoById(int? id)
        {
            var plano = await _context.Plano
                .Include(O=>O.appUser)
                 .Include(o => o.Recinto)
                .ThenInclude(o => o.Puertas)
                .Include(o => o.Recinto)
                .ThenInclude(o => o.Ventanas)
                .FirstOrDefaultAsync(o => o.Id == id);
            return plano;
        }

        public async Task<List<Plano>> GetPlanos()
        {
            return await _context.Plano.ToListAsync();
        }

        public async Task<List<Plano>> GetPlanosByUserId(string id)
        {
         
            var plano = await _context.Plano.Where(o => o.appUser.Id == id)
                .Include(o=>o.Recinto)
                .ThenInclude(o=>o.Puertas)
                .Include(o=>o.Recinto)
                .ThenInclude(o=>o.Ventanas)
                
                .ToListAsync();
            return plano;
        }

        public bool PlanoExists(int id)
        {
            return _context.Plano.Any(e => e.Id == id);
        }

        public async Task UpdatePlano(Plano plano)
        {
            _context.Update(plano);
            await _context.SaveChangesAsync();
        }
    }
}
