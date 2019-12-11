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
        [Required(ErrorMessage = "The Name is a Required Parameter")]
        [StringLength(40, ErrorMessage = "The Name is Too Sort", MinimumLength = 4)]
      
        public string Nombre { get; set; }
        [StringLength(40, ErrorMessage = "The Surname is Too Sort", MinimumLength = 4)]
        [Required(ErrorMessage = "The Surname is a Required Parameter")]
  
        public string Apellidos { get; set; }
        [Required(ErrorMessage = "The Company is a Required Parameter")]
        [StringLength(40, ErrorMessage = "The Company Name is Too Sort", MinimumLength = 4)]
        public string Empresa { get; set; }
        List<Plano> Planos { get; set; }
    }
}
