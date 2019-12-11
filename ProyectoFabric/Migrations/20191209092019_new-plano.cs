using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoFabric.Migrations
{
    public partial class newplano : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Width",
                table: "Ventana",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<int>(
                name: "Distance",
                table: "Ventana",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<int>(
                name: "Width",
                table: "Puerta",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<int>(
                name: "Distance",
                table: "Puerta",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Plano",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Nombre",
                table: "Plano",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "Plano");

            migrationBuilder.DropColumn(
                name: "Nombre",
                table: "Plano");

            migrationBuilder.AlterColumn<double>(
                name: "Width",
                table: "Ventana",
                type: "float",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<double>(
                name: "Distance",
                table: "Ventana",
                type: "float",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<double>(
                name: "Width",
                table: "Puerta",
                type: "float",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<double>(
                name: "Distance",
                table: "Puerta",
                type: "float",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
