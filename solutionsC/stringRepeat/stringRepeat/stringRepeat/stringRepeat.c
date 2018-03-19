//
//  stringRepeat.c
//  stringRepeat
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
// This solution works localy but fails on codewars, appears to be very similar to many other solutions.
// Answer to my question on codewars:
//
//uzimonkey(6 kyu)
//10 hours ago
//
//sizeof(src) doesn't do what you think it does, it's returning the size of the pointer type. You want strlen(src) instead.
//
//Also, malloc isn't required to return initialized memory. It might have junk data in it, if there is junk data then strcat will do strange things and possibly segfault. You should use calloc instead, which returns 0-initialized memory.

#include "stringRepeat.h"

char *repeat_str(size_t count, const char *src) {
    char *repeated = calloc(strlen(src) * count + 1, strlen(src));
    for (int i = 0; i < count; i++) {
        strcat(repeated, src);
    }
    
    return repeated;
}
