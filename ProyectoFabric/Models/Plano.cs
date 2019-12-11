using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFabric.Models
{
    public class Plano
    {
        public int Id { get; set; }
        public string appUserId { get; set; }
        public AppUser appUser { get; set; }
        public string Nombre { get; set; }
        public int RecintoId { get; set; }
        public Recinto Recinto { get; set; }
        public DateTime CreationDate { get; set; }
     
    }
}
