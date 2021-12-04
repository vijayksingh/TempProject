# Use 

- Create a div
- Assign a fixed width of 100px;

- Create a directive
- If the content of the div is under 100px;
    - The directive should do nothing
- If the content is over 100px;
    - Then directive should show the 


// NGRX clone 
// Redux clone 


const { listeners } = require("process");

const Createstore = () => {
    // current State
    listeners = new Set();
    Subject: currentState = {};

    function getState() {
        return this.currentState
    }

    function selector(selector): Observable {

        listeners.add(selector);
        return this.currentState['selector'] || null;

    }

    // To introduce a mutation 
    function dispatch(action) {
        const newState = reducer(action, currentState);
        // New Object
        currentState.next(newState);
        callListeners();
    }

    function callListeners() {
        while(listeners) {
            const listener = listeners.next;
            selector(listener);
        }
    }

   

    }
    // Track the state which is being asked for.
    // 
    // Function 
    return {
        selector,
        getState,
        dispatch,
    }

}