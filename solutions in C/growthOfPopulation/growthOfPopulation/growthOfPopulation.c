//
//  growthOfPopulation.c
//  growthOfPopulation
//
//  Created by NATHAN J MALLISON on 2/23/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
//
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
//
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

#include "growthOfPopulation.h"

int nbYear(int p0, double percent, int aug, int p) {
    double gPercent = percent / 100;
    int count = 0;
    
    while (p0 < p) {
        p0 = p0 + (p0 * gPercent) + aug;
        count++;
    }
    return count;
}









