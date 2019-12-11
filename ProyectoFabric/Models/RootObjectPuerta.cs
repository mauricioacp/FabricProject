using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class RootObjectPuerta
    {
        public class RootObject
        {
            public string Nombre { get; set; }
            public string Altura { get; set; }
            public int Anchura { get; set; }
            public string Orientacion { get; set; }
            public bool DoorAxis { get; set; }
            public bool DoorOpening { get; set; }
        }
    }
}
