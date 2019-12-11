using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProyectoFabric.Models;

namespace ProyectoFabric.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser, IdentityRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<ProyectoFabric.Models.Plano> Plano { get; set; }
        public DbSet<ProyectoFabric.Models.Recinto> Recinto { get; set; }
        public DbSet<ProyectoFabric.Models.Puerta> Puerta { get; set; }
        public DbSet<ProyectoFabric.Models.Ventana> Ventana { get; set; }
    }
}
