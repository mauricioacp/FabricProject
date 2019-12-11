using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Ventana
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "The Name is a Required Parameter")]
        [StringLength(40, ErrorMessage = "The Name is Too Sort", MinimumLength = 4)]
        public string Nombre { get; set; }
        public string WallSide { get; set; }
        [Required(ErrorMessage = "The Distance is a Required Parameter")]
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a Number")]
        public int Distance { get; set; }
        [Required(ErrorMessage = "The Width is a Required Parameter")]
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a Number")]
        public int Width { get; set; }
        public int RecintoId { get; set; }
        public Recinto Recinto { get; set; }
    }
}
