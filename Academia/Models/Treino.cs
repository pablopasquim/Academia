namespace AcademiaAPI.Models
{
    public class Treino
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int AlunoId { get; set; }
        public Aluno? Aluno { get; set; }
        public int InstrutorId { get; set; }
        public Instrutor? Instrutor { get; set; }
        public int EquipamentoId { get; set; }
        public Equipamento? Equipamento { get; set; }

        public Treino(int id, string nome, string descricao, int alunoId, int instrutorId, int equipamentoId)
        {
            Id = id;
            Nome = nome;
            Descricao = descricao;
            AlunoId = alunoId;
            InstrutorId = instrutorId;
            EquipamentoId = equipamentoId;
        }
    }
}
