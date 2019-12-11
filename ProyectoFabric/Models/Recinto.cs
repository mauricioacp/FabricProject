using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Recinto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "The Name is a Required Parameter")]
        [StringLength(40, ErrorMessage = "The Name is Too Sort", MinimumLength = 4)]
        public string Nombre { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a Number")]
        [Required(ErrorMessage = "The Height is a Required Parameter")]
        public double Alto { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a Number")]
        [Required(ErrorMessage = "The Width is a Required Parameter")]
        public double Ancho { get; set; }
        public List<Puerta> Puertas { get; set; }
        public List<Ventana> Ventanas { get; set; }
    }
}
