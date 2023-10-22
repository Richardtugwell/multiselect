import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { slideUpDown, disappear } from "../../app.animations";
import { COUNTRIES } from "../../app.countries";
import * as _ from "lodash";

export interface Country {
  code: string;
  name: string;
}
const AllowMultiSelect = true;
const InitialSelections: Country[] = [];

@Component({
  selector: "app-multiselect",
  templateUrl: "./multiselect.component.html",
  styleUrls: ["./multiselect.component.scss"],
  animations: [slideUpDown, disappear],
})
export class MultiselectComponent implements OnInit {
  selectedCountries = new SelectionModel<Country>(
    AllowMultiSelect,
    InitialSelections
  );
  availableCountries: Country[] = [];
  countries: Country[] = [];
  selectedNames: Array<string> = [];
  showMenu: Boolean = false;

  constructor() {}

  ngOnInit() {
    this.countries = COUNTRIES;
    this.availableCountries = _.difference(
      this.countries,
      this.selectedCountries.selected
    );
    this.selectedCountries.changed.subscribe(() => {
      this.selectedNames = this.selectedCountries.selected.map(
        (item) => item.name
      );
      this.availableCountries = _.difference(
        this.countries,
        this.selectedCountries.selected
      );
      // It shoudn't necessarily be the responsibility here to sort the selectionModel ....
      this.selectedCountries.sort(this.sortByName);
    });
  }

  selectAll() {
    this.availableCountries.forEach((item) =>
      this.selectedCountries.select(item)
    );
  }

  sortByName = (a: any, b: any): number => {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
  };
}
