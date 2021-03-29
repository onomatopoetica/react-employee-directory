// Activity 19
import axios from "axios";

// Export an object with a "get" method that gets employees from randomuser.me for the query
export default {
    getRandomEmployees: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us,fr,gb,au");
    }
};
console.log(axios);