import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import * as _ from 'lodash';

export interface Country {
    code: string;
    name: string;
}
const COUNTRIES = [
    {
        code: 'GB',
        name: 'United Kingdom'
    },
    {
        code: 'FR',
        name: 'France'
    },
    {
        code: 'DE',
        name: 'Germany'
    },
    {
        code: 'CH',
        name: 'Switzerland'
    }
];
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    selectedCountries = new SelectionModel<Country>(true, []);
    availableCountries: Country[];
    countries: Country[];
    selectedNames: Array<string>;
    search = '';

    constructor() {
    }

    ngOnInit() {
        this.countries = COUNTRIES;
        this.availableCountries = _.difference(this.countries, this.selectedCountries.selected);
        this.selectedCountries.onChange.subscribe( () => {
            this.selectedNames = this.selectedCountries.selected.map( item => item.name );
            this.availableCountries = _.difference(this.countries, this.selectedCountries.selected);
        });
    }

    selectAll() {
        this.availableCountries.forEach( item =>  this.selectedCountries.select(item) );
    }
}
