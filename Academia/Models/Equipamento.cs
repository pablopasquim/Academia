namespace AcademiaAPI.Models
{
    public class Equipamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tipo { get; set; }
        

        public Equipamento(int id, string nome, string tipo)
        {
            Id = id;
            Nome = nome;
            Tipo = tipo;
        }
    }
}
