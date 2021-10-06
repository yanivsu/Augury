import * as enums from "../helpers/enums";

export function filterData(filterBy) {
  return { type: enums.reduxEnums.FILTER_BY, payload: filterBy };
}
