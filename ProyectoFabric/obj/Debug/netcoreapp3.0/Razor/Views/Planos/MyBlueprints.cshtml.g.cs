#pragma checksum "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "85bfa3cdbeef49fe3e9a77e2811018ec37234970"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Planos_MyBlueprints), @"mvc.1.0.view", @"/Views/Planos/MyBlueprints.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\_ViewImports.cshtml"
using ProyectoFabric;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\_ViewImports.cshtml"
using ProyectoFabric.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"85bfa3cdbeef49fe3e9a77e2811018ec37234970", @"/Views/Planos/MyBlueprints.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"295c764397362acb3219d8f7828fe6722052bf64", @"/Views/_ViewImports.cshtml")]
    public class Views_Planos_MyBlueprints : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<ProyectoFabric.Models.Plano>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Planos", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "MyBlueprint_Insights", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""site-blocks-cover overlay inner-page"" style=""background-image: url(/Assets/images/hero_bg_1.jpg);"" data-aos=""fade"" data-stellar-background-ratio=""0.5"">
    <div class=""container"">
        <div class=""row align-items-center"">
            <div class=""col-md-10"">
                <span class=""sub-text"">My Awesome</span>
                <h1>BluePrints</h1>
            </div>
        </div>
    </div>
</div>
<div class=""site-section"">
    <div class=""container"">
        <div class=""row"">
");
#nullable restore
#line 16 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
             foreach (Plano plano in Model)
            {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                <div class=""site-section divplanos"">
                    <div class=""container "">
                        <div class=""row "">
                            <div class=""col-lg-6 mb-5 mb-lg-0 imagenplano"">
                                <div class=""img-border"">
                                    <img src=""https://media.istockphoto.com/vectors/architectural-plan-of-a-house-layout-of-the-apartment-with-the-in-vector-id692744578"" alt=""Image"" class=""img-fluid"">
                                </div>
                            </div>
                            <div class=""col-lg-5 ml-auto datosplano"">
                                <span class=""sub-title"">Blueprint</span>
                                <h2 class=""font-weight-bold text-black mb-5"">");
#nullable restore
#line 28 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                                        Write(plano.Nombre);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h2>\r\n                                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "85bfa3cdbeef49fe3e9a77e2811018ec372349705763", async() => {
                WriteLiteral("<h4 class=\"font-weight-bold text-black-opacity-5 mb-5\">Edit</h4>");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Controller = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            if (__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues == null)
            {
                throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-id", "Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper", "RouteValues"));
            }
            BeginWriteTagHelperAttribute();
#nullable restore
#line 29 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                                                               WriteLiteral(plano.Id);

#line default
#line hidden
#nullable disable
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"] = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-id", __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            WriteLiteral(@"                                <div class=""accordion"" id=""accordionExample"">
                                    <button class=""btn collapsed btn-dark text-white "" type=""button"" data-toggle=""collapse"" data-target=""#collapseOne"" aria-expanded=""true"" aria-controls=""collapseOne"">
                                        <b> Room Name:  </b>: ");
#nullable restore
#line 33 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                         Write(plano.Recinto.Nombre);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                                    </button>

                                    <div id=""collapseOne"" class=""collapse show"" aria-labelledby=""headingOne"" data-parent=""#accordionExample"">
                                        <table class=""table"">
                                            <thead>
                                                <tr>
                                                    <th scope=""col"">Width</th>
                                                    <th scope=""col"">Height</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope=""row"">");
#nullable restore
#line 46 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                               Write(plano.Recinto.Alto);

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n                                                    <td>");
#nullable restore
#line 47 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                   Write(plano.Recinto.Ancho);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2>
                                        <button class=""btn collapsed btn-dark text-white"" type=""button"" data-toggle=""collapse"" data-target=""#collapseTwo"" aria-expanded=""false"" aria-controls=""collapseTwo"">
                                            Windows: ");
#nullable restore
#line 54 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                Write(plano.Recinto.Ventanas.Count());

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                                        </button>\r\n                                    </h2>\r\n");
            WriteLiteral(@"                                    <div id=""collapseTwo"" class=""collapse"" aria-labelledby=""headingTwo"" data-parent=""#accordionExample"">
                                        <table class=""table"">
                                            <thead>
                                                <tr>
                                                    <th scope=""col"">Name</th>
                                                    <th scope=""col"">Distance</th>
                                                    <th scope=""col"">Wallside</th>
                                                    <th scope=""col"">Width</th>
                                                </tr>
                                            </thead>
                                            <tbody>
");
#nullable restore
#line 69 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                 foreach (Ventana item in plano.Recinto.Ventanas)
                                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                    <tr>\r\n                                                        <th scope=\"row\">");
#nullable restore
#line 72 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                                   Write(item.Nombre);

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n                                                        <td>");
#nullable restore
#line 73 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.Distance);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                        <td>");
#nullable restore
#line 74 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.WallSide);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                        <td>");
#nullable restore
#line 75 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.Width);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                    </tr>\r\n");
#nullable restore
#line 77 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <h2>
                                    <button class=""btn collapsed btn-dark text-white"" type=""button"" data-toggle=""collapse"" data-target=""#collapseThree"" aria-expanded=""false"" aria-controls=""collapseThree"">
                                        Doors: ");
#nullable restore
#line 84 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                          Write(plano.Recinto.Puertas.Count());

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                                    </button>\r\n                                </h2>\r\n");
            WriteLiteral(@"                                <div id=""collapseThree"" class=""collapse"" aria-labelledby=""headingThree"" data-parent=""#accordionExample"">
                                    <table class=""table"">
                                        <thead>
                                            <tr>
                                                <th scope=""col"">Name</th>
                                                <th scope=""col"">Distance</th>
                                                <th scope=""col"">Wallside</th>
                                                <th scope=""col"">Width</th>
                                                <th scope=""col"">Door Opening</th>
                                                <th scope=""col"">Door Axis</th>
                                            </tr>
                                        </thead>
                                        <tbody>
");
#nullable restore
#line 101 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                             foreach (Puerta item in plano.Recinto.Puertas)
                                            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                <tr>\r\n                                                    <td scope=\"row\" 9>");
#nullable restore
#line 104 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                                 Write(item.Nombre);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                    <td>");
#nullable restore
#line 105 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                   Write(item.Distance);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                    <td>");
#nullable restore
#line 106 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                   Write(item.WallSide);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                                    <td>");
#nullable restore
#line 107 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                   Write(item.Width);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 108 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                     if (item.DoorOpening == true)
                                                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                        <td>");
#nullable restore
#line 110 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.DoorOpening);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 111 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                    }
                                                    else
                                                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                        <td>");
#nullable restore
#line 114 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.DoorOpening);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 115 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                    }

#line default
#line hidden
#nullable disable
#nullable restore
#line 116 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                     if (item.DoorAxis == true)
                                                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                        <td>");
#nullable restore
#line 118 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.DoorAxis);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 119 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                    }
                                                    else
                                                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                        <td>");
#nullable restore
#line 122 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                       Write(item.DoorAxis);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 123 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                                                </tr>\r\n");
#nullable restore
#line 125 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
                                            }

#line default
#line hidden
#nullable disable
            WriteLiteral("                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n");
            WriteLiteral("                        </div>\r\n                    </div>\r\n                </div>\r\n");
#nullable restore
#line 134 "C:\Users\mauri\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Planos\MyBlueprints.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("        </div>\r\n    </div>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<ProyectoFabric.Models.Plano>> Html { get; private set; }
    }
}
#pragma warning restore 1591
