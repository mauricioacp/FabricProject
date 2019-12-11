using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class AppUser:IdentityUser
    {
        [MaxLength(40)]
        public string Nombre { get; set; }
        [MaxLength(60)]
        public string Apellidos { get; set; }
        [MaxLength(60)]
        public string Empresa { get; set; }
        List<Plano> Planos { get; set; }
    }
}
