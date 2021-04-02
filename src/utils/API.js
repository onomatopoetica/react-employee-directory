import axios from "axios";

// Export an object with a "get" method that gets employees from randomuser.me for the query

// ERROR ?? Line 4:1:  Assign object to a variable before exporting as module default import/no-anonymous-default-export

export default {
    getRandomEmployees: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us,fr,gb,au");
    }
};
