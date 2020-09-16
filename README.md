# AionysTask
## Getting started
### Prerequisites
1. Install the latest [.NET Core SDK](https://dotnet.microsoft.com/download)
2. Install the latest [Node.js LTS](https://nodejs.org/en/)
### Setup
1. Clone the repository. 
    ```
    git clone https://github.com/Zkken/AionysTask
    ```
2. Go to the root derictory of the project and restore the packages.
    ```
    cd AionysTask/AionysTask
    dotnet restore
    ```
3. Next build the solution.
    ```
    dotnet build
    ```
4. Next, within the AionysTask\ClientApp directory, launch the front end by running:
    ```
    #for en-US locale
    ng serve 
    #for ru locale
    ng serve -c=ru
    #for en locale
    ng serve -c=en
    ```
5. Once the front end has started, within the AionysTask/AionysTask directory, launch the back end by running:
    ```
    dotnet run
    ```
6. Launch https://localhost:62936/ in your browser to view the Web UI.
7. Launch https://localhost:62936/api in your browser to view the API.