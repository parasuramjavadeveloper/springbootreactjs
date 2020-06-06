let ApiService = {
    serverUrl: 'http://localhost:8086/',
    getAllEmployees: function(){
        return this.request(this.serverUrl+"employee",{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    },
    addEmployee: function(employee){
        return this.request(this.serverUrl+"employee",{
            method: 'POST',
            body: JSON.stringify(employee),
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    },
    updateEmployee: function(employee){
        return this.request(this.serverUrl+"employee",{
            method: 'PUT',
            body: JSON.stringify(employee),
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    },
    deleteEmployee: function(employeeId){
        return this.request(this.serverUrl+"employee/id/"+employeeId,{
            method: 'DELETE'
        });
    },
    request: function(url,props){
        return fetch(url,props)
            .then(res => res.json())
            .catch(error => console.error(error));

            //.then(response => console.log(response));
    },
    getAllCountries(){
        return this.request(this.serverUrl+"employee/countries",{
            method: 'GET'
        })
        .then(response => {
            return response.RestResponse.result;
        });
    }
}

export default ApiService;