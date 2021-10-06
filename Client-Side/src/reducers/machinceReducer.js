import * as enums from "../helpers/enums";

const INITIAL_STATE = {
  machinesDB: [
    {
      machineName: "Machine #1",
      status: 3,
    },
    {
      machineName: "Machine #2",
      status: 2,
    },
    {
      machineName: "Machine #3",
      status: 0,
    },
    {
      machineName: "Machine #4",
      status: 0,
    },
    {
      machineName: "Machine #5",
      status: 0,
    },
    {
      machineName: "Machine #6",
      status: 1,
    },
    {
      machineName: "Machine #7",
      status: 3,
    },
    {
      machineName: "Machine #8",
      status: 2,
    },
  ],
  filterBy: -1,
};

const machinceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case enums.reduxEnums.FETCH_DATA: {
      return state;
    }
    case enums.reduxEnums.FILTER_BY: {
      let newState = { ...state };
      newState.filterBy = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default machinceReducer;
