import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/${name}`)
        //console.log('executed service')
    }

    executeHelloWorldErrorService() {
        return axios.get('http://localhost:8080/exception')
        //console.log('executed service')
    }

}

export default new HelloWorldService()
