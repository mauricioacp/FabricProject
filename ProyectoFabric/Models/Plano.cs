using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Plano
    {
        public int Id { get; set; }
        public string appUserId { get; set; }
        public AppUser appUser { get; set; }
        
        [Required(ErrorMessage = "The Name is a Required Parameter")]
        [StringLength(40, ErrorMessage = "The Name is Too Sort", MinimumLength = 4)]
        public string Nombre { get; set; }
        public int RecintoId { get; set; }
        public Recinto Recinto { get; set; }
        public DateTime CreationDate { get; set; }
     
    }



   
}
