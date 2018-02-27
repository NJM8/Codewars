//
//  twoToOne.c
//  twoToOne
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

//    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
//    each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
//
//    a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```


#include "twoToOne.h"

char* longest(char* s1, char* s2) {
    long totalLength = strlen(s1) + strlen(s2) + 1;
    char * sorted = (char *)malloc(totalLength);
    char * result = (char *)malloc(totalLength);
    strcpy(sorted, s1);
    strcat(sorted, s2);
    char temp;
    int index = 0;

    for (int i = 0; i < totalLength - 1; i++) {
        for (int j = 0; j < (totalLength - i - 2); j++) {
            if (sorted[j] > sorted[j + 1]) {
                temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }

    result[0] = sorted[0];

    for (int i = 1; i < totalLength; i++) {
        if (sorted[i] == result[index]) {
            continue;
        } else {
            result[index + 1] = sorted[i];
            index++;
        }
    }

    char * finalResult = (char *)realloc(result, strlen(result) + 1);
    free(sorted);
    return finalResult ;
}


// Highest rated solution, how does it work?
//char* longest(char* s1, char* s2) {
//    char letters [26] = {0}, *temp, *final = temp = (char *) calloc(sizeof(char), 26);;
//    while(*s1) letters[*(s1++) - 'a']++;
//    while(*s2) letters[*(s2++) - 'a']++;
//    for(int i = 0; i < 26; i++)
//        if(letters[i])
//            *(temp++) = 'a' + i;
//    
//    return final;
//}


