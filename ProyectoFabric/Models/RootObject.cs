using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class RootObject1
    {
        public class Recinto
        {
            public string Nombre { get; set; }
            public string Altura { get; set; }
            public string Anchura { get; set; }
        }

        public class Ventana
        {
            public string Nombre { get; set; }
            public string Distance { get; set; }
            public int Anchura { get; set; }
            public string orientacion { get; set; }
        }

        public class Puerta
        {
            public string Nombre { get; set; }
            public string Altura { get; set; }
            public int Anchura { get; set; }
            public string Orientacion { get; set; }
            public bool DoorAxis { get; set; }
            public bool DoorOpening { get; set; }
        }

        public class RootObject
        {
            public string userId { get; set; }
            public string Nombre { get; set; }
            public Recinto Recinto { get; set; }
            public List<Ventana> Ventanas { get; set; }
            public List<Puerta> Puertas { get; set; }
        }
    }
}
