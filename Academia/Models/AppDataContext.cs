using Microsoft.EntityFrameworkCore;

namespace AcademiaAPI.Models
{
    public class AppDataContext : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Treino> Treinos { get; set; }
        public DbSet<Instrutor> Instrutores { get; set; }
        public DbSet<Equipamento> Equipamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Treino>()
                .HasOne(t => t.Aluno)
                .WithMany()
                .HasForeignKey(t => t.AlunoId);

            modelBuilder.Entity<Treino>()
                .HasOne(t => t.Instrutor)
                .WithMany()
                .HasForeignKey(t => t.InstrutorId);

            modelBuilder.Entity<Treino>()
                .HasOne(t => t.Equipamento)
                .WithMany()
                .HasForeignKey(t => t.EquipamentoId);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=db_academia");
        }
    }
}