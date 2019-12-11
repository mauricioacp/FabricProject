using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediaBrowser.Model.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ProyectoFabric.Data;
using ProyectoFabric.Interfaces;
using ProyectoFabric.Models;
using static ProyectoFabric.Models.RootObjectVentana;


namespace ProyectoFabric.Controllers
{
   
    public class VentanasController : Controller
    {
        private readonly IVentanas _ventanasServices;

        public VentanasController(IVentanas ventanasServices)
        {
            _ventanasServices = ventanasServices;
        }

        // GET: Ventanas
        public async Task<IActionResult> Index()
        {
            return View(await _ventanasServices.GetVentanas());
        }

        // GET: Ventanas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ventana = await _ventanasServices.GetVentanaById(id);
            if (ventana == null)
            {
                return NotFound();
            }

            return View(ventana);
        }

        // GET: Ventanas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Recintos/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

        [HttpPost]
     
        public async Task<IActionResult> CreateRootObjectVentanas([FromBody] List<RootObject> MiArray_Ventanas)
        {


            Models.Ventana ventana = new Models.Ventana
            {
               
               

            };
            if (ModelState.IsValid)
            {
                await _ventanasServices.CreateVentana(ventana);
                return RedirectToAction(nameof(Index));
            }
            return View(ventana);


        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nombre,EjeX,EjeY")] Models.Ventana ventana)
        {
            if (ModelState.IsValid)
            {
                await _ventanasServices.CreateVentana(ventana);
                return RedirectToAction(nameof(Index));
            }
            return View(ventana);
        }

        // GET: Ventanas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ventana = await _ventanasServices.GetVentanaById(id);
            if (ventana == null)
            {
                return NotFound();
            }
            return View(ventana);
        }

        // POST: Ventanas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nombre,EjeX,EjeY")] Models.Ventana ventana)
        {
            if (id != ventana.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _ventanasServices.UpdateVentana(ventana);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_ventanasServices.VentanaExists(ventana.Id))
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
            return View(ventana);
        }

        // GET: Ventanas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ventana = await _ventanasServices.GetVentanaById(id);
              
            if (ventana == null)
            {
                return NotFound();
            }

            return View(ventana);
        }

        // POST: Ventanas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var ventana = await _ventanasServices.GetVentanaById(id);

            await _ventanasServices.DeleteVentana(ventana);
            return RedirectToAction(nameof(Index));
        }

    }
}
