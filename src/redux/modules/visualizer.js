/**
 * Created by akorovin on 08.09.2016.
 */

const LOAD = 'visualizer/LOAD';
const LOAD_SUCCESS = 'visualizer/LOAD_SUCCESS';
const LOAD_FAIL = 'visualizer/LOAD_FAIL';
const CLEAR = 'visalizer/CLEAR';

const initialState = {
  loaded: false,
  data: {
    message: ''
  }
};

export default function visualizer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      console.log('LOAD SUCKS');
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case CLEAR:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

export function loadXML() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/visualizer/loadXML')
  };
}

export function loadOntology(ontologyId) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('/visualizer/loadOntology/', {
      data: {
        ontologyId: ontologyId
      }
    })
  };
}

export function clear() {
  return { type: CLEAR };
}
