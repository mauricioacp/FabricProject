#pragma checksum "C:\Users\Raul\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Home\Creator.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e53e4daaca4fadcda9865309a59d5dba33dd9ff7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Creator), @"mvc.1.0.view", @"/Views/Home/Creator.cshtml")]
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
#line 1 "C:\Users\Raul\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\_ViewImports.cshtml"
using ProyectoFabric;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Raul\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\_ViewImports.cshtml"
using ProyectoFabric.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e53e4daaca4fadcda9865309a59d5dba33dd9ff7", @"/Views/Home/Creator.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"295c764397362acb3219d8f7828fe6722052bf64", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Creator : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ProyectoFabric.Models.AppUser>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/Creator.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""site-blocks-cover overlay"" style=""background-image: url(/Assets/images/hero_bg_1.jpg);"" data-aos=""fade"" data-stellar-background-ratio=""0.5"">
    <div class=""container"">
        <div class=""row align-items-center text-center justify-content-center"">
            <div class=""col-md-8"">
                <span class=""sub-text"">Serikat Challenge</span>
                <h1>Creative Designs</h1>
            </div>
        </div>
    </div>
</div>

<div class=""site-block-1"">
    <div class=""container"">
        <div class=""row"">
            <div class=""col-lg-4"">
                <a id=""room"" class=""site-block-feature d-flex p-4 rounded mb-4"">
                    <div class=""mr-3"">
                        <span class=""icon flaticon-interior-design font-weight-light h2""></span>
                    </div>
                    <div class=""text"">
                        <h3>Create Room</h3>
                        <p>Made with Canvas</p>
                    </div>
                </a>
   ");
            WriteLiteral(@"         </div>
            <div class=""col-lg-4"">
                <a id=""door"" class=""site-block-feature d-flex p-4 rounded mb-4"">
                    <div class=""mr-3"">
                        <span class=""icon flaticon-measuring font-weight-light h2""></span>
                    </div>
                    <div class=""text"">
                        <h3>Door</h3>
                        <p>Powered by Fabric.Js</p>
                    </div>
                </a>
            </div>
            <div class=""col-lg-4"">
                <a id=""window"" class=""site-block-feature d-flex p-4 rounded mb-4"">
                    <div class=""mr-3"">
                        <span class=""icon flaticon-window font-weight-light h2""></span>
                    </div>
                    <div class=""text"">
                        <h3>Window</h3>
                        <p>Make your own designs</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>



<di");
            WriteLiteral(@"v class=""site-section"">


    <div class=""btn-group toolbar"" role=""group"" aria-label=""Basic example"">
        <button id=""GuardarPlano"" type=""button"" class=""btn btn-secondary room"">
            Guardar Plano
        </button>
        <button type=""button"" class=""btn btn-secondary window"">
        </button>
        <input id=""appUserId"" type=""hidden"" name=""userid""");
            BeginWriteAttribute("value", " value=\"", 2460, "\"", 2477, 1);
#nullable restore
#line 65 "C:\Users\Raul\Source\Repos\mauricioacp\FabricProject\ProyectoFabric\Views\Home\Creator.cshtml"
WriteAttributeValue("", 2468, Model.Id, 2468, 9, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@" />
        <button type=""button"" class=""btn btn-secondary door"">
        </button>
    </div>

    <div class=""canvasTablas row"">
        <div class=""col-6 cajaCanvas"">

            <canvas width=""400"" height=""400"" id=""canvas""></canvas>

        </div>
        <div class=""col-6 workPlace"">

        </div>

    </div>

</div>


");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e53e4daaca4fadcda9865309a59d5dba33dd9ff76931", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\r\n");
            }
            );
            WriteLiteral("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ProyectoFabric.Models.AppUser> Html { get; private set; }
    }
}
#pragma warning restore 1591
