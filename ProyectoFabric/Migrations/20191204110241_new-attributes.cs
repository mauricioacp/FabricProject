using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoFabric.Migrations
{
    public partial class newattributes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EjeX",
                table: "Ventana");

            migrationBuilder.DropColumn(
                name: "EjeY",
                table: "Ventana");

            migrationBuilder.DropColumn(
                name: "EjeX",
                table: "Puerta");

            migrationBuilder.DropColumn(
                name: "EjeY",
                table: "Puerta");

            migrationBuilder.AddColumn<double>(
                name: "Distance",
                table: "Ventana",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "WallSide",
                table: "Ventana",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Width",
                table: "Ventana",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Distance",
                table: "Puerta",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "DoorAxis",
                table: "Puerta",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DoorOpening",
                table: "Puerta",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "WallSide",
                table: "Puerta",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Width",
                table: "Puerta",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Distance",
                table: "Ventana");

            migrationBuilder.DropColumn(
                name: "WallSide",
                table: "Ventana");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "Ventana");

            migrationBuilder.DropColumn(
                name: "Distance",
                table: "Puerta");

            migrationBuilder.DropColumn(
                name: "DoorAxis",
                table: "Puerta");

            migrationBuilder.DropColumn(
                name: "DoorOpening",
                table: "Puerta");

            migrationBuilder.DropColumn(
                name: "WallSide",
                table: "Puerta");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "Puerta");

            migrationBuilder.AddColumn<double>(
                name: "EjeX",
                table: "Ventana",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "EjeY",
                table: "Ventana",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "EjeX",
                table: "Puerta",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "EjeY",
                table: "Puerta",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
