using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models.ViewModels
{
    public class MostrarVentanasPuertasPlanosVM
    {
        public List<Puerta> Puertas { get; set; }
        public List<Ventana> Ventanas { get; set; }
        public List<Plano> Planos { get; set; }
    }
}
