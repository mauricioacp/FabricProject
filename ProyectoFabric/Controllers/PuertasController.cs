using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ProyectoFabric.Data;
using ProyectoFabric.Interfaces;
using ProyectoFabric.Models;
using static ProyectoFabric.Models.RootObjectPuerta;

namespace ProyectoFabric.Controllers
{
    public class PuertasController : Controller
    {
        private readonly IPuertas _puertasServices;

        public PuertasController(IPuertas puertasServices)
        {
            _puertasServices = puertasServices;
        }

        // GET: Puertas
        public async Task<IActionResult> Index()
        {
            return View(await _puertasServices.GetPuertas());
        }

        // GET: Puertas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var puerta = await _puertasServices.GetPuertaById(id);
            if (puerta == null)
            {
                return NotFound();
            }

            return View(puerta);
        }

        // GET: Puertas/Create
        public IActionResult Create()
        {
            return View();
        }



        
        public IActionResult CreateRootObjectPuertas([FromBody]List<RootObject> miarraypuertas )
        {

            return View();
        }


        // POST: Puertas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nombre,EjeX,EjeY")] Puerta puerta)
        {
            if (ModelState.IsValid)
            {

                await _puertasServices.CreatePuerta(puerta);
                return RedirectToAction(nameof(Index));
            }
            return View(puerta);
        }

        // GET: Puertas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var puerta = await _puertasServices.GetPuertaById(id);
            if (puerta == null)
            {
                return NotFound();
            }
            return View(puerta);
        }

        // POST: Puertas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nombre,EjeX,EjeY")] Puerta puerta)
        {
            if (id != puerta.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {

                    await _puertasServices.UpdatePuerta(puerta);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_puertasServices.PuertaExists(puerta.Id))
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
            return View(puerta);
        }

        // GET: Puertas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var puerta = await _puertasServices.GetPuertaById(id);
                
            if (puerta == null)
            {
                return NotFound();
            }

            return View(puerta);
        }

        // POST: Puertas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var puerta = await _puertasServices.GetPuertaById(id);

            await _puertasServices.DeletePuerta(puerta);
            return RedirectToAction(nameof(Index));
        }

    }
}
