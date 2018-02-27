//
//  twoToOne.h
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


#ifndef twoToOne_h
#define twoToOne_h

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* longest(char* s1, char* s2);

#endif /* twoToOne_h */
