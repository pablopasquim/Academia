namespace AcademiaAPI.Models
{
    public class Instrutor
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Especialidade { get; set; }
        

        public Instrutor(int id, string nome, string especialidade)
        {
            Id = id;
            Nome = nome;
            Especialidade = especialidade;
        }
    }
}
