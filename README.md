## AionysTask getting started
### Prerequisites
1. Install the latest [.NET Core SDK](https://dotnet.microsoft.com/download)
2. Install the latest [Node.js LTS](https://nodejs.org/en/)
### Setup
1. Clone the repository. 

    ```
    git clone https://github.com/Zkken/AionysTask
    ```

2. Go to the root derictory of the project and restore the packages (after the previous step do
`cd AionysTask`).

    ```
    dotnet restore
    ```

3. Next build the solution.

    ```
    dotnet build
    ```

4. Next, within the AionysTask/ClientApp directory, launch the front end by running (after the previous step do `cd AionysTask/ClientApp`):

    - for en-US (default english US) locale

        ``` 
        ng serve 
        ``` 
    - for ru (russian) locale

        ``` 
        ng serve -c=ru
        ``` 
    - for en (english) locale

        ``` 
        ng serve -c=en
        ``` 

5. Once the front end has started, within the AionysTask directory where AionysTask.csproj file is arranged (after the previous step do `cd ..`), launch the back end by running:

    ```
    dotnet run
    ```
    
6. Launch https://localhost:5001/ in your browser to view the UI.

7. Launch https://localhost:5001/api in your browser to view the API.

8. To run the angular e2e tests, go to the ClientApp folder and execute the command:

    ```
    ng run e2e
    ```

### Web Api endpoints

- GET api/notes (get all notes)
- GET api/notes/{id} (get specified note)
- POST api/notes (create note)
- PUT api/notes/{id} (update note)
- DELETE api/notes/{id} (delete note)

