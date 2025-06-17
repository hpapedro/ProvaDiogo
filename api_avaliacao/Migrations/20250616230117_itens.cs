using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_avaliacao.Migrations
{
    /// <inheritdoc />
    public partial class itens : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemId",
                table: "Itens",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Itens",
                newName: "ItemId");
        }
    }
}
