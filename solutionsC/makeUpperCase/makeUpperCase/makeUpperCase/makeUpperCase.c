//
//  makeUpperCase.c
//  makeUpperCase
//
//  Created by NATHAN J MALLISON on 2/28/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include "makeUpperCase.h"

// My solution, this should be correct but fails on website, bad testing
char * makeUpperCase (char * string) {
    printf("input: %s\n", string);
    char * upperCaseString;
    upperCaseString = malloc(sizeof(string));
    
    for (int i = 0; i < strlen(string); i++) {
        if (string[i] == ' ') {
            upperCaseString[i] = ' ';
            continue;
        }
        if (string[i] > 96 && string[i] < 123) {
            upperCaseString[i] = string[i] - 32;
        } else {
            upperCaseString[i] = string[i];
        }
    }
    printf("output: %s\n", upperCaseString);
    return upperCaseString;
}

// passing solution on website note xcode errors. smh

char * makeUpperCase (char * string) {
    int c = 0;
    while (string[c]) {
        if (string[c] > 96 && string[c] < 123){
            string[c] -= 32; // BAD ACCESS
        }
        c++;
    }
    return string;
}
