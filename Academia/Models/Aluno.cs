namespace AcademiaAPI.Models
{
    public class Aluno
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public double Altura { get; set; }
        public double Peso { get; set; }
        

        public Aluno(int id, string nome, int idade, double altura, double peso)
        {
            Id = id;
            Nome = nome;
            Idade = idade;
            Altura = altura;
            Peso = peso;
        }
    }
}
