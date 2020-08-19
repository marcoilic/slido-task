import * as _ from "lodash";
import { Moment } from "moment";

export const validate = (value: string | Moment) => {
	return _.isNil(value) || value === "" ? "Required field!" : undefined;
};
