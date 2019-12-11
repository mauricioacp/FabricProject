using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Puerta
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string WallSide { get; set; }
        public int Distance { get; set; }
        public int Width { get; set; }
        public bool DoorOpening { get; set; }
        public bool DoorAxis { get; set; }
        public int RecintoId { get; set; }
        public Recinto Recinto { get; set; }
    }
}
