using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Recinto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public double Alto { get; set; }
        public double Ancho { get; set; }
        public List<Puerta> Puertas { get; set; }
        public List<Ventana> Ventanas { get; set; }
    }
}
