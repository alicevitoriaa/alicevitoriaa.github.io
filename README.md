# Condomínio Verde Serrano - teste

Siga as instruções abaixo para visualizar o site localmente.

## Como Visualizar o Site

1. Lembre de ter o XAMPP instalado na sua máquina ( caso não tenha, clique aqui para baixar: https://www.apachefriends.org/pt_br/index.html ) e logo após inicie apenas o Apache

2. Abra o terminal no seu editor de texto ( ex: Visual Code ) e vá até o caminho:
   
    ```bash
      cd C:\xampp\htdocs
    ```

1. Dentro de "htdocs", clone este repositório em seu computador:

    ```bash
      git clone https://github.com/alicevitoriaa/alicevitoriaa.github.io.git
    ```

4. Acesse o diretório do projeto:

    ```bash    
    cd C:\xampp\htdocs\alicevitoriaa.github.io\teste
    ```

5. Abra o arquivo `api/registrarLead.php` e insira as informações do banco de dados ( MySQL ).

6. Crie um banco de dados chamado "leads";

7. Dentro do banco "leads", crie uma tabela "usuarios" com as seguintes colunas:

      +----------+--------------+------+-----+---------+----------------+
    | Field    | Type         | Null | Key | Default | Extra          |
    +----------+--------------+------+-----+---------+----------------+
    | id       | int          | NO   | PRI | NULL    | auto_increment |
    | nome     | varchar(255) | YES  |     | NULL    |                |
    | email    | varchar(255) | YES  |     | NULL    |                |
    | telefone | varchar(20)  | YES  |     | NULL    |                |
    | estado   | varchar(100) | YES  |     | NULL    |                |
    | cidade   | varchar(100) | YES  |     | NULL    |                |
    | mensagem | text         | YES  |     | NULL    |                |
    +----------+--------------+------+-----+---------+----------------+


8. Logo após a criação da tabela "usuarios", abra o arquivo `index.html` em seu navegador.

Se você encontrar problemas ou tiver dúvidas, por favor, entre em contato. Muito obrigada!
