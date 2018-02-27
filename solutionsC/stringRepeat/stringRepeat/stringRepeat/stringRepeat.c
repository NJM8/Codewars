//
//  stringRepeat.c
//  stringRepeat
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
// This solution works localy but fails on codewars, appears to be very similar to many other solutions.
#include "stringRepeat.h"

char *repeat_str(size_t count, const char *src) {
    char *repeated = malloc(sizeof(src) * count + 1);
    for (int i = 0; i < count; i++) {
        strcat(repeated, src);
    }
    
    return repeated;
}
