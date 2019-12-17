using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ProyectoFabric.Data;
using ProyectoFabric.Interfaces;
using ProyectoFabric.Models;
using Microsoft.AspNetCore.Identity;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using static ProyectoFabric.Models.RootObject1;
using Ventana = ProyectoFabric.Models.RootObject1.Ventana;
using System.Threading;

namespace ProyectoFabric.Controllers
{
    public class PlanosController : Controller
    {
        private readonly IPlanos _planosServices;
        private readonly IRecintos _recintosServices;
        private readonly IPuertas _puertasServices;
        private readonly IVentanas _ventanasServices;
        private readonly UserManager<AppUser> _userManager;

        public PlanosController(IPlanos planosServices,UserManager<AppUser> userManager,IRecintos recintosServices,IPuertas puertasServices, IVentanas ventanasServices)
        {
            _planosServices = planosServices;
            _userManager = userManager;
            _recintosServices = recintosServices;
            _ventanasServices = ventanasServices;
            _puertasServices = puertasServices;

        }

        // GET: Planos
        public async Task<IActionResult> Index()
        {
            return View(await _planosServices.GetPlanos());
        }

        [Authorize(Roles = "Creator")]
        public async Task<IActionResult> MyBlueprints(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
          

            var plano = await _planosServices.GetPlanosByUserId(id);
            if (plano == null)
            {
                return NotFound();
            }

            return View(plano);
        }


        //[HttpPost]
        public async Task<IActionResult> CreateRootObjectPlano([FromBody]RootObject sketch)
        
        {
            var MyFrontEndObjects = sketch;
            Models.Recinto recinto = new Models.Recinto()
            {
                Alto = Double.Parse(MyFrontEndObjects.Recinto.Altura),
                Ancho = Double.Parse(MyFrontEndObjects.Recinto.Anchura),
                Nombre = MyFrontEndObjects.Recinto.Nombre
                
            };
            await _recintosServices.CreateRecinto(recinto);
            for (int i = 0; i < 3; i++)
            {
               
                Thread.Sleep(1000);
            }
            var user = await _userManager.FindByIdAsync(MyFrontEndObjects.userId);
            //antes de crear todo lo demas doy 1 segundos para evitar fallos en los await
            for (int i = 0; i < MyFrontEndObjects.Puertas.Count(); i++)
            {
                Models.Puerta puerta = new Models.Puerta()
                {
                    Distance =Convert.ToInt32(MyFrontEndObjects.Puertas[i].Altura),
                    Width = MyFrontEndObjects.Puertas[i].Anchura,
                    DoorAxis = MyFrontEndObjects.Puertas[i].DoorAxis,
                    DoorOpening = MyFrontEndObjects.Puertas[i].DoorOpening,
                    WallSide = MyFrontEndObjects.Puertas[i].Orientacion,
                    Nombre = MyFrontEndObjects.Puertas[i].Nombre,
                    Recinto = recinto,
                };
                await _puertasServices.CreatePuerta(puerta);
            }
            for (int i = 0; i < MyFrontEndObjects.Ventanas.Count(); i++)
            {
                Models.Ventana ventana = new Models.Ventana()
                {
                    Distance = Convert.ToInt32(MyFrontEndObjects.Ventanas[i].Distance),
                    Width = MyFrontEndObjects.Ventanas[i].Anchura,
                    WallSide = MyFrontEndObjects.Ventanas[i].orientacion,
                    Nombre = MyFrontEndObjects.Ventanas[i].Nombre,
                    Recinto = recinto,
                };
                await _ventanasServices.CreateVentana(ventana);
            }
            Plano plano = new Plano()
            {
                Nombre = MyFrontEndObjects.Nombre,
               Recinto=recinto,
               appUser=user,
               CreationDate=DateTime.Now
            };
            await _planosServices.CreatePlano(plano);
            return RedirectToAction("MyBlueprints", "Planos");
        }


            public async Task<IActionResult> MyBlueprint_Insights(int? id)
            {
            
            if (id == null)
            {
                return NotFound();
            }

            var plano = await _planosServices.GetPlanoById(id);
            if (plano == null)
            {
                return NotFound();
            }

            return View(plano);
        }
        // GET: Planos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var plano = await _planosServices.GetPlanoById(id);
            if (plano == null)
            {
                return NotFound();
            }

            return View(plano);
        }

        // GET: Planos/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Planos/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,AppUserId,RecintId")] Plano plano)
        {
            if (ModelState.IsValid)
            {

                await _planosServices.CreatePlano(plano);
                return RedirectToAction(nameof(Index));
            }
            return View(plano);
        }

        // GET: Planos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var plano = await _planosServices.GetPlanoById(id);
            if (plano == null)
            {
                return NotFound();
            }
            return View(plano);
        }

        // POST: Planos/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,AppUserId,RecintId")] Plano plano)
        {
            if (id != plano.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _planosServices.UpdatePlano(plano);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_planosServices.PlanoExists(plano.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(plano);
        }

        // GET: Planos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var plano = await _planosServices.GetPlanoById(id);
            if (plano == null)
            {
                return NotFound();
            }

            return View(plano);
        }

        // POST: Planos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var plano = await _planosServices.GetPlanoById(id);

            await _planosServices.DeletePlano(plano);
            return RedirectToAction(nameof(Index));
        }


    }
}
