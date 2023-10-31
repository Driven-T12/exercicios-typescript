# typescript-02: Node quase ama o TypeScript

- Por padrão o Node (e também o seu navegador, porque ambos usam a V8Engine por debaixo dos panos) não é capaz de executar arquivos TS, afinal, eles não são JS!
- Configure o projeto para que ele possa ser executado em desenvolvimento usando o `nodemon` e o `ts-node`.