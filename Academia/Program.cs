using AcademiaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(c => {
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});

// http://localhost:5024/academia/alunos/cadastrar
app.MapPost("/academia/alunos/cadastrar", ([FromBody] Aluno aluno, [FromServices] AppDataContext ctx) =>
{
        
    ctx.Alunos.Add(aluno);
    ctx.SaveChanges();

    return Results.Ok("Aluno cadastrado com sucesso! " + aluno.Nome );
});

app.MapGet("/academia/alunos/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Alunos.Any())
    {
        return Results.Ok(ctx.Alunos.ToList());
    }
    return Results.NotFound("Nenhum aluno encontrada");
});

app.MapGet("/academia/alunos/buscar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Aluno? aluno = ctx.Alunos.FirstOrDefault(x => x.Id == id);

    if (aluno is null)
    {
        return Results.NotFound("Aluno não encontrado!");
    }

    return Results.Ok(aluno);
});

app.MapDelete("/academia/alunos/delete/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Aluno aluno = ctx.Alunos.FirstOrDefault(a => a.Id == id);

    if (aluno == null)
    {
        return Results.NotFound("Aluno não encontrado para remoção!");
    }

    ctx.Alunos.Remove(aluno);
    ctx.SaveChanges();

    return Results.Ok("Aluno removido com sucesso! Nome: " + aluno.Nome );
});

app.MapPut("/academia/alunos/atualizar/{id}", ([FromRoute] int id, [FromBody] Aluno alunoAtualizado, [FromServices] AppDataContext ctx) =>
{
    var alunoExistente = ctx.Alunos.FirstOrDefault(a => a.Id == id);

    if (alunoExistente == null)
    {
        return Results.NotFound("Erro");
    }

    alunoExistente.Nome = alunoAtualizado.Nome;
    alunoExistente.Idade = alunoAtualizado.Idade;
    alunoExistente.Altura = alunoAtualizado.Altura;
    alunoExistente.Peso = alunoAtualizado.Peso;

    ctx.SaveChanges();

    return Results.Ok("Aluno atualizado com sucesso! ID: " + id);
});


// http://localhost:5024/academia/treinos/cadastrar
app.MapPost("/academia/treinos/cadastrar", ([FromBody] Treino treino, [FromServices] AppDataContext ctx) =>
{
    var aluno = ctx.Alunos.FirstOrDefault(a => a.Id == treino.AlunoId);
    var instrutor = ctx.Instrutores.FirstOrDefault(i => i.Id == treino.InstrutorId);
    var equipamento = ctx.Equipamentos.FirstOrDefault(e => e.Id == treino.EquipamentoId);

    if (aluno == null || instrutor == null || equipamento == null)
    {
        return Results.BadRequest("Aluno, Instrutor ou Equipamento não encontrado.");
    }

    ctx.Treinos.Add(treino);
    ctx.SaveChanges();

    return Results.Ok("Treino cadastrado com sucesso! " + treino.Nome );
});

app.MapGet("/academia/treinos/buscar", ([FromServices] AppDataContext ctx) =>
{
    var treinos = ctx.Treinos
        .Include(t => t.Aluno)
        .Include(t => t.Instrutor)
        .Include(t => t.Equipamento)
        .ToList();

    if (!treinos.Any())
    {
        return Results.NotFound("Nenhum treino encontrado!");
    }

    return Results.Ok(treinos);
});

app.MapDelete("/academia/treinos/delete/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    var treino = ctx.Treinos.FirstOrDefault(t => t.Id == id);

    if (treino == null)
    {
        return Results.NotFound("Treino não encontrado para remoção!");
    }

    ctx.Treinos.Remove(treino);
    ctx.SaveChanges();

    return Results.Ok("Treino removido com sucesso! Nome: " + treino.Nome );
});


// http://localhost:5024/academia/instrutores/cadastrar
app.MapPost("/academia/instrutores/cadastrar", ([FromBody] Instrutor instrutor, [FromServices] AppDataContext ctx) =>
{
    ctx.Instrutores.Add(instrutor);
    ctx.SaveChanges();

    return Results.Ok("Instrutor cadastrado com sucesso! " + instrutor.Nome );
});

app.MapGet("/academia/instrutores/buscar", ([FromServices] AppDataContext ctx) =>
{
    var instrutores = ctx.Instrutores.ToList();

    if (!instrutores.Any())
    {
        return Results.NotFound("Nenhum instrutor encontrado! ");
    }

    return Results.Ok(instrutores);
});

app.MapDelete("/academia/instrutores/delete/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    var instrutor = ctx.Instrutores.FirstOrDefault(i => i.Id == id);

    if (instrutor == null)
    {
        return Results.NotFound("Instrutor não encontrado para remoção! ");
    }

    ctx.Instrutores.Remove(instrutor);
    ctx.SaveChanges();

    return Results.Ok("Instrutor removido com sucesso! Nome: " + instrutor.Nome );
});

// http://localhost:5024/academia/equipamentos/cadastrar
app.MapPost("/academia/equipamentos/cadastrar", ([FromBody] Equipamento equipamento, [FromServices] AppDataContext ctx) =>
{
    ctx.Equipamentos.Add(equipamento);
    ctx.SaveChanges();

    return Results.Ok("Equipamento cadastrado com sucesso! " + equipamento.Nome );
});

app.MapGet("/academia/equipamentos/buscar", ([FromServices] AppDataContext ctx) =>
{
    var equipamentos = ctx.Equipamentos.ToList();

    if (!equipamentos.Any())
    {
        return Results.NotFound("Nenhum equipamento encontrado! ");
    }

    return Results.Ok(equipamentos);
});

app.MapDelete("/academia/equipamentos/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Equipamento equipamento = ctx.Equipamentos.FirstOrDefault(e => e.Id == id);

    if (equipamento == null)
    {
        return Results.NotFound("Equipamento não encontrado para remoção! ");
    }

    ctx.Equipamentos.Remove(equipamento);
    ctx.SaveChanges();

    return Results.Ok("Equipamento removido com sucesso! Nome: " + equipamento.Nome );
});

app.Run();
