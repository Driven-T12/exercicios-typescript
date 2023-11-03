# typescript-11: Não quero nada em memória, manda pro banco!

- Vimos como usar vários recursos legais do TypeScript com registros em memória.
- Infelizmente dificilmente trabalharemos com sistemas que não persistem os seus dados em um banco de dados, logo, é importante conseguir assimilar todo esse conhecimento e aplicá-lo junto ao banco de dados.
- Refatore o código abaixo para fazer a persistência em um banco de dados postgres usando a biblioteca `pg`.
- Segue abaixo o SQL para criar a tabela:
    
    ```sql
    CREATE TABLE "games" (
    	"id" SERIAL PRIMARY KEY,
    	"title" TEXT,
    	"platform" TEXT
    );
    ```

### Como rodar
- Instale as dependências com o comando `npm i`.
- Rode o comando `npm run dev` e veja os resultados no terminal.