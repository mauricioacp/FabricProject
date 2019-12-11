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


namespace ProyectoFabric.Controllers
{
    public class RecintosController : Controller
    {
        private readonly IRecintos _recintosServices;
      

        public RecintosController(IRecintos recintosServices)
        {
            _recintosServices = recintosServices;
           
        }



        [Authorize(Roles = "Creator")]
        public async Task<IActionResult> Room_Insights(int id)
        {

            return View(await _recintosServices.GetRecintoById(id));
        }
        // GET: Recintos
        public async Task<IActionResult> Index()
        {
            return View(await _recintosServices.GetRecintos());
        }

        // GET: Recintos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recinto = await _recintosServices.GetRecintoById(id);
            if (recinto == null)
            {
                return NotFound();
            }

            return View(recinto);
        }

        // GET: Recintos/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Recintos/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.

        [HttpPost]
        public async  Task<IActionResult> CreateRootObjectRecinto([FromBody] Recinto sketch)
        {

            Recinto recinto = new Recinto
            {
           

            };
            if (ModelState.IsValid)
            {
                await _recintosServices.CreateRecinto(recinto);
               
                return RedirectToAction(nameof(Index));
            }
            return View(recinto);


        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nombre,Alto,Ancho")] Recinto recinto)
        {
            if (ModelState.IsValid)
            {
                await _recintosServices.CreateRecinto(recinto);
                return RedirectToAction(nameof(Index));
            }
            return View(recinto);
        }

        // GET: Recintos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recinto = await _recintosServices.GetRecintoById(id);
            if (recinto == null)
            {
                return NotFound();
            }
            return View(recinto);
        }

        // POST: Recintos/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nombre,Alto,Ancho")] Recinto recinto)
        {
            if (id != recinto.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _recintosServices.UpdateRecinto(recinto);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_recintosServices.RecintoExists(recinto.Id))
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
            return View(recinto);
        }

        // GET: Recintos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recinto = await _recintosServices.GetRecintoById(id);
            if (recinto == null)
            {
                return NotFound();
            }

            return View(recinto);
        }

        // POST: Recintos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var recinto = await _recintosServices.GetRecintoById(id);
            await _recintosServices.DeleteRecinto(recinto);
         
            return RedirectToAction(nameof(Index));
        }

     
    }
}
