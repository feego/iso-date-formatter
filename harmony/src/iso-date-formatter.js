import {prettyDate, simpleDateFormatter} from "../../library/pretty"
/**
 *
 * Registration of polymer iso-date-formatter custom element.
 * ECMAScript 6 - using BabelJS traspiler.
 */
Polymer('iso-date-formatter', {
	isoChanged() {
        if (!this.iso || new Date(this.iso) == "Invalid Date") {
            return this.date = "Invalid Date"
        }
        if (this.simple == undefined) {
            this.date = prettyDate(this.iso)
        } else {
            this.date = simpleDateFormatter(this.iso)
        }
    }
})